import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{p as t}from"./charts-CKYPXezW.js";import{E as n}from"./data-core-CrqxPXdn.js";import{t as r}from"./trpc-BXgQr0U5.js";import{i}from"./ui-misc-D38wyx1_.js";import{t as a}from"./button-putbLdKw.js";import{Z as o,fr as s,hr as c,lr as l,mt as u,ut as d}from"./icons-Bh8r5BPY.js";import{n as f,o as p,r as m,t as h}from"./dropdown-menu-FZjHS_36.js";import{n as g}from"./askConfirm-SsK4B4ws.js";import{n as ee,t as te}from"./nativePrint-CydT0r2v.js";var _=e(t(),1);function ne(e){let t=[`basicSalary`,`workingDays`,`absentDays`,`lateMinutes`,`earlyLeaveMinutes`,`overtimeMinutes`,`leaveDays`,`absentDeduction`,`leaveDeduction`,`lateDeduction`,`earlyLeaveDeduction`,`penaltyDeduction`,`advancesDeduction`,`insuranceDeduction`,`totalDeductions`,`netBasic`,`attendanceCommission`,`examCommission`,`pentacamCommission`,`costOfLivingAllowance`,`transportAllowance`,`totalCommission`,`overtimePay`,`totalPay`];return JSON.stringify(e.map(e=>{let n=e;return[String(n.empCd),...t.map(e=>Number(n[e]??0))]}).sort((e,t)=>String(e[0]).localeCompare(String(t[0]))))}var v=n(),y=new Date,b=[`يناير`,`فبراير`,`مارس`,`أبريل`,`مايو`,`يونيو`,`يوليو`,`أغسطس`,`سبتمبر`,`أكتوبر`,`نوفمبر`,`ديسمبر`];function x(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}`}var S=new Date(y.getFullYear(),y.getMonth()-+(y.getDate()<25),25),re=`${x(new Date(S.getFullYear(),S.getMonth()-1,26))}-26`,ie=`${x(S)}-25`;function C(e){return Number(e).toLocaleString(`ar-EG`,{minimumFractionDigits:0,maximumFractionDigits:0})}function w(e){return(Number(e)*100).toFixed(1)+`%`}function T(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function ae(e){return e instanceof Date?`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`:String(e??``).slice(0,10)}var oe=[`مركز`,`عيادة`];function se(){let[e,t]=(0,_.useState)(re),[n,y]=(0,_.useState)(ie),[S,se]=(0,_.useState)(`مركز`),[E,ce]=(0,_.useState)(`salaries`),[D,le]=(0,_.useState)(`basic`),[O,ue]=(0,_.useState)(`basic`),[k,de]=(0,_.useState)(``),[A,fe]=(0,_.useState)({}),[j,pe]=(0,_.useState)({}),M=e=>{pe(t=>({...t,[e]:!t[e]}))},[N,P]=n.split(`-`).map(Number),me=new Date(e+`T00:00:00`),he=new Date(n+`T00:00:00`),F=`من ${me.toLocaleDateString(`ar-EG`)} إلى ${he.toLocaleDateString(`ar-EG`)}`,ge=(e,n)=>{t(`${x(new Date(e,n-2,26))}-26`),y(`${e}-${String(n).padStart(2,`0`)}-25`)},I=r.salary.getPayroll.useQuery({year:N,month:P,section:`مركز`,fromDate:e,toDate:n}),L=r.salary.getPayroll.useQuery({year:N,month:P,section:`عيادة`,fromDate:e,toDate:n}),_e=r.salary.getSupervisionBonuses.useQuery({year:N,month:P,section:S}),ve=r.salary.listSupervisionMembers.useQuery(),ye=(_e.data??[]).reduce((e,t)=>(e[t.empCd]=String(t.amount??`0`),e),{}),be=r.salary.setSupervisionBonus.useMutation({onSuccess:()=>{_e.refetch(),i.success(`تم الحفظ`)},onError:e=>i.error(`تعذر حفظ مكافأة الإشراف: `+e.message)}),xe=(r.salary.listBasics.useQuery().data??[]).reduce((e,t)=>((!e[t.empCd]||ae(t.effectiveFrom)>ae(e[t.empCd].effectiveFrom))&&(e[t.empCd]=t),e),{}),Se=r.salary.listShiftStaff.useQuery(),Ce=r.salary.getShiftSchedule.useQuery({year:N,month:P}),we=r.salary.computeShiftPayroll.useQuery({year:N,month:P,fromDate:e,toDate:n}),Te=Se.data??[];Ce.data?.attendance;let Ee=we.data??[],R=S===`مركز`?I:L,z=R.data??[],B=e=>({cola:Number(e.costOfLivingAllowance??0),travel:Number(e.transportAllowance??0)}),V=e=>{let t=Number(e.lateDeduction??0)+Number(e.earlyLeaveDeduction??0),n=Number(e.absentDeduction??0),r=Number(e.leaveDeduction??0),i=Number(e.penaltyDeduction??0),a=Number(e.advancesDeduction??0),o=Number(e.insuranceDeduction??0),s=Number(e.totalDeductions??0);return{late:t,absent:n,leave:r,penalty:i,missingCheckout:e.missingCheckoutDeduction==null?Math.max(0,s-t-n-r-i-a-o):Number(e.missingCheckoutDeduction),advances:a,insurance:o,total:s}},H=e=>{let t=B(e);return Number(e.attendanceCommission)+Number(e.examCommission)+Number(e.pentacamCommission)+t.cola+t.travel},U=z.filter(e=>!String(e.empCd).startsWith(`shift_`)),W=z.filter(e=>String(e.empCd).startsWith(`shift_`)),G=(ve.data??[]).map(e=>U.find(t=>t.empCd===e.empCd)??{empCd:e.empCd,fullName:e.fullName,department:e.department,jobTitle:e.jobTitle,supervisionBonus:`0`}),K=Te.map(e=>{let t=Ee.find(t=>Number(t.id)===Number(e.id)),n=z.find(t=>t.empCd===`shift_${e.id}`),r=Number(e.ratePerShift??0),i=Number(e.mainShiftMinutes??360)||360,a=Math.round(r/i*240*100)/100,o=Number(t?.bigScheduled??0),s=Number(t?.bigAttended??0),c=Number(t?.bigTotal??o*r),l=Number(t?.smallScheduled??0),u=Number(t?.smallAttended??0),d=Number(t?.smallTotal??l*a),f=Math.max(0,o-s),p=Math.max(0,l-u),m=Number(t?.basicSalary??c+d),h=Number(t?Number(t.absentDeduction??0)+Number(t.punchDeduction??0):n?.totalDeductions??0),g=Number(t?.totalPay??n?.netBasic??m-h);return{id:e.id,fullName:e.name,type:e.type,shiftDayCount:o,shiftDayAttended:s,shiftDayAbsent:f,shiftDayRate:r,shiftDayTotal:c,shiftNightCount:l,shiftNightAttended:u,shiftNightAbsent:p,shiftNightRate:a,shiftNightTotal:d,hourlyBasicSalary:m,totalDeductions:h,leaveMultiplier:n?.leaveMultiplier==null?1:Number(n.leaveMultiplier),netBasic:g,attendanceCommission:Number(n?.attendanceCommission??0),attendanceCommissionRaw:Number(n?.attendanceCommissionRaw??n?.attendanceCommission??0),examCommission:Number(n?.examCommission??0),examCommissionRaw:Number(n?.examCommissionRaw??n?.examCommission??0),pentacamCommission:Number(n?.pentacamCommission??0),pentacamCommissionRaw:Number(n?.pentacamCommissionRaw??n?.pentacamCommission??0),costOfLivingAllowance:Number(n?.costOfLivingAllowance??0),transportAllowance:Number(n?.transportAllowance??0),overtimeMinutes:Number(n?.overtimeMinutes??0),overtimePay:Number(n?.overtimePay??0),totalCommission:Number(n?.totalCommission??0)}}),q=[...(I.data??[]).map(e=>({...e,_section:`مركز`})),...(L.data??[]).map(e=>({...e,_section:`عيادة`}))].filter(e=>!String(e.empCd).startsWith(`shift_`)),De=()=>{I.refetch(),L.refetch()},J=r.salary.computePayroll.useMutation({onSuccess:e=>{De(),i.success(`تم احتساب ${e.saved} موظف`)},onError:e=>i.error(`تعذر احتساب الرواتب: `+e.message)}),Oe=r.salary.finalizePayroll.useMutation({onSuccess:()=>{De(),i.success(`تم اعتماد كشف الرواتب`)},onError:e=>i.error(`تعذر اعتماد كشف الرواتب: `+e.message)});q.reduce((e,t)=>({basic:e.basic+Number(t.basicSalary),deductions:e.deductions+Number(t.totalDeductions),netBasic:e.netBasic+Number(t.netBasic),commission:e.commission+H(t),overtime:e.overtime+Number(t.overtimePay??0),totalPay:e.totalPay+Number(t.totalPay)}),{basic:0,deductions:0,netBasic:0,commission:0,overtime:0,totalPay:0});let ke=z.length>0&&z.every(e=>e.payrollStatus===`final`),Y=`
    @page { size: A4 landscape; margin: 7mm; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      direction: rtl;
      background: oklch(99% 0.004 248);
      color: oklch(22% 0.035 248);
      font-family: "Segoe UI", Tahoma, Arial, sans-serif;
      font-size: 10px;
      line-height: 1.35;
    }
    .payroll-sheet {
      min-height: 190mm;
      padding: 7mm;
      border: 1px solid oklch(86% 0.016 248);
      border-radius: 14px;
      background: oklch(99.5% 0.004 248);
    }
    .sheet-header {
      display: grid;
      grid-template-columns: 1fr 1.45fr 1fr;
      align-items: start;
      gap: 10px;
      padding-bottom: 8px;
      border-bottom: 1px solid oklch(87% 0.02 248);
    }
    .top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 5px;
      color: oklch(46% 0.025 248);
      font-size: 9px;
      font-weight: 800;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 7px;
      font-weight: 800;
      color: oklch(29% 0.055 248);
    }
    .brand-mark {
      display: grid;
      width: 28px;
      height: 28px;
      place-items: center;
      border-radius: 999px;
      background: oklch(92% 0.052 248);
      color: oklch(38% 0.105 248);
      font-size: 12px;
      font-weight: 900;
    }
    .muted { color: oklch(48% 0.025 248); font-size: 7.5px; font-weight: 600; }
    .report-title { text-align: center; }
    h1 {
      color: oklch(25% 0.045 248);
      font-size: 15px;
      font-weight: 900;
      letter-spacing: -0.02em;
    }
    .period {
      display: inline-flex;
      margin-top: 4px;
      padding: 3px 10px;
      border-radius: 999px;
      background: oklch(96% 0.018 248);
      color: oklch(39% 0.055 248);
      font-size: 8px;
      font-weight: 800;
    }
    .dept {
      display: inline-flex;
      margin-top: 4px;
      min-width: 92px;
      padding: 6px 10px;
      border: 1px solid oklch(88% 0.035 56);
      border-radius: 12px;
      background: oklch(98% 0.02 56);
      color: oklch(41% 0.095 56);
      text-align: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 900;
    }
    .summary-strip {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 5px;
      margin: 7px 0;
    }
    .summary-pill {
      min-height: 31px;
      padding: 4px 7px;
      border: 1px solid oklch(88% 0.018 248);
      border-radius: 10px;
      background: oklch(98.5% 0.006 248);
    }
    .summary-label {
      display: block;
      color: oklch(50% 0.025 248);
      font-size: 6.8px;
      font-weight: 700;
    }
    .summary-value {
      display: block;
      margin-top: 1px;
      color: oklch(28% 0.045 248);
      font-size: 9.5px;
      font-weight: 900;
    }
    .table-wrap {
      overflow: hidden;
      border: 1px solid oklch(84% 0.017 248);
      border-radius: 12px;
    }
    table {
      width: fit-content;
      min-width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      table-layout: auto;
    }
    thead th {
      background: oklch(93.5% 0.025 248);
      color: oklch(31% 0.047 248);
      font-size: 9px;
      font-weight: 900;
      padding: 5px 6px;
      border-inline-start: 1px solid oklch(83% 0.017 248);
      border-bottom: 1px solid oklch(80% 0.02 248);
      text-align: center;
      white-space: nowrap;
    }
    tbody td {
      background: oklch(99.5% 0.003 248);
      color: oklch(25% 0.03 248);
      font-size: 9px;
      font-weight: 700;
      padding: 5px 6px;
      border-inline-start: 1px solid oklch(88% 0.012 248);
      border-bottom: 1px solid oklch(88% 0.012 248);
      text-align: center;
      white-space: nowrap;
    }
    tbody tr:nth-child(even) td { background: oklch(98% 0.006 248); }
    tbody tr:last-child td { border-bottom: 0; }
    .emp-col {
      min-width: 115px;
      text-align: right !important;
      font-size: 10px;
      font-weight: 900;
      color: oklch(25% 0.045 248);
    }
    .money-strong {
      color: oklch(38% 0.105 248);
      font-size: 10px;
      font-weight: 900;
    }
    .total-row td {
      background: oklch(96% 0.035 56) !important;
      color: oklch(31% 0.055 56);
      font-size: 8px;
      font-weight: 900;
      border-top: 1px solid oklch(76% 0.06 56);
    }
    .sig-col { width: 58px; }
    .footer {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-top: 14px;
    }
    .footer-block {
      text-align: center;
      color: oklch(31% 0.035 248);
      font-size: 8.5px;
      font-weight: 800;
    }
    .footer-line {
      width: 128px;
      margin: 16px auto 4px;
      border-top: 1px solid oklch(38% 0.025 248);
    }
    .footer-meta {
      display: flex;
      justify-content: space-between;
      margin-top: 7px;
      color: oklch(50% 0.024 248);
      font-size: 7px;
      font-weight: 700;
    }
    .note {
      margin: 6px 0;
      color: oklch(46% 0.025 248);
      font-size: 8px;
      font-weight: 700;
    }
  `,X=`
    @page { size: A4 portrait; margin: 8mm; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      direction: rtl;
      background: oklch(99% 0.004 248);
      color: oklch(22% 0.035 248);
      font-family: "Segoe UI", Tahoma, Arial, sans-serif;
      font-size: 9px;
      line-height: 1.35;
    }
    .slip {
      position: relative;
      min-height: 64mm;
      margin-bottom: 3mm;
      padding: 4mm;
      break-inside: avoid;
      page-break-inside: avoid;
      border: 1px solid oklch(84% 0.017 248);
      border-radius: 12px;
      background: oklch(99.5% 0.004 248);
    }
    .slip::after {
      content: "";
      position: absolute;
      inset-inline: 4mm;
      bottom: -1.5mm;
      border-bottom: 1px dashed oklch(72% 0.02 248);
    }
    .slip-top {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 6px;
      margin-bottom: 3px;
      color: oklch(48% 0.025 248);
      font-size: 7px;
      font-weight: 800;
    }
    .slip-badge {
      padding: 2px 8px;
      border-radius: 999px;
      background: oklch(96% 0.018 248);
      color: oklch(38% 0.105 248);
      font-size: 7px;
      font-weight: 900;
    }
    .slip-title {
      text-align: center;
      color: oklch(25% 0.045 248);
      font-size: 12px;
      font-weight: 900;
      letter-spacing: -0.02em;
    }
    .employee-strip {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 6px;
      margin: 4px 0;
    }
    .employee-box {
      padding: 3px 6px;
      border: 1px solid oklch(88% 0.018 248);
      border-radius: 9px;
      background: oklch(98% 0.006 248);
    }
    .box-label {
      display: block;
      color: oklch(50% 0.025 248);
      font-size: 6.2px;
      font-weight: 700;
    }
    .box-value {
      display: block;
      margin-top: 1px;
      color: oklch(25% 0.045 248);
      font-size: 9.5px;
      font-weight: 900;
    }
    table.main {
      width: 100%;
      overflow: hidden;
      border: 1px solid oklch(84% 0.017 248);
      border-collapse: separate;
      border-spacing: 0;
      border-radius: 10px;
      margin-bottom: 3px;
    }
    table.main th {
      border-inline-start: 1px solid oklch(84% 0.017 248);
      border-bottom: 1px solid oklch(80% 0.02 248);
      background: oklch(93.5% 0.025 248);
      color: oklch(31% 0.047 248);
      padding: 2px 3px;
      text-align: center;
      white-space: nowrap;
      font-size: 6.4px;
      font-weight: 900;
    }
    table.main td {
      border-inline-start: 1px solid oklch(88% 0.012 248);
      border-bottom: 1px solid oklch(88% 0.012 248);
      background: oklch(99.5% 0.003 248);
      color: oklch(25% 0.03 248);
      padding: 2px 3px;
      text-align: center;
      font-size: 7.2px;
      font-weight: 750;
    }
    table.main tr:last-child td { border-bottom: 0; }
    .net-cell {
      min-width: 60px;
      border: 1px solid oklch(70% 0.095 56) !important;
      background: oklch(97% 0.038 56) !important;
      color: oklch(34% 0.075 56) !important;
      text-align: center;
      vertical-align: middle;
      padding: 3px 4px !important;
    }
    .net-label {
      display: block;
      margin-bottom: 2px;
      color: oklch(42% 0.065 56);
      font-size: 6px;
      font-weight: 800;
    }
    .net-val {
      display: block;
      color: oklch(31% 0.08 56);
      font-size: 12px;
      font-weight: 950;
    }
    .words {
      margin: 3px 0 1px;
      color: oklch(30% 0.035 248);
      text-align: right;
      font-size: 7.5px;
      font-weight: 800;
    }
    .sigs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-top: 5px;
    }
    .sig-block {
      text-align: center;
      color: oklch(31% 0.035 248);
      font-size: 7px;
      font-weight: 800;
    }
    .sig-line {
      width: 100px;
      margin: 9px auto 3px;
      border-top: 1px solid oklch(38% 0.025 248);
    }
  `;function Z(e,t,n){let r=`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"/><title>${T(t)}</title><style>${n}</style></head><body>${e}</body></html>`;if(te()){ee(t,r);return}let i=document.createElement(`iframe`);i.style.cssText=`position:fixed;top:0;left:0;width:0;height:0;border:none;visibility:hidden;`,document.body.appendChild(i);let a=i.contentDocument;a.open(),a.write(r),a.close();let o=()=>{i.remove(),window.removeEventListener(`afterprint`,o)};window.addEventListener(`afterprint`,o),i.contentWindow.focus(),i.contentWindow.print()}function Ae(e){let t=Math.round(e);if(t===0)return`صفر جنيه`;let n=[``,`واحد`,`اثنان`,`ثلاثة`,`أربعة`,`خمسة`,`ستة`,`سبعة`,`ثمانية`,`تسعة`,`عشرة`,`أحد عشر`,`اثنا عشر`,`ثلاثة عشر`,`أربعة عشر`,`خمسة عشر`,`ستة عشر`,`سبعة عشر`,`ثمانية عشر`,`تسعة عشر`],r=[``,``,`عشرون`,`ثلاثون`,`أربعون`,`خمسون`,`ستون`,`سبعون`,`ثمانون`,`تسعون`];function i(e){if(e<20)return n[e];let t=e%10;return(t?n[t]+` و`:``)+r[Math.floor(e/10)]}function a(e){if(e<100)return i(e);let t=Math.floor(e/100),r=e%100;return(t===1?`مائة`:t===2?`مئتان`:n[t]+`مائة`)+(r?` و`+i(r):``)}let o=Math.floor(t/1e3),s=t%1e3,c=``;return o===1?c=`ألف`:o===2?c=`ألفان`:o>=3&&o<=10?c=n[o]+` آلاف`:o>10&&(c=i(o)+` ألف`),s&&(c+=(c?` و`:``)+a(s)),c+` جنيه`}function je(e){return e===`عيادة`?{mark:`SEC`,name:`مركز أ.د محمد السعدني غرابة`,sub:`Sadany Eye Center`}:{mark:`S`,name:`مركز عيون الشروق`,sub:`SELRS`}}function Q(e,t,n=`نظام الرواتب`){let r=je(t);return`
        <header class="sheet-header">
          <div class="brand">
            <span class="brand-mark">${T(r.mark)}</span>
            <div>
              <div>${T(r.name)}</div>
              <div class="muted">${T(r.sub)}</div>
            </div>
          </div>
          <div class="report-title">
            <h1>${T(e)}: ${T(b[P-1])}</h1>
            <span class="period">${T(F)}</span>
          </div>
          <div class="report-title" style="text-align:left">
            <div class="muted">${T(n)}</div>
            <div class="dept">${T(t)}</div>
          </div>
        </header>`}function Me(){let e=new Date().toLocaleDateString(`ar-EG`),t=S===`عيادة`,n=z.filter(e=>!String(e.empCd).startsWith(`shift_`)),r=n.reduce((e,t)=>e+Number(t.basicSalary),0),i=n.reduce((e,t)=>e+Number(t.absentDeduction??0),0),a=n.reduce((e,t)=>e+Number(t.leaveDeduction??0),0),o=n.reduce((e,t)=>e+Number(t.lateDeduction??0),0),s=n.reduce((e,t)=>e+Number(t.earlyLeaveDeduction??0),0),c=n.reduce((e,t)=>e+Number(t.penaltyDeduction??0),0),l=n.reduce((e,t)=>e+Number(t.totalDeductions),0),u=n.reduce((e,t)=>e+Number(t.netBasic),0),d=n.reduce((e,t)=>e+Number(t.attendanceCommission),0),f=n.reduce((e,t)=>e+Number(t.examCommission),0),p=n.reduce((e,t)=>e+Number(t.pentacamCommission),0),m=n.reduce((e,t)=>e+Number(t.overtimePay??0),0),h=n.reduce((e,t)=>e+Number(t.totalPay),0),g=n.map(e=>`
      <tr>
        <td class="emp-col">${T(e.fullName??e.empCd)}</td>
        <td>${C(e.basicSalary)}</td>
        <td>${C(e.absentDeduction)}</td>
        <td>${C(e.leaveDeduction??0)}</td>
        <td>${C(e.lateDeduction??0)}</td>
        <td>${C(e.earlyLeaveDeduction??0)}</td>
        <td>${C(e.penaltyDeduction)}</td>
        <td>${C(e.totalDeductions)}</td>
        <td>${C(e.netBasic)}</td>
        <td>${C(e.attendanceCommission)}</td>
        <td>${C(e.examCommission)}</td>
        ${t?``:`<td>${C(e.pentacamCommission)}</td>`}
        <td>${C(e.overtimePay??0)}</td>
        <td class="money-strong">${C(e.totalPay)}</td>
        <td class="sig-col"></td>
      </tr>`).join(``);Z(`
      <main class="payroll-sheet">
        ${Q(`كشف المرتبات الشهرية`,S)}
        <section class="summary-strip" aria-label="ملخص كشف المرتبات">
          <div class="summary-pill"><span class="summary-label">عدد الموظفين</span><span class="summary-value">${n.length}</span></div>
          <div class="summary-pill"><span class="summary-label">إجمالي الأساسي</span><span class="summary-value">${C(r)}</span></div>
          <div class="summary-pill"><span class="summary-label">إجمالي الخصومات</span><span class="summary-value">${C(l)}</span></div>
          <div class="summary-pill"><span class="summary-label">صافي الأساسي</span><span class="summary-value">${C(u)}</span></div>
          <div class="summary-pill"><span class="summary-label">صافي المستحق</span><span class="summary-value">${C(h)}</span></div>
        </section>
        <section class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>الاسم</th>
            <th>الأساسي</th>
            <th>خصم غياب</th>
            <th>خصم إجازة من الراتب</th>
            <th>خصم تأخير</th>
            <th>خصم مبكر</th>
            <th>جزاءات</th>
            <th>إجمالي الخصم</th>
            <th>صافي الأساسي</th>
            <th>عمولة حضور</th>
            <th>عمولة فحص</th>
            ${t?``:`<th>عمولة بنتاكام</th>`}
            <th>إضافي</th>
            <th>صافي المستحق</th>
            <th class="sig-col">التوقيع</th>
          </tr>
        </thead>
        <tbody>
          ${g}
          <tr class="total-row">
            <td class="emp-col">الإجمالي</td>
            <td>${C(r)}</td>
            <td>${C(i)}</td>
            <td>${C(a)}</td>
            <td>${C(o)}</td>
            <td>${C(s)}</td>
            <td>${C(c)}</td>
            <td>${C(l)}</td>
            <td>${C(u)}</td>
            <td>${C(d)}</td>
            <td>${C(f)}</td>
            ${t?``:`<td>${C(p)}</td>`}
            <td>${C(m)}</td>
            <td class="money-strong">${C(h)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
        </section>
      <div class="footer">
        <div class="footer-block"><div class="footer-line"></div>المدير الإداري</div>
        <div class="footer-block"><div class="footer-line"></div>الحسابات</div>
        <div class="footer-block"><div class="footer-line"></div>شئون العاملين</div>
      </div>
      <div class="footer-meta">
        <span>التقرير الكامل في هذه الطباعة</span>
        <span>تاريخ الطباعة: ${T(e)}</span>
      </div>
      </main>`,`كشف الرواتب: ${S}، ${F}`,Y)}function Ne(){let e=new Date().toLocaleDateString(`ar-EG`),t=K.reduce((e,t)=>e+t.shiftDayTotal,0),n=K.reduce((e,t)=>e+t.shiftNightTotal,0),r=K.reduce((e,t)=>e+Number(t.totalDeductions),0),i=K.reduce((e,t)=>e+Number(t.netBasic),0),a=K.map(e=>`
      <tr>
        <td class="emp-col">${T(e.fullName)}</td>
        <td>${T(e.type===`doctor`?`طبيب`:`فني`)}</td>
        <td>${e.shiftDayCount}</td><td>${C(e.shiftDayRate)}</td><td>${C(e.shiftDayTotal)}</td>
        <td>${e.shiftNightCount}</td><td>${C(e.shiftNightRate)}</td><td>${C(e.shiftNightTotal)}</td>
        <td>${C(e.totalDeductions)}</td><td>${w(e.leaveMultiplier)}</td>
        <td class="money-strong">${C(e.netBasic)}</td><td class="sig-col"></td>
      </tr>`).join(``);Z(`
      ${Q(`كشف رواتب الشفتات`,`مركز`)}
      <table><thead><tr>
        <th>الاسم</th><th>النوع</th><th>عدد الكبير</th><th>سعر الكبير</th><th>إجمالي الكبير</th>
        <th>عدد الصغير</th><th>سعر الصغير</th><th>إجمالي الصغير</th>
        <th>الخصومات</th><th>المعامل</th><th>صافي الشفتات</th><th class="sig-col">التوقيع</th>
      </tr></thead><tbody>${a}
        <tr class="total-row"><td class="emp-col" colspan="4">الإجمالي</td><td>${C(t)}</td><td colspan="2"></td><td>${C(n)}</td><td>${C(r)}</td><td></td><td class="money-strong">${C(i)}</td><td></td></tr>
      </tbody></table>
      <div class="footer"><div class="footer-block"><div class="footer-line"></div>المدير الإداري</div><div class="footer-block"><div class="footer-line"></div>الحسابات</div><div class="footer-block"><div class="footer-line"></div>شئون العاملين</div></div>
      <div class="footer-meta"><span>التقرير الكامل في هذه الطباعة</span><span>تاريخ الطباعة: ${T(e)}</span></div>`,`كشف رواتب الشفتات: ${F}`,Y)}function Pe(){let e=K.filter(e=>e.type===`doctor`),t=e.reduce((e,t)=>e+Number(t.netBasic),0),n=e.map(e=>W.find(t=>t.empCd===`shift_${e.id}`)).filter(Boolean),r=n.reduce((e,t)=>e+Number(t.examCommission??0),0),i=n.reduce((e,t)=>e+Number(t.pentacamCommission??0),0);return e.map(e=>{let n=W.find(t=>t.empCd===`shift_${e.id}`),a=Number(e.netBasic),o=t>0?a/t:0,s=Number(n?.netBasic??0),c=Number(n?.attendanceCommissionRaw??n?.attendanceCommission??0),l=a*(s>0?c/s:.25)*Number(e.leaveMultiplier??1),u=r*o,d=i*o;return{...e,base:a,share:o,attend:l,examComm:u,pentComm:d,total:l+u+d}})}function Fe(){let e=new Date().toLocaleDateString(`ar-EG`),t=Pe(),n=t.reduce((e,t)=>({base:e.base+t.base,attend:e.attend+t.attend,exam:e.exam+t.examComm,pentacam:e.pentacam+t.pentComm,total:e.total+t.total}),{base:0,attend:0,exam:0,pentacam:0,total:0}),r=t.map(e=>`
      <tr><td class="emp-col">${T(e.fullName)}</td><td>${C(e.base)}</td><td>${w(e.share)}</td>
      <td>${C(e.attend)}</td><td>${C(e.examComm)}</td><td>${C(e.pentComm)}</td>
      <td class="money-strong">${C(e.total)}</td><td class="sig-col"></td></tr>`).join(``);Z(`
      ${Q(`كشف عمولات الشفتات`,`مركز`)}
      <table><thead><tr><th>الاسم</th><th>صافي الشفتات</th><th>نسبة التوزيع</th><th>الحضور</th><th>الفحص</th><th>البنتاكام</th><th>إجمالي العمولات</th><th class="sig-col">التوقيع</th></tr></thead>
      <tbody>${r}<tr class="total-row"><td class="emp-col">الإجمالي</td><td>${C(n.base)}</td><td></td><td>${C(n.attend)}</td><td>${C(n.exam)}</td><td>${C(n.pentacam)}</td><td class="money-strong">${C(n.total)}</td><td></td></tr></tbody></table>
      <div class="footer"><div class="footer-block"><div class="footer-line"></div>المدير الإداري</div><div class="footer-block"><div class="footer-line"></div>الحسابات</div><div class="footer-block"><div class="footer-line"></div>شئون العاملين</div></div>
      <div class="footer-meta"><span>التقرير الكامل في هذه الطباعة</span><span>تاريخ الطباعة: ${T(e)}</span></div>`,`كشف عمولات الشفتات: ${F}`,Y)}function Ie(){Z(K.map(e=>{let t=Number(e.netBasic),n=e.shiftDayTotal+e.shiftNightTotal,r=`
          <table class="main">
            <tr>
              <th colspan="2">شفت كبير</th>
              <th colspan="2">شفت صغير</th>
              <th>إجمالي الاستحقاقات</th>
              <th rowspan="5" class="net-cell"><span class="net-label">صافي المستحق</span><span class="net-val">${C(t)}</span></th>
            </tr>
            <tr>
              <th>عدد</th><th>قيمة</th>
              <th>عدد</th><th>قيمة</th>
              <th></th>
            </tr>
            <tr>
              <td>${e.shiftDayCount}</td><td>${C(e.shiftDayRate)}</td>
              <td>${e.shiftNightCount}</td><td>${C(e.shiftNightRate)}</td>
              <td>${C(n)}</td>
            </tr>
            <tr>
              <th colspan="2">خصومات</th>
              <th colspan="2">معامل الإجازة</th>
              <th>صافي الأساسي</th>
            </tr>
            <tr>
              <td colspan="2">${C(e.totalDeductions)}</td>
              <td colspan="2">${w(e.leaveMultiplier)}</td>
              <td>${C(t)}</td>
            </tr>
          </table>`;return $({...e,jobTitle:e.type===`doctor`?`طبيب`:`فني`},`مرتب الشفتات: يوم 1، ${b[P-1]} ${N}`,r,t,S)}).join(``),`قسائم الشفتات يوم 1: ${b[P-1]} ${N}`,X)}function Le(){Z(K.map(e=>{let t=W.find(t=>t.empCd===`shift_${e.id}`),n=t?Number(t.attendanceCommission):0,r=t?Number(t.attendanceCommissionRaw??n):0,i=t?Number(t.examCommission):0,a=t?Number(t.examCommissionRaw??i):0,o=t?Number(t.pentacamCommission):0,s=t?Number(t.pentacamCommissionRaw??o):0,{cola:c,travel:l}=t?B(t):{cola:0,travel:0},u=t?Number(t.overtimePay??0):0,d=n+i+o+c+l+u,f=`
          <table class="main">
            <tr>
              <th colspan="2">الحضور</th>
              <th colspan="2">الكشف</th>
              <th colspan="2">البنتاكام</th>
              <th rowspan="2">غلاء معيشه</th>
              <th rowspan="2">بدل مواصلات</th>
              <th rowspan="2">أوفرتايم</th>
              <th rowspan="2">إجمالي المكافآت</th>
              <th rowspan="3" class="net-cell"><span class="net-label">صافي المستحق</span><span class="net-val">${C(d)}</span></th>
            </tr>
            <tr>
              <th>النسبة</th><th>المستحق</th>
              <th>النسبة</th><th>المستحق</th>
              <th>النسبة</th><th>المستحق</th>
            </tr>
            <tr>
              <td>${C(r)}</td><td>${C(n)}</td>
              <td>${C(a)}</td><td>${C(i)}</td>
              <td>${C(s)}</td><td>${C(o)}</td>
              <td>${C(c)}</td>
              <td>${C(l)}</td>
              <td>${C(u)}</td>
              <td>${C(d)}</td>
            </tr>
          </table>`;return $({...e,jobTitle:e.type===`doctor`?`طبيب`:`فني`},`نسب الشفتات: ${b[P-1]} ${N}`,f,d,S)}).join(``),`قسائم الشفتات يوم 10: ${b[P-1]} ${N}`,X)}function Re(){let e=new Date().toLocaleDateString(`ar-EG`),t=z.filter(e=>!String(e.empCd).startsWith(`shift_`)),n=t.reduce((e,t)=>e+Number(t.basicSalary),0),r=t.reduce((e,t)=>{let n=V(t);return e.late+=n.late,e.absent+=n.absent,e.penalty+=n.penalty,e.missingCheckout+=n.missingCheckout,e.advances+=n.advances,e.insurance+=n.insurance,e},{late:0,absent:0,penalty:0,missingCheckout:0,advances:0,insurance:0}),i=t.reduce((e,t)=>e+Number(t.totalDeductions),0),a=t.reduce((e,t)=>e+Number(t.netBasic),0),o=t.map(e=>{let t=V(e);return`
      <tr>
        <td class="emp-col">${T(e.fullName??e.empCd)}</td>
        <td>${C(e.basicSalary)}</td>
        <td>${C(t.late)}</td>
        <td>${C(t.absent)}</td>
        <td>${C(t.penalty)}</td>
        <td>${C(t.missingCheckout)}</td>
        <td>${C(t.advances)}</td>
        <td>${C(t.insurance)}</td>
        <td>${C(t.total)}</td>
        <td class="money-strong">${C(e.netBasic)}</td>
        <td class="sig-col"></td>
      </tr>`}).join(``);Z(`
      ${Q(`كشف الرواتب الأساسية`,S)}
      <table>
        <thead><tr>
          <th>الاسم</th><th>الأساسي</th><th>تأخير</th><th>غياب</th>
          <th>جزاء</th><th>بصمة واحدة</th><th>سلف</th><th>تأمين</th>
          <th>إجمالي الخصومات</th><th>صافي الأساسي</th>
          <th class="sig-col">التوقيع</th>
        </tr></thead>
        <tbody>
          ${o}
          <tr class="total-row">
            <td class="emp-col">الإجمالي</td>
            <td>${C(n)}</td>
            <td>${C(r.late)}</td>
            <td>${C(r.absent)}</td>
            <td>${C(r.penalty)}</td>
            <td>${C(r.missingCheckout)}</td>
            <td>${C(r.advances)}</td>
            <td>${C(r.insurance)}</td>
            <td>${C(i)}</td>
            <td class="money-strong">${C(a)}</td><td></td>
          </tr>
        </tbody>
      </table>
      <div class="footer">
        <div class="footer-block"><div class="footer-line"></div>المدير الإداري</div>
        <div class="footer-block"><div class="footer-line"></div>الحسابات</div>
        <div class="footer-block"><div class="footer-line"></div>شئون العاملين</div>
      </div>
      <div class="footer-meta"><span>التقرير الكامل في هذه الطباعة</span><span>تاريخ الطباعة: ${e}</span></div>`,`كشف الأساسي: ${S}، ${F}`,Y)}function ze(){let e=new Date().toLocaleDateString(`ar-EG`),t=S===`عيادة`,n=z.filter(e=>!String(e.empCd).startsWith(`shift_`)),r=n.reduce((e,t)=>e+Number(t.attendanceCommission),0),i=n.reduce((e,t)=>e+Number(t.examCommission),0),a=n.reduce((e,t)=>e+Number(t.pentacamCommission),0),o=n.reduce((e,t)=>e+B(t).cola,0),s=n.reduce((e,t)=>e+B(t).travel,0),c=n.reduce((e,t)=>e+Number(t.overtimePay??0),0),l=n.reduce((e,t)=>e+H(t)+Number(t.overtimePay??0),0),u=n.reduce((e,t)=>e+Number(t.attendanceCommissionRaw??t.attendanceCommission),0),d=n.reduce((e,t)=>e+Number(t.examCommissionRaw??t.examCommission),0),f=n.reduce((e,t)=>e+Number(t.pentacamCommissionRaw??t.pentacamCommission),0),p=n.map(e=>`
      <tr>
        <td class="emp-col">${T(e.fullName??e.empCd)}</td>
        <td>${C(e.attendanceCommissionRaw??e.attendanceCommission)}</td>
        <td>${C(e.attendanceCommission)}</td>
        <td>${C(e.examCommissionRaw??e.examCommission)}</td>
        <td>${C(e.examCommission)}</td>
        ${t?``:`<td>${C(e.pentacamCommissionRaw??e.pentacamCommission)}</td><td>${C(e.pentacamCommission)}</td>`}
        <td>${C(B(e).cola)}</td>
        <td>${C(B(e).travel)}</td>
        <td>${C(e.overtimePay??0)}</td>
        <td style="font-weight:bold">${C(H(e)+Number(e.overtimePay??0))}</td>
        <td class="sig-col"></td>
      </tr>`).join(``);Z(`
      ${Q(`كشف العمولات`,S)}
      <table>
        <thead>
          <tr>
            <th rowspan="2">الاسم</th>
            <th colspan="2">عمولة حضور</th>
            <th colspan="2">عمولة فحص</th>
            ${t?``:`<th colspan="2">عمولة بنتاكام</th>`}
            <th rowspan="2">غلاء معيشه</th><th rowspan="2">بدل مواصلات</th><th rowspan="2">إضافي</th><th rowspan="2">إجمالي العمولات</th><th rowspan="2" class="sig-col">التوقيع</th>
          </tr>
          <tr>
            <th>النسبة</th><th>المستحق</th>
            <th>النسبة</th><th>المستحق</th>
            ${t?``:`<th>النسبة</th><th>المستحق</th>`}
          </tr>
        </thead>
        <tbody>
          ${p}
          <tr class="total-row">
            <td class="emp-col">الإجمالي</td>
            <td>${C(u)}</td><td>${C(r)}</td>
            <td>${C(d)}</td><td>${C(i)}</td>
            ${t?``:`<td>${C(f)}</td><td>${C(a)}</td>`}
            <td>${C(o)}</td><td>${C(s)}</td><td>${C(c)}</td><td style="font-weight:bold">${C(l)}</td><td></td>
          </tr>
        </tbody>
      </table>
      <div class="footer">
        <div class="footer-block"><div class="footer-line"></div>المدير الإداري</div>
        <div class="footer-block"><div class="footer-line"></div>الحسابات</div>
        <div class="footer-block"><div class="footer-line"></div>شئون العاملين</div>
      </div>
      <div class="footer-meta"><span>التقرير الكامل في هذه الطباعة</span><span>تاريخ الطباعة: ${e}</span></div>`,`كشف العمولات: ${S}، ${F}`,Y)}function Be(){let e=new Date().toLocaleDateString(`ar-EG`),t=G,n=t.reduce((e,t)=>e+Number(A[t.empCd]??t.supervisionBonus??0),0),r=t.map(e=>`
      <tr>
        <td class="emp-col">${T(e.fullName??e.empCd)}</td>
        <td>${C(Number(A[e.empCd]??e.supervisionBonus??0))}</td>
        <td class="sig-col"></td>
      </tr>`).join(``);Z(`
      ${Q(`كشف مكافآت الإشراف`,S)}
      <p class="note" style="margin-bottom:6px">ملاحظة: هذه المكافآت خارج إجمالي الراتب ولا تؤثر على الحسابات</p>
      <table>
        <thead><tr>
          <th>الاسم</th><th>مكافأة الإشراف</th><th class="sig-col">التوقيع</th>
        </tr></thead>
        <tbody>
          ${r}
          <tr class="total-row">
            <td class="emp-col">الإجمالي</td>
            <td>${C(n)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div class="footer">
        <div class="footer-block"><div class="footer-line"></div>المدير الإداري</div>
        <div class="footer-block"><div class="footer-line"></div>الحسابات</div>
        <div class="footer-block"><div class="footer-line"></div>شئون العاملين</div>
      </div>
      <div class="footer-meta"><span>التقرير الكامل في هذه الطباعة</span><span>تاريخ الطباعة: ${e}</span></div>`,`كشف مكافآت الإشراف: ${S}، ${F}`,Y)}function Ve(){let e=G.filter(e=>Number(A[e.empCd]??e.supervisionBonus??0)>0);if(!e.length){i.info(`لا توجد مكافآت إشراف للطباعة`);return}Z(e.map(e=>{let t=Number(A[e.empCd]??e.supervisionBonus??0),n=`
        <table class="main">
          <tr>
            <th>مكافأة الإشراف</th>
            <th rowspan="2" class="net-cell"><span class="net-label">صافي المستحق</span><span class="net-val">${C(t)}</span></th>
          </tr>
          <tr>
            <td>${C(t)}</td>
          </tr>
        </table>`;return $(e,`مكافأة إشراف ${b[P-1]} ${N}`,n,t)}).join(``),`مكافآت الإشراف: ${b[P-1]} ${N}`,X)}function $(e,t,n,r,i){let a=je(i??e._section??S);return`
      <div class="slip">
        <div class="slip-top">
          <span>${T(a.name)}</span>
          <span class="slip-badge">${T(a.mark)}</span>
          <span style="text-align:left">${T(a.sub)}</span>
        </div>
        <div class="slip-title">${T(t)}</div>
        <div class="employee-strip">
          <div class="employee-box">
            <span class="box-label">اسم الموظف</span>
            <span class="box-value">${T(e.fullName??e.empCd)}</span>
          </div>
          <div class="employee-box">
            <span class="box-label">الوظيفة/القسم</span>
            <span class="box-value">${T([e.jobTitle,i??e._section??S].filter(Boolean).join(`/`))}</span>
          </div>
        </div>
        ${n}
        <div class="words">${T(Ae(r))}</div>
        <div class="sigs">
          <div class="sig-block"><div class="sig-line"></div>توقيع المستلم</div>
          <div class="sig-block"><div class="sig-line"></div>يعتمد</div>
        </div>
      </div>`}function He(){new Date().toLocaleDateString(`ar-EG`);let e=z.filter(e=>!String(e.empCd).startsWith(`shift_`)),t=e.reduce((e,t)=>e+Number(t.penaltyDeduction),0),n=e.map(e=>`
      <tr>
        <td class="emp-col">${T(e.fullName??e.empCd)}</td>
        <td>${C(e.penaltyDeduction)}</td>
        <td class="sig-col"></td>
      </tr>`).join(``);Z(`
      ${Q(`كشف الجزاءات`,S)}
      <table>
        <thead><tr><th>الاسم</th><th>الجزاءات</th><th class="sig-col">التوقيع</th></tr></thead>
        <tbody>
          ${n}
          <tr class="total-row"><td class="emp-col">الإجمالي</td><td>${C(t)}</td><td></td></tr>
        </tbody>
      </table>`,`كشف الجزاءات: ${S}، ${F}`,Y)}function Ue(){new Date().toLocaleDateString(`ar-EG`);let e=z.filter(e=>!String(e.empCd).startsWith(`shift_`)),t=e.reduce((e,t)=>e+Number(t.advancesDeduction??0),0),n=e.map(e=>`
      <tr>
        <td class="emp-col">${T(e.fullName??e.empCd)}</td>
        <td>${C(e.advancesDeduction??0)}</td>
        <td class="sig-col"></td>
      </tr>`).join(``);Z(`
      ${Q(`كشف السلف`,S)}
      <table>
        <thead><tr><th>الاسم</th><th>السلف</th><th class="sig-col">التوقيع</th></tr></thead>
        <tbody>
          ${n}
          <tr class="total-row"><td class="emp-col">الإجمالي</td><td>${C(t)}</td><td></td></tr>
        </tbody>
      </table>`,`كشف السلف: ${S}، ${F}`,Y)}function We(){new Date().toLocaleDateString(`ar-EG`);let e=z.filter(e=>!String(e.empCd).startsWith(`shift_`)),t=e.reduce((e,t)=>e+Number(t.lateDeduction??0),0),n=e.reduce((e,t)=>e+Number(t.earlyLeaveDeduction??0),0),r=e.map(e=>`
      <tr>
        <td class="emp-col">${T(e.fullName??e.empCd)}</td>
        <td>${e.lateMinutes??0}</td>
        <td>${C(e.lateDeduction??0)}</td>
        <td>${e.earlyLeaveMinutes??0}</td>
        <td>${C(e.earlyLeaveDeduction??0)}</td>
        <td class="sig-col"></td>
      </tr>`).join(``);Z(`
      ${Q(`كشف التأخيرات`,S)}
      <table>
        <thead><tr>
          <th>الاسم</th>
          <th>تأخير (د)</th><th>خصم تأخير</th>
          <th>مبكر (د)</th><th>خصم مبكر</th>
          <th class="sig-col">التوقيع</th>
        </tr></thead>
        <tbody>
          ${r}
          <tr class="total-row">
            <td class="emp-col">الإجمالي</td>
            <td></td><td>${C(t)}</td>
            <td></td><td>${C(n)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>`,`كشف التأخيرات: ${S}، ${F}`,Y)}function Ge(){new Date().toLocaleDateString(`ar-EG`);let e=z.filter(e=>!String(e.empCd).startsWith(`shift_`)),t=e.reduce((e,t)=>e+Number(t.insuranceDeduction??0),0),n=e.map(e=>`
      <tr>
        <td class="emp-col">${T(e.fullName??e.empCd)}</td>
        <td>${C(e.insuranceDeduction??0)}</td>
        <td class="sig-col"></td>
      </tr>`).join(``);Z(`
      ${Q(`كشف التأمينات الاجتماعية`,S)}
      <table>
        <thead><tr><th>الاسم</th><th>التأمينات</th><th class="sig-col">التوقيع</th></tr></thead>
        <tbody>
          ${n}
          <tr class="total-row"><td class="emp-col">الإجمالي</td><td>${C(t)}</td><td></td></tr>
        </tbody>
      </table>`,`كشف التأمينات: ${S}، ${F}`,Y)}function Ke(){Z(q.filter(e=>e._section===S).map((e,t)=>{let n=Number(e.netBasic),r=xe[e.empCd]??{},i=Number(r.basicAmount??e.basicSalary),a=Number(r.socialAllowance??0),o=Number(r.costOfLivingAllowance??0),s=Number(r.transportAllowance??0)+Number(r.workNatureAllowance??0)+Number(r.receptionAllowance??0),c=Number(r.yearlyRaise??0),l=i+a+o+s+c,u=V(e),d=`
        <table class="main">
          <tr>
            <th>اساسي الراتب</th>
            <th>اعانة اجتماعية</th>
            <th>غلاء معيشة</th>
            <th>بدلات</th>
            <th>زيادة سنوات سابقة</th>
            <th>زيادة يناير (غير مسجلة)</th>
            <th>إجمالي أساسي شامل الزيادة السنوية</th>
            <th>حصة العاملين (غير متاحة)</th>
            <th>إجمالي الاستحقاقات</th>
            <th rowspan="4" class="net-cell"><span class="net-label">صافي المستحق</span><span class="net-val">${C(n)}</span></th>
          </tr>
          <tr>
            <td>${C(i)}</td>
            <td>${C(a)}</td>
            <td>${C(o)}</td>
            <td>${C(s)}</td>
            <td>${C(c)}</td>
            <td>غير متاح</td>
            <td>${C(l)}</td>
            <td>غير متاح</td>
            <td>${C(l)}</td>
          </tr>
          <tr>
            <th>تأخير</th>
            <th>غياب</th>
            <th>جزاء</th>
            <th>بصمة واحدة</th>
            <th>سلف</th>
            <th>تأمين</th>
            <th colspan="3">إجمالي الخصومات</th>
          </tr>
          <tr>
            <td>${C(u.late)}</td>
            <td>${C(u.absent)}</td>
            <td>${C(u.penalty)}</td>
            <td>${C(u.missingCheckout)}</td>
            <td>${C(u.advances)}</td>
            <td>${C(u.insurance)}</td>
            <td colspan="3">${C(u.total)}</td>
          </tr>
        </table>`;return $(e,`مرتب ${b[P-1]} ${N}`,d,n)}).join(``),`دفعة يوم 1: ${b[P-1]} ${N}`,X)}function qe(){Z(q.filter(e=>e._section===S).map((e,t)=>{let n=(e._section??S)===`عيادة`,r=Number(e.attendanceCommission),i=Number(e.attendanceCommissionRaw??r),a=Number(e.examCommission),o=Number(e.examCommissionRaw??a),s=Number(e.pentacamCommission),c=Number(e.pentacamCommissionRaw??s),l=Number(e.costOfLivingAllowance??0),u=Number(e.transportAllowance??0),d=Number(e.overtimePay??0),f=r+a+(n?0:s)+l+u+d,p=`
        <table class="main">
          <tr>
            <th colspan="2">الحضور</th>
            <th colspan="2">الكشف</th>
            ${n?``:`<th colspan="2">البنتاكام</th>`}
            <th rowspan="2">غلاء معيشه</th>
            <th rowspan="2">بدل مواصلات</th>
            <th rowspan="2">أوفرتايم</th>
            <th rowspan="2">إجمالي المكافآت</th>
            <th rowspan="3" class="net-cell"><span class="net-label">صافي المستحق</span><span class="net-val">${C(f)}</span></th>
          </tr>
          <tr>
            <th>النسبة</th><th>المستحق</th>
            <th>النسبة</th><th>المستحق</th>
            ${n?``:`<th>النسبة</th><th>المستحق</th>`}
          </tr>
          <tr>
            <td>${C(i)}</td><td>${C(r)}</td>
            <td>${C(o)}</td><td>${C(a)}</td>
            ${n?``:`<td>${C(c)}</td><td>${C(s)}</td>`}
            <td>${C(l)}</td>
            <td>${C(u)}</td>
            <td>${C(d)}</td>
            <td>${C(f)}</td>
          </tr>
        </table>`;return $(e,`نسب ${b[P-1]} ${N}`,p,f)}).join(``),`دفعة يوم 10: ${b[P-1]} ${N}`,X)}return(0,v.jsxs)(`div`,{className:`min-w-0 space-y-4`,dir:`rtl`,children:[(0,v.jsx)(`div`,{children:(0,v.jsx)(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,v.jsx)(`div`,{role:`group`,"aria-label":`قسم المرتبات`,className:`flex rounded-md border border-border overflow-hidden text-sm w-full sm:w-auto`,children:oe.map(e=>(0,v.jsx)(`button`,{type:`button`,"aria-pressed":S===e,onClick:()=>se(e),className:`min-h-11 flex-1 sm:flex-none px-4 py-2 transition-colors ${S===e?`bg-primary text-primary-foreground font-semibold`:`bg-background text-muted-foreground hover:bg-muted`}`,children:e},e))}),(0,v.jsx)(`select`,{value:P,onChange:e=>ge(N,Number(e.target.value)),className:`h-11 rounded-md border border-input bg-card px-3 text-sm font-semibold text-foreground`,"aria-label":`الشهر`,children:b.map((e,t)=>(0,v.jsx)(`option`,{value:t+1,children:e},e))}),(0,v.jsx)(`select`,{value:N,onChange:e=>ge(Number(e.target.value),P),className:`h-11 rounded-md border border-input bg-card px-3 text-sm font-semibold text-foreground`,"aria-label":`السنة`,children:Array.from({length:11},(e,t)=>N-5+t).map(e=>(0,v.jsx)(`option`,{value:e,children:e},e))}),(0,v.jsxs)(a,{onClick:()=>J.mutate({year:N,month:P,section:S,fromDate:e,toDate:n}),disabled:J.isPending,className:`gap-2 w-full sm:w-auto justify-center`,children:[(0,v.jsx)(d,{size:15,className:J.isPending?`animate-spin`:``}),`احتساب`]}),z.length>0&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`hidden lg:flex items-center gap-2`,children:[(0,v.jsxs)(h,{children:[(0,v.jsx)(p,{asChild:!0,children:(0,v.jsxs)(a,{variant:`outline`,className:`gap-2`,children:[(0,v.jsx)(u,{size:15}),` طباعة / حفظ PDF`]})}),(0,v.jsxs)(f,{align:`end`,className:`w-48`,children:[(0,v.jsxs)(m,{onClick:Me,className:`gap-2 justify-start cursor-pointer`,children:[(0,v.jsx)(u,{size:14}),` كامل`]}),(0,v.jsxs)(m,{onClick:Ke,className:`gap-2 justify-start cursor-pointer`,children:[(0,v.jsx)(u,{size:14}),` يوم 1`]}),(0,v.jsxs)(m,{onClick:qe,className:`gap-2 justify-start cursor-pointer`,children:[(0,v.jsx)(u,{size:14}),` يوم 10`]})]})]}),(0,v.jsxs)(h,{children:[(0,v.jsx)(p,{asChild:!0,children:(0,v.jsxs)(a,{variant:`outline`,className:`gap-2`,children:[(0,v.jsx)(u,{size:15}),` كشوف`]})}),(0,v.jsxs)(f,{align:`end`,className:`w-48`,children:[(0,v.jsxs)(m,{onClick:He,className:`gap-2 justify-start cursor-pointer`,children:[(0,v.jsx)(u,{size:14}),` جزاءات`]}),(0,v.jsxs)(m,{onClick:Ue,className:`gap-2 justify-start cursor-pointer`,children:[(0,v.jsx)(u,{size:14}),` سلف`]}),(0,v.jsxs)(m,{onClick:We,className:`gap-2 justify-start cursor-pointer`,children:[(0,v.jsx)(u,{size:14}),` تأخيرات`]}),(0,v.jsxs)(m,{onClick:Ge,className:`gap-2 justify-start cursor-pointer`,children:[(0,v.jsx)(u,{size:14}),` تأمينات`]})]})]})]}),(0,v.jsx)(`div`,{className:`lg:hidden w-full sm:w-auto`,children:(0,v.jsxs)(h,{children:[(0,v.jsx)(p,{asChild:!0,children:(0,v.jsxs)(a,{variant:`outline`,className:`gap-2 w-full justify-center`,children:[(0,v.jsx)(u,{size:15}),` طباعة التقارير`]})}),(0,v.jsxs)(f,{align:`end`,className:`w-48`,children:[(0,v.jsxs)(m,{onClick:Me,className:`gap-2 justify-start cursor-pointer`,children:[(0,v.jsx)(u,{size:14}),` كامل`]}),(0,v.jsxs)(m,{onClick:Ke,className:`gap-2 justify-start cursor-pointer`,children:[(0,v.jsx)(u,{size:14}),` يوم 1`]}),(0,v.jsxs)(m,{onClick:qe,className:`gap-2 justify-start cursor-pointer`,children:[(0,v.jsx)(u,{size:14}),` يوم 10`]}),(0,v.jsxs)(m,{onClick:He,className:`gap-2 justify-start cursor-pointer`,children:[(0,v.jsx)(u,{size:14}),` جزاءات`]}),(0,v.jsxs)(m,{onClick:Ue,className:`gap-2 justify-start cursor-pointer`,children:[(0,v.jsx)(u,{size:14}),` سلف`]}),(0,v.jsxs)(m,{onClick:We,className:`gap-2 justify-start cursor-pointer`,children:[(0,v.jsx)(u,{size:14}),` تأخيرات`]}),(0,v.jsxs)(m,{onClick:Ge,className:`gap-2 justify-start cursor-pointer`,children:[(0,v.jsx)(u,{size:14}),` تأمينات`]}),S===`مركز`&&K.length>0&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(m,{onClick:Ne,className:`gap-2 justify-start cursor-pointer`,children:[(0,v.jsx)(u,{size:14}),` كشف رواتب الشفتات`]}),(0,v.jsxs)(m,{onClick:Fe,className:`gap-2 justify-start cursor-pointer`,children:[(0,v.jsx)(u,{size:14}),` كشف عمولات الشفتات`]}),(0,v.jsxs)(m,{onClick:Ie,className:`gap-2 justify-start cursor-pointer`,children:[(0,v.jsx)(u,{size:14}),` إيصالات الشفتات: يوم 1`]}),(0,v.jsxs)(m,{onClick:Le,className:`gap-2 justify-start cursor-pointer`,children:[(0,v.jsx)(u,{size:14}),` إيصالات الشفتات: يوم 10`]})]})]})]})})]}),z.length>0&&!ke&&(0,v.jsxs)(a,{variant:`outline`,onClick:async()=>{await g(`اعتماد كشف الرواتب كنهائي؟`)&&Oe.mutate({year:N,month:P,section:S,fromDate:e,toDate:n,expectedSnapshot:ne(z)})},disabled:Oe.isPending||J.isPending||I.isFetching||L.isFetching,className:`gap-2 w-full sm:w-auto justify-center`,children:[(0,v.jsx)(l,{size:15}),` اعتماد`]})]})})}),R.isLoading?(0,v.jsx)(`div`,{role:`status`,className:`rounded-xl border border-border bg-muted/40 px-4 py-6 text-center text-sm text-muted-foreground`,children:`جارٍ تحميل كشف الرواتب...`}):R.isError?(0,v.jsxs)(`div`,{role:`alert`,className:`flex flex-col items-center gap-3 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-6 text-center text-sm text-destructive-text`,children:[(0,v.jsx)(`span`,{children:`تعذر تحميل كشف الرواتب. لا تعتمد الأرقام المعروضة حتى تُحمَّل بنجاح.`}),(0,v.jsx)(a,{variant:`outline`,onClick:()=>R.refetch(),children:`إعادة المحاولة`})]}):null,z.length>0&&(0,v.jsxs)(`div`,{className:`flex flex-col gap-2 border-b border-border sm:flex-row sm:items-end sm:justify-between`,children:[S===`مركز`&&(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,role:`tablist`,"aria-label":`أقسام كشف الشهر`,children:[(0,v.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:[[`salaries`,`الرواتب`],[`shifts`,`الشفتات`],[`supervision`,`مكافأة الإشراف`]].map(([e,t])=>(0,v.jsx)(`button`,{onClick:()=>ce(e),role:`tab`,"aria-selected":E===e,className:`px-4 py-3 font-medium text-sm transition-colors ${E===e?`border-b-2 border-primary text-primary`:`text-muted-foreground hover:text-foreground`}`,children:t},e))}),E!==`supervision`&&(0,v.jsxs)(`div`,{className:`flex w-fit gap-1 rounded-lg border border-border/60 bg-muted/40 p-1`,children:[(0,v.jsx)(`button`,{onClick:()=>E===`salaries`?le(`basic`):ue(`basic`),className:`rounded-md px-3 py-1.5 text-xs font-bold transition-colors ${(E===`salaries`?D:O)===`basic`?`bg-background text-primary shadow-xs`:`text-muted-foreground hover:text-foreground`}`,children:`الأساسي`}),(0,v.jsx)(`button`,{onClick:()=>E===`salaries`?le(`commissions`):ue(`commissions`),className:`rounded-md px-3 py-1.5 text-xs font-bold transition-colors ${(E===`salaries`?D:O)===`commissions`?`bg-background text-primary shadow-xs`:`text-muted-foreground hover:text-foreground`}`,children:`العمولات`})]})]}),(0,v.jsxs)(`div`,{className:`relative mb-2 w-full sm:max-w-sm`,children:[(0,v.jsx)(o,{className:`absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground`}),(0,v.jsx)(`input`,{type:`text`,placeholder:`البحث باسم الموظف...`,enterKeyHint:`search`,"aria-label":`البحث باسم الموظف...`,value:k,onChange:e=>de(e.target.value),className:`min-h-10 w-full rounded-md border border-input bg-background pr-9 pl-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary`})]})]}),(S===`عيادة`||E===`salaries`&&D===`basic`)&&(()=>{let e=U.filter(e=>!k||(e.fullName??e.empCd).toLowerCase().includes(k.toLowerCase()));return(0,v.jsxs)(`section`,{className:`rounded-xl border border-border bg-background overflow-hidden`,children:[(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3 bg-muted/10`,children:[(0,v.jsxs)(`h3`,{className:`text-base font-semibold`,children:[`الرواتب الأساسية: `,F]}),(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[ke&&(0,v.jsx)(`span`,{className:`rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-xs font-medium text-success font-semibold`,children:`نهائي`}),z.length>0&&!ke&&(0,v.jsx)(`span`,{className:`rounded-full border border-warning/30 bg-warning/10 px-2.5 py-1 text-xs font-medium text-warning-text font-semibold`,children:`مسودة`}),e.length>0&&(0,v.jsxs)(a,{variant:`outline`,size:`sm`,onClick:Re,className:`gap-1.5 h-8 text-xs`,children:[(0,v.jsx)(u,{size:13}),` طباعة`]})]})]}),(0,v.jsx)(`div`,{className:`hidden xl:block overflow-x-auto`,dir:`rtl`,children:(0,v.jsxs)(`table`,{"aria-label":`الرواتب الأساسية`,dir:`rtl`,className:`w-full text-sm`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{className:`border-b border-border bg-muted/30 text-xs`,children:[(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`الموظف`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`الأساسي`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`أيام عمل`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`تأخير`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`غياب`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`إجازة من الراتب`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`جزاء`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`بصمة واحدة`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`سلف`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`تأمين`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`إجمالي الخصومات`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`إجازة`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`معامل`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground font-bold`,children:`صافي الأساسي`})]})}),(0,v.jsxs)(`tbody`,{children:[e.map(e=>{let t=V(e);return(0,v.jsxs)(`tr`,{className:`border-b border-border/50 hover:bg-muted/20 transition-colors`,children:[(0,v.jsxs)(`td`,{className:`px-3 py-3 text-center`,children:[(0,v.jsx)(`div`,{className:`font-medium`,children:e.fullName??e.empCd}),(0,v.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.salaryType??e.department??``})]}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center`,children:C(e.basicSalary)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center`,children:e.workingDays}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-warning-text`,children:C(t.late)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-destructive`,children:C(t.absent)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-destructive`,children:C(t.leave)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-destructive`,children:C(t.penalty)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-destructive`,children:C(t.missingCheckout)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-destructive`,children:C(t.advances)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-destructive`,children:C(t.insurance)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center font-medium text-destructive`,children:C(t.total)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center`,children:e.leaveDays}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center`,children:w(e.leaveMultiplier)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center font-bold text-primary`,children:C(e.netBasic)})]},e.empCd)}),e.length===0&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{colSpan:14,className:`px-4 py-10 text-center text-muted-foreground`,children:`لا توجد رواتب تطابق البحث`})})]}),e.length>0&&(0,v.jsx)(`tfoot`,{children:(0,v.jsxs)(`tr`,{className:`border-t border-border bg-muted/30 text-xs font-semibold`,children:[(0,v.jsx)(`td`,{className:`px-3 py-2`,colSpan:3,children:`الإجمالي`}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+V(t).late,0))}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+V(t).absent,0))}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+V(t).leave,0))}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+V(t).penalty,0))}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+V(t).missingCheckout,0))}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+V(t).advances,0))}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+V(t).insurance,0))}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+Number(t.totalDeductions),0))}),(0,v.jsx)(`td`,{colSpan:2}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center font-bold text-primary`,children:C(e.reduce((e,t)=>e+Number(t.netBasic),0))})]})})]})}),(0,v.jsxs)(`div`,{className:`block xl:hidden divide-y divide-border/60`,children:[e.map(e=>{let t=!!j[`salary-${e.empCd}`],n=V(e);return(0,v.jsxs)(`div`,{className:`bg-card p-4 transition-colors hover:bg-muted/5`,children:[(0,v.jsxs)(`div`,{role:`button`,tabIndex:0,"aria-expanded":t,"aria-label":`${e.fullName??e.empCd}، تفاصيل الراتب`,className:`flex min-h-11 items-center justify-between cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`,onClick:()=>M(`salary-${e.empCd}`),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),M(`salary-${e.empCd}`))},children:[(0,v.jsxs)(`div`,{className:`space-y-0.5`,children:[(0,v.jsx)(`div`,{className:`font-semibold text-foreground text-sm`,children:e.fullName??e.empCd}),(0,v.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.salaryType??e.department??``})]}),(0,v.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,v.jsxs)(`div`,{className:`text-left`,children:[(0,v.jsx)(`span`,{className:`text-xs text-muted-foreground block`,children:`صافي الأساسي`}),(0,v.jsx)(`span`,{className:`font-bold text-primary tabular-nums text-sm`,children:C(e.netBasic)})]}),(0,v.jsx)(`div`,{className:`text-muted-foreground`,children:t?(0,v.jsx)(s,{size:16}):(0,v.jsx)(c,{size:16})})]})]}),t&&(0,v.jsxs)(`div`,{className:`mt-4 pt-4 border-t border-border/40 grid grid-cols-2 gap-y-3 gap-x-4 text-xs`,children:[(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`الراتب الأساسي:`}),(0,v.jsx)(`span`,{className:`font-medium tabular-nums`,children:C(e.basicSalary)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`أيام عمل:`}),(0,v.jsx)(`span`,{className:`font-medium tabular-nums`,children:e.workingDays})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`تأخير:`}),(0,v.jsx)(`span`,{className:`font-medium text-warning-text tabular-nums`,children:C(n.late)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`غياب:`}),(0,v.jsx)(`span`,{className:`font-medium text-destructive tabular-nums`,children:C(n.absent)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`إجازة من الراتب:`}),(0,v.jsx)(`span`,{className:`font-medium text-destructive tabular-nums`,children:C(n.leave)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`جزاء:`}),(0,v.jsx)(`span`,{className:`font-medium text-destructive tabular-nums`,children:C(n.penalty)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`بصمة واحدة:`}),(0,v.jsx)(`span`,{className:`font-medium text-destructive tabular-nums`,children:C(n.missingCheckout)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`سلف:`}),(0,v.jsx)(`span`,{className:`font-medium text-destructive tabular-nums`,children:C(n.advances)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`تأمين:`}),(0,v.jsx)(`span`,{className:`font-medium text-destructive tabular-nums`,children:C(n.insurance)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي الخصم:`}),(0,v.jsx)(`span`,{className:`font-bold text-destructive tabular-nums`,children:C(n.total)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`أيام الإجازة:`}),(0,v.jsx)(`span`,{className:`font-medium tabular-nums`,children:e.leaveDays})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1 col-span-2`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`معامل راتب الإجازة:`}),(0,v.jsx)(`span`,{className:`font-medium tabular-nums`,children:w(e.leaveMultiplier)})]})]})]},e.empCd)}),e.length===0&&(0,v.jsx)(`div`,{className:`p-8 text-center text-muted-foreground text-sm`,children:`لا توجد رواتب تطابق البحث`}),e.length>0&&(0,v.jsxs)(`div`,{className:`bg-muted/20 p-4 space-y-2 text-xs font-semibold`,children:[(0,v.jsxs)(`div`,{className:`flex justify-between`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي الخصومات:`}),(0,v.jsx)(`span`,{className:`text-destructive tabular-nums`,children:C(e.reduce((e,t)=>e+Number(t.totalDeductions),0))})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-t border-border/40 pt-2`,children:[(0,v.jsx)(`span`,{className:`text-foreground font-bold`,children:`إجمالي صافي الأساسي:`}),(0,v.jsx)(`span`,{className:`text-primary font-bold tabular-nums text-sm`,children:C(e.reduce((e,t)=>e+Number(t.netBasic),0))})]})]})]})]})})(),S===`مركز`&&E===`shifts`&&O===`basic`&&(()=>{let e=K.filter(e=>!k||e.fullName.toLowerCase().includes(k.toLowerCase()));return(0,v.jsxs)(`section`,{className:`rounded-xl border border-border bg-background overflow-hidden`,children:[(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3 bg-muted/10`,children:[(0,v.jsxs)(`h3`,{className:`text-base font-semibold`,children:[`الشفتات: `,F]}),K.length>0&&(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,v.jsxs)(a,{variant:`outline`,size:`sm`,onClick:Ne,className:`gap-1.5 h-8 text-xs`,children:[(0,v.jsx)(u,{size:13}),` طباعة كشف`]}),(0,v.jsxs)(a,{variant:`outline`,size:`sm`,onClick:Ie,className:`gap-1.5 h-8 text-xs`,children:[(0,v.jsx)(u,{size:13}),` يوم 1`]}),(0,v.jsxs)(a,{variant:`outline`,size:`sm`,onClick:Le,className:`gap-1.5 h-8 text-xs`,children:[(0,v.jsx)(u,{size:13}),` يوم 10`]})]})]}),(0,v.jsx)(`div`,{className:`hidden xl:block overflow-x-auto`,dir:`rtl`,children:(0,v.jsxs)(`table`,{"aria-label":`الشفتات`,dir:`rtl`,className:`w-full text-sm`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{className:`border-b border-border bg-muted/30 text-xs`,children:[(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`الموظف`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`شفت كبير`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`قيمة`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`إجمالي`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`شفت صغير`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`قيمة`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`إجمالي`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`الخصومات`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`معامل`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground font-bold`,children:`صافي الأساسي`})]})}),(0,v.jsxs)(`tbody`,{children:[e.map(e=>(0,v.jsxs)(`tr`,{className:`border-b border-border/50 hover:bg-muted/20 transition-colors`,children:[(0,v.jsxs)(`td`,{className:`px-3 py-3 text-center`,children:[(0,v.jsx)(`div`,{className:`font-medium`,children:e.fullName}),(0,v.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.type===`doctor`?`طبيب`:`فني`})]}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center`,children:e.shiftDayCount}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center`,children:C(e.shiftDayRate)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center font-medium text-success`,children:C(e.shiftDayTotal)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center`,children:e.shiftNightCount}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center`,children:C(e.shiftNightRate)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center font-medium text-success`,children:C(e.shiftNightTotal)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-destructive`,children:C(e.totalDeductions)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center tabular-nums`,children:w(e.leaveMultiplier)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center font-bold text-primary`,children:C(e.netBasic)})]},e.id)),e.length===0&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{colSpan:10,className:`px-4 py-10 text-center text-muted-foreground`,children:`لا يوجد موظفو شفتات يطابقون البحث`})})]}),e.length>0&&(0,v.jsx)(`tfoot`,{children:(0,v.jsxs)(`tr`,{className:`border-t border-border bg-muted/30 text-xs font-semibold`,children:[(0,v.jsx)(`td`,{className:`px-3 py-2`,children:`الإجمالي`}),(0,v.jsx)(`td`,{colSpan:2}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+t.shiftDayTotal,0))}),(0,v.jsx)(`td`,{colSpan:2}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+t.shiftNightTotal,0))}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+Number(t.totalDeductions),0))}),(0,v.jsx)(`td`,{colSpan:1}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center font-bold text-primary`,children:C(e.reduce((e,t)=>e+Number(t.netBasic),0))})]})})]})}),(0,v.jsxs)(`div`,{className:`block xl:hidden divide-y divide-border/60`,children:[e.map(e=>{let t=!!j[`shift-${e.id}`];return(0,v.jsxs)(`div`,{className:`bg-card p-4 transition-colors hover:bg-muted/5`,children:[(0,v.jsxs)(`div`,{role:`button`,tabIndex:0,"aria-expanded":t,"aria-label":`${e.fullName}، تفاصيل راتب الشفت`,className:`flex min-h-11 items-center justify-between cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`,onClick:()=>M(`shift-${e.id}`),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),M(`shift-${e.id}`))},children:[(0,v.jsxs)(`div`,{className:`space-y-0.5`,children:[(0,v.jsx)(`div`,{className:`font-semibold text-foreground text-sm`,children:e.fullName}),(0,v.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.type===`doctor`?`طبيب شفتات`:`فني شفتات`})]}),(0,v.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,v.jsxs)(`div`,{className:`text-left`,children:[(0,v.jsx)(`span`,{className:`text-xs text-muted-foreground block`,children:`صافي الأساسي`}),(0,v.jsx)(`span`,{className:`font-bold text-primary tabular-nums text-sm`,children:C(e.netBasic)})]}),(0,v.jsx)(`div`,{className:`text-muted-foreground`,children:t?(0,v.jsx)(s,{size:16}):(0,v.jsx)(c,{size:16})})]})]}),t&&(0,v.jsxs)(`div`,{className:`mt-4 pt-4 border-t border-border/40 space-y-3 text-xs`,children:[(0,v.jsxs)(`div`,{className:`bg-muted/30 p-2.5 rounded-lg space-y-1.5`,children:[(0,v.jsx)(`div`,{className:`font-medium text-foreground`,children:`شفت كبير`}),(0,v.jsxs)(`div`,{className:`grid grid-cols-3 gap-2 text-xs text-muted-foreground`,children:[(0,v.jsxs)(`div`,{children:[`العدد:`,` `,(0,v.jsx)(`span`,{className:`text-foreground font-medium tabular-nums`,children:e.shiftDayCount})]}),(0,v.jsxs)(`div`,{children:[`القيمة:`,` `,(0,v.jsx)(`span`,{className:`text-foreground font-medium tabular-nums`,children:C(e.shiftDayRate)})]}),(0,v.jsxs)(`div`,{className:`text-left`,children:[`الإجمالي:`,` `,(0,v.jsx)(`span`,{className:`text-success font-semibold tabular-nums`,children:C(e.shiftDayTotal)})]})]})]}),(0,v.jsxs)(`div`,{className:`bg-muted/30 p-2.5 rounded-lg space-y-1.5`,children:[(0,v.jsx)(`div`,{className:`font-medium text-foreground`,children:`شفت صغير`}),(0,v.jsxs)(`div`,{className:`grid grid-cols-3 gap-2 text-xs text-muted-foreground`,children:[(0,v.jsxs)(`div`,{children:[`العدد:`,` `,(0,v.jsx)(`span`,{className:`text-foreground font-medium tabular-nums`,children:e.shiftNightCount})]}),(0,v.jsxs)(`div`,{children:[`القيمة:`,` `,(0,v.jsx)(`span`,{className:`text-foreground font-medium tabular-nums`,children:C(e.shiftNightRate)})]}),(0,v.jsxs)(`div`,{className:`text-left`,children:[`الإجمالي:`,` `,(0,v.jsx)(`span`,{className:`text-success font-semibold tabular-nums`,children:C(e.shiftNightTotal)})]})]})]}),(0,v.jsxs)(`div`,{className:`grid grid-cols-2 gap-y-2 gap-x-4 px-1 pt-1`,children:[(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`الخصومات:`}),(0,v.jsx)(`span`,{className:`font-medium text-destructive tabular-nums`,children:C(e.totalDeductions)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`معامل الحضور:`}),(0,v.jsx)(`span`,{className:`font-medium tabular-nums`,children:w(e.leaveMultiplier)})]})]})]})]},e.id)}),e.length===0&&(0,v.jsx)(`div`,{className:`p-8 text-center text-muted-foreground text-sm`,children:`لا توجد شفتات تطابق البحث`}),e.length>0&&(0,v.jsxs)(`div`,{className:`bg-muted/20 p-4 space-y-2 text-xs font-semibold`,children:[(0,v.jsxs)(`div`,{className:`flex justify-between`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي نهاري:`}),(0,v.jsx)(`span`,{className:`text-foreground tabular-nums`,children:C(e.reduce((e,t)=>e+t.shiftDayTotal,0))})]}),(0,v.jsxs)(`div`,{className:`flex justify-between`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي مسائي:`}),(0,v.jsx)(`span`,{className:`text-foreground tabular-nums`,children:C(e.reduce((e,t)=>e+t.shiftNightTotal,0))})]}),(0,v.jsxs)(`div`,{className:`flex justify-between`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي الخصومات:`}),(0,v.jsx)(`span`,{className:`text-destructive tabular-nums`,children:C(e.reduce((e,t)=>e+Number(t.totalDeductions),0))})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-t border-border/40 pt-2`,children:[(0,v.jsx)(`span`,{className:`text-foreground font-bold`,children:`إجمالي صافي الشفتات:`}),(0,v.jsx)(`span`,{className:`text-primary font-bold tabular-nums text-sm`,children:C(e.reduce((e,t)=>e+Number(t.netBasic),0))})]})]})]})]})})(),S===`مركز`&&E===`shifts`&&O===`commissions`&&K.length>0&&(()=>{let e=K.filter(e=>e.type===`doctor`).reduce((e,t)=>e+Number(t.netBasic),0),t=K.filter(e=>e.type===`doctor`).map(e=>W.find(t=>t.empCd===`shift_${e.id}`)).filter(Boolean),n=t.reduce((e,t)=>e+Number(t.examCommission??0),0),r=t.reduce((e,t)=>e+Number(t.pentacamCommission??0),0),i=K.filter(e=>e.type===`doctor`).map(t=>{let i=W.find(e=>e.empCd===`shift_${t.id}`),a=Number(t.netBasic),o=e>0?a/e:0,s=Number(i?.netBasic??0),c=Number(i?.attendanceCommissionRaw??i?.attendanceCommission??0),l=s>0?c/s:.25,u=Number(t.leaveMultiplier??1),d=a*l*u,f=n*o,p=r*o;return{...t,base:a,share:o,attend:d,examComm:f,pentComm:p,total:d+f+p}}),o=i.reduce((e,t)=>e+t.examComm,0),l=i.reduce((e,t)=>e+t.pentComm,0),d=i.filter(e=>!k||e.fullName.toLowerCase().includes(k.toLowerCase())),f=d.reduce((e,t)=>e+t.attend,0),p=d.reduce((e,t)=>e+t.examComm,0),m=d.reduce((e,t)=>e+t.pentComm,0),h=d.reduce((e,t)=>e+t.total,0);return(0,v.jsxs)(`section`,{className:`rounded-xl border border-border bg-background overflow-hidden`,children:[(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 bg-muted/10`,children:[(0,v.jsx)(`h3`,{className:`text-base font-semibold`,children:`عمولات الشفتات`}),(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4 text-xs text-muted-foreground`,children:[(0,v.jsxs)(`span`,{children:[`إجمالي نسبة الفحص:`,` `,(0,v.jsxs)(`strong`,{className:`text-foreground`,children:[C(o),` ج`]})]}),(0,v.jsxs)(`span`,{children:[`إجمالي نسبة البنتاكام:`,` `,(0,v.jsxs)(`strong`,{className:`text-foreground`,children:[C(l),` ج`]})]}),(0,v.jsxs)(a,{variant:`outline`,size:`sm`,onClick:Fe,className:`gap-1.5 h-8 text-xs`,children:[(0,v.jsx)(u,{size:13}),` طباعة كشف`]})]})]}),(0,v.jsx)(`div`,{className:`hidden xl:block overflow-x-auto`,dir:`rtl`,children:(0,v.jsxs)(`table`,{"aria-label":`عمولات الشفتات`,dir:`rtl`,className:`w-full text-sm`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{className:`border-b border-border bg-muted/30 text-xs`,children:[(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`الموظف`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`الأساسي (صافي الشفتات)`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`النسبة %`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`حضور (٢٥٪)`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`فحص`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`بنتاكام`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-3 py-3 text-center font-medium text-muted-foreground font-bold`,children:`الإجمالي`})]})}),(0,v.jsxs)(`tbody`,{children:[d.map(e=>(0,v.jsxs)(`tr`,{className:`border-b border-border/50 hover:bg-muted/20 transition-colors`,children:[(0,v.jsxs)(`td`,{className:`px-3 py-3 text-center`,children:[(0,v.jsx)(`div`,{className:`font-medium`,children:e.fullName}),(0,v.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.type===`doctor`?`طبيب`:`فني`})]}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center tabular-nums`,children:C(e.base)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center tabular-nums`,children:w(e.share)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center tabular-nums`,children:C(e.attend)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center tabular-nums`,children:C(e.examComm)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center tabular-nums`,children:C(e.pentComm)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center tabular-nums font-bold text-primary`,children:C(e.total)})]},e.id)),d.length===0&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{colSpan:7,className:`px-4 py-10 text-center text-muted-foreground`,children:`لا توجد عمولات تطابق البحث`})})]}),d.length>0&&(0,v.jsx)(`tfoot`,{children:(0,v.jsxs)(`tr`,{className:`border-t border-border bg-muted/30 text-xs font-semibold`,children:[(0,v.jsx)(`td`,{className:`px-3 py-2`,colSpan:3,children:`الإجمالي`}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center tabular-nums`,children:C(f)}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center tabular-nums`,children:C(p)}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center tabular-nums`,children:C(m)}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center tabular-nums font-bold text-primary`,children:C(h)})]})})]})}),(0,v.jsxs)(`div`,{className:`block xl:hidden divide-y divide-border/60`,children:[d.map(e=>{let t=!!j[`shiftcomm-${e.id}`];return(0,v.jsxs)(`div`,{className:`bg-card p-4 transition-colors hover:bg-muted/5`,children:[(0,v.jsxs)(`div`,{role:`button`,tabIndex:0,"aria-expanded":t,"aria-label":`${e.fullName}، تفاصيل عمولات الشفت`,className:`flex min-h-11 items-center justify-between cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`,onClick:()=>M(`shiftcomm-${e.id}`),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),M(`shiftcomm-${e.id}`))},children:[(0,v.jsxs)(`div`,{className:`space-y-0.5`,children:[(0,v.jsx)(`div`,{className:`font-semibold text-foreground text-sm`,children:e.fullName}),(0,v.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.type===`doctor`?`طبيب`:`فني`})]}),(0,v.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,v.jsxs)(`div`,{className:`text-left`,children:[(0,v.jsx)(`span`,{className:`text-xs text-muted-foreground block`,children:`إجمالي العمولات`}),(0,v.jsx)(`span`,{className:`font-bold text-primary tabular-nums text-sm`,children:C(e.total)})]}),(0,v.jsx)(`div`,{className:`text-muted-foreground`,children:t?(0,v.jsx)(s,{size:16}):(0,v.jsx)(c,{size:16})})]})]}),t&&(0,v.jsxs)(`div`,{className:`mt-4 pt-4 border-t border-border/40 grid grid-cols-2 gap-y-3 gap-x-4 text-xs`,children:[(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`الأساسي (صافي الشفتات):`}),(0,v.jsx)(`span`,{className:`font-medium tabular-nums`,children:C(e.base)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`نسبة المساهمة:`}),(0,v.jsx)(`span`,{className:`font-medium tabular-nums`,children:w(e.share)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`عمولة حضور (25%):`}),(0,v.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:C(e.attend)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`عمولة فحص:`}),(0,v.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:C(e.examComm)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1 col-span-2`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`عمولة بنتاكام:`}),(0,v.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:C(e.pentComm)})]})]})]},e.id)}),d.length===0&&(0,v.jsx)(`div`,{className:`p-8 text-center text-muted-foreground text-sm`,children:`لا توجد عمولات تطابق البحث`}),d.length>0&&(0,v.jsxs)(`div`,{className:`bg-muted/20 p-4 space-y-2 text-xs font-semibold`,children:[(0,v.jsxs)(`div`,{className:`flex justify-between`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي حضور (25%):`}),(0,v.jsx)(`span`,{className:`text-success tabular-nums`,children:C(f)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي فحص:`}),(0,v.jsx)(`span`,{className:`text-success tabular-nums`,children:C(p)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي بنتاكام:`}),(0,v.jsx)(`span`,{className:`text-success tabular-nums`,children:C(m)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-t border-border/40 pt-2`,children:[(0,v.jsx)(`span`,{className:`text-foreground font-bold`,children:`المجموع الكلي:`}),(0,v.jsx)(`span`,{className:`text-primary font-bold tabular-nums text-sm`,children:C(h)})]})]})]})]})})(),(S===`عيادة`||E===`salaries`&&D===`commissions`)&&(()=>{let e=U.filter(e=>!k||(e.fullName??e.empCd).toLowerCase().includes(k.toLowerCase())),t=K.filter(e=>e.type!==`doctor`&&(!k||e.fullName.toLowerCase().includes(k.toLowerCase())));return(0,v.jsxs)(`section`,{className:`rounded-xl border border-border bg-background overflow-hidden`,children:[(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3 bg-muted/10`,children:[(0,v.jsxs)(`h3`,{className:`text-base font-semibold`,children:[`العمولات: `,F]}),e.length>0&&(0,v.jsxs)(a,{variant:`outline`,size:`sm`,onClick:ze,className:`gap-1.5 h-8 text-xs`,children:[(0,v.jsx)(u,{size:13}),` طباعة`]})]}),(0,v.jsx)(`div`,{className:`hidden xl:block overflow-x-auto`,dir:`rtl`,children:(0,v.jsxs)(`table`,{"aria-label":`العمولات`,dir:`rtl`,className:`w-full text-sm`,children:[(0,v.jsxs)(`thead`,{children:[(0,v.jsxs)(`tr`,{className:`border-b border-border bg-muted/30 text-xs`,children:[(0,v.jsx)(`th`,{rowSpan:2,className:`px-3 py-3 text-center font-medium text-muted-foreground align-middle`,children:`الموظف`}),(0,v.jsx)(`th`,{colSpan:2,className:`px-3 py-2 text-center font-medium text-muted-foreground`,children:`حضور`}),(0,v.jsx)(`th`,{colSpan:2,className:`px-3 py-2 text-center font-medium text-muted-foreground`,children:`فحص`}),S!==`عيادة`&&(0,v.jsx)(`th`,{colSpan:2,className:`px-3 py-2 text-center font-medium text-muted-foreground`,children:`بنتاكام`}),(0,v.jsx)(`th`,{rowSpan:2,className:`px-3 py-3 text-center font-medium text-muted-foreground align-middle`,children:`غلاء معيشه`}),(0,v.jsx)(`th`,{rowSpan:2,className:`px-3 py-3 text-center font-medium text-muted-foreground align-middle`,children:`بدل مواصلات`}),(0,v.jsx)(`th`,{rowSpan:2,className:`px-3 py-3 text-center font-medium text-muted-foreground align-middle`,children:`إضافي (د)`}),(0,v.jsx)(`th`,{rowSpan:2,className:`px-3 py-3 text-center font-medium text-muted-foreground align-middle`,children:`إضافي (ج)`}),(0,v.jsx)(`th`,{rowSpan:2,className:`px-3 py-3 text-center font-medium text-muted-foreground font-bold align-middle`,children:`إجمالي العمولات`})]}),(0,v.jsxs)(`tr`,{className:`border-b border-border bg-muted/30 text-xs`,children:[(0,v.jsx)(`th`,{scope:`col`,className:`px-2 py-1.5 text-center font-medium text-muted-foreground`,children:`النسبة`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-2 py-1.5 text-center font-medium text-muted-foreground`,children:`المستحق`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-2 py-1.5 text-center font-medium text-muted-foreground`,children:`النسبة`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-2 py-1.5 text-center font-medium text-muted-foreground`,children:`المستحق`}),S!==`عيادة`&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`th`,{scope:`col`,className:`px-2 py-1.5 text-center font-medium text-muted-foreground`,children:`النسبة`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-2 py-1.5 text-center font-medium text-muted-foreground`,children:`المستحق`})]})]})]}),(0,v.jsxs)(`tbody`,{children:[e.map(e=>{let t=B(e);return(0,v.jsxs)(`tr`,{className:`border-b border-border/50 hover:bg-muted/20 transition-colors`,children:[(0,v.jsxs)(`td`,{className:`px-3 py-3 text-center`,children:[(0,v.jsx)(`div`,{className:`font-medium`,children:e.fullName??e.empCd}),(0,v.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.salaryType??e.department??``})]}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-muted-foreground`,children:C(e.attendanceCommissionRaw??e.attendanceCommission)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:C(e.attendanceCommission)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-muted-foreground`,children:C(e.examCommissionRaw??e.examCommission)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:C(e.examCommission)}),S!==`عيادة`&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-muted-foreground`,children:C(e.pentacamCommissionRaw??e.pentacamCommission)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:C(e.pentacamCommission)})]}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:C(t.cola)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:C(t.travel)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:e.overtimeMinutes??0}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:C(e.overtimePay??0)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center font-bold text-primary`,children:C(H(e))})]},e.empCd)}),e.length===0&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{colSpan:S===`عيادة`?9:11,className:`px-4 py-10 text-center text-muted-foreground`,children:`لا توجد عمولات تطابق البحث`})}),S===`مركز`&&t.map(e=>{let t=Number(e.attendanceCommission??0),n=Number(e.examCommission??0),r=Number(e.pentacamCommission??0),i=B(e),a=i.cola,o=i.travel,s=e.overtimeMinutes??0,c=Number(e.overtimePay??0),l=t+n+r+a+o+c;return(0,v.jsxs)(`tr`,{className:`border-b border-border/50 bg-secondary/5 hover:bg-secondary/10 transition-colors`,children:[(0,v.jsxs)(`td`,{className:`px-3 py-3 text-center`,children:[(0,v.jsx)(`div`,{className:`font-medium`,children:e.fullName}),(0,v.jsx)(`div`,{className:`text-xs text-primary font-medium`,children:`فني شفتات`})]}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-muted-foreground`,children:C(e.attendanceCommissionRaw??t)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:C(t)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-muted-foreground`,children:C(e.examCommissionRaw??n)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:C(n)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-muted-foreground`,children:C(e.pentacamCommissionRaw??r)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:C(r)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:C(a)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:C(o)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:s}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:C(c)}),(0,v.jsx)(`td`,{className:`px-3 py-3 text-center font-bold text-primary`,children:C(l)})]},`tech-${e.id}`)})]}),(e.length>0||S===`مركز`&&t.length>0)&&(0,v.jsx)(`tfoot`,{children:(0,v.jsxs)(`tr`,{className:`border-t border-border bg-muted/30 text-xs font-semibold`,children:[(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:`الإجمالي`}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+Number(t.attendanceCommissionRaw??t.attendanceCommission),0)+(S===`مركز`?t.reduce((e,t)=>e+Number(t.attendanceCommissionRaw??t.attendanceCommission??0),0):0))}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+Number(t.attendanceCommission),0)+(S===`مركز`?t.reduce((e,t)=>e+Number(t.attendanceCommission??0),0):0))}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+Number(t.examCommissionRaw??t.examCommission),0)+(S===`مركز`?t.reduce((e,t)=>e+Number(t.examCommissionRaw??t.examCommission??0),0):0))}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+Number(t.examCommission),0)+(S===`مركز`?t.reduce((e,t)=>e+Number(t.examCommission??0),0):0))}),S!==`عيادة`&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+Number(t.pentacamCommissionRaw??t.pentacamCommission),0)+t.reduce((e,t)=>e+Number(t.pentacamCommissionRaw??t.pentacamCommission??0),0))}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+Number(t.pentacamCommission),0)+t.reduce((e,t)=>e+Number(t.pentacamCommission??0),0))})]}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+B(t).cola,0)+(S===`مركز`?t.reduce((e,t)=>e+B(t).cola,0):0))}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+B(t).travel,0)+(S===`مركز`?t.reduce((e,t)=>e+B(t).travel,0):0))}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:e.reduce((e,t)=>e+Number(t.overtimeMinutes??0),0)}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center`,children:C(e.reduce((e,t)=>e+Number(t.overtimePay??0),0)+(S===`مركز`?t.reduce((e,t)=>e+Number(t.overtimePay??0),0):0))}),(0,v.jsx)(`td`,{className:`px-3 py-2 text-center font-bold text-primary`,children:C(e.reduce((e,t)=>e+H(t)+Number(t.overtimePay??0),0)+(S===`مركز`?t.reduce((e,t)=>{let n=Number(t.attendanceCommission??0),r=Number(t.examCommission??0),i=Number(t.pentacamCommission??0),a=B(t),o=a.cola,s=a.travel,c=Number(t.overtimePay??0);return e+(n+r+i+o+s+c)},0):0))})]})})]})}),(0,v.jsxs)(`div`,{className:`block xl:hidden divide-y divide-border/60`,children:[e.map(e=>{let t=!!j[`comm-${e.empCd}`],n=B(e),r=H(e);return(0,v.jsxs)(`div`,{className:`bg-card p-4 transition-colors hover:bg-muted/5`,children:[(0,v.jsxs)(`div`,{role:`button`,tabIndex:0,"aria-expanded":t,"aria-label":`${e.fullName??e.empCd}، تفاصيل العمولات`,className:`flex min-h-11 items-center justify-between cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`,onClick:()=>M(`comm-${e.empCd}`),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),M(`comm-${e.empCd}`))},children:[(0,v.jsxs)(`div`,{className:`space-y-0.5`,children:[(0,v.jsx)(`div`,{className:`font-semibold text-foreground text-sm`,children:e.fullName??e.empCd}),(0,v.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.salaryType??e.department??``})]}),(0,v.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,v.jsxs)(`div`,{className:`text-left`,children:[(0,v.jsx)(`span`,{className:`text-xs text-muted-foreground block`,children:`إجمالي العمولات`}),(0,v.jsx)(`span`,{className:`font-bold text-primary tabular-nums text-sm`,children:C(r)})]}),(0,v.jsx)(`div`,{className:`text-muted-foreground`,children:t?(0,v.jsx)(s,{size:16}):(0,v.jsx)(c,{size:16})})]})]}),t&&(0,v.jsxs)(`div`,{className:`mt-4 pt-4 border-t border-border/40 grid grid-cols-2 gap-y-3 gap-x-4 text-xs`,children:[(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`عمولة الحضور (نسبة/مستحق):`}),(0,v.jsxs)(`span`,{className:`font-medium tabular-nums`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:C(e.attendanceCommissionRaw??e.attendanceCommission)}),` / `,(0,v.jsx)(`span`,{className:`text-success`,children:C(e.attendanceCommission)})]})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`عمولة الفحص (نسبة/مستحق):`}),(0,v.jsxs)(`span`,{className:`font-medium tabular-nums`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:C(e.examCommissionRaw??e.examCommission)}),` / `,(0,v.jsx)(`span`,{className:`text-success`,children:C(e.examCommission)})]})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`عمولة بنتاكام (نسبة/مستحق):`}),(0,v.jsxs)(`span`,{className:`font-medium tabular-nums`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:C(e.pentacamCommissionRaw??e.pentacamCommission)}),` / `,(0,v.jsx)(`span`,{className:`text-success`,children:C(e.pentacamCommission)})]})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`غلاء معيشة:`}),(0,v.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:C(n.cola)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`بدل مواصلات:`}),(0,v.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:C(n.travel)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`إضافي (دقائق):`}),(0,v.jsx)(`span`,{className:`font-medium tabular-nums`,children:e.overtimeMinutes??0})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`إضافي (قيمة):`}),(0,v.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:C(e.overtimePay??0)})]})]})]},e.empCd)}),S===`مركز`&&t.map(e=>{let t=!!j[`comm-tech-${e.id}`],n=Number(e.attendanceCommission??0),r=Number(e.examCommission??0),i=Number(e.pentacamCommission??0),a=B(e),o=a.cola,l=a.travel,u=e.overtimeMinutes??0,d=Number(e.overtimePay??0),f=n+r+i+o+l+d;return(0,v.jsxs)(`div`,{className:`bg-secondary/5 p-4 transition-colors hover:bg-secondary/10 divide-y divide-border/20`,children:[(0,v.jsxs)(`div`,{role:`button`,tabIndex:0,"aria-expanded":t,"aria-label":`${e.fullName}، تفاصيل عمولات الشفت`,className:`flex min-h-11 items-center justify-between cursor-pointer select-none pb-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`,onClick:()=>M(`comm-tech-${e.id}`),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),M(`comm-tech-${e.id}`))},children:[(0,v.jsxs)(`div`,{className:`space-y-0.5`,children:[(0,v.jsx)(`div`,{className:`font-semibold text-foreground text-sm`,children:e.fullName}),(0,v.jsx)(`div`,{className:`text-xs text-primary font-medium`,children:`فني شفتات`})]}),(0,v.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,v.jsxs)(`div`,{className:`text-left`,children:[(0,v.jsx)(`span`,{className:`text-xs text-muted-foreground block`,children:`إجمالي العمولات`}),(0,v.jsx)(`span`,{className:`font-bold text-primary tabular-nums text-sm`,children:C(f)})]}),(0,v.jsx)(`div`,{className:`text-muted-foreground`,children:t?(0,v.jsx)(s,{size:16}):(0,v.jsx)(c,{size:16})})]})]}),t&&(0,v.jsxs)(`div`,{className:`mt-4 pt-4 border-t border-border/40 grid grid-cols-2 gap-y-3 gap-x-4 text-xs`,children:[(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`عمولة حضور:`}),(0,v.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:C(n)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`عمولة فحص:`}),(0,v.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:C(r)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`عمولة بنتاكام:`}),(0,v.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:C(i)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`غلاء معيشة:`}),(0,v.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:C(o)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`بدل مواصلات:`}),(0,v.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:C(l)})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`إضافي (دقائق):`}),(0,v.jsx)(`span`,{className:`font-medium tabular-nums`,children:u})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`إضافي (قيمة):`}),(0,v.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:C(d)})]})]})]},`tech-${e.id}`)}),e.length===0&&t.length===0&&(0,v.jsx)(`div`,{className:`p-8 text-center text-muted-foreground text-sm`,children:`لا توجد عمولات تطابق البحث`}),(e.length>0||t.length>0)&&(0,v.jsxs)(`div`,{className:`bg-muted/20 p-4 space-y-2 text-xs font-semibold`,children:[(0,v.jsxs)(`div`,{className:`flex justify-between`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي الحضور:`}),(0,v.jsx)(`span`,{className:`text-success tabular-nums`,children:C(e.reduce((e,t)=>e+Number(t.attendanceCommission),0)+(S===`مركز`?t.reduce((e,t)=>e+Number(t.attendanceCommission??0),0):0))})]}),(0,v.jsxs)(`div`,{className:`flex justify-between`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي الفحص:`}),(0,v.jsx)(`span`,{className:`text-success tabular-nums`,children:C(e.reduce((e,t)=>e+Number(t.examCommission),0)+(S===`مركز`?t.reduce((e,t)=>e+Number(t.examCommission??0),0):0))})]}),S!==`عيادة`&&(0,v.jsxs)(`div`,{className:`flex justify-between`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي البنتاكام:`}),(0,v.jsx)(`span`,{className:`text-success tabular-nums`,children:C(e.reduce((e,t)=>e+Number(t.pentacamCommission),0)+(S===`مركز`?t.reduce((e,t)=>e+Number(t.pentacamCommission??0),0):0))})]}),(0,v.jsxs)(`div`,{className:`flex justify-between`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي غلاء معيشة:`}),(0,v.jsx)(`span`,{className:`text-success tabular-nums`,children:C(e.reduce((e,t)=>e+B(t).cola,0)+(S===`مركز`?t.reduce((e,t)=>e+B(t).cola,0):0))})]}),(0,v.jsxs)(`div`,{className:`flex justify-between`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي بدل مواصلات:`}),(0,v.jsx)(`span`,{className:`text-success tabular-nums`,children:C(e.reduce((e,t)=>e+B(t).travel,0)+(S===`مركز`?t.reduce((e,t)=>e+B(t).travel,0):0))})]}),(0,v.jsxs)(`div`,{className:`flex justify-between border-t border-border/40 pt-2`,children:[(0,v.jsx)(`span`,{className:`text-foreground font-bold`,children:`المجموع الكلي للعمولات:`}),(0,v.jsx)(`span`,{className:`text-primary font-bold tabular-nums text-sm`,children:C(e.reduce((e,t)=>e+H(t)+Number(t.overtimePay??0),0)+(S===`مركز`?t.reduce((e,t)=>{let n=Number(t.attendanceCommission??0),r=Number(t.examCommission??0),i=Number(t.pentacamCommission??0),a=B(t),o=a.cola,s=a.travel,c=Number(t.overtimePay??0);return e+(n+r+i+o+s+c)},0):0))})]})]})]})]})})(),S===`مركز`&&E===`supervision`&&(()=>{let e=G,t=e.reduce((e,t)=>e+Number(A[t.empCd]??t.supervisionBonus??0),0);return(0,v.jsxs)(`section`,{className:`rounded-xl border border-border bg-background overflow-hidden`,children:[(0,v.jsxs)(`div`,{className:`border-b border-border bg-muted/25 px-4 py-3 flex items-center justify-between gap-3`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h2`,{className:`text-base font-semibold text-foreground`,children:`مكافأة الإشراف`}),(0,v.jsx)(`p`,{className:`text-xs text-muted-foreground mt-0.5`,children:`خارج إجمالي الراتب، ولا تؤثر على الحسابات`})]}),(0,v.jsxs)(`div`,{className:`flex gap-2 shrink-0`,children:[(0,v.jsxs)(a,{size:`sm`,variant:`outline`,onClick:Ve,className:`gap-1.5`,children:[(0,v.jsx)(u,{size:13}),` إيصالات`]}),(0,v.jsxs)(a,{size:`sm`,variant:`outline`,onClick:Be,className:`gap-1.5`,children:[(0,v.jsx)(u,{size:13}),` كشف`]})]})]}),(0,v.jsx)(`div`,{className:`overflow-x-auto`,dir:`rtl`,children:(0,v.jsxs)(`table`,{"aria-label":`مكافآت الإشراف`,dir:`rtl`,className:`w-full text-sm`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{className:`border-b border-border bg-muted/30 text-xs`,children:[(0,v.jsx)(`th`,{scope:`col`,className:`px-4 py-3 text-right font-medium text-muted-foreground`,children:`الموظف`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-4 py-3 text-center font-medium text-muted-foreground`,children:`مكافأة الإشراف`}),(0,v.jsx)(`th`,{scope:`col`,className:`px-4 py-3 text-center font-medium text-muted-foreground`,children:`حفظ`})]})}),(0,v.jsx)(`tbody`,{children:e.map(e=>{let t=e.empCd,n=A[t]??String(ye[e.empCd]??`0`);return(0,v.jsxs)(`tr`,{className:`border-b border-border/50 hover:bg-muted/20`,children:[(0,v.jsxs)(`td`,{className:`px-4 py-3`,children:[(0,v.jsx)(`div`,{className:`font-medium`,children:e.fullName??e.empCd}),(0,v.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.salaryType??e.department??``})]}),(0,v.jsx)(`td`,{className:`px-4 py-3 text-center`,children:(0,v.jsx)(`input`,{type:`number`,"aria-label":`مكافأة الإشراف ${e.fullName??e.empCd}`,min:`0`,step:`0.01`,value:n,onChange:e=>fe(n=>({...n,[t]:e.target.value})),className:`w-28 rounded-md border border-input bg-background px-2 py-1 text-sm text-center outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 tabular-nums`})}),(0,v.jsx)(`td`,{className:`px-4 py-3 text-center`,children:(0,v.jsx)(`button`,{onClick:()=>{let t=parseFloat(n)||0;be.mutate({empCd:e.empCd,year:N,month:P,section:S,amount:t})},disabled:be.isPending,className:`rounded-md border border-border px-3 py-1 text-xs font-medium hover:bg-muted transition-colors disabled:opacity-50`,children:`حفظ`})})]},t)})}),(0,v.jsx)(`tfoot`,{children:(0,v.jsxs)(`tr`,{className:`border-t border-border bg-muted/30 text-xs font-semibold`,children:[(0,v.jsx)(`td`,{className:`px-4 py-2 text-right`,children:`الإجمالي (معلوماتي فقط)`}),(0,v.jsx)(`td`,{className:`px-4 py-2 text-center tabular-nums`,children:C(t)}),(0,v.jsx)(`td`,{})]})})]})})]})})()]})}export{se as default};