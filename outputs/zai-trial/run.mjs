import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDir = path.dirname(fileURLToPath(import.meta.url));
const key = process.env.ZAI_TRIAL_API_KEY;
if (!key) throw new Error('Missing temporary trial key');

async function request(endpoint, body) {
  const start = Date.now();
  const response = await fetch(`https://api.z.ai/api/paas/v4/${endpoint}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(180000),
  });
  const payload = await response.json();
  if (!response.ok || payload.error) {
    console.log(JSON.stringify({ endpoint, status: response.status, errorCode: payload.error?.code, message: payload.error?.message, seconds: (Date.now() - start) / 1000 }));
    return null;
  }
  console.log(JSON.stringify({ endpoint, status: response.status, seconds: (Date.now() - start) / 1000, usage: payload.usage }));
  return payload;
}

const text = await request('chat/completions', {
  model: 'glm-4.7',
  thinking: { type: 'disabled' },
  max_tokens: 2200,
  temperature: 0.8,
  messages: [{ role: 'user', content: 'اكتب بوست توعوي للفيسبوك لمركز عيون الشروق عن جفاف العين بسبب الشاشات. عامية مصرية بسيطة ومحترمة، 130 إلى 180 كلمة، أعراض شائعة ونصائح عامة، بدون تشخيص أو وصف أدوية أو ادعاءات مضمونة أو أرقام إحصائية. لا تذكر أسعارًا أو عروضًا. اختم بدعوة للكشف عند استمرار الأعراض. أعد JSON فقط بالحقول title وcontent وcta وhashtags كنصوص. اجعل CTA منفصلًا عن content ولا تكرره. أضف imagePrompt بالإنجليزية لصورة طبية واقعية مربعة مناسبة للموضوع بدرجات الأزرق والأبيض، دون كتابة أو شعارات.' }],
});
if (text) {
  const raw = text.choices?.[0]?.message?.content ?? '';
  await fs.writeFile(path.join(outputDir, 'post-raw.txt'), raw, 'utf8');
  try {
    const post = JSON.parse(raw.replace(/^```(?:json)?\s*|\s*```$/g, ''));
    for (const field of ['title', 'content', 'cta', 'hashtags', 'imagePrompt']) {
      if (typeof post[field] !== 'string' || !post[field].trim()) throw new Error(`Invalid field: ${field}`);
    }
    await fs.writeFile(path.join(outputDir, 'post.json'), JSON.stringify(post, null, 2), 'utf8');
    console.log(JSON.stringify({ title: post.title, content: post.content, cta: post.cta, hashtags: post.hashtags, wordCount: post.content.split(/\s+/).length }));
  } catch (error) { console.log(JSON.stringify({ textValidationError: error.message })); }
}

const image = await request('images/generations', {
  model: 'glm-image',
  size: '1280x1280',
  prompt: 'Square professional photorealistic ophthalmology awareness image about dry eyes from screen use. Egyptian adult at a tidy desk taking a break from a computer, looking away toward daylight through a window. Natural subtle eye fatigue, no injury or redness exaggeration. Calm blue and white palette, realistic face and hands, tasteful clean composition, soft clinical lighting. No text, no Arabic writing, no letters, no logos, no watermark, no medical diagrams.',
});
if (image?.data?.[0]?.url) {
  const download = await fetch(image.data[0].url, { signal: AbortSignal.timeout(60000) });
  if (!download.ok) throw new Error(`Image download failed: ${download.status}`);
  const mime = download.headers.get('content-type') ?? '';
  const extension = mime.includes('png') ? 'png' : mime.includes('webp') ? 'webp' : 'jpg';
  const filename = path.join(outputDir, `image.${extension}`);
  await fs.writeFile(filename, Buffer.from(await download.arrayBuffer()));
  console.log(JSON.stringify({ imagePath: filename, mime }));
}
process.exit(0);
