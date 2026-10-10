import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{p as t}from"./charts-CKYPXezW.js";import{E as n}from"./data-core-CrqxPXdn.js";import{t as r}from"./trpc-BXgQr0U5.js";import{a as ee,o as te}from"./react-core-Cbv4oCTl.js";import{r as ne}from"./utils-D5ZYrGtY.js";import{i}from"./ui-misc-D38wyx1_.js";import{t as re}from"./useAuth-CFioRwUL.js";import{t as a}from"./button-putbLdKw.js";import{mt as ie}from"./icons-Bh8r5BPY.js";import{t as o}from"./textarea-DtK_QCB9.js";import{t as ae}from"./date-input-DNin7Xlz.js";import{i as s}from"./nativePdf-CtH9RqDb.js";import{t as c}from"./PatientPicker-C40oxaGn.js";import{i as l,n as u,r as d,t as f}from"./sheetDesigner-BGclgCQ9.js";import{t as p}from"./useAppNavigation-mGNcU55M.js";import{n as m,t as oe}from"./PrintPreviewBanner-DAbb717I.js";import{n as se,r as h,t as g}from"./sheetDates-CvR7UcpH.js";import{n as ce,t as le}from"./SheetWatermark-TN2Q8DV5.js";import{t as _}from"./ws-CsoVwBEJ.js";var v=e(t(),1),y=n();function b({patientName:e,onPatientNameChange:t,age:n,onAgeChange:r,dateOfBirth:ee,address:te,onAddressChange:ne,phone:i,onPhoneChange:re,alternatePhone:a,onAlternatePhoneChange:ie,patientCode:o,onPatientCodeChange:s,examinationDate:c,onExaminationDateChange:l,job:u,onJobChange:d,doctorName:f,onDoctorNameChange:p,extraPatientField:m,ucvaOD:oe,onUcvaODChange:se,ucvaOS:h,onUcvaOSChange:ce,bcvaOD:le,onBcvaODChange:_,bcvaOS:v,onBcvaOSChange:b,iopOD:x,onIopODChange:S,iopOS:C,onIopOSChange:w,refractionOD:T,onRefractionODChange:E,refractionOS:D,onRefractionOSChange:O,readingValue:k,onReadingValueChange:A,compactEyeTable:j}){let M=`w-full text-center bg-transparent border-0 border-b border-solid border-[#737685] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003d9b] focus-visible:ring-offset-2 py-1 text-sm`,N=`p-1 border border-[#c3c6d6]`,P=e=>t=>e(t.target.value);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`section`,{className:`print-sheet-patient-grid p-4 bg-[#f3f4f6] rounded-xl border-0 flex flex-col gap-2 text-sm`,dir:`rtl`,children:(0,y.jsxs)(`div`,{className:`patient-info-grid-3x3 grid grid-cols-3 gap-x-4 gap-y-2 text-xs`,children:[(0,y.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap font-bold`,children:[(0,y.jsx)(`span`,{className:`text-[#434654]`,children:`الاسم:`}),(0,y.jsx)(`input`,{size:(e||``).length||12,className:`patient-detail-emphasis text-[#003d9b] bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003d9b] focus-visible:ring-offset-2 text-right text-lg font-extrabold`,dir:`rtl`,value:e,onChange:P(t)})]}),(0,y.jsxs)(`span`,{className:`inline-flex items-center gap-1 whitespace-nowrap font-bold`,children:[(0,y.jsx)(`span`,{className:`text-[#434654]`,children:`تاريخ الميلاد:`}),(0,y.jsx)(`span`,{className:`px-1 border-b border-[#c3c6d6] text-right`,children:g(ee)})]}),(0,y.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap font-bold`,children:[(0,y.jsx)(`span`,{className:`text-[#434654]`,children:`السن:`}),(0,y.jsx)(`input`,{size:(n||``).length||3,className:`patient-detail-emphasis bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003d9b] focus-visible:ring-offset-2 text-right text-sm font-bold`,dir:`rtl`,value:n,onChange:P(r)})]}),(0,y.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap`,children:[(0,y.jsx)(`span`,{className:`text-[#434654]`,children:`المهنة:`}),(0,y.jsx)(`input`,{size:(u||``).length||8,className:`patient-detail-emphasis bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003d9b] focus-visible:ring-offset-2 text-right text-sm font-bold`,dir:`rtl`,value:u,onChange:P(d)})]}),(0,y.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,y.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`العنوان:`}),(0,y.jsx)(`input`,{className:`w-16 min-w-0 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003d9b] focus-visible:ring-offset-2 text-right`,dir:`rtl`,value:te,onChange:P(ne)})]}),(0,y.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,y.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`التليفون:`}),(0,y.jsx)(`input`,{className:`w-16 min-w-0 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003d9b] focus-visible:ring-offset-2 text-right`,dir:`rtl`,value:i,onChange:P(re)})]}),(0,y.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,y.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`موبايل 2:`}),(0,y.jsx)(`input`,{className:`w-16 min-w-0 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003d9b] focus-visible:ring-offset-2 text-right`,dir:`rtl`,value:a,onChange:P(ie)})]}),(0,y.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,y.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`كود العميل:`}),(0,y.jsx)(`input`,{className:`w-14 min-w-0 font-normal text-xs text-[#526069] bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003d9b] focus-visible:ring-offset-2 text-right`,dir:`rtl`,value:o,onChange:P(s)})]}),(0,y.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,y.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`تاريخ الفحص:`}),(0,y.jsx)(ae,{className:`h-6 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] rounded-none px-0.5 text-right`,value:c,onChange:e=>l(e.target.value)})]}),(0,y.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,y.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`الطبيب:`}),(0,y.jsx)(`input`,{size:(f||``).length||10,className:`min-w-0 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003d9b] focus-visible:ring-offset-2 text-right`,dir:`rtl`,value:f,onChange:P(p)})]}),m]})}),(()=>{let e=`w-14 text-center bg-transparent border-0 border-b border-solid border-[#737685] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003d9b] focus-visible:ring-offset-2 py-1 text-sm`,t=(0,y.jsxs)(`table`,{className:`text-center border-collapse w-auto`,children:[(0,y.jsx)(`thead`,{className:`bg-[#e7e8ea] text-xs font-bold uppercase`,children:(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`th`,{className:`${N} w-auto`,children:`IOP`}),(0,y.jsx)(`th`,{className:`${N} w-auto text-[#003d9b]`,children:`OD`}),(0,y.jsx)(`th`,{className:`${N} w-auto text-[#526069]`,children:`OS`})]})}),(0,y.jsx)(`tbody`,{children:(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`td`,{className:`${N} bg-[#f3f4f6] text-[#434654]`,children:`mmHg`}),(0,y.jsx)(`td`,{className:N,children:(0,y.jsx)(`input`,{className:e,value:x,onChange:P(S)})}),(0,y.jsx)(`td`,{className:N,children:(0,y.jsx)(`input`,{className:e,value:C,onChange:P(w)})})]})})]}),n=(0,y.jsxs)(`table`,{className:`text-center border-collapse w-auto`,children:[(0,y.jsx)(`thead`,{className:`bg-[#e7e8ea] text-xs font-bold uppercase`,children:(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`th`,{className:`${N} w-auto`,children:`Eye`}),(0,y.jsx)(`th`,{className:`${N} w-auto`,children:`UCVA`}),(0,y.jsx)(`th`,{className:`${N} w-auto`,children:`BCVA`})]})}),(0,y.jsxs)(`tbody`,{children:[(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`td`,{className:`${N} text-[#003d9b] bg-[#003d9b]/5`,children:`OD`}),(0,y.jsx)(`td`,{className:N,children:(0,y.jsx)(`input`,{className:e,value:oe,onChange:P(se)})}),(0,y.jsx)(`td`,{className:N,children:(0,y.jsx)(`input`,{className:e,value:le,onChange:P(_)})})]}),(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`td`,{className:`${N} text-[#526069] bg-[#f3f4f6]`,children:`OS`}),(0,y.jsx)(`td`,{className:N,children:(0,y.jsx)(`input`,{className:e,value:h,onChange:P(ce)})}),(0,y.jsx)(`td`,{className:N,children:(0,y.jsx)(`input`,{className:e,value:v,onChange:P(b)})})]})]})]}),r=(0,y.jsxs)(`table`,{className:`sheet-refraction-table w-full table-fixed text-center border-collapse`,children:[(0,y.jsxs)(`colgroup`,{children:[(0,y.jsx)(`col`,{style:{width:`16%`}}),(0,y.jsx)(`col`,{style:{width:`14%`}}),(0,y.jsx)(`col`,{style:{width:`14%`}}),(0,y.jsx)(`col`,{style:{width:`14%`}}),(0,y.jsx)(`col`,{style:{width:`14%`}}),(0,y.jsx)(`col`,{style:{width:`14%`}}),(0,y.jsx)(`col`,{style:{width:`14%`}})]}),(0,y.jsxs)(`thead`,{className:`bg-[#e7e8ea] text-xs uppercase font-bold`,children:[(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`th`,{className:N,children:`Refraction`}),(0,y.jsx)(`th`,{className:`${N} text-[#003d9b]`,colSpan:3,children:`OD (Right)`}),(0,y.jsx)(`th`,{className:`${N} text-[#526069]`,colSpan:3,children:`OS (Left)`})]}),(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`th`,{className:N,children:`Distance`}),(0,y.jsx)(`th`,{className:N,children:`S`}),(0,y.jsx)(`th`,{className:N,children:`C`}),(0,y.jsx)(`th`,{className:N,children:`A`}),(0,y.jsx)(`th`,{className:N,children:`S`}),(0,y.jsx)(`th`,{className:N,children:`C`}),(0,y.jsx)(`th`,{className:N,children:`A`})]})]}),(0,y.jsxs)(`tbody`,{className:`font-mono`,children:[(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`td`,{className:`${N} bg-[#f3f4f6]`,children:`\xA0`}),(0,y.jsx)(`td`,{className:N,children:(0,y.jsx)(`input`,{className:M,value:T.s,onChange:e=>E({...T,s:e.target.value})})}),(0,y.jsx)(`td`,{className:N,children:(0,y.jsx)(`input`,{className:M,value:T.c,onChange:e=>E({...T,c:e.target.value})})}),(0,y.jsx)(`td`,{className:N,children:(0,y.jsx)(`input`,{className:M,value:T.a,onChange:e=>E({...T,a:e.target.value})})}),(0,y.jsx)(`td`,{className:N,children:(0,y.jsx)(`input`,{className:M,value:D.s,onChange:e=>O({...D,s:e.target.value})})}),(0,y.jsx)(`td`,{className:N,children:(0,y.jsx)(`input`,{className:M,value:D.c,onChange:e=>O({...D,c:e.target.value})})}),(0,y.jsx)(`td`,{className:N,children:(0,y.jsx)(`input`,{className:M,value:D.a,onChange:e=>O({...D,a:e.target.value})})})]}),(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`td`,{className:`${N} bg-[#f3f4f6] font-bold text-[#003d9b]`,children:`Reading`}),(0,y.jsx)(`td`,{className:N,colSpan:6,children:(0,y.jsxs)(`div`,{className:`flex items-center justify-center gap-2`,children:[(0,y.jsx)(`span`,{className:`whitespace-nowrap font-bold`,children:`Add +`}),(0,y.jsx)(`input`,{className:`${M} max-w-24`,value:k,onChange:P(A)})]})})]})]})]});return j?(0,y.jsxs)(`section`,{className:`print-sheet-visual-grid flex flex-nowrap items-start gap-3`,dir:`ltr`,children:[(0,y.jsxs)(`div`,{className:`flex w-auto shrink-0 flex-col gap-2`,dir:`ltr`,children:[t,n]}),(0,y.jsx)(`div`,{className:`flex-1 min-w-0`,children:r})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`section`,{className:`print-sheet-visual-grid flex flex-col gap-2`,children:[t,n]}),(0,y.jsx)(`section`,{children:r})]})})()]})}function x(){let{user:e,isAuthenticated:t}=re(),[,n]=ee(),{goBack:ae}=p(),[,g]=te(`/sheets/specialist/:id`),x=g?.id?Number(g.id):void 0,[S,C]=(0,v.useState)({patientName:``,dateOfBirth:``,age:``,address:``,phone:``,alternatePhone:``,patientCode:``,job:``,examinationDate:new Date().toISOString().split(`T`)[0],ucvaOD:``,ucvaOS:``,bcvaOD:``,bcvaOS:``,refractionOD:{s:``,c:``,a:``},refractionOS:{s:``,c:``,a:``},iopOD:``,iopOS:``}),[w,T]=(0,v.useState)({reception:``,nurse:``,technician:``,doctor:``}),[E,D]=(0,v.useState)(``),[O,k]=(0,v.useState)(``),[A,j]=(0,v.useState)(``),[M,N]=(0,v.useState)(!1),[P,F]=(0,v.useState)(!1),[I,L]=(0,v.useState)(0),[R,z]=(0,v.useState)(0),[B,V]=(0,v.useState)(1),[ue,H]=(0,v.useState)(``),[de,U]=(0,v.useState)(f.templates.specialist),W=r.medical.getSystemSetting.useQuery({key:`sheet_designer_config`},{enabled:t,retry:2,refetchOnWindowFocus:!1}),fe=r.medical.getSystemSetting.useQuery({key:`mobile_sheet_mode_v1`},{enabled:t,retry:2,refetchOnWindowFocus:!1});if((0,v.useEffect)(()=>{t||n(`/`)},[t,n]),(0,v.useEffect)(()=>{let e=d();H(e.css.specialist||``),U(e.templates.specialist),L(e.layout.specialist.offsetXmm),z(e.layout.specialist.offsetYmm),V(e.layout.specialist.scale)},[]),(0,v.useEffect)(()=>{if(!W.data?.value)return;let e=u(W.data.value);H(e.css.specialist||``),U(e.templates.specialist),L(e.layout.specialist.offsetXmm),z(e.layout.specialist.offsetYmm),V(e.layout.specialist.scale),l(e)},[W.data]),!t)return null;let G=fe.data?.value,pe=!!(G&&typeof G==`object`?G.enabled:G),K=r.patient.getPatient.useQuery(x??0,{enabled:t&&!!x,retry:2,refetchOnWindowFocus:!1}),q=r.medical.getExaminationsByPatient.useQuery({patientId:x??0},{enabled:t&&!!x,retry:2,refetchOnWindowFocus:!1}),J=r.medical.getGlassesRecordsByPatient.useQuery({patientId:x??0},{enabled:t&&!!x,retry:2,refetchOnWindowFocus:!1}),Y=r.medical.getAutorefractometryByPatient.useQuery({patientId:x??0},{enabled:t&&!!x,retry:2,refetchOnWindowFocus:!1}),me=r.medical.getVisitsByPatient.useQuery({patientId:x??0},{enabled:t&&!!x,retry:2,refetchOnWindowFocus:!1}),he=r.medical.getMedicalReportsByPatient.useQuery({patientId:x??0},{enabled:t&&!!x,retry:2,refetchOnWindowFocus:!1}),ge=r.medical.getPrescriptionsWithItemsByPatient.useQuery({patientId:x??0},{enabled:t&&!!x,retry:2,refetchOnWindowFocus:!1}),_e=r.medical.getPentacamMeasurementsByPatient.useQuery({patientId:x??0,limit:10},{enabled:t&&!!x,retry:2,refetchOnWindowFocus:!1}),X=r.medical.getSheetEntry.useQuery({patientId:x??0,sheetType:`specialist`},{enabled:t&&!!x,retry:2,refetchOnWindowFocus:!1}),Z=r.medical.getPatientPageState.useQuery({patientId:x??0,page:`examination`},{enabled:t&&!!x,retry:2,refetchOnWindowFocus:!1}),Q=m({ready:!!x&&!K.isLoading&&!q.isLoading&&!X.isLoading});(0,v.useEffect)(()=>{if(!x)return;let e=_({patientId:x,onUpdate:()=>{Promise.all([X.refetch(),K.refetch(),q.refetch(),J.refetch(),Y.refetch(),me.refetch(),he.refetch(),ge.refetch(),_e.refetch()])}});return()=>e?.close()},[x]);let ve=r.medical.saveSheetEntry.useMutation({onSuccess:()=>{i.success(`تم الحفظ`)}}),ye=r.medical.saveRefractionToExamination.useMutation(),be=e=>{C(t=>({...t,patientName:e.fullName??``,phone:e.phone??``,alternatePhone:e.alternatePhone??``,age:e.age==null?``:String(e.age),dateOfBirth:h(e),address:e.address??``,patientCode:e.patientCode??``,job:e.occupation??``})),e.id&&n(`/sheets/specialist/${e.id}`)};(0,v.useEffect)(()=>{if(!K.data)return;let e=K.data;C(t=>({...t,patientName:e.fullName??``,phone:e.phone??``,alternatePhone:e.alternatePhone??``,age:e.age==null?``:String(e.age),dateOfBirth:h(e),address:e.address??``,patientCode:e.patientCode??``,job:e.occupation??``}))},[K.data]),(0,v.useEffect)(()=>{if(!X.data)return;let e;try{e=JSON.parse(X.data)}catch{i.warning(`تعذر قراءة بيانات الشيت المحفوظة. قد تظهر الحقول فارغة.`);return}if(e.formData&&C(t=>({...t,...e.formData,patientName:t.patientName||e.formData.patientName,phone:t.phone||e.formData.phone,alternatePhone:t.alternatePhone||e.formData.alternatePhone||``,age:t.age||e.formData.age,dateOfBirth:t.dateOfBirth||se(e.formData.dateOfBirth),address:t.address||e.formData.address})),e.examData?.autorefraction){let t=e.examData.autorefraction;C(e=>({...e,ucvaOD:t.od?.ucva?t.od.ucva:e.ucvaOD,ucvaOS:t.os?.ucva?t.os.ucva:e.ucvaOS,bcvaOD:t.od?.bcva?t.od.bcva:e.bcvaOD,bcvaOS:t.os?.bcva?t.os.bcva:e.bcvaOS,iopOD:t.od?.iop?t.od.iop:e.iopOD,iopOS:t.os?.iop?t.os.iop:e.iopOS}))}e.signatures&&T({reception:e.signatures.reception??``,nurse:e.signatures.nurse??``,technician:e.signatures.technician??``,doctor:e.signatures.doctor??``}),k(String(e.notes??``)),j(String(e.finalDecision??``)),e.checks&&(N(!!e.checks.glasses),F(!!e.checks.xray))},[X.data]),(0,v.useEffect)(()=>{if(!q.data||q.data.length===0)return;let e=q.data[0];if(!e.autorefraction)return;let t=e.autorefraction;C(e=>({...e,ucvaOD:t.od?.ucva?t.od.ucva:e.ucvaOD,ucvaOS:t.os?.ucva?t.os.ucva:e.ucvaOS,bcvaOD:t.od?.bcva?t.od.bcva:e.bcvaOD,bcvaOS:t.os?.bcva?t.os.bcva:e.bcvaOS,iopOD:t.od?.iop?t.od.iop:e.iopOD,iopOS:t.os?.iop?t.os.iop:e.iopOS}))},[q.data]),(0,v.useEffect)(()=>{let e=(J.data??[])[0];e&&C(t=>({...t,bcvaOD:String(e.bcvaOD??t.bcvaOD),bcvaOS:String(e.bcvaOS??t.bcvaOS),refractionOD:{s:String(e.sOD??``),c:String(e.cOD??``),a:String(e.axisOD??``)},refractionOS:{s:String(e.sOS??``),c:String(e.cOS??``),a:String(e.axisOS??``)}}))},[J.data]),(0,v.useEffect)(()=>{let e=(Y.data??[])[0];e&&C(t=>({...t,ucvaOD:String(e.ucvaOD??``),ucvaOS:String(e.ucvaOS??``),iopOD:String(e.iopOD??``),iopOS:String(e.iopOS??``)}))},[Y.data]),(0,v.useEffect)(()=>{let e=Z.data?.data;if(!e)return;let t=String(e.doctorName??``).trim()||String(e.signatures?.doctor??``).trim();t&&T(e=>({...e,doctor:t}))},[Z.data]),(0,v.useEffect)(()=>{let t=String(e?.name??``).trim();if(!t)return;let n=String(e?.role??``).toLowerCase();T(e=>({...e,reception:n===`reception`?t:e.reception,nurse:n===`nurse`?t:e.nurse,technician:n===`technician`?t:e.technician,doctor:n===`doctor`?e.doctor||t:e.doctor}))},[e?.name,e?.role,X.data,Z.data]);let xe=ve.isPending||ye.isPending,Se=[X,K,q,J,Y,me,he,ge,_e],Ce=Se.some(e=>e.isError),we=!!x&&(X.isLoading||K.isLoading),Te=async()=>{if(!x){i.error(`يرجى اختيار المريض أولاً`);return}try{let e=(()=>{try{return X.data?JSON.parse(X.data):{}}catch{return null}})();if(e===null){i.error(`تعذر قراءة البيانات المحفوظة؛ تم إلغاء الحفظ لتجنب فقدانها. حدّث الصفحة وحاول مرة أخرى.`);return}let t=(e,t)=>e&&e.trim()?e:t,n={autorefraction:{od:{...e.examData?.autorefraction?.od??{},ucva:t(S.ucvaOD,e.examData?.autorefraction?.od?.ucva),bcva:t(S.bcvaOD,e.examData?.autorefraction?.od?.bcva),iop:t(S.iopOD,e.examData?.autorefraction?.od?.iop)},os:{...e.examData?.autorefraction?.os??{},ucva:t(S.ucvaOS,e.examData?.autorefraction?.os?.ucva),bcva:t(S.bcvaOS,e.examData?.autorefraction?.os?.bcva),iop:t(S.iopOS,e.examData?.autorefraction?.os?.iop)}},pentacam:e.examData?.pentacam??{}};await ve.mutateAsync({patientId:x,sheetType:`specialist`,content:JSON.stringify({...e,formData:{...e.formData??{},...S},examData:n,checks:{glasses:M,xray:P},notes:O,finalDecision:A})}),await ye.mutateAsync({patientId:x,glassesData:{od:{s:S.refractionOD.s||void 0,c:S.refractionOD.c||void 0,axis:S.refractionOD.a||void 0,bcva:S.bcvaOD||void 0},os:{s:S.refractionOS.s||void 0,c:S.refractionOS.c||void 0,axis:S.refractionOS.a||void 0,bcva:S.bcvaOS||void 0}}})}catch(e){i.error(ne(e,`حدث خطأ أثناء الحفظ`))}},Ee=()=>{s(`${String(S.patientName||S.patientCode||x||`specialist-sheet`).trim()}.pdf`,{forceBrowserPrint:!0})},$=e=>{let t=d();l({...t,layout:{...t.layout,specialist:{...t.layout.specialist,...e}}})};return(0,y.jsxs)(`div`,{className:`min-h-screen bg-[#dde1e7] sheet-layout specialist-page-root ${Q.printView?`print-view-active`:``} ${pe&&!Q.printView?`mobile-sheet-mode`:``}`,dir:`rtl`,children:[(0,y.jsx)(`style`,{children:`
        ${ue}
        .refraction-table-center th,
        .refraction-table-center td {
          text-align: center !important;
        }
        .refraction-table-center input {
          text-align: center !important;
        }
        .specialist-sheet {
          font-weight: 400;
          text-decoration: none;
        }
        .specialist-sheet th { font-weight: 600 !important; }
        .specialist-sheet table input { font-weight: 600 !important; }
        .patient-row-bold, .patient-row-bold * { font-weight: 700 !important; }
        .patient-row-normal, .patient-row-normal * { font-weight: 400 !important; }
        .specialist-sheet .border-b,
        .specialist-sheet .border-b-2 {
          border-bottom: none !important;
        }
        .specialist-sheet .sheet-print-header {
          display: grid !important;
          grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr) !important;
          align-items: center !important;
          border-bottom: 2px solid #003d9b !important;
          padding-bottom: 10px !important;
          margin-bottom: 10px !important;
        }
        .specialist-sheet .sheet-print-clinic-name {
          font-size: 24px !important;
          font-weight: 700 !important;
          line-height: 1.1 !important;
          color: #003d9b !important;
        }
        .specialist-sheet .sheet-print-clinic-tagline {
          font-size: 14px !important;
          font-weight: 400 !important;
          line-height: 1.2 !important;
          color: #434654 !important;
        }
        .specialist-sheet .sheet-print-logo {
          width: 64px !important;
          height: 64px !important;
        }
        .specialist-sheet .sheet-print-type {
          font-size: 20px !important;
          font-weight: 700 !important;
          line-height: 1.15 !important;
          color: #191c1e !important;
        }
        .specialist-sheet .sheet-watermark {
          opacity: 1 !important;
        }
        @media print {
          /* Scrollbars are useful on screen but must never be captured in print/PDF output. */
          html, body, #root,
          .specialist-page-root,
          .specialist-page-root * {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
          html::-webkit-scrollbar,
          body::-webkit-scrollbar,
          #root::-webkit-scrollbar,
          .specialist-page-root::-webkit-scrollbar,
          .specialist-page-root *::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
          .specialist-page-root,
          .specialist-sheet {
            overflow: visible !important;
          }
          .print-page-center-a5 { width: 100%; margin: 0 auto; }
          body { background: white !important; }
          /* the shared .sheet-layout print rule clips this page's fixed-width sheet — undo it here */
          .specialist-page-root.sheet-layout {
            overflow: visible !important;
            max-height: none !important;
            min-height: 0 !important;
            font-size: 100% !important;
          }
          .specialist-sheet {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            min-height: 0 !important;
            box-sizing: border-box !important;
            margin: 0 auto !important;
            padding: 5mm !important;
            gap: 6px !important;
            line-height: 1.15 !important;
            border: 0 !important;
            box-shadow: none !important;
            transform: translateX(${I}mm) translateY(${R}mm) scale(${B}) !important;
          }
          .specialist-sheet section,
          .specialist-sheet footer,
          .specialist-sheet table,
          .specialist-sheet tr,
          .specialist-sheet td,
          .specialist-sheet th {
            page-break-inside: avoid !important;
          }
          .specialist-sheet table { font-size: 14px !important; }
          .specialist-sheet table th,
          .specialist-sheet table td,
          .specialist-sheet table input,
          .specialist-sheet table textarea {
            text-align: center !important;
            vertical-align: middle !important;
          }
          .specialist-sheet .sheet-refraction-table th,
          .specialist-sheet .sheet-refraction-table td,
          .specialist-sheet .sheet-refraction-table input {
            font-size: 15px !important;
          }
          .specialist-sheet .sheet-refraction-table tbody td {
            height: 11mm !important;
            padding: 3px 4px !important;
          }
          .specialist-sheet input,
          .specialist-sheet select {
            font-size: 14px !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          .specialist-sheet input:not([type="checkbox"]):not([type="radio"]),
          .specialist-sheet textarea {
            border: 0 !important;
            border-bottom: 0 !important;
            box-shadow: none !important;
            outline: 0 !important;
            background: transparent !important;
            text-decoration: none !important;
            line-height: 1.15 !important;
          }
          .specialist-sheet .patient-detail-emphasis {
            font-size: 14px !important;
            font-weight: 700 !important;
          }
          .specialist-sheet .sheet-print-header {
            border-bottom: 2px solid #003d9b !important;
            padding-bottom: 2mm !important;
            margin-bottom: 2mm !important;
          }
          .specialist-sheet .sheet-print-clinic-name {
            font-size: 21px !important;
            font-weight: 700 !important;
          }
          .specialist-sheet .sheet-print-clinic-tagline {
            font-size: 12px !important;
            font-weight: 400 !important;
          }
          .specialist-sheet .sheet-print-logo {
            width: 15mm !important;
            height: 15mm !important;
          }
          .specialist-sheet .sheet-print-type {
            font-size: 18px !important;
            font-weight: 700 !important;
          }
          .specialist-sheet .sheet-watermark img {
            width: 120mm !important;
            height: 120mm !important;
            opacity: 0.055 !important;
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }
          .specialist-sheet .p-8 { padding: 0 !important; }
          .specialist-sheet .p-4 { padding: 4px !important; }
          .specialist-sheet .gap-8 { gap: 10px !important; }
          .specialist-sheet .gap-6 { gap: 8px !important; }
          .specialist-sheet .gap-x-8 { column-gap: 10px !important; }
          .specialist-sheet .gap-y-3 { row-gap: 3px !important; }
          .specialist-sheet .pt-6 { padding-top: 6px !important; }
          .specialist-sheet .pt-4 { padding-top: 5px !important; }
          .specialist-sheet .mt-3 { margin-top: 4px !important; }
          .specialist-sheet .mb-3 { margin-bottom: 4px !important; }
          .specialist-sheet .h-9 { height: 16px !important; }
          .specialist-sheet .h-8 { height: 13px !important; }
          .specialist-sheet .h-6 { height: 11px !important; }
          .specialist-sheet .space-y-6 > * + * { margin-top: 6px !important; }
          .specialist-sheet .space-y-4 > * + * { margin-top: 4px !important; }
          .print-sheet-patient-grid {
            display: flex !important;
            flex-wrap: wrap !important;
            column-gap: 5mm !important;
            row-gap: 1mm !important;
          }
          .print-specialist-footer-grid {
            display: grid !important;
            grid-template-columns: minmax(0, 8fr) minmax(0, 4fr) !important;
          }
          .print-specialist-signatures {
            display: grid !important;
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
        }
      `}),(0,y.jsxs)(`header`,{className:`sticky top-0 z-50 flex items-center justify-between border-b border-border/60 bg-card px-6 py-2 print:hidden ${Q.printView?`hidden`:``}`,dir:`ltr`,style:{fontFamily:`Inter, sans-serif`},children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(a,{variant:`ghost`,size:`sm`,type:`button`,onClick:()=>ae(),children:`رجوع`}),e?.role===`admin`&&!Q.printView?(0,y.jsxs)(`details`,{className:`print:hidden text-xs`,dir:`rtl`,children:[(0,y.jsx)(`summary`,{className:`cursor-pointer select-none text-muted-foreground hover:text-foreground`,children:`إعدادات الطباعة`}),(0,y.jsxs)(`div`,{className:`mt-2 flex w-52 flex-col gap-1.5 rounded-md border border-border bg-card p-2`,children:[(0,y.jsxs)(`label`,{className:`flex items-center justify-between gap-2`,children:[(0,y.jsx)(`span`,{children:`إزاحة أفقية (مم)`}),(0,y.jsx)(`input`,{type:`number`,step:`0.5`,className:`w-16 rounded border border-border bg-background px-1 py-0.5 text-right`,value:I,onChange:e=>{let t=Number(e.target.value)||0;L(t),$({offsetXmm:t})}})]}),(0,y.jsxs)(`label`,{className:`flex items-center justify-between gap-2`,children:[(0,y.jsx)(`span`,{children:`إزاحة رأسية (مم)`}),(0,y.jsx)(`input`,{type:`number`,step:`0.5`,className:`w-16 rounded border border-border bg-background px-1 py-0.5 text-right`,value:R,onChange:e=>{let t=Number(e.target.value)||0;z(t),$({offsetYmm:t})}})]}),(0,y.jsxs)(`label`,{className:`flex items-center justify-between gap-2`,children:[(0,y.jsx)(`span`,{children:`مقياس الطباعة`}),(0,y.jsx)(`input`,{type:`number`,step:`0.05`,className:`w-16 rounded border border-border bg-background px-1 py-0.5 text-right`,value:B,onChange:e=>{let t=Number(e.target.value)||1;V(t),$({scale:t})}})]})]})]}):null]}),(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(a,{size:`sm`,className:`rounded bg-primary px-4 py-2 font-bold text-primary-foreground hover:opacity-90`,onClick:Te,disabled:xe,type:`button`,children:xe?`حفظ…`:`حفظ`}),(0,y.jsxs)(a,{size:`sm`,variant:`outline`,className:`rounded border-primary px-4 py-2 font-bold text-primary hover:bg-primary/5`,onClick:Ee,type:`button`,children:[(0,y.jsx)(ie,{className:`h-4 w-4 mr-1`}),` طباعة`]})]})]}),Q.printView&&(0,y.jsx)(oe,{title:`مقاس نظارة / أشعة خارجي`,subtitle:S.patientName||void 0,onPrint:Ee}),(0,y.jsxs)(`div`,{className:`py-8 print:py-0 print-page-center-a5`,children:[!Q.printView&&!x?(0,y.jsxs)(`div`,{className:`print:hidden mx-auto mb-6 max-w-md rounded-xl border border-border bg-card p-4 text-center`,dir:`rtl`,children:[(0,y.jsx)(`p`,{className:`mb-3 text-sm font-semibold text-foreground`,children:`اختر مريضًا لفتح شيت مقاس النظارة`}),(0,y.jsx)(c,{onSelect:be,placeholder:`ابحث برمز المريض`})]}):null,!Q.printView&&Ce?(0,y.jsxs)(`div`,{role:`alert`,className:`print:hidden mx-auto mb-6 flex max-w-2xl flex-wrap items-center justify-between gap-3 rounded-lg border border-red-300 bg-red-50 px-4 py-3`,dir:`rtl`,children:[(0,y.jsx)(`p`,{className:`text-sm font-semibold text-red-900`,children:`تعذر تحميل بيانات المريض. تحقق من الاتصال ثم أعد المحاولة.`}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>{for(let e of Se)e.isError&&e.refetch()},className:`rounded-md border border-red-400 bg-white px-3 py-1.5 text-xs font-bold text-red-900 hover:bg-red-100`,children:`إعادة المحاولة`})]}):null,!Q.printView&&we?(0,y.jsx)(`div`,{role:`status`,className:`print:hidden mx-auto mb-6 max-w-2xl rounded-lg border border-border bg-muted px-4 py-2 text-center text-sm text-muted-foreground`,dir:`rtl`,children:`جارٍ تحميل بيانات المريض…`}):null,(0,y.jsxs)(`div`,{"data-mobile-pdf-root":!0,className:`specialist-sheet relative overflow-hidden bg-white text-[#191c1e] font-sans p-8 border border-[#c3c6d6] shadow-sm flex flex-col gap-5 w-[210mm] max-w-full mx-auto ${Q.printView?`hidden print:flex`:``}`,dir:`ltr`,children:[(0,y.jsx)(le,{}),(0,y.jsx)(ce,{sheetType:`مقاس نظارة / أشعة خارجي`,sheetTypeContent:(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,dir:`rtl`,children:[(0,y.jsxs)(`label`,{className:`flex items-center gap-2 text-sm font-bold text-[#191c1e]`,children:[(0,y.jsx)(`input`,{type:`checkbox`,className:`w-4 h-4 rounded text-[#003d9b]`,checked:M,onChange:e=>N(e.target.checked)}),`مقاس نظارة`]}),(0,y.jsxs)(`label`,{className:`flex items-center gap-2 text-sm font-bold text-[#191c1e]`,children:[(0,y.jsx)(`input`,{type:`checkbox`,className:`w-4 h-4 rounded text-[#003d9b]`,checked:P,onChange:e=>F(e.target.checked)}),`أشعة`]})]})}),(0,y.jsx)(b,{patientName:S.patientName,onPatientNameChange:e=>C(t=>({...t,patientName:e})),age:S.age,onAgeChange:e=>C(t=>({...t,age:e})),dateOfBirth:S.dateOfBirth,address:S.address,onAddressChange:e=>C(t=>({...t,address:e})),phone:S.phone,onPhoneChange:e=>C(t=>({...t,phone:e})),alternatePhone:S.alternatePhone,onAlternatePhoneChange:e=>C(t=>({...t,alternatePhone:e})),patientCode:S.patientCode,onPatientCodeChange:e=>C(t=>({...t,patientCode:e})),examinationDate:S.examinationDate,onExaminationDateChange:e=>C(t=>({...t,examinationDate:e})),job:S.job,onJobChange:e=>C(t=>({...t,job:e})),doctorName:w.doctor,onDoctorNameChange:e=>T(t=>({...t,doctor:e})),ucvaOD:S.ucvaOD,onUcvaODChange:e=>C(t=>({...t,ucvaOD:e})),ucvaOS:S.ucvaOS,onUcvaOSChange:e=>C(t=>({...t,ucvaOS:e})),bcvaOD:S.bcvaOD,onBcvaODChange:e=>C(t=>({...t,bcvaOD:e})),bcvaOS:S.bcvaOS,onBcvaOSChange:e=>C(t=>({...t,bcvaOS:e})),iopOD:S.iopOD,onIopODChange:e=>C(t=>({...t,iopOD:e})),iopOS:S.iopOS,onIopOSChange:e=>C(t=>({...t,iopOS:e})),refractionOD:S.refractionOD,onRefractionODChange:e=>C(t=>({...t,refractionOD:e})),refractionOS:S.refractionOS,onRefractionOSChange:e=>C(t=>({...t,refractionOS:e})),readingValue:E,onReadingValueChange:D,compactEyeTable:!0}),(0,y.jsxs)(`footer`,{className:`pt-6 border-t-2 border-[#003d9b] space-y-6`,children:[(0,y.jsxs)(`div`,{className:`print-specialist-footer-grid grid grid-cols-1 lg:grid-cols-12 gap-8`,children:[(0,y.jsxs)(`div`,{className:`lg:col-span-8 space-y-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`label`,{htmlFor:`specialist-notes`,className:`font-bold text-[#003d9b] text-sm`,children:`Comments / ملاحظات:`}),(0,y.jsx)(o,{id:`specialist-notes`,value:O,onChange:e=>k(e.target.value),className:`mt-1 min-h-20 resize-none border-0 border-b border-[#c3c6d6] bg-transparent p-1`})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`label`,{htmlFor:`specialist-final-decision`,className:`font-bold text-[#003d9b] text-sm`,children:`Final Decision / القرار النهائي:`}),(0,y.jsx)(o,{id:`specialist-final-decision`,value:A,onChange:e=>j(e.target.value),className:`mt-1 min-h-16 resize-none border-0 border-b border-[#c3c6d6] bg-transparent p-1`})]})]}),(0,y.jsx)(`div`,{className:`lg:col-span-4 border-2 border-[#003d9b] rounded-xl p-4 bg-[#003d9b]/5`,children:(0,y.jsx)(`div`,{className:`text-center font-bold text-[#003d9b] text-xs border-b border-[#003d9b]/20 pb-2 mb-3`,children:`Notes | ملاحظات`})})]}),(0,y.jsx)(`div`,{className:`print-specialist-signatures grid grid-cols-2 md:grid-cols-4 gap-8 pt-4 border-t border-[#c3c6d6]`,children:[[`التمريض / Nursing`,w.nurse],[`الطبيب / Physician`,w.doctor],[`فني / Optometrist`,w.technician],[`الاستقبال / Reception`,w.reception]].map(([e,t],n)=>(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,y.jsx)(`span`,{className:`text-[11px] font-bold ${n===1?`text-[#003d9b]`:`text-[#434654]`}`,children:e}),(0,y.jsx)(`div`,{className:`border-b-2 h-9 flex items-end justify-center ${n===1?`border-[#003d9b]`:`border-[#191c1e]`}`,children:(0,y.jsx)(`span`,{className:`text-xs italic ${n===1?`text-[#003d9b] font-bold`:`text-[#434654]`}`,children:t||``})})]},n))})]})]})]})]})}export{x as t};