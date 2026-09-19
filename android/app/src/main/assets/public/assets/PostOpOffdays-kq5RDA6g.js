import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{p as t}from"./charts-CKYPXezW.js";import{S as n}from"./data-core-DDJcqqA3.js";import{t as r}from"./trpc-qBwZs2KI.js";import{o as i}from"./react-core-Cbv4oCTl.js";import{r as ee}from"./utils-CqY2Hinh.js";import{i as a}from"./ui-misc-DEd6ZQby.js";import{t as o}from"./useAuth-wfS6H89I.js";import{t as s}from"./button-CRN8yK1L.js";import{Gn as te,at as ne,mt as c}from"./icons-CoVW7jzB.js";import{t as l}from"./input-BPwTuAV7.js";import{t as u}from"./textarea-CPDwnpjw.js";import{t as d}from"./date-input-D9Ib-ire.js";import{t as re}from"./PatientPicker-C_zCbISp.js";import{t as ie}from"./ClinicalReportFrame-C7O9CBvY.js";var f=e(t(),1),p=n();function m({children:e}){return(0,p.jsx)(`span`,{className:`text-[11px] font-bold text-[#727780]`,children:e})}function h(e,t){if(!e||!t)return``;let n=new Date(e),r=new Date(t);if(Number.isNaN(n.getTime())||Number.isNaN(r.getTime()))return``;let i=r.getTime()-n.getTime();return i<0?``:String(Math.floor(i/864e5)+1)}var g=`يشهد المركز بأن المريض المذكور أدناه قد خضع لإجراء عملية تصحيح الإبصار، ويتطلب فترة راحة طبية لتقليل الإجهاد البصري وحماية العين أثناء مرحلة التعافي.`;function _({params:e,patientId:t,onSelectPatient:n,hideHeaderSearch:_=!1,hidePrintButton:v=!1}={}){let{isAuthenticated:y,user:b}=o(),[,x]=i(`/post-op-offdays/:id`),ae=x?.id?Number(x.id):e?.id?Number(e.id):void 0,oe=typeof window<`u`&&(Number(new URLSearchParams(window.location.search).get(`patientId`))||Number(new URLSearchParams(window.location.search).get(`id`)))||void 0,S=typeof window<`u`&&new URLSearchParams(window.location.search).get(`visitDate`)||``,[C,w]=(0,f.useState)(t??ae??oe);(0,f.useEffect)(()=>{(_||n||t!==void 0)&&w(t)},[t,_,n]);let se=r.patient.getPatient.useQuery(C??0,{enabled:!!C,refetchOnWindowFocus:!1}),T=r.medical.getPostOpOffdaysByPatient.useQuery({patientId:C??0},{enabled:!!C,refetchOnWindowFocus:!1}),E=se.data,D=T.data??[],[ce,O]=(0,f.useState)(),[k,A]=(0,f.useState)(``),[j,M]=(0,f.useState)(``),[N,P]=(0,f.useState)(``),[F,I]=(0,f.useState)(``),[L,R]=(0,f.useState)(``),[z,B]=(0,f.useState)(g),[V,H]=(0,f.useState)(``),[U,W]=(0,f.useState)(``),[G,K]=(0,f.useState)(``),[q,J]=(0,f.useState)(``),[Y,X]=(0,f.useState)(``),[Z,Q]=(0,f.useState)(``);(0,f.useEffect)(()=>{let e=h(j,N);e&&I(e)},[j,N]),(0,f.useEffect)(()=>{let e=String(b?.name??``).trim();e&&!G&&K(e)},[G,b?.name]),(0,f.useEffect)(()=>{if(!C){J(``),X(``),Q(``),A(``),M(``),P(``),I(``),R(``),H(``),W(``),O(void 0);return}E&&(J(E.fullName||``),X(E.patientCode||``),Q(E.dateOfBirth?String(E.dateOfBirth).split(`T`)[0]:``))},[C,E]),(0,f.useEffect)(()=>{let e=S?D.find(e=>String(e.createdAt??``).split(`T`)[0]===S):D[0];if(!e){O(void 0);return}O(Number(e.id)),A(e.operationDate?String(e.operationDate).split(`T`)[0]:``),R(e.method||``),B(e.certificateStatement||g),H(e.vaOD||``),W(e.vaOS||``),M(e.leaveStart?String(e.leaveStart).split(`T`)[0]:``),P(e.returnDate?String(e.returnDate).split(`T`)[0]:``),e.durationDays&&I(String(e.durationDays)),e.doctorName&&K(e.doctorName),e.patientNameOverride&&J(e.patientNameOverride),e.patientCodeOverride&&X(e.patientCodeOverride),e.patientDobOverride&&Q(String(e.patientDobOverride).split(`T`)[0])},[D,S]);let $=r.medical.savePostOpOffdaysCertificate.useMutation();return y?(0,p.jsxs)(`div`,{className:`post-op-offdays-root medical-report-brand min-h-screen bg-[#eef5f7] text-[#161d1f]`,children:[(0,p.jsx)(`style`,{children:`
        .offdays-paper {
          width: 210mm;
          min-height: 297mm;
        }
        @media print {
          @page { size: A4 portrait; margin: 0; }
          html, body {
            width: 210mm !important;
            height: 297mm !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
            background: white !important;
          }
          .no-print { display: none !important; }
          .post-op-offdays-root {
            min-height: 0 !important;
            height: 297mm !important;
            background: white !important;
            overflow: hidden !important;
          }
          .offdays-print-shell {
            padding: 0 !important;
            height: 297mm !important;
            overflow: hidden !important;
          }
          .offdays-paper {
            width: 210mm !important;
            height: 297mm !important;
            min-height: 0 !important;
            max-height: 297mm !important;
            margin: 0 !important;
            border: 0 !important;
            box-shadow: none !important;
            padding: 30mm 18mm 12mm !important;
            overflow: hidden !important;
          }
          .offdays-paper header {
            margin-bottom: 6mm !important;
            padding-bottom: 4mm !important;
          }
          .offdays-paper section {
            margin-bottom: 5mm !important;
          }
          .offdays-recommendations {
            margin-bottom: 1mm !important;
          }
          .offdays-paper section:nth-of-type(1) {
            padding: 4mm !important;
          }
          .offdays-paper section:nth-of-type(1) h3 {
            margin-bottom: 2mm !important;
            font-size: 15px !important;
          }
          .offdays-paper p {
            line-height: 1.45 !important;
          }
          .offdays-paper table th,
          .offdays-paper table td {
            padding-top: 1.6mm !important;
            padding-bottom: 1.6mm !important;
          }
          .offdays-paper input,
          .offdays-paper textarea {
            height: 7mm !important;
            min-height: 0 !important;
            font-size: 15px !important;
          }
          .offdays-status-table input {
            font-size: 16px !important;
          }
          .offdays-status-table textarea {
            height: 32mm !important;
            min-height: 32mm !important;
            overflow: visible !important;
          }
          .offdays-statement,
          .offdays-status-table textarea {
            font-size: 18px !important;
            font-weight: 700 !important;
            line-height: 1.35 !important;
          }
          .offdays-statement {
            height: 27mm !important;
            min-height: 27mm !important;
            width: 100% !important;
            max-width: none !important;
            box-sizing: border-box !important;
          }
          .offdays-paper .h-20 {
            height: 14mm !important;
          }
          .offdays-paper footer {
            margin-top: 4mm !important;
            padding-top: 3mm !important;
            gap: 14mm !important;
          }
          .offdays-paper footer p {
            margin-bottom: 3mm !important;
          }
          input {
            box-shadow: none !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}),(0,p.jsx)(`header`,{className:`no-print sticky top-0 z-50 border-b border-[#c2c7d1] bg-white`,children:(0,p.jsxs)(`div`,{className:`mx-auto flex max-w-7xl items-center justify-between px-6 py-3`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h1`,{className:`text-lg font-extrabold text-[#00355f]`,children:`Post-Op Offdays Certificate`}),(0,p.jsx)(`p`,{className:`text-xs font-semibold text-[#727780]`,children:`شهادة إجازة مرضية بعد العملية`})]}),(0,p.jsxs)(`div`,{className:`flex items-center gap-2`,children:[!_&&(0,p.jsx)(`div`,{className:`w-72`,children:(0,p.jsx)(re,{initialPatientId:C,onSelect:e=>{let t=e?.id?Number(e.id):void 0;w(t),n?.(t)}})}),(0,p.jsxs)(s,{type:`button`,variant:`outline`,className:`border-[#00355f] text-[#00355f]`,onClick:async()=>{if(!C){a.error(`اختر مريضاً أولاً`);return}try{await $.mutateAsync({id:ce,patientId:C,operationDate:k||void 0,method:L||void 0,certificateStatement:z||void 0,vaOD:V||void 0,vaOS:U||void 0,leaveStart:j||void 0,returnDate:N||void 0,durationDays:F?Number(F):void 0,doctorName:G||void 0,patientNameOverride:q||void 0,patientCodeOverride:Y||void 0,patientDobOverride:Z||void 0}),a.success(`تم حفظ الشهادة`),await T.refetch()}catch(e){a.error(ee(e,`حدث خطأ أثناء الحفظ`))}},disabled:$.isPending,children:[(0,p.jsx)(ne,{className:`mr-2 h-4 w-4`}),$.isPending?`جارٍ الحفظ…`:`Save`]}),!v&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(s,{type:`button`,className:`bg-[#00355f] text-white`,onClick:()=>window.print(),children:[(0,p.jsx)(c,{className:`mr-2 h-4 w-4`}),`Print`]}),(0,p.jsxs)(s,{type:`button`,variant:`outline`,className:`border-[#c2c7d1]`,onClick:()=>window.print(),children:[(0,p.jsx)(te,{className:`mr-2 h-4 w-4`}),`PDF`]})]})]})]})}),(0,p.jsx)(`div`,{className:`offdays-print-shell flex justify-center p-8`,dir:`rtl`,children:(0,p.jsx)(ie,{title:`Post-Operative Leave Report | تقرير إجازة ما بعد العملية`,generatedDate:k,patient:{name:q,code:Y,age:E?.age,birthDate:Z,phone:E?.phone,occupation:E?.occupation},signatureLabel:`توقيع الطبيب المعالج`,children:(0,p.jsxs)(`div`,{className:`flex flex-col`,children:[(0,p.jsxs)(`section`,{className:`mb-8 border border-[#c2c7d1] bg-[#eef5f7] p-5`,children:[(0,p.jsx)(`h3`,{className:`mb-3 text-lg font-bold text-[#00355f]`,children:`إفادة`}),(0,p.jsx)(u,{value:z,onChange:e=>B(e.target.value),className:`offdays-statement block !w-full !max-w-none min-h-28 resize-none border-[#c2c7d1] bg-white px-3 py-2 text-lg font-bold leading-6 text-[#161d1f] shadow-none [field-sizing:fixed] focus-visible:ring-[#00355f]`})]}),(0,p.jsxs)(`section`,{className:`hidden`,children:[(0,p.jsxs)(`label`,{className:`flex items-center justify-between gap-2 border-b border-[#c2c7d1] py-2`,children:[(0,p.jsx)(m,{children:`الاسم الكامل:`}),(0,p.jsx)(l,{value:q,onChange:e=>J(e.target.value),className:`h-8 w-56 border-0 border-b border-dotted border-[#727780] bg-transparent text-right text-base font-bold shadow-none focus-visible:ring-0`})]}),(0,p.jsxs)(`label`,{className:`flex items-center justify-between gap-2 border-b border-[#c2c7d1] py-2`,children:[(0,p.jsx)(m,{children:`رقم المريض:`}),(0,p.jsx)(l,{value:Y,onChange:e=>X(e.target.value),className:`h-8 w-36 border-0 border-b border-dotted border-[#727780] bg-transparent text-center font-mono text-base font-semibold shadow-none focus-visible:ring-0`})]}),(0,p.jsxs)(`label`,{className:`flex items-center justify-between gap-2 border-b border-[#c2c7d1] py-2`,children:[(0,p.jsx)(m,{children:`تاريخ الميلاد:`}),(0,p.jsx)(d,{value:Z,onChange:e=>Q(e.target.value),className:`h-8 w-36 border-[#c2c7d1] text-center font-mono text-base font-semibold`})]}),(0,p.jsxs)(`label`,{className:`flex items-center justify-between gap-4 border-b border-[#c2c7d1] py-2`,children:[(0,p.jsx)(m,{children:`تاريخ العملية:`}),(0,p.jsx)(d,{value:k,onChange:e=>A(e.target.value),className:`h-8 w-36 border-[#c2c7d1] text-center text-base`})]})]}),(0,p.jsxs)(`section`,{className:`mb-8 overflow-hidden border border-[#c2c7d1]`,dir:`ltr`,children:[(0,p.jsx)(`h3`,{className:`border-b border-[#c2c7d1] bg-[#00355f] px-4 py-2 text-center text-sm font-extrabold text-white`,children:`قياسات ما بعد العملية / Post-Op Status`}),(0,p.jsxs)(`table`,{className:`offdays-status-table w-full table-fixed border-collapse text-center`,children:[(0,p.jsx)(`thead`,{children:(0,p.jsxs)(`tr`,{className:`bg-[#e8eff1] text-[12px] font-bold text-[#42474f]`,children:[(0,p.jsx)(`th`,{className:`w-[9%] border border-[#c2c7d1] px-3 py-2`,children:`Eye`}),(0,p.jsx)(`th`,{className:`w-[46%] border border-[#c2c7d1] px-3 py-2`,children:`VA`}),(0,p.jsx)(`th`,{className:`w-[45%] border border-[#c2c7d1] px-3 py-2`,children:`Method`})]})}),(0,p.jsxs)(`tbody`,{children:[(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`border border-[#c2c7d1] px-3 py-2 font-bold`,children:`OD`}),(0,p.jsx)(`td`,{className:`border border-[#c2c7d1] p-0`,children:(0,p.jsx)(l,{value:V,onChange:e=>H(e.target.value),className:`h-10 border-0 text-center text-lg font-bold`})}),(0,p.jsx)(`td`,{className:`border border-[#c2c7d1] p-0 align-middle`,rowSpan:2,children:(0,p.jsx)(u,{value:L,onChange:e=>R(e.target.value),rows:5,className:`h-[120px] min-h-[120px] resize-none border-0 px-3 py-2 text-center text-lg font-bold leading-6`,placeholder:`PRK / LASIK`})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`border border-[#c2c7d1] px-3 py-2 font-bold`,children:`OS`}),(0,p.jsx)(`td`,{className:`border border-[#c2c7d1] p-0`,children:(0,p.jsx)(l,{value:U,onChange:e=>W(e.target.value),className:`h-10 border-0 text-center text-lg font-bold`})})]})]})]})]}),(0,p.jsxs)(`section`,{className:`mb-8 grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.8fr)] gap-0 border-2 border-[#c2c7d1] p-5`,children:[(0,p.jsxs)(`label`,{className:`min-w-0 border-l border-[#c2c7d1] px-3 text-center`,children:[(0,p.jsx)(m,{children:`تاريخ البدء`}),(0,p.jsx)(d,{value:j,onChange:e=>M(e.target.value),className:`mt-2 h-9 w-full min-w-0 border-[#c2c7d1] px-2 text-center text-sm font-bold`,inputClassName:`min-w-0 flex-1 basis-0 px-1 text-sm`})]}),(0,p.jsxs)(`label`,{className:`min-w-0 border-l border-[#c2c7d1] px-3 text-center`,children:[(0,p.jsx)(m,{children:`تاريخ العودة`}),(0,p.jsx)(d,{value:N,onChange:e=>P(e.target.value),className:`mt-2 h-9 w-full min-w-0 border-[#c2c7d1] px-2 text-center text-sm font-bold`,inputClassName:`min-w-0 flex-1 basis-0 px-1 text-sm`})]}),(0,p.jsxs)(`label`,{className:`min-w-0 px-3 text-center`,children:[(0,p.jsx)(m,{children:`المدة`}),(0,p.jsxs)(`div`,{className:`mt-2 flex items-center justify-center gap-2`,children:[(0,p.jsx)(l,{value:F,onChange:e=>I(e.target.value),className:`h-9 w-20 border-[#c2c7d1] text-center text-xl font-bold text-[#00355f]`}),(0,p.jsx)(`span`,{className:`font-bold text-[#00355f]`,children:`يوماً`})]})]})]}),(0,p.jsxs)(`section`,{className:`offdays-recommendations mb-2`,children:[(0,p.jsx)(`h3`,{className:`mb-3 text-sm font-bold text-[#00355f]`,children:`وقد اوصى الطبيب`}),(0,p.jsx)(`div`,{className:`grid grid-cols-2 gap-3`,children:[`لا وقت للشاشة / No screen time`,`تجنب الإجهاد البدني / Avoid strain`,`الحماية من الضوء / Light protection`,`تجنب ملامسة الماء / Keep dry`].map(e=>(0,p.jsx)(`div`,{className:`border border-[#ba1a1a]/25 bg-[#ffdad6]/70 px-3 py-2 text-sm font-bold text-[#93000a]`,children:e},e))})]}),(0,p.jsx)(`footer`,{className:`hidden`,children:(0,p.jsxs)(`div`,{dir:`ltr`,className:`text-left`,children:[(0,p.jsx)(`p`,{dir:`ltr`,className:`mb-5 text-left font-bold`,children:`توقيع الطبيب المعالج:`}),(0,p.jsx)(`div`,{className:`mb-2 w-56 border-b border-[#42474f]`}),(0,p.jsx)(l,{value:G,onChange:e=>K(e.target.value),dir:`ltr`,className:`w-64 border-0 bg-transparent p-0 text-left font-bold shadow-none`}),(0,p.jsx)(`p`,{className:`text-xs text-[#727780]`,children:`استشاري جراحة العيون`})]})})]})})})]}):null}export{_ as t};