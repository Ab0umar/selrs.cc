import {createElement} from 'react';
import {createRoot} from 'react-dom/client';
import {LayoutDashboard,Users,Wallet,UserRound,FolderHeart,Archive,Settings,X,Menu,RefreshCw,Link,Save,CheckCheck,Printer,Image} from 'lucide-react';
const icons={LayoutDashboard,Users,Wallet,UserRound,FolderHeart,Archive,Settings,X,Menu,RefreshCw,Link,Save,CheckCheck,Printer,Image};
const $=s=>document.querySelector(s);
const dates=['2026-10-06','2026-10-06','2026-10-05','2026-10-05','2026-10-04','2026-10-04'];
$('#grid').innerHTML=dates.map((date,i)=>`<article class="scan" data-date="${date}" data-name="DEMO_100${Math.floor(i/2)+1}_${i%2?'OS':'OD'}"><div class="scanhead"><span>DEMO_100${Math.floor(i/2)+1} · ${i%2?'OS':'OD'}</span><input type="checkbox" aria-label="تحديد الصورة ${i+1}"></div><div class="preview" role="button" tabindex="0" aria-label="فتح معاينة الصورة ${i+1}"><i data-icon="Image"></i><span>مكان صورة البنتاكام</span></div><div class="scanfoot"><b>${i%2?'العين اليسرى':'العين اليمنى'}</b><span>${date}</span></div></article>`).join('');
document.querySelectorAll('[data-icon]').forEach(el=>{const host=document.createElement('span');el.prepend(host);createRoot(host).render(createElement(icons[el.dataset.icon],{'aria-hidden':true}));});
const rows=()=>[...document.querySelectorAll('.scan')];
function update(){const n=rows().filter(r=>r.querySelector('input').checked).length;$('#save').lastChild.textContent=`حفظ المحدد (${n})`;$('#selected').textContent=n?`${n} صور محددة`:'لم يتم تحديد صور';rows().forEach(r=>r.classList.toggle('selected',r.querySelector('input').checked));}
function notice(s){$('#notice').hidden=false;$('#notice').textContent=s;}
document.querySelectorAll('.scan input').forEach(el=>el.onchange=update);
document.querySelectorAll('.preview').forEach(el=>{el.onclick=()=>$('#dialog').showModal();el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();$('#dialog').showModal();}};});
$('#closeDialog').onclick=()=>$('#dialog').close();$('#menu').onclick=()=>document.body.classList.toggle('open');$('#closeNav').onclick=()=>document.body.classList.remove('open');
function filter(){let n=0;rows().forEach(r=>{r.hidden=!(r.dataset.name.toLowerCase().includes($('#search').value.toLowerCase())&&(!$('#from').value||r.dataset.date>=$('#from').value)&&(!$('#to').value||r.dataset.date<=$('#to').value));if(!r.hidden)n++;});$('#count').textContent=n;}
['search','from','to'].forEach(id=>$('#'+id).oninput=filter);
$('#selectAll').onclick=()=>{rows().filter(r=>!r.hidden).forEach(r=>r.querySelector('input').checked=true);update();};$('#clear').onclick=()=>{rows().forEach(r=>r.querySelector('input').checked=false);update();};
$('#save').onclick=()=>notice(!$('#patient').value?'اختر المريض أولاً.':!rows().some(r=>r.querySelector('input').checked)?'حدد الصور المطلوب ربطها.':'معاينة فقط: لا يتم حفظ أي بيانات.');$('#auto').onclick=()=>notice('معاينة فقط: الربط التلقائي غير متصل ببيانات فعلية.');$('#refresh').onclick=()=>notice('تم تحديث المعاينة.');$('#print').onclick=()=>notice('معاينة فقط: الطباعة غير متصلة بملفات فعلية.');
document.querySelectorAll('nav button:not(.active)').forEach(el=>el.onclick=()=>notice('هذه معاينة لصفحة ربط البنتاكام فقط.'));
