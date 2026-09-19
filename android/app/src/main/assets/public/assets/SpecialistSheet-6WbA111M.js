import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{p as t}from"./charts-CKYPXezW.js";import{S as n}from"./data-core-DDJcqqA3.js";import{t as r}from"./trpc-qBwZs2KI.js";import{a as ee,o as i}from"./react-core-Cbv4oCTl.js";import{r as a}from"./utils-CqY2Hinh.js";import{i as o}from"./ui-misc-DEd6ZQby.js";import{t as s}from"./useAuth-wfS6H89I.js";import{t as c}from"./button-D2qPKJlL.js";import{mt as l}from"./icons-BF-mMtZF.js";import{t as u}from"./date-input-C13EVvFE.js";import{i as d}from"./nativePdf-BFv_2G12.js";import{i as te,n as ne,r as re,t as f}from"./sheetDesigner-BGclgCQ9.js";import{t as p}from"./useAppNavigation-mGNcU55M.js";import{n as m,t as h}from"./PrintPreviewBanner-DgaR90Wd.js";import{n as g,r as _,t as v}from"./sheetDates-CvR7UcpH.js";import{n as ie,t as y}from"./SheetWatermark-4d8jwZFr.js";import{t as b}from"./ws-CsoVwBEJ.js";var x=e(t(),1),S=n();function C({patientName:e,onPatientNameChange:t,age:n,onAgeChange:r,dateOfBirth:ee,address:i,onAddressChange:a,phone:o,onPhoneChange:s,alternatePhone:c,onAlternatePhoneChange:l,patientCode:d,onPatientCodeChange:te,examinationDate:ne,onExaminationDateChange:re,job:f,onJobChange:p,doctorName:m,onDoctorNameChange:h,extraPatientField:g,ucvaOD:_,onUcvaODChange:ie,ucvaOS:y,onUcvaOSChange:b,bcvaOD:x,onBcvaODChange:C,bcvaOS:w,onBcvaOSChange:T,iopOD:E,onIopODChange:D,iopOS:O,onIopOSChange:k,refractionOD:A,onRefractionODChange:j,refractionOS:M,onRefractionOSChange:N,readingValue:P,onReadingValueChange:F,compactEyeTable:I}){let L=`w-full text-center bg-transparent border-0 border-b border-solid border-[#737685] focus:outline-none focus:border-[#003d9b] py-1 text-sm`,R=`p-1 border border-[#c3c6d6]`,z=e=>t=>e(t.target.value);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`section`,{className:`print-sheet-patient-grid p-4 bg-[#f3f4f6] rounded-xl border border-[#c3c6d6] flex flex-col gap-2 text-sm`,dir:`rtl`,children:(0,S.jsxs)(`div`,{className:`patient-info-grid-3x3 grid grid-cols-3 gap-x-4 gap-y-2 text-xs`,children:[(0,S.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap font-bold`,children:[(0,S.jsx)(`span`,{className:`text-[#434654]`,children:`الاسم:`}),(0,S.jsx)(`input`,{size:(e||``).length||12,className:`patient-detail-emphasis text-[#003d9b] bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right text-lg font-extrabold`,dir:`rtl`,value:e,onChange:z(t)})]}),(0,S.jsxs)(`span`,{className:`inline-flex items-center gap-1 whitespace-nowrap font-bold`,children:[(0,S.jsx)(`span`,{className:`text-[#434654]`,children:`تاريخ الميلاد:`}),(0,S.jsx)(`span`,{className:`px-1 border-b border-[#c3c6d6] text-right`,children:v(ee)})]}),(0,S.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap font-bold`,children:[(0,S.jsx)(`span`,{className:`text-[#434654]`,children:`السن:`}),(0,S.jsx)(`input`,{size:(n||``).length||3,className:`patient-detail-emphasis bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right text-sm font-bold`,dir:`rtl`,value:n,onChange:z(r)})]}),(0,S.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap`,children:[(0,S.jsx)(`span`,{className:`text-[#434654]`,children:`المهنة:`}),(0,S.jsx)(`input`,{size:(f||``).length||8,className:`patient-detail-emphasis bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right text-sm font-bold`,dir:`rtl`,value:f,onChange:z(p)})]}),(0,S.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,S.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`العنوان:`}),(0,S.jsx)(`input`,{className:`w-16 min-w-0 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right`,dir:`rtl`,value:i,onChange:z(a)})]}),(0,S.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,S.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`التليفون:`}),(0,S.jsx)(`input`,{className:`w-16 min-w-0 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right`,dir:`rtl`,value:o,onChange:z(s)})]}),(0,S.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,S.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`موبايل 2:`}),(0,S.jsx)(`input`,{className:`w-16 min-w-0 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right`,dir:`rtl`,value:c,onChange:z(l)})]}),(0,S.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,S.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`كود العميل:`}),(0,S.jsx)(`input`,{className:`w-14 min-w-0 font-normal text-xs text-[#526069] bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right`,dir:`rtl`,value:d,onChange:z(te)})]}),(0,S.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,S.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`تاريخ الفحص:`}),(0,S.jsx)(u,{className:`h-6 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] rounded-none px-0.5 text-right`,value:ne,onChange:e=>re(e.target.value)})]}),(0,S.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,S.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`الطبيب:`}),(0,S.jsx)(`input`,{size:(m||``).length||10,className:`min-w-0 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right`,dir:`rtl`,value:m,onChange:z(h)})]}),g]})}),(()=>{let e=`w-14 text-center bg-transparent border-0 border-b border-solid border-[#737685] focus:outline-none focus:border-[#003d9b] py-1 text-sm`,t=(0,S.jsxs)(`table`,{className:`text-center border-collapse w-auto`,children:[(0,S.jsx)(`thead`,{className:`bg-[#e7e8ea] text-xs font-bold uppercase`,children:(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{className:`${R} w-auto`,children:`IOP`}),(0,S.jsx)(`th`,{className:`${R} w-auto text-[#003d9b]`,children:`OD`}),(0,S.jsx)(`th`,{className:`${R} w-auto text-[#526069]`,children:`OS`})]})}),(0,S.jsx)(`tbody`,{children:(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`${R} bg-[#f3f4f6] text-[#434654]`,children:`mmHg`}),(0,S.jsx)(`td`,{className:R,children:(0,S.jsx)(`input`,{className:e,value:E,onChange:z(D)})}),(0,S.jsx)(`td`,{className:R,children:(0,S.jsx)(`input`,{className:e,value:O,onChange:z(k)})})]})})]}),n=(0,S.jsxs)(`table`,{className:`text-center border-collapse w-auto`,children:[(0,S.jsx)(`thead`,{className:`bg-[#e7e8ea] text-xs font-bold uppercase`,children:(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{className:`${R} w-auto`,children:`Eye`}),(0,S.jsx)(`th`,{className:`${R} w-auto`,children:`UCVA`}),(0,S.jsx)(`th`,{className:`${R} w-auto`,children:`BCVA`})]})}),(0,S.jsxs)(`tbody`,{children:[(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`${R} text-[#003d9b] bg-[#003d9b]/5`,children:`OD`}),(0,S.jsx)(`td`,{className:R,children:(0,S.jsx)(`input`,{className:e,value:_,onChange:z(ie)})}),(0,S.jsx)(`td`,{className:R,children:(0,S.jsx)(`input`,{className:e,value:x,onChange:z(C)})})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`${R} text-[#526069] bg-[#f3f4f6]`,children:`OS`}),(0,S.jsx)(`td`,{className:R,children:(0,S.jsx)(`input`,{className:e,value:y,onChange:z(b)})}),(0,S.jsx)(`td`,{className:R,children:(0,S.jsx)(`input`,{className:e,value:w,onChange:z(T)})})]})]})]}),r=(0,S.jsxs)(`table`,{className:`w-full text-center border-collapse`,children:[(0,S.jsxs)(`thead`,{className:`bg-[#e7e8ea] text-xs uppercase font-bold`,children:[(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{className:`${R} w-48`,children:`Refraction`}),(0,S.jsx)(`th`,{className:`${R} text-[#003d9b]`,colSpan:3,children:`OD (Right)`}),(0,S.jsx)(`th`,{className:`${R} text-[#526069]`,colSpan:3,children:`OS (Left)`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{className:R,children:`Distance`}),(0,S.jsx)(`th`,{className:R,children:`S`}),(0,S.jsx)(`th`,{className:R,children:`C`}),(0,S.jsx)(`th`,{className:R,children:`A`}),(0,S.jsx)(`th`,{className:R,children:`S`}),(0,S.jsx)(`th`,{className:R,children:`C`}),(0,S.jsx)(`th`,{className:R,children:`A`})]})]}),(0,S.jsxs)(`tbody`,{className:`font-mono`,children:[(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`${R} bg-[#f3f4f6]`,children:`\xA0`}),(0,S.jsx)(`td`,{className:R,children:(0,S.jsx)(`input`,{className:L,value:A.s,onChange:e=>j({...A,s:e.target.value})})}),(0,S.jsx)(`td`,{className:R,children:(0,S.jsx)(`input`,{className:L,value:A.c,onChange:e=>j({...A,c:e.target.value})})}),(0,S.jsx)(`td`,{className:R,children:(0,S.jsx)(`input`,{className:L,value:A.a,onChange:e=>j({...A,a:e.target.value})})}),(0,S.jsx)(`td`,{className:R,children:(0,S.jsx)(`input`,{className:L,value:M.s,onChange:e=>N({...M,s:e.target.value})})}),(0,S.jsx)(`td`,{className:R,children:(0,S.jsx)(`input`,{className:L,value:M.c,onChange:e=>N({...M,c:e.target.value})})}),(0,S.jsx)(`td`,{className:R,children:(0,S.jsx)(`input`,{className:L,value:M.a,onChange:e=>N({...M,a:e.target.value})})})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`${R} bg-[#f3f4f6] font-bold text-[#003d9b]`,children:`Reading`}),(0,S.jsx)(`td`,{className:R,colSpan:6,children:(0,S.jsxs)(`div`,{className:`flex items-center justify-center gap-2`,children:[(0,S.jsx)(`span`,{className:`whitespace-nowrap font-bold`,children:`Add +`}),(0,S.jsx)(`input`,{className:`${L} max-w-24`,value:P,onChange:z(F)})]})})]})]})]});return I?(0,S.jsxs)(`section`,{className:`print-sheet-visual-grid flex flex-nowrap items-start gap-3`,dir:`ltr`,children:[(0,S.jsxs)(`div`,{className:`flex w-auto shrink-0 flex-col gap-2`,dir:`ltr`,children:[t,n]}),(0,S.jsx)(`div`,{className:`flex-1 min-w-0`,children:r})]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(`section`,{className:`print-sheet-visual-grid flex flex-col gap-2`,children:[t,n]}),(0,S.jsx)(`section`,{children:r})]})})()]})}function w(){let{user:e,isAuthenticated:t}=s(),[,n]=ee(),{goBack:u}=p(),[,v]=i(`/sheets/specialist/:id`),w=v?.id?Number(v.id):void 0,[T,E]=(0,x.useState)({patientName:``,dateOfBirth:``,age:``,address:``,phone:``,alternatePhone:``,patientCode:``,job:``,examinationDate:new Date().toISOString().split(`T`)[0],ucvaOD:``,ucvaOS:``,bcvaOD:``,bcvaOS:``,refractionOD:{s:``,c:``,a:``},refractionOS:{s:``,c:``,a:``},iopOD:``,iopOS:``}),[D,O]=(0,x.useState)({reception:``,nurse:``,technician:``,doctor:``}),[k,A]=(0,x.useState)(``),[j,M]=(0,x.useState)(!1),[N,P]=(0,x.useState)(!1),[F,I]=(0,x.useState)(0),[L,R]=(0,x.useState)(0),[z,B]=(0,x.useState)(1),[ae,V]=(0,x.useState)(``),[oe,H]=(0,x.useState)(f.templates.specialist),U=r.medical.getSystemSetting.useQuery({key:`sheet_designer_config`},{enabled:t,refetchOnWindowFocus:!1}),se=r.medical.getSystemSetting.useQuery({key:`mobile_sheet_mode_v1`},{enabled:t,refetchOnWindowFocus:!1});if((0,x.useEffect)(()=>{t||n(`/`)},[t,n]),(0,x.useEffect)(()=>{let e=re();V(e.css.specialist||``),H(e.templates.specialist),I(e.layout.specialist.offsetXmm),R(e.layout.specialist.offsetYmm),B(e.layout.specialist.scale)},[]),(0,x.useEffect)(()=>{if(!U.data?.value)return;let e=ne(U.data.value);V(e.css.specialist||``),H(e.templates.specialist),I(e.layout.specialist.offsetXmm),R(e.layout.specialist.offsetYmm),B(e.layout.specialist.scale),te(e)},[U.data]),!t)return null;let W=se.data?.value,ce=!!(W&&typeof W==`object`?W.enabled:W),G=r.patient.getPatient.useQuery(w??0,{enabled:!!w,refetchOnWindowFocus:!1}),K=r.medical.getExaminationsByPatient.useQuery({patientId:w??0},{enabled:!!w,refetchOnWindowFocus:!1}),q=r.medical.getGlassesRecordsByPatient.useQuery({patientId:w??0},{enabled:!!w,refetchOnWindowFocus:!1}),J=r.medical.getAutorefractometryByPatient.useQuery({patientId:w??0},{enabled:!!w,refetchOnWindowFocus:!1}),le=r.medical.getVisitsByPatient.useQuery({patientId:w??0},{enabled:!!w,refetchOnWindowFocus:!1}),ue=r.medical.getMedicalReportsByPatient.useQuery({patientId:w??0},{enabled:!!w,refetchOnWindowFocus:!1}),de=r.medical.getPrescriptionsWithItemsByPatient.useQuery({patientId:w??0},{enabled:!!w,refetchOnWindowFocus:!1}),fe=r.medical.getPentacamMeasurementsByPatient.useQuery({patientId:w??0,limit:10},{enabled:!!w,refetchOnWindowFocus:!1}),Y=r.medical.getSheetEntry.useQuery({patientId:w??0,sheetType:`specialist`},{enabled:!!w,refetchOnWindowFocus:!1}),X=r.medical.getPatientPageState.useQuery({patientId:w??0,page:`examination`},{enabled:!!w,refetchOnWindowFocus:!1}),Z=m({ready:!!w&&!G.isLoading&&!K.isLoading&&!Y.isLoading});(0,x.useEffect)(()=>{if(!w)return;let e=b({patientId:w,onUpdate:()=>{Promise.all([Y.refetch(),G.refetch(),K.refetch(),q.refetch(),J.refetch(),le.refetch(),ue.refetch(),de.refetch(),fe.refetch()])}});return()=>e?.close()},[w,Y,G,K,q,J,le,ue,de,fe]);let Q=r.medical.saveSheetEntry.useMutation({onSuccess:()=>{o.success(`تم الحفظ`)}}),pe=r.medical.saveRefractionToExamination.useMutation();(0,x.useEffect)(()=>{if(!G.data)return;let e=G.data;E(t=>({...t,patientName:e.fullName??``,phone:e.phone??``,alternatePhone:e.alternatePhone??``,age:e.age==null?``:String(e.age),dateOfBirth:_(e),address:e.address??``,patientCode:e.patientCode??``,job:e.occupation??``}))},[G.data]),(0,x.useEffect)(()=>{if(Y.data)try{let e=JSON.parse(Y.data);if(e.formData&&E(t=>({...t,...e.formData,patientName:t.patientName||e.formData.patientName,phone:t.phone||e.formData.phone,alternatePhone:t.alternatePhone||e.formData.alternatePhone||``,age:t.age||e.formData.age,dateOfBirth:t.dateOfBirth||g(e.formData.dateOfBirth),address:t.address||e.formData.address})),e.examData?.autorefraction){let t=e.examData.autorefraction;E(e=>({...e,ucvaOD:t.od?.ucva?t.od.ucva:e.ucvaOD,ucvaOS:t.os?.ucva?t.os.ucva:e.ucvaOS,bcvaOD:t.od?.bcva?t.od.bcva:e.bcvaOD,bcvaOS:t.os?.bcva?t.os.bcva:e.bcvaOS,iopOD:t.od?.iop?t.od.iop:e.iopOD,iopOS:t.os?.iop?t.os.iop:e.iopOS}))}e.signatures&&O({reception:e.signatures.reception??``,nurse:e.signatures.nurse??``,technician:e.signatures.technician??``,doctor:e.signatures.doctor??``}),e.checks&&(M(!!e.checks.glasses),P(!!e.checks.xray))}catch{}},[Y.data]),(0,x.useEffect)(()=>{if(!K.data||K.data.length===0)return;let e=K.data[0];if(!e.autorefraction)return;let t=e.autorefraction;E(e=>({...e,ucvaOD:t.od?.ucva?t.od.ucva:e.ucvaOD,ucvaOS:t.os?.ucva?t.os.ucva:e.ucvaOS,bcvaOD:t.od?.bcva?t.od.bcva:e.bcvaOD,bcvaOS:t.os?.bcva?t.os.bcva:e.bcvaOS,iopOD:t.od?.iop?t.od.iop:e.iopOD,iopOS:t.os?.iop?t.os.iop:e.iopOS}))},[K.data]),(0,x.useEffect)(()=>{let e=(q.data??[])[0];e&&E(t=>({...t,bcvaOD:String(e.bcvaOD??t.bcvaOD),bcvaOS:String(e.bcvaOS??t.bcvaOS),refractionOD:{s:String(e.sOD??``),c:String(e.cOD??``),a:String(e.axisOD??``)},refractionOS:{s:String(e.sOS??``),c:String(e.cOS??``),a:String(e.axisOS??``)}}))},[q.data]),(0,x.useEffect)(()=>{let e=(J.data??[])[0];e&&E(t=>({...t,ucvaOD:String(e.ucvaOD??``),ucvaOS:String(e.ucvaOS??``),iopOD:String(e.iopOD??``),iopOS:String(e.iopOS??``)}))},[J.data]),(0,x.useEffect)(()=>{let e=X.data?.data;if(!e)return;let t=String(e.doctorName??``).trim()||String(e.signatures?.doctor??``).trim();t&&O(e=>({...e,doctor:t}))},[X.data]),(0,x.useEffect)(()=>{let t=String(e?.name??``).trim();if(!t)return;let n=String(e?.role??``).toLowerCase();O(e=>({...e,reception:n===`reception`?t:e.reception,nurse:n===`nurse`?t:e.nurse,technician:n===`technician`?t:e.technician,doctor:n===`doctor`?e.doctor||t:e.doctor}))},[e?.name,e?.role,Y.data,X.data]);let me=async()=>{if(!w){o.error(`يرجى اختيار المريض أولاً`);return}try{let e=(()=>{try{return Y.data?JSON.parse(Y.data):{}}catch{return{}}})(),t=(e,t)=>e&&e.trim()?e:t,n={autorefraction:{od:{...e.examData?.autorefraction?.od??{},ucva:t(T.ucvaOD,e.examData?.autorefraction?.od?.ucva),bcva:t(T.bcvaOD,e.examData?.autorefraction?.od?.bcva),iop:t(T.iopOD,e.examData?.autorefraction?.od?.iop)},os:{...e.examData?.autorefraction?.os??{},ucva:t(T.ucvaOS,e.examData?.autorefraction?.os?.ucva),bcva:t(T.bcvaOS,e.examData?.autorefraction?.os?.bcva),iop:t(T.iopOS,e.examData?.autorefraction?.os?.iop)}},pentacam:e.examData?.pentacam??{}};await Q.mutateAsync({patientId:w,sheetType:`specialist`,content:JSON.stringify({...e,formData:{...e.formData??{},...T},examData:n,checks:{glasses:j,xray:N}})}),await pe.mutateAsync({patientId:w,glassesData:{od:{s:T.refractionOD.s||void 0,c:T.refractionOD.c||void 0,axis:T.refractionOD.a||void 0,bcva:T.bcvaOD||void 0},os:{s:T.refractionOS.s||void 0,c:T.refractionOS.c||void 0,axis:T.refractionOS.a||void 0,bcva:T.bcvaOS||void 0}}})}catch(e){o.error(a(e,`حدث خطأ أثناء الحفظ`))}},$=()=>{d(`${String(T.patientName||T.patientCode||w||`specialist-sheet`).trim()}.pdf`,{forceBrowserPrint:!0})};return(0,S.jsxs)(`div`,{className:`min-h-screen bg-[#dde1e7] sheet-layout specialist-page-root ${Z.printView?`print-view-active`:``} ${ce&&!Z.printView?`mobile-sheet-mode`:``}`,dir:`rtl`,children:[(0,S.jsx)(`style`,{children:`
        ${ae}
        .refraction-table-center th,
        .refraction-table-center td {
          text-align: center !important;
        }
        .refraction-table-center input {
          text-align: center !important;
        }
        .specialist-sheet, .specialist-sheet * {
          font-weight: 400 !important;
          text-decoration: none !important;
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
            transform: translateX(${F}mm) translateY(${L}mm) scale(${z}) !important;
          }
          .specialist-sheet section,
          .specialist-sheet footer,
          .specialist-sheet table,
          .specialist-sheet tr,
          .specialist-sheet td,
          .specialist-sheet th {
            page-break-inside: avoid !important;
          }
          .specialist-sheet table { font-size: 12px !important; }
          .specialist-sheet input,
          .specialist-sheet select {
            font-size: 12px !important;
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
      `}),(0,S.jsxs)(`header`,{className:`sticky top-0 z-50 flex items-center justify-between border-b border-border/60 bg-card px-6 py-2 print:hidden ${Z.printView?`hidden`:``}`,dir:`ltr`,style:{fontFamily:`Inter, sans-serif`},children:[(0,S.jsx)(`div`,{className:`flex items-center gap-3`,children:(0,S.jsx)(c,{variant:`ghost`,size:`sm`,type:`button`,onClick:()=>u(),children:`رجوع`})}),(0,S.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,S.jsx)(c,{size:`sm`,className:`rounded bg-primary px-4 py-2 font-bold text-primary-foreground hover:opacity-90 active:scale-95`,onClick:me,disabled:Q.isPending,type:`button`,children:Q.isPending?`حفظ...`:`حفظ`}),(0,S.jsxs)(c,{size:`sm`,variant:`outline`,className:`rounded border-primary px-4 py-2 font-bold text-primary hover:bg-primary/5`,onClick:$,type:`button`,children:[(0,S.jsx)(l,{className:`h-4 w-4 mr-1`}),` طباعة`]})]})]}),Z.printView&&(0,S.jsx)(h,{title:`مقاس نظاره / اشعه خارجي`,subtitle:T.patientName||void 0,onPrint:$}),(0,S.jsxs)(`div`,{className:`py-8 print:py-0 print-page-center-a5`,children:[(0,S.jsxs)(`div`,{"data-mobile-pdf-root":!0,className:`specialist-sheet relative overflow-hidden bg-white text-[#191c1e] font-sans p-8 border border-[#c3c6d6] shadow-sm flex flex-col gap-5 w-[210mm] max-w-full mx-auto ${Z.printView?`hidden print:flex`:``}`,dir:`ltr`,children:[(0,S.jsx)(y,{}),(0,S.jsx)(ie,{sheetType:`مقاس نظاره / اشعه خارجي`,sheetTypeContent:(0,S.jsxs)(`div`,{className:`flex flex-col gap-1`,dir:`rtl`,children:[(0,S.jsxs)(`label`,{className:`flex items-center gap-2 text-sm font-bold text-[#191c1e]`,children:[(0,S.jsx)(`input`,{type:`checkbox`,className:`w-4 h-4 rounded text-[#003d9b]`,checked:j,onChange:e=>M(e.target.checked)}),`مقاس نظارة`]}),(0,S.jsxs)(`label`,{className:`flex items-center gap-2 text-sm font-bold text-[#191c1e]`,children:[(0,S.jsx)(`input`,{type:`checkbox`,className:`w-4 h-4 rounded text-[#003d9b]`,checked:N,onChange:e=>P(e.target.checked)}),`أشعة`]})]})}),(0,S.jsx)(C,{patientName:T.patientName,onPatientNameChange:e=>E(t=>({...t,patientName:e})),age:T.age,onAgeChange:e=>E(t=>({...t,age:e})),dateOfBirth:T.dateOfBirth,address:T.address,onAddressChange:e=>E(t=>({...t,address:e})),phone:T.phone,onPhoneChange:e=>E(t=>({...t,phone:e})),alternatePhone:T.alternatePhone,onAlternatePhoneChange:e=>E(t=>({...t,alternatePhone:e})),patientCode:T.patientCode,onPatientCodeChange:e=>E(t=>({...t,patientCode:e})),examinationDate:T.examinationDate,onExaminationDateChange:e=>E(t=>({...t,examinationDate:e})),job:T.job,onJobChange:e=>E(t=>({...t,job:e})),doctorName:D.doctor,onDoctorNameChange:e=>O(t=>({...t,doctor:e})),ucvaOD:T.ucvaOD,onUcvaODChange:e=>E(t=>({...t,ucvaOD:e})),ucvaOS:T.ucvaOS,onUcvaOSChange:e=>E(t=>({...t,ucvaOS:e})),bcvaOD:T.bcvaOD,onBcvaODChange:e=>E(t=>({...t,bcvaOD:e})),bcvaOS:T.bcvaOS,onBcvaOSChange:e=>E(t=>({...t,bcvaOS:e})),iopOD:T.iopOD,onIopODChange:e=>E(t=>({...t,iopOD:e})),iopOS:T.iopOS,onIopOSChange:e=>E(t=>({...t,iopOS:e})),refractionOD:T.refractionOD,onRefractionODChange:e=>E(t=>({...t,refractionOD:e})),refractionOS:T.refractionOS,onRefractionOSChange:e=>E(t=>({...t,refractionOS:e})),readingValue:k,onReadingValueChange:A,compactEyeTable:!0}),(0,S.jsxs)(`footer`,{className:`pt-6 border-t-2 border-[#003d9b] space-y-6`,children:[(0,S.jsxs)(`div`,{className:`print-specialist-footer-grid grid grid-cols-1 lg:grid-cols-12 gap-8`,children:[(0,S.jsxs)(`div`,{className:`lg:col-span-8 space-y-4`,children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`label`,{className:`font-bold text-[#003d9b] text-sm`,children:`Comments / ملاحظات:`}),(0,S.jsx)(`div`,{className:`border-b border-solid border-[#c3c6d6] h-8`}),(0,S.jsx)(`div`,{className:`border-b border-solid border-[#c3c6d6] h-8`})]}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`label`,{className:`font-bold text-[#003d9b] text-sm`,children:`Final Decision / القرار النهائي:`}),(0,S.jsx)(`div`,{className:`border-b border-solid border-[#c3c6d6] h-8`})]})]}),(0,S.jsxs)(`div`,{className:`lg:col-span-4 border-2 border-[#003d9b] rounded-xl p-4 bg-[#003d9b]/5`,children:[(0,S.jsx)(`div`,{className:`text-center font-bold text-[#003d9b] uppercase text-xs border-b border-[#003d9b]/20 pb-2 mb-3`,children:`Office Notes`}),(0,S.jsx)(`div`,{className:`border-b border-solid border-[#003d9b]/40 h-6 mb-2`}),(0,S.jsx)(`div`,{className:`border-b border-solid border-[#003d9b]/40 h-6 mb-2`}),(0,S.jsx)(`div`,{className:`border-b border-solid border-[#003d9b]/40 h-6`})]})]}),(0,S.jsx)(`div`,{className:`print-specialist-signatures grid grid-cols-2 md:grid-cols-4 gap-8 pt-4 border-t border-[#c3c6d6]`,children:[[`التمريض / Nursing`,D.nurse],[`الطبيب / Physician`,D.doctor],[`فني / Optometrist`,D.technician],[`الاستقبال / Reception`,D.reception]].map(([e,t],n)=>(0,S.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,S.jsx)(`span`,{className:`text-[11px] font-bold uppercase ${n===1?`text-[#003d9b]`:`text-[#434654]`}`,children:e}),(0,S.jsx)(`div`,{className:`border-b-2 h-9 flex items-end justify-center ${n===1?`border-[#003d9b]`:`border-[#191c1e]`}`,children:(0,S.jsx)(`span`,{className:`text-xs italic ${n===1?`text-[#003d9b] font-bold`:`text-[#737685]`}`,children:t||``})})]},n))})]})]}),(0,S.jsxs)(`div`,{className:`sheet-mobile-actions print:hidden ${Z.printView?`hidden`:``}`,children:[(0,S.jsx)(c,{type:`button`,variant:`outline`,onClick:()=>u(),children:`رجوع`}),(0,S.jsx)(c,{type:`button`,variant:`outline`,onClick:$,children:`طباعة`}),(0,S.jsx)(c,{type:`button`,variant:`default`,onClick:me,children:`حفظ`})]})]})]})}export{w as t};