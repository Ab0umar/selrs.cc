import{S as e}from"./data-core-DDJcqqA3.js";import{t}from"./sheetDates-CvR7UcpH.js";var n=e();function r({label:e,value:t,className:r=``}){return(0,n.jsxs)(`div`,{className:`min-w-0 ${r}`,children:[(0,n.jsx)(`p`,{className:`mb-1 text-xs font-bold uppercase text-muted-foreground`,children:e}),(0,n.jsx)(`div`,{className:`min-w-0 truncate text-center text-base font-bold`,children:t||`—`})]})}function i({title:e}){let[t,r]=e.split(`|`).map(e=>e.trim());return(0,n.jsxs)(`h1`,{className:`flex items-center gap-2 text-xl font-extrabold uppercase tracking-tight text-foreground`,children:[(0,n.jsx)(`span`,{dir:`ltr`,children:t}),r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(`span`,{"aria-hidden":!0,children:`|`}),(0,n.jsx)(`span`,{dir:`rtl`,children:r})]}):null]})}function a({title:e,generatedDate:a=new Date().toISOString().split(`T`)[0],patient:o,sidePanel:s,children:c,signatureLabel:l=`توقيع الطبيب المعالج`,dir:u=`rtl`,className:d=``}){return(0,n.jsxs)(`main`,{className:`clinical-report-frame medical-report-page mx-auto max-w-[210mm] bg-background p-4 text-foreground sm:p-8 ${d}`,dir:u,children:[(0,n.jsx)(`style`,{children:`
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
      `}),(0,n.jsxs)(`div`,{className:`report-sheet-body rounded-xl border border-border/60 bg-card p-4 sm:p-8 print:rounded-none print:border-0 print:shadow-none`,children:[(0,n.jsxs)(`header`,{className:`mb-6 flex items-start justify-between border-b-2 border-primary pb-4`,children:[(0,n.jsx)(`div`,{}),(0,n.jsxs)(`div`,{className:`text-left`,dir:`ltr`,children:[(0,n.jsx)(i,{title:e}),(0,n.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Generated: `,t(a)]})]})]}),(0,n.jsxs)(`section`,{className:`mb-4 grid grid-cols-12 gap-3`,dir:`rtl`,children:[(0,n.jsxs)(`div`,{className:`${s?`col-span-8`:`col-span-12`} grid grid-cols-12 content-center gap-x-3 gap-y-2 rounded-lg border border-border/60 bg-muted/40 px-3 py-2 text-center`,children:[(0,n.jsx)(r,{label:`اسم المريض:`,value:o.name,className:`col-span-6`}),(0,n.jsx)(r,{label:`الكود:`,value:o.code,className:`col-span-3`}),(0,n.jsx)(r,{label:`السن:`,value:o.age,className:`col-span-3`}),(0,n.jsx)(r,{label:`تاريخ الميلاد:`,value:o.birthDate?t(o.birthDate):`—`,className:`col-span-5`}),(0,n.jsx)(r,{label:`موبايل:`,value:o.phone,className:`col-span-4`}),(0,n.jsx)(r,{label:`الوظيفة:`,value:o.occupation,className:`col-span-3`})]}),s?(0,n.jsx)(`aside`,{className:`col-span-4 flex flex-col gap-2`,children:s}):null]}),(0,n.jsx)(`div`,{className:`clinical-report-content`,children:c}),(0,n.jsxs)(`footer`,{className:`mt-8 flex items-end justify-between border-t border-border/60 pt-4`,children:[(0,n.jsx)(`div`,{}),(0,n.jsxs)(`div`,{className:`w-48 text-center`,children:[(0,n.jsx)(`div`,{className:`mb-1 h-10 border-b border-border`}),(0,n.jsx)(`p`,{className:`text-[10px] uppercase text-muted-foreground`,children:l})]})]})]})]})}export{a as t};