import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{p as t}from"./charts-CKYPXezW.js";import{E as n}from"./data-core-CrqxPXdn.js";import{t as r}from"./button-putbLdKw.js";import{ut as i}from"./icons-Bh8r5BPY.js";import{t as a}from"./input-De5m-6oq.js";import{t as o}from"./sheetDates-CvR7UcpH.js";var s=e(t(),1),c=n();function l({label:e,value:t,onChange:n,type:r=`text`}){let i=t==null?``:String(t),[o,l]=(0,s.useState)(i);(0,s.useEffect)(()=>l(i),[i]);let u=n?i:o;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{"aria-label":e,type:r,value:u,onChange:e=>{l(e.target.value),n?.(e.target.value)},className:`h-9 min-w-0 w-full bg-transparent text-center font-semibold print:hidden`}),(0,c.jsx)(`span`,{className:`hidden whitespace-pre-wrap break-words print:block`,children:u||`-`})]})}function u({loading:e,error:t,onRetry:n}){return!e&&!t?null:(0,c.jsxs)(`div`,{className:`flex min-h-48 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card p-6 text-center`,role:t?`alert`:`status`,"aria-live":`polite`,children:[(0,c.jsx)(`p`,{className:`text-sm font-semibold text-foreground`,children:t?`تعذر تحميل بيانات التقرير`:`جارٍ تحميل بيانات التقرير…`}),t?(0,c.jsxs)(r,{type:`button`,variant:`outline`,onClick:n,children:[(0,c.jsx)(i,{className:`mr-2 h-4 w-4`}),`إعادة المحاولة`]}):null]})}function d({label:e,value:t,className:n=``,editable:r=!1,onChange:i,type:a=`text`}){return(0,c.jsxs)(`div`,{className:`min-w-0 ${n}`,children:[(0,c.jsx)(`p`,{className:`mb-1 text-xs font-bold uppercase text-muted-foreground`,children:e}),(0,c.jsx)(`div`,{className:`min-w-0 break-words text-center text-base font-semibold`,children:r?(0,c.jsx)(l,{label:e,value:typeof t==`string`||typeof t==`number`?t:``,onChange:i,type:a}):t??`-`})]})}function f({title:e}){let[t,n]=e.split(`|`).map(e=>e.trim());return(0,c.jsxs)(`h1`,{className:`flex flex-wrap items-center gap-2 text-lg font-semibold text-foreground`,children:[(0,c.jsx)(`span`,{dir:`ltr`,children:t}),n?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`span`,{"aria-hidden":!0,children:`|`}),(0,c.jsx)(`span`,{dir:`rtl`,children:n})]}):null]})}function p({title:e,generatedDate:t=new Date().toISOString().split(`T`)[0],patient:n,onPatientChange:r,sidePanel:i,children:a,signatureLabel:s=`توقيع الطبيب المعالج`,dir:l=`rtl`,className:u=``}){return(0,c.jsxs)(`main`,{className:`clinical-report-frame medical-report-page mx-auto min-w-0 w-full max-w-[210mm] bg-background p-2 text-foreground sm:p-4 ${u}`,dir:l,children:[(0,c.jsx)(`style`,{children:`
        @media print {
          /* Letterhead padding on .report-sheet-body (Chrome ignores large @page top) */
          html, body {
            min-height: 0 !important;
            height: auto !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: visible !important;
            background: white !important;
          }
          /* Letterhead ~5cm + compact content for single A4 page */
          main.clinical-report-frame {
            width: 210mm !important;
            max-width: 210mm !important;
            min-height: 297mm !important;
            padding: 0 !important;
          }

          /* Tighten vertical rhythm so sheet fits one A4 under 5cm letterhead */
          @page {
            size: A4 portrait;
            margin: 0;
          }
          main.clinical-report-frame .report-sheet-body {
            padding: 50mm 15mm 4mm 15mm !important;
            font-size: 12px !important;
            line-height: 1.25 !important;
          }
          main.clinical-report-frame .report-sheet-body > header {
            margin-bottom: 3mm !important;
            padding-bottom: 2mm !important;
          }
          main.clinical-report-frame .report-sheet-body h1 {
            font-size: 15px !important;
            line-height: 1.15 !important;
          }
          main.clinical-report-frame .report-sheet-body section {
            margin-bottom: 2mm !important;
          }
          main.clinical-report-frame .report-sheet-body .mb-6 {
            margin-bottom: 3mm !important;
          }
          main.clinical-report-frame .report-sheet-body .mb-4 {
            margin-bottom: 2mm !important;
          }
          main.clinical-report-frame .report-sheet-body .mb-3,
          main.clinical-report-frame .report-sheet-body .mb-2 {
            margin-bottom: 1.5mm !important;
          }
          main.clinical-report-frame .report-sheet-body .gap-4,
          main.clinical-report-frame .report-sheet-body .gap-x-4,
          main.clinical-report-frame .report-sheet-body .gap-y-6 {
            gap: 2mm !important;
          }
          main.clinical-report-frame .report-sheet-body .gap-3,
          main.clinical-report-frame .report-sheet-body .gap-x-3,
          main.clinical-report-frame .report-sheet-body .gap-y-2 {
            gap: 1.5mm !important;
          }
          main.clinical-report-frame .report-sheet-body .p-4,
          main.clinical-report-frame .report-sheet-body .p-3,
          main.clinical-report-frame .report-sheet-body .px-3,
          main.clinical-report-frame .report-sheet-body .py-2 {
            padding: 1.5mm !important;
          }
          main.clinical-report-frame .report-sheet-body table th,
          main.clinical-report-frame .report-sheet-body table td,
          main.clinical-report-frame .report-sheet-body .clinical-report-content table th,
          main.clinical-report-frame .report-sheet-body .clinical-report-content table td {
            padding: 2px 4px !important;
            font-size: 12px !important;
            line-height: 1.25 !important;
          }
          main.clinical-report-frame .report-sheet-body p,
          main.clinical-report-frame .report-sheet-body label,
          main.clinical-report-frame .report-sheet-body input,
          main.clinical-report-frame .report-sheet-body textarea,
          main.clinical-report-frame .report-sheet-body select {
            font-size: 12px !important;
            line-height: 1.25 !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          /* Hide empty field chrome only — do not restyle typography/spacing */
          main.clinical-report-frame input::placeholder,
          main.clinical-report-frame textarea::placeholder {
            color: transparent !important;
            opacity: 0 !important;
          }
          main.clinical-report-frame [data-placeholder] {
            color: transparent !important;
          }
          main.clinical-report-frame input[type="date"][value=""]::-webkit-datetime-edit,
          main.clinical-report-frame input[type="date"]:not([value])::-webkit-datetime-edit {
            color: transparent !important;
          }
          main.clinical-report-frame input[type="date"][value=""]::-webkit-calendar-picker-indicator,
          main.clinical-report-frame input[type="date"]:not([value])::-webkit-calendar-picker-indicator {
            visibility: hidden !important;
          }
        }
      `}),(0,c.jsxs)(`div`,{className:`report-sheet-body rounded-lg border border-border bg-card p-3 sm:p-6 print:rounded-none print:border-0 print:shadow-none`,children:[(0,c.jsxs)(`header`,{className:`mb-6 flex items-start justify-between border-b-2 border-primary pb-4`,children:[(0,c.jsx)(`div`,{}),(0,c.jsxs)(`div`,{className:`text-left`,dir:`ltr`,children:[(0,c.jsx)(f,{title:e}),(0,c.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Generated: `,o(t)]})]})]}),(0,c.jsxs)(`section`,{className:`mb-4 grid grid-cols-12 gap-3`,dir:`rtl`,children:[(0,c.jsxs)(`div`,{className:`${i?`col-span-12 md:col-span-8 print:col-span-8`:`col-span-12`} grid grid-cols-12 content-center gap-x-3 gap-y-2 border-y border-border bg-muted/40 px-3 py-2 text-center`,children:[(0,c.jsx)(d,{label:`اسم المريض:`,value:n.name,editable:!0,onChange:r?.name,className:`col-span-12 sm:col-span-6 print:col-span-6`}),(0,c.jsx)(d,{label:`الكود:`,value:n.code,editable:!0,onChange:r?.code,className:`col-span-6 sm:col-span-3 print:col-span-3`}),(0,c.jsx)(d,{label:`السن:`,value:n.age,editable:!0,onChange:r?.age,className:`col-span-6 sm:col-span-3 print:col-span-3`}),(0,c.jsx)(d,{label:`تاريخ الميلاد:`,value:n.birthDate||``,editable:!0,type:`date`,onChange:r?.birthDate,className:`col-span-12 sm:col-span-5 print:col-span-5`}),(0,c.jsx)(d,{label:`موبايل:`,value:n.phone,editable:!0,type:`tel`,onChange:r?.phone,className:`col-span-6 sm:col-span-4 print:col-span-4`}),(0,c.jsx)(d,{label:`الوظيفة:`,value:n.occupation,editable:!0,onChange:r?.occupation,className:`col-span-6 sm:col-span-3 print:col-span-3`})]}),i?(0,c.jsx)(`aside`,{className:`col-span-12 md:col-span-4 print:col-span-4 flex flex-col gap-2`,children:i}):null]}),(0,c.jsx)(`div`,{className:`clinical-report-content`,children:a}),(0,c.jsxs)(`footer`,{className:`mt-8 flex items-end justify-between border-t border-border/60 pt-4`,children:[(0,c.jsx)(`div`,{}),(0,c.jsxs)(`div`,{className:`w-48 text-center`,children:[(0,c.jsx)(`div`,{className:`mb-1 h-10 border-b border-border`}),(0,c.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:s})]})]})]})]})}export{u as n,l as r,p as t};