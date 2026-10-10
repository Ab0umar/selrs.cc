import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const key = process.env.MANUS_TRIAL_API_KEY;
if (!key) throw new Error('Missing temporary Manus trial key');
async function api(endpoint, body) {
  const response = await fetch(`https://api.manus.ai/v2/${endpoint}`, {
    method: body ? 'POST' : 'GET',
    headers: { 'x-manus-api-key': key, ...(body ? { 'Content-Type': 'application/json' } : {}) },
    ...(body ? { body: JSON.stringify(body) } : {}),
    signal: AbortSignal.timeout(45000),
  });
  const result = await response.json();
  if (!response.ok || !result.ok) throw new Error(JSON.stringify({ status: response.status, code: result.error?.code, message: result.error?.message }));
  return result;
}

if (process.argv[2] === 'create') {
  const result = await api('task.create', {
    share_visibility: 'private',
    message: { content: 'Prepare ONE Facebook draft for مركز عيون الشروق about dry eyes from screen use. Write the post in natural Egyptian Arabic, 130–180 words, including common symptoms and simple general advice, with no drug prescriptions, diagnosis, unsupported statistics, prices or offers. Keep the call to action separate and suggest an examination if symptoms persist. Produce a downloadable UTF-8 post.json with string fields title, content, cta, hashtags. Also GENERATE one actual square 1280x1280 photorealistic image file: Egyptian adult taking a break from a computer, looking toward daylight, calm blue/white tones, realistic face and hands, subtle fatigue. NO text, Arabic writing, logos or watermarks in the image. Use image generation, not a stock image or SVG placeholder. Return both files and a short explanation. This is only a local quality trial: do not publish anything, connect social accounts, deploy sites, or perform unrelated work. No clarifications needed; use these instructions as the complete brief.' },
  });
  await fs.writeFile(path.join(dir, 'task.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ taskId: result.task_id, taskUrl: result.task_url }));
} else {
  const { task_id } = JSON.parse(await fs.readFile(path.join(dir, 'task.json'), 'utf8'));
  for (let attempt = 0; attempt < 45; attempt++) {
    const detail = await api(`task.detail?task_id=${encodeURIComponent(task_id)}`);
    console.log(JSON.stringify({ status: detail.task.status, background: detail.task.has_running_background_jobs, credits: detail.task.credit_usage }));
    const messages = await api(`task.listMessages?task_id=${encodeURIComponent(task_id)}&order=desc&limit=30`);
    await fs.writeFile(path.join(dir, 'messages.json'), JSON.stringify(messages, null, 2));
    if (detail.task.status !== 'running' && detail.task.has_running_background_jobs === false) {
      console.log(JSON.stringify(messages));
      break;
    }
    await new Promise(resolve => setTimeout(resolve, 20000));
  }
}
