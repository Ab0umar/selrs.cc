import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{p as t}from"./charts-CKYPXezW.js";import{S as n}from"./data-core-DDJcqqA3.js";import{t as r}from"./trpc-qBwZs2KI.js";import{a as i,o as a}from"./react-core-Cbv4oCTl.js";import{r as o}from"./utils-CqY2Hinh.js";import{i as s}from"./ui-misc-DEd6ZQby.js";import{t as c}from"./useAuth-wfS6H89I.js";import{t as l}from"./button-CRN8yK1L.js";import{S as u,Z as ee,mt as te}from"./icons-CoVW7jzB.js";import{c as ne,i as re,l as ie}from"./refractionOptions-B1fjLv9h.js";import{t as d}from"./RefractionValueSelect-BcUK4SNo.js";import{t as ae}from"./date-input-D9Ib-ire.js";import{i as oe}from"./nativePdf-BFv_2G12.js";import{t as se}from"./PatientPicker-C_zCbISp.js";import{i as ce,n as le,r as ue,t as de}from"./sheetDesigner-BGclgCQ9.js";import{t as fe}from"./useAppNavigation-mGNcU55M.js";import{n as pe,t as me}from"./PrintPreviewBanner-DI6Z3AYh.js";import{n as he,r as ge,t as _e}from"./sheetDates-CvR7UcpH.js";import{n as ve,t as ye}from"./SheetWatermark-CITQcvWS.js";import{t as be}from"./FollowupTablesBody-C2sSADdZ.js";import{t as xe}from"./ws-CsoVwBEJ.js";var f=e(t(),1),p=n();function Se({value:e,onChange:t}){let n=(0,f.useRef)(null),r=(0,f.useRef)(!1);(0,f.useEffect)(()=>{let t=n.current,r=t?.getContext(`2d`);if(!t||!r||(r.clearRect(0,0,t.width,t.height),!e))return;let i=new Image;i.onload=()=>{r.clearRect(0,0,t.width,t.height),r.drawImage(i,0,0,t.width,t.height)},i.src=e},[e]);let i=()=>{r.current=!1;let e=n.current;e&&t(e.toDataURL(`image/webp`,.82))},a=e=>{let t=e.currentTarget.getBoundingClientRect();return{x:(e.clientX-t.left)/t.width*e.currentTarget.width,y:(e.clientY-t.top)/t.height*e.currentTarget.height}};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`canvas`,{ref:n,width:360,height:720,className:`absolute inset-0 z-10 h-full w-full touch-none cursor-crosshair`,onPointerDown:e=>{r.current=!0,e.currentTarget.setPointerCapture(e.pointerId);let t=e.currentTarget.getContext(`2d`),n=a(e);t?.beginPath(),t?.moveTo(n.x,n.y)},onPointerMove:e=>{if(!r.current)return;let t=e.currentTarget.getContext(`2d`);if(!t)return;let n=a(e);t.strokeStyle=`#dc2626`,t.lineWidth=2.5,t.lineCap=`round`,t.lineJoin=`round`,t.lineTo(n.x,n.y),t.stroke()},onPointerUp:i,onPointerCancel:i}),(0,p.jsx)(`button`,{type:`button`,title:`مسح الرسم`,"aria-label":`مسح الرسم`,className:`absolute right-1 top-1 z-20 flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-[10px] font-bold text-slate-500 shadow print:hidden`,onClick:()=>{let e=n.current;e&&(e.getContext(`2d`)?.clearRect(0,0,e.width,e.height),t(``))},children:`×`})]})}var Ce=[`المتابعة الأولى`,`المتابعة الثانية`,`المتابعة الثالثة`,`المتابعة الرابعة`];function we(e=Ce){return Ce.map((t,n)=>({id:`empty-${n+1}`,date:``,type:e[n]??t}))}function m({embedded:e=!1,patientId:t,visitId:n,sheetType:Ce,embeddedMode:m=`full`}={}){let[h,Te]=(0,f.useState)(n),{user:g,isAuthenticated:_}=c(),[,Ee]=i(),{goBack:De}=fe(),[,Oe]=a(`/sheets/:type/:id`),v=typeof window<`u`?window.location.pathname:``,y=Ce??(v.includes(`/sheets/consultant`)?`consultant`:v.includes(`/sheets/external`)||v.includes(`/sheets/operation`)?`external`:`lasik`),ke=y===`consultant`?`كشف`:y===`external`?`د.الصواف`:`تصحيح ابصار`,Ae=(()=>{if(Oe?.id)return Number(Oe.id);if(typeof window>`u`)return;let e=window.location.pathname.match(/^\/(?:patient-hub\/)?sheets\/(?:lasik|consultant|external)\/(\d+)/);return e?.[1]?Number(e[1]):void 0})(),b=Number.isFinite(t)?t:Number.isFinite(Ae)?Ae:void 0;typeof window<`u`&&new URLSearchParams(window.location.search).get(`original`);let je=typeof window<`u`&&new URLSearchParams(window.location.search).get(`includeFollowups`)===`1`,Me=y===`consultant`?de.followupConsultant:de.followupLasik,[x,Ne]=(0,f.useState)(Me),[Pe,S]=(0,f.useState)(()=>we(Me.followupNames)),[C,w]=(0,f.useState)({}),[Fe,Ie]=(0,f.useState)(``),[Le,Re]=(0,f.useState)(``),[T,E]=(0,f.useState)(``),[D,O]=(0,f.useState)(``),[ze,k]=(0,f.useState)({right:!0,left:!1,both:!1}),[A,j]=(0,f.useState)({patientName:``,dateOfBirth:``,age:``,address:``,phone:``,alternatePhone:``,patientCode:``,job:``,examinationDate:new Date().toISOString().split(`T`)[0]}),[M,N]=(0,f.useState)({autorefraction:{od:{s:``,c:``,axis:``,va:``,iop:``,ucva:``,bcva:``},os:{s:``,c:``,axis:``,va:``,iop:``,ucva:``,bcva:``}},pentacam:{od:{k1:``,k2:``,ax1:``,ax2:``,thinnest:``,apex:``,residual:``,ttt:``,ablation:``},os:{k1:``,k2:``,ax1:``,ax2:``,thinnest:``,apex:``,residual:``,ttt:``,ablation:``}}}),[P,F]=(0,f.useState)({od:{s:``,c:``,axis:``,pd:``},os:{s:``,c:``,axis:``,pd:``}}),[I,L]=(0,f.useState)({reception:``,nurse:``,technician:``,doctor:y===`external`?`د. الصواف`:``}),[Be,Ve]=(0,f.useState)(``),[He,Ue]=(0,f.useState)(``),[We,Ge]=(0,f.useState)(``),[Ke,qe]=(0,f.useState)(``),[R,z]=(0,f.useState)({externalPtosis:!1,externalSquint:!1,externalOthers:!1,externalOthersNote:``,muscleNormal:!1,muscleAbnormal:!1,muscleAbnormalNote:``,otherAbnormalities:``,fundusNormal:!1,fundusAbnormal:!1,fundusAbnormalNote:``,complains:``});(0,f.useEffect)(()=>{Te(n)},[n]),(0,f.useEffect)(()=>{h&&(z({externalPtosis:!1,externalSquint:!1,externalOthers:!1,externalOthersNote:``,muscleNormal:!1,muscleAbnormal:!1,muscleAbnormalNote:``,otherAbnormalities:``,fundusNormal:!1,fundusAbnormal:!1,fundusAbnormalNote:``,complains:``}),F({od:{s:``,c:``,axis:``,pd:``},os:{s:``,c:``,axis:``,pd:``}}),qe(``))},[h]);let[B,Je]=(0,f.useState)(``),[Ye,Xe]=(0,f.useState)(!1),Ze=r.medical.getAllSymptoms.useQuery(void 0,{refetchOnWindowFocus:!1}),V=(e,t)=>{z(n=>({...n,[e]:t}))},[Qe,$e]=(0,f.useState)(0),[et,tt]=(0,f.useState)(0),[nt,rt]=(0,f.useState)(1),[it,at]=(0,f.useState)(``),[ot,st]=(0,f.useState)(de.templates.lasik),ct=r.medical.getSystemSetting.useQuery({key:`sheet_designer_config`},{enabled:_,refetchOnWindowFocus:!1}),lt=r.medical.getSystemSetting.useQuery({key:`mobile_sheet_mode_v1`},{enabled:_,refetchOnWindowFocus:!1});if((0,f.useEffect)(()=>{_||Ee(`/`)},[_,Ee]),(0,f.useEffect)(()=>{let e=ue();at(e.css[y]||``),st(e.templates[y]),$e(e.layout[y].offsetXmm),tt(e.layout[y].offsetYmm),rt(e.layout[y].scale);let t=y===`consultant`?e.followupConsultant:e.followupLasik;Ne(t),S(e=>e.map((e,n)=>({...e,type:t.followupNames[n]??e.type})))},[y]),(0,f.useEffect)(()=>{if(!ct.data?.value)return;let e=le(ct.data.value);at(e.css[y]||``),st(e.templates[y]),$e(e.layout[y].offsetXmm),tt(e.layout[y].offsetYmm),rt(e.layout[y].scale);let t=y===`consultant`?e.followupConsultant:e.followupLasik;Ne(t),S(e=>e.map((e,n)=>({...e,type:t.followupNames[n]??e.type}))),ce(e)},[y,ct.data]),!_)return null;let ut=lt.data?.value;ut&&typeof ut==`object`&&ut.enabled;let H=r.patient.getPatient.useQuery(b??0,{enabled:!!b,refetchOnWindowFocus:!1}),U=r.medical.getSheetEntry.useQuery({patientId:b??0,visitId:h,sheetType:y},{enabled:!!b,refetchOnWindowFocus:!1}),dt=y===`consultant`?`lasik`:y===`lasik`?`consultant`:null,ft=r.medical.getSheetEntry.useQuery({patientId:b??0,sheetType:dt??`consultant`},{enabled:!!b&&je&&!!dt,refetchOnWindowFocus:!1}),pt=r.medical.getPatientPageState.useQuery({patientId:b??0,page:`examination`},{enabled:!!b,refetchOnWindowFocus:!1}),W=r.medical.getExaminationsByPatient.useQuery({patientId:b??0},{enabled:!!b,refetchOnWindowFocus:!1}),G=r.medical.getGlassesRecordsByPatient.useQuery({patientId:b??0},{enabled:!!b,refetchOnWindowFocus:!1}),K=r.medical.getAutorefractometryByPatient.useQuery({patientId:b??0},{enabled:!!b,refetchOnWindowFocus:!1}),mt=r.medical.getExaminationChecklistsByPatient.useQuery({patientId:b??0},{enabled:!!b,refetchOnWindowFocus:!1}),q=r.medical.getVisitsByPatient.useQuery({patientId:b??0},{enabled:!!b,refetchOnWindowFocus:!1}),J=m!==`examination`&&(y===`consultant`||y===`lasik`),Y=r.medical.getFollowupSheets.useQuery({patientId:b??0},{enabled:!!b&&J,refetchOnWindowFocus:!1}),X=pe({ready:!!b&&!U.isLoading&&!W.isLoading&&!q.isLoading&&(!J||!Y.isLoading)}),Z=r.medical.getMedicalReportsByPatient.useQuery({patientId:b??0},{enabled:!!b,refetchOnWindowFocus:!1}),ht=r.medical.getPrescriptionsByPatient.useQuery({patientId:b??0},{enabled:!!b,refetchOnWindowFocus:!1}),gt=r.medical.getSurgeriesByPatient.useQuery({patientId:b??0},{enabled:!!b,refetchOnWindowFocus:!1}),_t=r.medical.getPentacamFilesByPatient.useQuery({patientId:b??0},{enabled:!!b,refetchOnWindowFocus:!1}),vt=r.medical.getTestRequestsByPatient.useQuery({patientId:b??0},{enabled:!!b,refetchOnWindowFocus:!1}),yt=r.medical.getMedicalHistoryByPatient.useQuery({patientId:b??0},{enabled:!!b,refetchOnWindowFocus:!1}),bt=r.medical.upsertMedicalHistory.useMutation();(0,f.useEffect)(()=>{if(!Y.data)return;let e=e=>{if(!e)return{};try{return typeof e==`string`?JSON.parse(e):e}catch{return{}}},t=Y.data.slice().sort((e,t)=>Number(e.version)-Number(t.version)).flatMap(e=>(e.items??[]).map(t=>({...t,sheetVersion:e.version}))).filter(e=>e.followupDate).sort((e,t)=>{let n=new Date(e.followupDate).getTime()-new Date(t.followupDate).getTime();if(n!==0)return n;let r=Number(e.sheetVersion)-Number(t.sheetVersion);return r===0?Number(e.tableIndex)-Number(t.tableIndex):r}).slice(0,4);S(we(x.followupNames).map((n,r)=>{let i=t[r];if(!i)return n;let a=e(i.refracOD),o=e(i.refracOS);return{...n,id:i.id,date:he(i.followupDate),odVa:i.vaOD??``,osVa:i.vaOS??``,odS:a.s??``,odC:a.c??``,odAxis:a.axis??``,osS:o.s??``,osC:o.c??``,osAxis:o.axis??``,odIop:i.iopOD??``,osIop:i.iopOS??``,treatment:i.treatment??``,notes:i.notes??``}}))},[x.followupNames,Y.data]),(0,f.useEffect)(()=>{let e=!1;try{let t=U.data?JSON.parse(U.data):null;e=Object.prototype.hasOwnProperty.call(t??{},`medicalHistoryOther`)}catch{e=!1}if(yt.data&&yt.data.length>0){let t=yt.data[0];if(w({"سكر؟":t.diabetes?`yes`:`no`,"ضغط؟":t.hypertension?`yes`:`no`,"الغدة الدرقية؟":t.thyroid?`yes`:`no`,"أمراض مناعة؟":t.autoimmune?`yes`:`no`,"ماء زرقاء؟":t.glaucoma?`yes`:`no`,"قرنية مخروطية بالعائلة؟":t.familyKeratoconus?`yes`:`no`}),!e&&(t.previousSurgeries||t.familyHistory)){let e=[t.previousSurgeries&&`عمليات سابقة: ${t.previousSurgeries}`,t.familyHistory&&`تاريخ عائلي: ${t.familyHistory}`].filter(Boolean).join(` | `);e&&Ie(e)}}else w({"سكر؟":`no`,"ضغط؟":`no`,"الغدة الدرقية؟":`no`,"أمراض مناعة؟":`no`,"ماء زرقاء؟":`no`,"قرنية مخروطية بالعائلة؟":`no`})},[yt.data,U.data]),(0,f.useEffect)(()=>{if(!b)return;let e=xe({patientId:b,onUpdate:()=>{Promise.all([U.refetch(),ft.refetch(),H.refetch(),W.refetch(),G.refetch(),K.refetch(),mt.refetch(),q.refetch(),Z.refetch(),ht.refetch(),gt.refetch(),Y.refetch(),_t.refetch(),vt.refetch()])}});return()=>e?.close()},[b,U,ft,H,W,G,K,mt,q,Z,ht,gt,Y,_t,vt]);let Q=r.medical.saveSheetEntry.useMutation({onSuccess:()=>{s.success(`تم الحفظ`)}}),xt=r.medical.deleteSheetEntryForVisit.useMutation({onSuccess:async({deleted:e})=>{z({externalPtosis:!1,externalSquint:!1,externalOthers:!1,externalOthersNote:``,muscleNormal:!1,muscleAbnormal:!1,muscleAbnormalNote:``,otherAbnormalities:``,fundusNormal:!1,fundusAbnormal:!1,fundusAbnormalNote:``,complains:``}),await U.refetch(),s.success(e?`تم مسح شيت الزيارة`:`لا يوجد شيت محفوظ لهذه الزيارة`)},onError:e=>s.error(o(e,`تعذر مسح شيت الزيارة`))}),St=r.medical.saveRefractionToExamination.useMutation(),Ct=r.medical.updateVisitChiefComplaint.useMutation(),wt=e=>{j(t=>({...t,patientName:e.fullName??``,phone:e.phone??``,alternatePhone:e.alternatePhone??``,age:e.age==null?``:String(e.age),dateOfBirth:ge(e),address:e.address??``,patientCode:e.patientCode??``,job:e.occupation??``})),e.id&&Ee(`${v.startsWith(`/patient-hub/`)?`/patient-hub`:``}/sheets/${y}/${e.id}`)};(0,f.useEffect)(()=>{if(!H.data)return;let e=H.data;j(t=>({...t,patientName:e.fullName??``,phone:e.phone??``,alternatePhone:e.alternatePhone??``,age:e.age==null?``:String(e.age),dateOfBirth:ge(e),address:e.address??``,patientCode:e.patientCode??``,job:e.occupation??``}))},[H.data]);let Tt=U.data??ft.data;(0,f.useEffect)(()=>{if(Tt)try{let e=JSON.parse(Tt);if(e.formData&&j(t=>({...t,...e.formData,patientName:t.patientName||e.formData.patientName,phone:t.phone||e.formData.phone,alternatePhone:t.alternatePhone||e.formData.alternatePhone||``,age:t.age||e.formData.age,dateOfBirth:t.dateOfBirth||he(e.formData.dateOfBirth),address:t.address||e.formData.address})),e.examData&&N(t=>({autorefraction:{od:{...t.autorefraction.od,...e.examData.autorefraction?.od??{}},os:{...t.autorefraction.os,...e.examData.autorefraction?.os??{}}},pentacam:{od:{...t.pentacam.od,...e.examData.pentacam?.od??{}},os:{...t.pentacam.os,...e.examData.pentacam?.os??{}}}})),e.signatures&&L({reception:e.signatures.reception??``,nurse:e.signatures.nurse??``,technician:e.signatures.technician??``,doctor:e.signatures.doctor??``}),e.consultantExam&&z(t=>({...t,...e.consultantExam})),qe(String(e.consultantDrawing??``)),e.medicalHistory&&w(t=>({...e.medicalHistory,...t})),Object.prototype.hasOwnProperty.call(e,`medicalHistoryOther`)){let t=String(e.medicalHistoryOther??``).trim(),n=String(e.consultantExam?.complains??``).trim(),r=t.replace(/^أدوية:\s*/u,``).trim();Ie(n&&r===n?``:t)}if(e.operationDetails){E(e.operationDetails.type??``),O(e.operationDetails.date??``);let t=e.operationDetails.eyes??{},n=!!t.right,r=!!t.left,i=!!t.both||n&&r;k({right:i?!0:n,left:i?!0:r,both:i})}e.diagnosisText&&Ue(e.diagnosisText),e.finalDecisionText&&Ge(e.finalDecisionText)}catch{}},[Tt]);let $=r.opHistory.getSuggestedOperationType.useQuery({patientId:b??0},{enabled:!!b,refetchOnWindowFocus:!1});(0,f.useEffect)(()=>{if(U.isLoading||T)return;let e=$.data;if(!e)return;let t={PRK:`PRK`,Lasik:`LASIK`,FL:`FL`,FS:`FS`,IOL:`IOL`,ICL:`ICL`}[e.operationType];t&&E(t)},[$.data,U.isLoading,T]),(0,f.useEffect)(()=>{if(U.isLoading||D)return;let e=$.data;e?.operationDate&&O(_e(e.operationDate))},[$.data,U.isLoading,D]),(0,f.useEffect)(()=>{if(!W.data||W.data.length===0)return;let e=(W.data??[]).find(e=>Number(e.visitId)===Number(h))??(h?null:W.data[0]);if(e){if(e.autorefraction){let t=e.autorefraction;N(e=>({autorefraction:{od:{...e.autorefraction.od,...t?.od??{}},os:{...e.autorefraction.os,...t?.os??{}}},pentacam:e.pentacam}))}if(e.pentacam){let t=e.pentacam;N(e=>({autorefraction:e.autorefraction,pentacam:{od:{...e.pentacam.od,...t?.od??{}},os:{...e.pentacam.os,...t?.os??{}}}}))}}},[W.data,h]),(0,f.useEffect)(()=>{let e=(W.data??[]).find(e=>Number(e.visitId)===Number(h)),t=(G.data??[]).find(t=>Number(t.visitId)===Number(h)||Number(t.examinationId)===Number(e?.id))??(h?null:(G.data??[])[0]);t&&(F({od:{s:String(t.sOD??``),c:String(t.cOD??``),axis:String(t.axisOD??``),pd:String(t.pdOD??``)},os:{s:String(t.sOS??``),c:String(t.cOS??``),axis:String(t.axisOS??``),pd:String(t.pdOS??``)}}),N(e=>({...e,autorefraction:{od:{...e.autorefraction.od,bcva:String(t.bcvaOD||e.autorefraction.od.bcva||``)},os:{...e.autorefraction.os,bcva:String(t.bcvaOS||e.autorefraction.os.bcva||``)}}})))},[W.data,G.data,h]),(0,f.useEffect)(()=>{let e=(W.data??[]).find(e=>Number(e.visitId)===Number(h)),t=(K.data??[]).find(t=>Number(t.visitId)===Number(h)||Number(t.examinationId)===Number(e?.id))??(h?null:(K.data??[])[0]);t&&N(e=>({...e,autorefraction:{od:{...e.autorefraction.od,s:String(t.sphereOD??``),c:String(t.cylinderOD??``),axis:String(t.axisOD??``),ucva:String(t.ucvaOD??``),bcva:String(t.bcvaOD||e.autorefraction.od.bcva||``),iop:String(t.iopOD??``)},os:{...e.autorefraction.os,s:String(t.sphereOS??``),c:String(t.cylinderOS??``),axis:String(t.axisOS??``),ucva:String(t.ucvaOS??``),bcva:String(t.bcvaOS||e.autorefraction.os.bcva||``),iop:String(t.iopOS??``)}}}))},[K.data,W.data,h]),(0,f.useEffect)(()=>{let e=(W.data??[]).find(e=>Number(e.visitId)===Number(h))??(h?null:(W.data??[])[0]),t=(q.data??[]).find(t=>Number(t.id)===Number(e?.visitId))??(q.data??[]).find(e=>Number(e.id)===Number(h)),n=String(t?.chiefComplaint??``).trim(),r=!1;try{let e=U.data?JSON.parse(U.data):null;r=Number(e?.visitId)===Number(h)&&Object.prototype.hasOwnProperty.call(e?.consultantExam??{},`complains`)}catch{r=!1}r||z(e=>({...e,complains:n}))},[W.data,h,U.data,q.data]),(0,f.useEffect)(()=>{let e=(Z.data??[]).find(e=>Number(e.visitId)===Number(h))??(h?null:(Z.data??[])[0]);Ue(String(e?.diagnosis??``)),Ge(String(e?.recommendations??e?.treatment??``))},[Z.data,h]),(0,f.useEffect)(()=>{let e=pt.data?.data;if(!e)return;let t=String(e.doctorName??``).trim()||String(e.signatures?.doctor??``).trim();t&&L(e=>({...e,doctor:t}))},[pt.data]),(0,f.useEffect)(()=>{let e=String(g?.name??``).trim();if(!e)return;let t=String(g?.role??``).toLowerCase();L(n=>({...n,reception:t===`reception`?e:n.reception,nurse:t===`nurse`?e:n.nurse,technician:t===`technician`?e:n.technician,doctor:t===`doctor`?n.doctor||e:n.doctor}))},[g?.name,g?.role,U.data,pt.data]);let Et=async()=>{if(!b){s.error(`يرجى اختيار المريض أولاً`);return}if(e&&!h){s.error(`يجب اختيار زيارة موجودة قبل الحفظ`);return}let t=(W.data??[]).find(e=>Number(e.visitId)===Number(h));if(m===`examination`&&!t?.id){s.error(`الزيارة المختارة لا تحتوي على فحص قياسات محفوظ`);return}try{let e=(()=>{try{return U.data?JSON.parse(U.data):{}}catch{return{}}})(),n=(e,t)=>e&&e.trim()?e:t,r={autorefraction:{od:{...e.examData?.autorefraction?.od??{},ucva:n(M.autorefraction.od.ucva,e.examData?.autorefraction?.od?.ucva),bcva:n(M.autorefraction.od.bcva,e.examData?.autorefraction?.od?.bcva),s:n(M.autorefraction.od.s,e.examData?.autorefraction?.od?.s),c:n(M.autorefraction.od.c,e.examData?.autorefraction?.od?.c),axis:n(M.autorefraction.od.axis,e.examData?.autorefraction?.od?.axis),iop:n(M.autorefraction.od.iop,e.examData?.autorefraction?.od?.iop)},os:{...e.examData?.autorefraction?.os??{},ucva:n(M.autorefraction.os.ucva,e.examData?.autorefraction?.os?.ucva),bcva:n(M.autorefraction.os.bcva,e.examData?.autorefraction?.os?.bcva),s:n(M.autorefraction.os.s,e.examData?.autorefraction?.os?.s),c:n(M.autorefraction.os.c,e.examData?.autorefraction?.os?.c),axis:n(M.autorefraction.os.axis,e.examData?.autorefraction?.os?.axis),iop:n(M.autorefraction.os.iop,e.examData?.autorefraction?.os?.iop)}},pentacam:{od:{...e.examData?.pentacam?.od??{},k1:n(M.pentacam.od.k1,e.examData?.pentacam?.od?.k1),k2:n(M.pentacam.od.k2,e.examData?.pentacam?.od?.k2),ax1:n(M.pentacam.od.ax1,e.examData?.pentacam?.od?.ax1),ax2:n(M.pentacam.od.ax2,e.examData?.pentacam?.od?.ax2),thinnest:n(M.pentacam.od.thinnest,e.examData?.pentacam?.od?.thinnest),apex:n(M.pentacam.od.apex,e.examData?.pentacam?.od?.apex),residual:n(M.pentacam.od.residual,e.examData?.pentacam?.od?.residual),ttt:n(M.pentacam.od.ttt,e.examData?.pentacam?.od?.ttt),ablation:n(M.pentacam.od.ablation,e.examData?.pentacam?.od?.ablation)},os:{...e.examData?.pentacam?.os??{},k1:n(M.pentacam.os.k1,e.examData?.pentacam?.os?.k1),k2:n(M.pentacam.os.k2,e.examData?.pentacam?.os?.k2),ax1:n(M.pentacam.os.ax1,e.examData?.pentacam?.os?.ax1),ax2:n(M.pentacam.os.ax2,e.examData?.pentacam?.os?.ax2),thinnest:n(M.pentacam.os.thinnest,e.examData?.pentacam?.os?.thinnest),apex:n(M.pentacam.os.apex,e.examData?.pentacam?.os?.apex),residual:n(M.pentacam.os.residual,e.examData?.pentacam?.os?.residual),ttt:n(M.pentacam.os.ttt,e.examData?.pentacam?.os?.ttt),ablation:n(M.pentacam.os.ablation,e.examData?.pentacam?.os?.ablation)}}};await Q.mutateAsync({patientId:b,visitId:h,sheetType:y,content:JSON.stringify({...e,visitId:h,formData:{...e.formData??{},...A},examData:r,consultantExam:R,consultantDrawing:Ke,medicalHistory:C,medicalHistoryOther:Fe,diagnosisText:He,finalDecisionText:We,operationDetails:{type:T,date:D,eyes:ze}})}),h&&await Ct.mutateAsync({visitId:h,chiefComplaint:R.complains.trim()}),await bt.mutateAsync({patientId:b,diabetes:C[`سكر؟`]===`yes`,hypertension:C[`ضغط؟`]===`yes`,thyroid:C[`الغدة الدرقية؟`]===`yes`,autoimmune:C[`أمراض مناعة؟`]===`yes`,glaucoma:C[`ماء زرقاء؟`]===`yes`,familyKeratoconus:C[`قرنية مخروطية بالعائلة؟`]===`yes`}),t?.id&&await St.mutateAsync({patientId:b,visitId:h,examinationId:t.id,createVisitIfMissing:!1,glassesData:{od:{s:P.od.s||void 0,c:P.od.c||void 0,axis:P.od.axis||void 0,pd:P.od.pd||void 0,bcva:M.autorefraction.od.bcva||void 0},os:{s:P.os.s||void 0,c:P.os.c||void 0,axis:P.os.axis||void 0,pd:P.os.pd||void 0,bcva:M.autorefraction.os.bcva||void 0}}}),await Promise.all([U.refetch(),W.refetch(),G.refetch(),K.refetch(),q.refetch()])}catch(e){s.error(o(e,`حدث خطأ أثناء الحفظ`))}},Dt=()=>{oe(`${String(A.patientName||A.patientCode||b||`lasik-sheet`).trim()}.pdf`,{forceBrowserPrint:!0})},Ot=(t=!1)=>{let n=parseFloat(M.pentacam.od.thinnest),r=parseFloat(M.pentacam.os.thinnest),i=parseFloat(M.autorefraction.od.iop),a=parseFloat(M.autorefraction.os.iop);new Date().toLocaleDateString(`en-GB`);let o=(e,t)=>n=>N(r=>({...r,autorefraction:{...r.autorefraction,[e]:{...r.autorefraction[e],[t]:n.target.value}}})),s=(e,t)=>n=>F(r=>({...r,[e]:{...r[e],[t]:n.target.value}})),c=(e,t)=>n=>N(r=>({...r,pentacam:{...r.pentacam,[e]:{...r.pentacam[e],[t]:n.target.value}}})),l=`w-full text-center bg-transparent border-0 border-b border-solid border-[#737685] focus:outline-none focus:border-[#003d9b] py-1 text-sm`,u=`p-1 border border-[#c3c6d6]`;return(0,p.jsxs)(`div`,{className:`lasik-sheet sheet-type-${y} relative overflow-hidden bg-white text-[#191c1e] font-sans print:p-[10mm] print:border-0 print:shadow-none flex flex-col ${m===`examination`?`consultant-examination-only w-full max-w-none gap-0 border-0 p-0 shadow-none`:e?`w-full max-w-none gap-5 border border-[#c3c6d6] p-8 shadow-sm`:`w-full max-w-[210mm] mx-auto gap-5 border border-[#c3c6d6] p-8 shadow-sm`}`,dir:`ltr`,children:[m===`examination`?null:(0,p.jsx)(ye,{}),m===`examination`?null:(0,p.jsx)(ve,{sheetType:ke,logoLeftContent:y===`consultant`?void 0:(0,p.jsxs)(`div`,{className:`header-eye-field flex items-center gap-1.5 whitespace-nowrap text-[10px] font-bold`,dir:`ltr`,children:[(0,p.jsx)(`span`,{className:`text-[#434654]`,children:`Eye:`}),[[`OD`,`right`],[`OS`,`left`],[`OU`,`both`]].map(([e,t])=>(0,p.jsxs)(`label`,{className:`flex items-center gap-0.5`,children:[(0,p.jsx)(`input`,{type:`checkbox`,checked:ze[t],onChange:e=>{let n=e.target.checked;if(t===`both`){k({right:n,left:n,both:n});return}k(e=>{let r={...e,[t]:n};return{...r,both:r.right&&r.left}})}}),e]},t))]}),logoRightContent:y===`consultant`?void 0:(0,p.jsx)(`div`,{className:`header-operation-type-field grid grid-cols-3 gap-x-2 gap-y-0.5 text-[10px] font-bold`,dir:`ltr`,children:[[`PRK`,`PRK`],[`LASIK`,`LASIK`],[`F.S`,`FS`],[`F.L`,`FL`],[`IOL`,`IOL`],[`ICL`,`ICL`]].map(([e,t])=>(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-0.5 whitespace-nowrap`,children:[(0,p.jsx)(`input`,{type:`checkbox`,checked:T===t,onChange:()=>E(T===t?``:t)}),(0,p.jsx)(`span`,{children:e})]},t))}),bottomContent:(0,p.jsxs)(`div`,{className:`flex w-full items-center justify-between gap-5 text-[11px]`,dir:`rtl`,children:[(0,p.jsxs)(`div`,{className:`flex min-w-0 items-center gap-2 whitespace-nowrap`,children:[(0,p.jsx)(`span`,{className:`font-bold text-[#434654]`,children:`تاريخ الفحص:`}),(0,p.jsx)(ae,{className:`h-6 w-32 rounded-none border-0 border-b border-[#c3c6d6] bg-transparent px-1 text-center text-[11px] font-bold`,value:A.examinationDate,onChange:e=>j(t=>({...t,examinationDate:e.target.value}))})]}),(0,p.jsxs)(`div`,{className:`flex min-w-0 items-center gap-2 whitespace-nowrap`,children:[(0,p.jsx)(`span`,{className:`font-bold text-[#434654]`,children:`الطبيب:`}),(0,p.jsx)(`input`,{size:(I.doctor||``).length||10,className:`h-6 min-w-0 max-w-[35mm] rounded-none border-0 border-b border-[#c3c6d6] bg-transparent px-1 text-center text-[11px] font-bold focus:outline-none`,dir:`rtl`,value:I.doctor,onChange:e=>L(t=>({...t,doctor:e.target.value}))})]}),y===`consultant`?null:(0,p.jsxs)(`div`,{className:`flex min-w-0 items-center gap-2 whitespace-nowrap`,children:[(0,p.jsx)(`span`,{className:`font-bold text-[#434654]`,children:`تاريخ العملية:`}),(0,p.jsx)(`input`,{type:`text`,inputMode:`numeric`,"aria-label":`تاريخ العملية`,placeholder:`       /       /       `,className:`h-7 w-40 shrink-0 rounded-none border-0 border-b border-[#c3c6d6] bg-transparent px-1 text-center text-[11px] font-normal tabular-nums outline-none placeholder:text-[#191c1e] placeholder:opacity-100`,value:D,onChange:e=>O(e.target.value)})]})]})}),(0,p.jsxs)(`section`,{className:`print-lasik-patient-grid p-4 bg-[#f3f4f6] rounded-xl border border-[#c3c6d6] flex flex-col gap-2 text-sm`,dir:`rtl`,children:[(0,p.jsxs)(`div`,{className:`patient-info-grid-3x3 grid grid-cols-3 gap-x-4 gap-y-2 text-xs`,children:[(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap font-bold min-w-0 shrink`,children:[(0,p.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`الاسم:`}),(0,p.jsx)(`input`,{size:(A.patientName||``).length||12,className:`patient-detail-emphasis min-w-0 text-[#003d9b] bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right text-lg font-extrabold`,dir:`rtl`,value:A.patientName,onChange:e=>j(t=>({...t,patientName:e.target.value}))})]}),(0,p.jsxs)(`span`,{className:`inline-flex items-center gap-1 whitespace-nowrap font-bold min-w-0 shrink`,children:[(0,p.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`تاريخ الميلاد:`}),(0,p.jsx)(`span`,{className:`px-1 border-b border-[#c3c6d6] text-right min-w-0 truncate`,children:_e(A.dateOfBirth)})]}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap font-bold min-w-0 shrink`,children:[(0,p.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`السن:`}),(0,p.jsx)(`input`,{size:(A.age||``).length||3,className:`patient-detail-emphasis min-w-0 bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right text-sm font-bold`,dir:`rtl`,value:A.age,onChange:e=>j(t=>({...t,age:e.target.value}))})]})]}),(0,p.jsxs)(`div`,{className:`grid grid-cols-3 gap-x-4 gap-y-2 text-xs`,children:[(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,p.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`العنوان:`}),(0,p.jsx)(`input`,{size:(A.address||``).length||8,className:`min-w-0 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right`,dir:`rtl`,value:A.address,onChange:e=>j(t=>({...t,address:e.target.value}))})]}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,p.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`التليفون:`}),(0,p.jsx)(`input`,{size:(A.phone||``).length||8,className:`min-w-0 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right`,dir:`rtl`,value:A.phone,onChange:e=>j(t=>({...t,phone:e.target.value}))})]}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,p.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`موبايل:`}),(0,p.jsx)(`input`,{size:(A.alternatePhone||``).length||8,className:`min-w-0 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right`,dir:`rtl`,value:A.alternatePhone,onChange:e=>j(t=>({...t,alternatePhone:e.target.value}))})]})]}),(0,p.jsxs)(`div`,{className:`grid grid-cols-2 justify-items-center gap-x-4 gap-y-2 text-xs`,children:[(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,p.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`الكود:`}),(0,p.jsx)(`input`,{size:(A.patientCode||``).length||6,className:`min-w-0 font-normal text-xs text-[#526069] bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right`,dir:`rtl`,value:A.patientCode,onChange:e=>j(t=>({...t,patientCode:e.target.value}))})]}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,p.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`المهنة:`}),(0,p.jsx)(`input`,{size:(A.job||``).length||8,className:`patient-detail-emphasis min-w-0 bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right text-sm font-bold`,dir:`rtl`,value:A.job,onChange:e=>j(t=>({...t,job:e.target.value}))})]})]})]}),(0,p.jsxs)(`section`,{className:`print-lasik-history-visual-row flex flex-wrap items-stretch gap-3`,dir:`rtl`,children:[y===`external`?null:(0,p.jsx)(`div`,{className:`print-lasik-questions flex h-full w-full sm:w-[calc(75%-0.375rem)] min-w-0 flex-col`,children:(0,p.jsxs)(`table`,{className:`w-full h-full border-collapse border border-[#c3c6d6] rounded-lg overflow-hidden text-sm`,children:[(0,p.jsx)(`thead`,{className:`bg-[#e7e8ea]`,children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{className:`w-12 p-2 border border-[#c3c6d6]`,children:`لا`}),(0,p.jsx)(`th`,{className:`w-12 p-2 border border-[#c3c6d6]`,children:`نعم`}),(0,p.jsx)(`th`,{className:`p-2 border border-[#c3c6d6] text-right`,children:`التاريخ المرضي`}),(0,p.jsx)(`th`,{className:`w-12 p-2 border border-[#c3c6d6]`,children:`لا`}),(0,p.jsx)(`th`,{className:`w-12 p-2 border border-[#c3c6d6]`,children:`نعم`}),(0,p.jsx)(`th`,{className:`p-2 border border-[#c3c6d6] text-right`,children:`التاريخ المرضي`})]})}),(0,p.jsxs)(`tbody`,{children:[[[`قرنية مخروطية بالعائلة؟`,`الغدة الدرقية؟`],[`ماء زرقاء؟`,`أمراض مناعة؟`],[`ضغط؟`,`سكر؟`]].map((e,t)=>(0,p.jsx)(`tr`,{children:e.map((e,n)=>e?(0,p.jsxs)(f.Fragment,{children:[(0,p.jsx)(`td`,{className:`text-center border border-[#c3c6d6]`,children:(0,p.jsx)(`input`,{type:`checkbox`,className:`w-4 h-4 rounded text-[#003d9b]`,checked:C[e]===`no`,onChange:t=>{let n=t.target.checked?`no`:``;w(t=>{let r={...t,[e]:n};return b&&bt.mutate({patientId:b,diabetes:r[`سكر؟`]===`yes`,hypertension:r[`ضغط؟`]===`yes`,thyroid:r[`الغدة الدرقية؟`]===`yes`,autoimmune:r[`أمراض مناعة؟`]===`yes`,glaucoma:r[`ماء زرقاء؟`]===`yes`,familyKeratoconus:r[`قرنية مخروطية بالعائلة؟`]===`yes`}),r})}})}),(0,p.jsx)(`td`,{className:`text-center border border-[#c3c6d6]`,children:(0,p.jsx)(`input`,{type:`checkbox`,className:`w-4 h-4 rounded text-[#003d9b]`,checked:C[e]===`yes`,onChange:t=>{let n=t.target.checked?`yes`:``;w(t=>{let r={...t,[e]:n};return b&&bt.mutate({patientId:b,diabetes:r[`سكر؟`]===`yes`,hypertension:r[`ضغط؟`]===`yes`,thyroid:r[`الغدة الدرقية؟`]===`yes`,autoimmune:r[`أمراض مناعة؟`]===`yes`,glaucoma:r[`ماء زرقاء؟`]===`yes`,familyKeratoconus:r[`قرنية مخروطية بالعائلة؟`]===`yes`}),r})}})}),(0,p.jsx)(`td`,{className:`p-1.5 border border-[#c3c6d6] text-right`,children:(0,p.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,p.jsx)(`span`,{children:e}),e===`سكر؟`&&C[e]===`yes`?(0,p.jsxs)(`select`,{className:`text-xs border border-[#c3c6d6] rounded px-1.5 py-1 bg-white`,value:Le,onChange:e=>Re(e.target.value),children:[(0,p.jsx)(`option`,{value:``,children:`مدة الإصابة`}),(0,p.jsx)(`option`,{value:`less than 5 years`,children:`أقل من 5 سنوات`}),(0,p.jsx)(`option`,{value:`5-10 years`,children:`من 5 إلى 10 سنوات`}),(0,p.jsx)(`option`,{value:`more than 10 years`,children:`أكثر من 10 سنوات`})]}):null]})})]},`${t}-${n}`):(0,p.jsxs)(f.Fragment,{children:[(0,p.jsx)(`td`,{className:`border border-[#c3c6d6] bg-[#f8f9fb]`}),(0,p.jsx)(`td`,{className:`border border-[#c3c6d6] bg-[#f8f9fb]`}),(0,p.jsx)(`td`,{className:`border border-[#c3c6d6] bg-[#f8f9fb]`})]},`${t}-${n}`))},t)),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`p-1.5 border border-[#c3c6d6] text-right bg-[#f3f4f6]`,colSpan:2,children:`أخرى؟`}),(0,p.jsx)(`td`,{className:`p-1.5 border border-[#c3c6d6]`,colSpan:4,children:(0,p.jsx)(`input`,{className:`w-full h-6 border-0 border-b border-[#c3c6d6] bg-transparent px-1 outline-none`,value:Fe,onChange:e=>Ie(e.target.value)})})]})]})]})}),y===`external`?(0,p.jsx)(`div`,{className:`print-external-vision-grid grid w-full grid-cols-3 gap-2`,dir:`ltr`,children:[{key:`iop`,label:`IOP`,unit:`mmHg`},{key:`ucva`,label:`UCVA`,unit:`Eye`},{key:`bcva`,label:`BCVA`,unit:`Eye`}].map(e=>(0,p.jsxs)(`table`,{className:`w-full text-center border-collapse`,children:[(0,p.jsx)(`thead`,{className:`bg-[#e7e8ea] text-xs font-bold uppercase`,children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{className:u,children:e.label}),(0,p.jsx)(`th`,{className:`${u} text-[#003d9b]`,children:`OD`}),(0,p.jsx)(`th`,{className:`${u} text-[#526069]`,children:`OS`})]})}),(0,p.jsx)(`tbody`,{children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] text-[#434654]`,children:e.unit}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:`${l} ${e.key===`iop`&&!Number.isNaN(i)&&i>21?`text-red-600`:``}`,value:M.autorefraction.od[e.key],onChange:o(`od`,e.key)})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:`${l} ${e.key===`iop`&&!Number.isNaN(a)&&a>21?`text-red-600`:``}`,value:M.autorefraction.os[e.key],onChange:o(`os`,e.key)})})]})})]},e.key))}):(0,p.jsxs)(`div`,{className:`print-lasik-visual-grid flex h-full w-full sm:w-[calc(25%-0.375rem)] shrink-0 flex-col gap-2`,dir:`ltr`,children:[(0,p.jsxs)(`table`,{className:`w-full flex-1 text-center border-collapse`,children:[(0,p.jsx)(`thead`,{className:`bg-[#e7e8ea] text-xs font-bold uppercase`,children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{className:u,children:`IOP`}),(0,p.jsx)(`th`,{className:`${u} text-[#003d9b]`,children:`OD`}),(0,p.jsx)(`th`,{className:`${u} text-[#526069]`,children:`OS`})]})}),(0,p.jsx)(`tbody`,{children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] text-[#434654]`,children:`mmHg`}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:`${l} ${!Number.isNaN(i)&&i>21?`text-red-600`:``}`,value:M.autorefraction.od.iop,onChange:o(`od`,`iop`)})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:`${l} ${!Number.isNaN(a)&&a>21?`text-red-600`:``}`,value:M.autorefraction.os.iop,onChange:o(`os`,`iop`)})})]})})]}),(0,p.jsxs)(`table`,{className:`w-full flex-1 text-center border-collapse`,children:[(0,p.jsx)(`thead`,{className:`bg-[#e7e8ea] text-xs font-bold uppercase`,children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{className:u,children:`Eye`}),(0,p.jsx)(`th`,{className:u,children:`UCVA`}),(0,p.jsx)(`th`,{className:u,children:`BCVA`})]})}),(0,p.jsxs)(`tbody`,{children:[(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} text-[#003d9b] bg-[#003d9b]/5`,children:`OD`}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:l,value:M.autorefraction.od.ucva,onChange:o(`od`,`ucva`)})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:l,value:M.autorefraction.od.bcva,onChange:o(`od`,`bcva`)})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} text-[#526069] bg-[#f3f4f6]`,children:`OS`}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:l,value:M.autorefraction.os.ucva,onChange:o(`os`,`ucva`)})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:l,value:M.autorefraction.os.bcva,onChange:o(`os`,`bcva`)})})]})]})]})]})]}),(0,p.jsxs)(`section`,{className:m===`examination`?`mx-auto w-full max-w-4xl`:void 0,"data-purpose":`clinical-refraction`,children:[m===`examination`?(0,p.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center gap-2`,dir:`ltr`,children:[(0,p.jsx)(`span`,{className:`min-w-[42px] text-xs font-medium`,children:`BCVA`}),(0,p.jsx)(d,{value:M.autorefraction.od.bcva,onChange:e=>N(t=>({...t,autorefraction:{...t.autorefraction,od:{...t.autorefraction.od,bcva:e}}})),options:ie,placeholder:`OD`,triggerClassName:`h-8 w-20 text-center text-xs font-mono`}),(0,p.jsx)(`span`,{className:`text-muted-foreground`,children:`/`}),(0,p.jsx)(d,{value:M.autorefraction.os.bcva,onChange:e=>N(t=>({...t,autorefraction:{...t.autorefraction,os:{...t.autorefraction.os,bcva:e}}})),options:ie,placeholder:`OS`,triggerClassName:`h-8 w-20 text-center text-xs font-mono`}),(0,p.jsx)(`span`,{className:`mx-2 h-6 border-l`}),(0,p.jsx)(`span`,{className:`min-w-[28px] text-xs font-medium`,children:`PD`}),(0,p.jsx)(`input`,{className:`h-8 w-20 rounded border border-input bg-background px-2 text-center text-xs font-mono outline-none focus:border-[#003d9b]`,inputMode:`decimal`,value:P.od.pd,onChange:e=>{let t=e.target.value;F(e=>({od:{...e.od,pd:t},os:{...e.os,pd:t}}))}})]}):null,m===`examination`?(0,p.jsxs)(`div`,{className:`mb-3 grid grid-cols-1 gap-2 sm:hidden`,dir:`ltr`,children:[[`od`,`os`].map(e=>(0,p.jsxs)(`div`,{className:`overflow-hidden rounded-lg border border-slate-200 bg-white`,children:[(0,p.jsx)(`div`,{className:`px-3 py-2 text-sm font-bold ${e===`od`?`bg-blue-50 text-blue-900`:`bg-slate-100 text-slate-700`}`,children:e===`od`?`OD (Right)`:`OS (Left)`}),(0,p.jsxs)(`div`,{className:`grid grid-cols-2 gap-1.5 p-2`,children:[(0,p.jsxs)(`label`,{className:`min-w-0 text-center text-xs font-semibold text-slate-500`,children:[`S`,(0,p.jsx)(d,{value:P[e].s,onChange:t=>F(n=>({...n,[e]:{...n[e],s:t}})),options:ne,triggerClassName:`mt-1 h-9 w-full border-slate-200 text-center font-mono text-sm`})]}),(0,p.jsxs)(`label`,{className:`min-w-0 text-center text-xs font-semibold text-slate-500`,children:[`C`,(0,p.jsx)(d,{value:P[e].c,onChange:t=>F(n=>({...n,[e]:{...n[e],c:t}})),options:re,triggerClassName:`mt-1 h-9 w-full border-slate-200 text-center font-mono text-sm`})]}),(0,p.jsxs)(`label`,{className:`col-span-2 min-w-0 text-center text-xs font-semibold text-slate-500`,children:[`Axis`,(0,p.jsx)(`input`,{className:`mt-1 h-9 w-full rounded-md border border-slate-200 bg-white px-1 text-center font-mono text-sm outline-none focus:border-blue-600`,inputMode:`numeric`,value:P[e].axis,onChange:s(e,`axis`)})]})]})]},e)),(0,p.jsxs)(`label`,{className:`flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2 text-sm font-semibold text-blue-900`,children:[(0,p.jsx)(`span`,{className:`shrink-0`,children:`Reading / Add +`}),(0,p.jsx)(`input`,{className:`h-9 min-w-0 flex-1 rounded-md border border-slate-200 bg-white px-2 text-center font-mono outline-none focus:border-blue-600`,value:Be,onChange:e=>Ve(e.target.value)})]})]}):null,(0,p.jsxs)(`table`,{className:`clinical-refraction-desktop-table w-full border-collapse text-center ${m===`examination`?`hidden sm:table`:``}`,children:[(0,p.jsxs)(`thead`,{className:`bg-[#e7e8ea] text-xs uppercase font-bold`,children:[(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{className:`${u} w-48`,children:`Refraction`}),(0,p.jsx)(`th`,{className:`${u} text-[#003d9b]`,colSpan:3,children:`OD (Right)`}),(0,p.jsx)(`th`,{className:`${u} text-[#526069]`,colSpan:3,children:`OS (Left)`})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{className:u,children:`Distance`}),(0,p.jsx)(`th`,{className:u,children:`S`}),(0,p.jsx)(`th`,{className:u,children:`C`}),(0,p.jsx)(`th`,{className:u,children:`A`}),(0,p.jsx)(`th`,{className:u,children:`S`}),(0,p.jsx)(`th`,{className:u,children:`C`}),(0,p.jsx)(`th`,{className:u,children:`A`})]})]}),(0,p.jsxs)(`tbody`,{className:`font-mono`,children:[(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6]`,children:`\xA0`}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(d,{value:P.od.s,onChange:e=>F(t=>({...t,od:{...t.od,s:e}})),options:ne,triggerClassName:`h-8 border-0 text-center font-mono`})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(d,{value:P.od.c,onChange:e=>F(t=>({...t,od:{...t.od,c:e}})),options:re,triggerClassName:`h-8 border-0 text-center font-mono`})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:l,value:P.od.axis,onChange:s(`od`,`axis`)})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(d,{value:P.os.s,onChange:e=>F(t=>({...t,os:{...t.os,s:e}})),options:ne,triggerClassName:`h-8 border-0 text-center font-mono`})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(d,{value:P.os.c,onChange:e=>F(t=>({...t,os:{...t.os,c:e}})),options:re,triggerClassName:`h-8 border-0 text-center font-mono`})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:l,value:P.os.axis,onChange:s(`os`,`axis`)})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] font-bold text-[#003d9b]`,children:`Reading`}),(0,p.jsx)(`td`,{className:u,colSpan:6,children:(0,p.jsxs)(`div`,{className:`flex items-center justify-center gap-2`,children:[(0,p.jsx)(`span`,{className:`whitespace-nowrap font-bold`,children:`Add +`}),(0,p.jsx)(`input`,{className:`${l} max-w-24`,value:Be,onChange:e=>Ve(e.target.value)})]})})]}),y===`consultant`?null:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} text-left bg-[#f3f4f6]`,children:`Fundus`}),(0,p.jsx)(`td`,{className:u,colSpan:3,children:(0,p.jsx)(`input`,{className:l})}),(0,p.jsx)(`td`,{className:u,colSpan:3,children:(0,p.jsx)(`input`,{className:l})})]})]})]})]}),y===`consultant`?(0,p.jsxs)(`section`,{className:`print-consultant-diagrams flex flex-wrap items-stretch gap-2 border border-[#c3c6d6] rounded-xl p-4 bg-white flex-1 min-h-[90mm]`,"data-purpose":`clinical-diagrams`,children:[(0,p.jsxs)(`div`,{className:`consultant-eyes-block relative flex w-full sm:w-1/4 flex-col items-center justify-center gap-4 overflow-hidden rounded-lg`,children:[(0,p.jsxs)(`div`,{className:`flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-1`,children:[(0,p.jsxs)(`div`,{className:`fundus-drawing-surface aspect-square w-full max-w-[150px] rounded-full border-4 border-[#003d9b]/30 flex items-center justify-center relative bg-white`,children:[(0,p.jsxs)(`div`,{className:`absolute inset-0 flex items-center justify-center opacity-10`,children:[(0,p.jsx)(`div`,{className:`w-full border-t border-slate-900`}),(0,p.jsx)(`div`,{className:`h-full border-l border-slate-900 absolute top-0`})]}),(0,p.jsx)(`div`,{className:`absolute h-9 w-9 translate-x-3 -translate-y-1 rounded-full bg-[#f4c98a] border border-[#c98f4a]/60 flex items-center justify-center`,children:(0,p.jsx)(`div`,{className:`h-4 w-4 rounded-full bg-white border border-[#c98f4a]/50`})})]}),(0,p.jsx)(`span`,{className:`text-[#003d9b]/70 text-xs font-bold select-none`,children:`OD`})]}),(0,p.jsxs)(`div`,{className:`flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-1`,children:[(0,p.jsxs)(`div`,{className:`fundus-drawing-surface aspect-square w-full max-w-[150px] rounded-full border-4 border-slate-300 flex items-center justify-center relative bg-white`,children:[(0,p.jsxs)(`div`,{className:`absolute inset-0 flex items-center justify-center opacity-10`,children:[(0,p.jsx)(`div`,{className:`w-full border-t border-slate-900`}),(0,p.jsx)(`div`,{className:`h-full border-l border-slate-900 absolute top-0`})]}),(0,p.jsx)(`div`,{className:`absolute h-9 w-9 -translate-x-3 -translate-y-1 rounded-full bg-[#f4c98a] border border-[#c98f4a]/60 flex items-center justify-center`,children:(0,p.jsx)(`div`,{className:`h-4 w-4 rounded-full bg-white border border-[#c98f4a]/50`})})]}),(0,p.jsx)(`span`,{className:`text-slate-500 text-xs font-bold select-none`,children:`OS`})]}),(0,p.jsx)(Se,{value:Ke,onChange:qe})]}),(0,p.jsxs)(`div`,{className:`consultant-right-column flex w-full sm:w-[calc(75%-0.5rem)] flex-col gap-2`,children:[(0,p.jsxs)(`div`,{className:`consultant-complains-block flex-[1] rounded-lg border border-[#c3c6d6] bg-[#f8f9fb] px-3 pb-3 pt-0 text-left text-[12px] text-[#1f2937]`,dir:`ltr`,children:[(0,p.jsx)(`p`,{className:`mb-2 text-[13px] font-bold text-[#003d9b]`,children:`Complains:`}),(0,p.jsx)(`textarea`,{className:`w-full min-h-[48px] resize-none rounded-md border border-[#c3c6d6] bg-white px-2 py-1 text-[12px] outline-none print:placeholder-transparent`,value:R.complains,onChange:e=>V(`complains`,e.target.value),placeholder:`اكتب الشكوى يدويًا أو ابحث من الأعراض بالأسفل…`}),(0,p.jsxs)(`div`,{className:`relative mt-2 print:hidden`,children:[(0,p.jsx)(ee,{className:`pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground`}),(0,p.jsx)(`input`,{className:`h-8 w-full rounded-md border border-[#c3c6d6] bg-white pl-7 pr-2 text-[12px] outline-none`,placeholder:`ابحث عن الأعراض…`,value:B,onChange:e=>Je(e.target.value),onFocus:()=>Xe(!0),onBlur:()=>window.setTimeout(()=>Xe(!1),150)}),Ye&&B?(0,p.jsx)(`div`,{className:`absolute z-10 mt-1 max-h-[160px] w-full overflow-y-auto rounded-md border border-[#c3c6d6] bg-white p-1 shadow-md`,children:Ze.isLoading?(0,p.jsx)(`p`,{className:`px-2 py-1 text-[11px] text-muted-foreground`,children:`جاري التحميل...`}):(Ze.data??[]).filter(e=>String(e.name??``).toLowerCase().includes(B.toLowerCase())).length===0?(0,p.jsx)(`p`,{className:`px-2 py-1 text-[11px] text-muted-foreground`,children:`لا توجد نتائج`}):(Ze.data??[]).filter(e=>String(e.name??``).toLowerCase().includes(B.toLowerCase())).map(e=>(0,p.jsx)(`button`,{type:`button`,className:`block w-full rounded px-2 py-1 text-left text-[12px] hover:bg-muted/60`,onMouseDown:t=>{t.preventDefault(),V(`complains`,R.complains?`${R.complains}, ${e.name}`:e.name),Je(``),Xe(!1)},children:e.name},e.id))}):null]})]}),(0,p.jsxs)(`div`,{className:`consultant-examination-block flex-[3] rounded-lg border border-[#c3c6d6] bg-[#f8f9fb] p-3 text-left text-[12px] text-[#1f2937]`,dir:`ltr`,children:[(0,p.jsx)(`p`,{className:`mb-2 text-[13px] font-bold text-[#003d9b]`,children:`Examination:`}),(0,p.jsxs)(`div`,{className:`space-y-2`,children:[(0,p.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-3 gap-y-1`,children:[(0,p.jsx)(`span`,{className:`font-semibold`,children:`1. External Apperance:`}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,p.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:R.externalPtosis,onChange:e=>V(`externalPtosis`,e.target.checked)}),(0,p.jsx)(`span`,{children:`Ptosis`})]}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,p.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:R.externalSquint,onChange:e=>V(`externalSquint`,e.target.checked)}),(0,p.jsx)(`span`,{children:`Squint`})]}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,p.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:R.externalOthers,onChange:e=>V(`externalOthers`,e.target.checked)}),(0,p.jsx)(`span`,{children:`Others`})]}),(0,p.jsx)(`input`,{className:`h-6 min-w-[170px] flex-1 border-0 border-b border-[#c3c6d6] bg-transparent px-1 outline-none`,value:R.externalOthersNote,onChange:e=>V(`externalOthersNote`,e.target.value)})]}),(0,p.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-3 gap-y-1`,children:[(0,p.jsx)(`span`,{className:`font-semibold`,children:`2. Muscle action:`}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,p.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:R.muscleNormal,onChange:e=>V(`muscleNormal`,e.target.checked)}),(0,p.jsx)(`span`,{children:`Normal`})]}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,p.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:R.muscleAbnormal,onChange:e=>V(`muscleAbnormal`,e.target.checked)}),(0,p.jsx)(`span`,{children:`Abnormal`})]}),(0,p.jsx)(`input`,{className:`h-6 min-w-[190px] flex-1 border-0 border-b border-[#c3c6d6] bg-transparent px-1 outline-none`,value:R.muscleAbnormalNote,onChange:e=>V(`muscleAbnormalNote`,e.target.value)})]}),(0,p.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,p.jsx)(`span`,{className:`font-semibold`,children:`3. Other abnormalities:`}),(0,p.jsx)(`input`,{className:`h-6 flex-1 border-0 border-b border-[#c3c6d6] bg-transparent px-1 outline-none`,value:R.otherAbnormalities,onChange:e=>V(`otherAbnormalities`,e.target.value)})]}),(0,p.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-[#d9dce8] pt-2`,children:[(0,p.jsx)(`span`,{className:`font-bold`,children:`Fundus:`}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,p.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:R.fundusNormal,onChange:e=>V(`fundusNormal`,e.target.checked)}),(0,p.jsx)(`span`,{children:`Normal`})]}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,p.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:R.fundusAbnormal,onChange:e=>V(`fundusAbnormal`,e.target.checked)}),(0,p.jsx)(`span`,{children:`Abnormal`})]}),(0,p.jsx)(`input`,{className:`h-6 min-w-[220px] flex-1 border-0 border-b border-[#c3c6d6] bg-transparent px-1 outline-none`,value:R.fundusAbnormalNote,onChange:e=>V(`fundusAbnormalNote`,e.target.value)})]})]})]})]})]}):(0,p.jsxs)(`section`,{className:`print-lasik-pentacam-right grid grid-cols-1 lg:grid-cols-[1fr_1.3fr_1.3fr] gap-4`,children:[(0,p.jsx)(`div`,{className:`hidden lg:block print:hidden`}),` `,[`od`,`os`].map(e=>{let t=e===`od`,i=t?n:r;return(0,p.jsxs)(`div`,{className:`${t?`od-bg border-[#003d9b]/20`:`os-bg border-[#c3c6d6]`} print-lasik-eye-card p-2 rounded-xl border`,children:[(0,p.jsx)(`div`,{className:`flex justify-between items-center mb-2`,children:(0,p.jsx)(`span`,{className:`text-[11px] font-bold uppercase px-2 py-1 bg-white rounded shadow-sm ${t?`text-[#003d9b]`:`text-[#526069]`}`,children:t?`Right Eye (RT)`:`Left Eye (LT)`})}),(0,p.jsx)(`table`,{className:`w-full border-collapse text-sm bg-white rounded-lg overflow-hidden`,children:(0,p.jsxs)(`tbody`,{children:[(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] w-1/3 text-right text-[11px]`,children:`K1 (Flat)`}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:l,value:M.pentacam[e].k1,onChange:c(e,`k1`)})}),(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] text-center w-8 text-[11px]`,rowSpan:2,children:`AX`}),(0,p.jsx)(`td`,{className:u,rowSpan:2,children:(0,p.jsx)(`input`,{className:l,value:M.pentacam[e].ax1,onChange:c(e,`ax1`)})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] text-right text-[11px]`,children:`K2 (Steep)`}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:l,value:M.pentacam[e].k2,onChange:c(e,`k2`)})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] text-right text-[11px]`,children:`Thinnest`}),(0,p.jsx)(`td`,{className:u,colSpan:3,children:(0,p.jsx)(`input`,{className:`${l} ${i<480?`text-red-600`:``}`,value:M.pentacam[e].thinnest,onChange:c(e,`thinnest`)})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] text-right text-[11px]`,children:`Apex`}),(0,p.jsx)(`td`,{className:u,colSpan:3,children:(0,p.jsx)(`input`,{className:l,value:M.pentacam[e].apex,onChange:c(e,`apex`)})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] text-[#003d9b] text-right text-[11px]`,children:`Residual`}),(0,p.jsx)(`td`,{className:`${u} bg-[#003d9b]/5`,colSpan:3,children:(0,p.jsx)(`input`,{className:`${l} text-[#003d9b]`,value:M.pentacam[e].residual,onChange:c(e,`residual`)})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] text-right text-[11px]`,children:`Planned TTT`}),(0,p.jsx)(`td`,{className:u,colSpan:3,children:(0,p.jsx)(`input`,{className:l,value:M.pentacam[e].ttt,onChange:c(e,`ttt`)})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] text-[#ba1a1a] text-right text-[11px]`,children:`Ablation`}),(0,p.jsx)(`td`,{className:u,colSpan:3,children:(0,p.jsx)(`input`,{className:`${l} text-[#ba1a1a]`,value:M.pentacam[e].ablation,onChange:c(e,`ablation`)})})]})]})})]},e)})]}),y===`consultant`?null:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(`section`,{className:`print-lasik-treatment-plan`,children:(0,p.jsxs)(`table`,{className:`w-full text-center border-collapse text-sm`,children:[(0,p.jsx)(`thead`,{className:`bg-[#e7e8ea] text-xs uppercase font-bold text-[#434654]`,children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{className:u,children:`Target Refraction`}),(0,p.jsx)(`th`,{className:u,children:`OD/OS`}),(0,p.jsx)(`th`,{className:u,children:`Before Flap`}),(0,p.jsx)(`th`,{className:u,children:`After Flap`}),(0,p.jsx)(`th`,{className:u,children:`After Treatment`}),(0,p.jsx)(`th`,{className:u,children:`Flap Reposition`}),(0,p.jsx)(`th`,{className:u,children:`Ciclo 3x`}),(0,p.jsx)(`th`,{className:u,children:`Note`})]})}),(0,p.jsx)(`tbody`,{children:[`OD`,`OS`].map(e=>(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:l})}),(0,p.jsx)(`td`,{className:`${u} ${e===`OD`?`text-[#003d9b] bg-[#003d9b]/5`:`text-[#526069] bg-[#f3f4f6]`}`,children:e}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:l})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:l})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:l})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:l})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:l})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:l})})]},e))})]})})}),(0,p.jsxs)(`footer`,{className:`pt-6 border-t-2 border-[#003d9b] space-y-6 print-lasik-compact-footer`,children:[(0,p.jsxs)(`div`,{className:`print-lasik-footer-grid grid grid-cols-1 lg:grid-cols-12 gap-8`,children:[(0,p.jsxs)(`div`,{className:`lg:col-span-8 space-y-4`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`label`,{className:`font-bold text-[#003d9b] text-sm`,children:`Diagnosis / التشخيص:`}),(0,p.jsx)(`textarea`,{className:`mt-1 min-h-24 w-full resize-none border-0 border-b border-[#c3c6d6] bg-transparent p-1 outline-none`,value:He,onChange:e=>Ue(e.target.value)})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`label`,{className:`font-bold text-[#003d9b] text-sm`,children:`Final Decision / القرار النهائي:`}),(0,p.jsx)(`textarea`,{className:`mt-1 min-h-16 w-full resize-none border-0 border-b border-[#c3c6d6] bg-transparent p-1 outline-none`,value:We,onChange:e=>Ge(e.target.value)})]})]}),(0,p.jsxs)(`div`,{className:`lg:col-span-4 border-2 border-[#003d9b] rounded-xl p-4 bg-[#003d9b]/5`,children:[(0,p.jsx)(`div`,{className:`text-center font-bold text-[#003d9b] uppercase text-xs border-b border-[#003d9b]/20 pb-2 mb-3`,children:`Office Notes`}),(0,p.jsx)(`div`,{className:`border-b border-solid border-[#003d9b]/40 h-6 mb-2`}),(0,p.jsx)(`div`,{className:`border-b border-solid border-[#003d9b]/40 h-6 mb-2`}),(0,p.jsx)(`div`,{className:`border-b border-solid border-[#003d9b]/40 h-6`})]})]}),(0,p.jsx)(`div`,{className:`print-lasik-signatures grid grid-cols-2 md:grid-cols-4 gap-8 pt-4 border-t border-[#c3c6d6]`,children:[[`التمريض / Nursing`,I.nurse],[`الطبيب / Surgeon`,I.doctor],[`فني / Optometrist`,I.technician],[`الاستقبال / Reception`,I.reception]].map(([e,t],n)=>(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsx)(`span`,{className:`text-[11px] font-bold uppercase ${n===1?`text-[#003d9b]`:`text-[#434654]`}`,children:e}),(0,p.jsx)(`div`,{className:`border-b-2 h-9 flex items-end justify-center ${n===1?`border-[#003d9b]`:`border-[#191c1e]`}`,children:(0,p.jsx)(`span`,{className:`text-xs italic ${n===1?`text-[#003d9b] font-bold`:`text-[#737685]`}`,children:t||``})})]},n))})]})]})},kt=()=>(0,p.jsx)(be,{titleEn:y===`consultant`?`Consultant Follow-up`:`LASIK Follow-up`,titleAr:y===`consultant`?`متابعة الاستشاري`:`متابعة الليزك`,patientName:A.patientName,patientDOB:_e(A.dateOfBirth),operationType:T,setOperationType:E,operationEyes:ze,setOperationEyes:k,operationDateRight:D,setOperationDateRight:O,followups:Pe,setFollowups:S,followupLabels:x,signatures:I,readOnly:!0,printVariant:`attached`});return(0,p.jsxs)(`div`,{className:e?`lasik-print-root ${X.printView?`print-view-active`:``} bg-white`:`lasik-print-root ${X.printView?`print-view-active`:``} min-h-screen print:min-h-0 bg-[#dde1e7]`,dir:`ltr`,children:[(0,p.jsx)(`style`,{children:`
        ${it}
        .lasik-sheet, .lasik-sheet * {
          font-weight: 400 !important;
          text-decoration: none !important;
        }
        .lasik-sheet th { font-weight: 700 !important; }
        .patient-row-bold, .patient-row-bold * { font-weight: 700 !important; }
        .patient-row-normal, .patient-row-normal * { font-weight: 400 !important; }
        .lasik-sheet .border-b,
        .lasik-sheet .border-b-2 {
          border-bottom: none !important;
        }
          .lasik-sheet .sheet-print-header {
            display: grid !important;
            grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr) !important;
            align-items: center !important;
            border-bottom: 2px solid #003d9b !important;
            padding-bottom: 2px !important;
            margin-bottom: 2px !important;
          }
        .lasik-sheet .sheet-print-clinic-name {
          font-size: 20px !important;
          font-weight: 700 !important;
          line-height: 1.1 !important;
          color: #003d9b !important;
        }
        .lasik-sheet .sheet-print-clinic-tagline {
          font-size: 12px !important;
          font-weight: 400 !important;
          line-height: 1.2 !important;
          color: #434654 !important;
        }
          .lasik-sheet .sheet-print-logo {
            width: 40px !important;
            height: 40px !important;
          }
        .lasik-sheet .sheet-print-type {
          font-size: 17px !important;
          font-weight: 700 !important;
          line-height: 1.15 !important;
          color: #191c1e !important;
        }
        .lasik-sheet .sheet-watermark {
          opacity: 1 !important;
        }
        /* Same transparency as print — on the editing screen too, not just
           the printed page — so the watermark shows through form fields
           there as well. */
        .lasik-sheet input:not([type="checkbox"]):not([type="radio"]),
        .lasik-sheet [data-slot="input"],
        .lasik-sheet select,
        .lasik-sheet .border-input,
        .lasik-sheet textarea {
          background: transparent !important;
          background-color: transparent !important;
        }
        .consultant-examination-only > * {
          display: none !important;
        }
        .consultant-examination-only > [data-purpose="clinical-diagrams"] {
          display: flex !important;
          order: 1 !important;
          min-height: 0 !important;
          border: 0 !important;
          padding: 0 !important;
        }
        .consultant-examination-only > [data-purpose="clinical-refraction"] {
          display: block !important;
          order: 2 !important;
          width: 100% !important;
          margin-top: 8px !important;
        }
        .consultant-examination-only > [data-purpose="clinical-refraction"] th,
        .consultant-examination-only > [data-purpose="clinical-refraction"] td {
          padding: 2px 4px !important;
          font-size: 16px !important;
        }
        .consultant-examination-only > [data-purpose="clinical-refraction"] input,
        .consultant-examination-only > [data-purpose="clinical-refraction"] button,
        .consultant-examination-only > [data-purpose="clinical-refraction"] button span {
          font-size: 16px !important;
        }
        @media screen and (max-width: 639px) {
          #root .consultant-examination-only .clinical-refraction-desktop-table {
            display: none !important;
          }
        }
        .consultant-examination-only .consultant-eyes-block {
          display: none !important;
        }
        .consultant-examination-only .consultant-right-column {
          width: 100% !important;
        }
        /* Print preview pages must not become independent scroll containers. */
        .lasik-print-root.print-view-active [data-print-page],
        .lasik-print-root.print-view-active .print-page-center-a4,
        .lasik-print-root.print-view-active .print-page-center-a4 > .lasik-sheet {
          overflow: hidden !important;
          overflow-y: hidden !important;
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        .lasik-print-root.print-view-active [data-print-page]::-webkit-scrollbar,
        .lasik-print-root.print-view-active .print-page-center-a4::-webkit-scrollbar,
        .lasik-print-root.print-view-active .print-page-center-a4 > .lasik-sheet::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          background: transparent !important;
        }

        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          /* index.css's .lasik-print-root > div rule (margin-left/right:0,
             for stripping card gutters elsewhere) only matches the immediate
             py-8 wrapper — [data-print-document="lasik"] is a grandchild, so
             a child-combinator selector here never matched it and this
             override was dead. Use a descendant selector so it actually
             centers the page. */
          .lasik-print-root [data-print-document="lasik"] {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          /* Scrollbars are useful on screen but must never be captured in print/PDF output. */
          html, body, #root,
          .lasik-print-root,
          .lasik-print-root * {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
          html::-webkit-scrollbar,
          body::-webkit-scrollbar,
          #root::-webkit-scrollbar,
          .lasik-print-root::-webkit-scrollbar,
          .lasik-print-root *::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
          .lasik-print-root {
            overflow: visible !important;
            max-height: none !important;
          }

          /* Keep the outer root visible for page breaks, but never the paper pages. */
          [data-print-document="lasik"] [data-print-page],
          [data-print-document="lasik"] .print-page-center-a4,
          [data-print-document="lasik"] .print-page-center-a4 > .lasik-sheet {
            overflow: hidden !important;
            overflow-y: hidden !important;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }

          [data-print-document="lasik"] [data-print-page]::-webkit-scrollbar,
          [data-print-document="lasik"] .print-page-center-a4::-webkit-scrollbar,
          [data-print-document="lasik"] .print-page-center-a4 > .lasik-sheet::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
            background: transparent !important;
          }
          html, body {
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }
          .lasik-print-root {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            overflow: visible !important;
          }
          .lasik-print-root.print-view-active {
            height: auto !important;
            overflow: visible !important;
          }
          .print-page-break {
            page-break-before: always !important;
            break-before: page !important;
          }
          .print-page-center-a4 {
            width: 100% !important;
            max-width: 100% !important;
            /* Exactly 297mm (A4) leaves zero headroom for Chrome's own px
               rounding of the mm size during PDF/print pagination, which is
               enough on its own to spawn a trailing blank page (confirmed
               for the external/no-followup sheet, which never picks up the
               combined-sheet-print override below). Match that override's
               293mm so single-page sheets get the same safety margin. */
            height: 293mm !important;
            min-height: 293mm !important;
            max-height: 293mm !important;
            margin: 0 !important;
            padding: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          [data-print-document="lasik"] .print-page-center-a4 {
            min-height: 293mm !important;
            display: flex !important;
            justify-content: center !important;
          }
          [data-print-document="lasik"]
            [data-print-page="main"] > .lasik-sheet {
            position: relative !important;
            inset: auto !important;
            left: auto !important;
            right: auto !important;
            transform: translateX(${Qe}mm) translateY(${et}mm) scale(${nt}) !important;
            width: 100% !important;
            max-width: 100% !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .print-page-center-a4 > .lasik-sheet {
            width: 100% !important;
            max-width: 100% !important;
            height: 275mm !important;
            min-height: 275mm !important;
            max-height: 275mm !important;
            box-sizing: border-box !important;
            padding: 1.5mm 3mm !important;
            gap: 0 !important;
            font-size: 98% !important;
            line-height: 1.02 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            row-gap: 1.5mm !important;
          }
          .print-page-center-a4 > .lasik-sheet > * {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          .attached-followup-page > .sheet-followup-body[data-print-variant="attached"] {
            transform: translateX(${x.offsetXmm}mm) translateY(${x.offsetYmm}mm) scale(${x.scale}) !important;
          }
          [data-sheet-type="consultant"] .attached-followup-page > .sheet-followup-body[data-print-variant="attached"] {
            transform: none !important;
          }
          .print-page-center-a4 > .lasik-sheet section {
            margin-block: 0 !important;
          }
          .print-page-center-a4 > .lasik-sheet table th,
          .print-page-center-a4 > .lasik-sheet table td {
            padding: 1px 2px !important;
            line-height: 0.98 !important;
          }
          .lasik-sheet section,
          .lasik-sheet footer,
          .lasik-sheet table,
          .lasik-sheet tr,
          .lasik-sheet td,
          .lasik-sheet th,
          .lasik-sheet label,
          .lasik-sheet input,
          .lasik-sheet select,
          .lasik-sheet span,
          .lasik-sheet div {
            page-break-inside: avoid !important;
          }
          .lasik-sheet table { font-size: 13px !important; }
          .lasik-sheet input,
          .lasik-sheet select {
            font-size: 13px !important;
            padding-top: 1px !important;
            padding-bottom: 1px !important;
          }
          .lasik-sheet textarea {
            overflow: hidden !important;
          }
          .lasik-sheet input:not([type="checkbox"]):not([type="radio"]),
          .lasik-sheet textarea {
            border: 0 !important;
            border-bottom: 0 !important;
            box-shadow: none !important;
            outline: 0 !important;
            background: transparent !important;
            text-decoration: none !important;
            font-size: 12px !important;
            font-weight: 700 !important;
            line-height: 1.15 !important;
          }
          /* [data-slot="input"] (shadcn Input, incl. every DateInput field)
             and its wrapping border box can lose their bg-transparent
             utility class to another [data-slot="input"] rule elsewhere in
             the cascade — force it so the watermark shows through instead
             of hiding behind an opaque white patch. */
          .lasik-sheet [data-slot="input"],
          .lasik-sheet select,
          .lasik-sheet .border-input {
            background: transparent !important;
            background-color: transparent !important;
          }
          .patient-row-normal input:not([type="checkbox"]):not([type="radio"]) {
            font-weight: 400 !important;
          }
          /* Same size across every field in the patient-info section, on
             every sheet type — only weight tells the important fields
             (name, age, job, ...) apart from the plain labels. */
          /* Titles (the field labels, e.g. "الاسم:") vs data (the actual
             values, whether an <input> or the read-only dateOfBirth <span>)
             — labels all carry the text-[#434654] color class, which is
             otherwise unused on any value in this section, so it doubles as
             a reliable title/value discriminator here. */
          .print-lasik-patient-grid span[class*="434654"] {
            font-size: 12px !important;
            font-weight: 700 !important;
            line-height: 1.2 !important;
          }
          .print-lasik-patient-grid span:not([class*="434654"]) {
            font-size: 11px !important;
          }
          .print-lasik-patient-grid input:not([type="checkbox"]):not([type="radio"]) {
            font-size: 11px !important;
          }
          .lasik-sheet .patient-detail-emphasis {
            font-size: 11px !important;
            font-weight: 700 !important;
          }
          .sheet-type-consultant .print-lasik-patient-grid,
          [data-sheet-type="consultant"] .print-lasik-patient-grid {
            min-height: 0 !important;
            padding: 5px !important;
            row-gap: 1mm !important;
          }
          .sheet-type-consultant .print-lasik-patient-grid > div,
          [data-sheet-type="consultant"] .print-lasik-patient-grid > div {
            row-gap: 3px !important;
          }
          .lasik-sheet .border-b,
          .lasik-sheet .border-b-2,
          .lasik-sheet .border-b-4,
          .lasik-sheet .border-b-8 {
            border-bottom: 0 !important;
          }
          .lasik-sheet .sheet-print-header {
            border-bottom: 2px solid #003d9b !important;
            padding-bottom: 2mm !important;
            margin-bottom: 2mm !important;
          }
          .lasik-sheet .sheet-print-clinic-name {
            font-size: 21px !important;
            font-weight: 700 !important;
          }
          .lasik-sheet .sheet-print-clinic-tagline {
            font-size: 12px !important;
            font-weight: 400 !important;
          }
          .lasik-sheet .sheet-print-logo {
            width: 15mm !important;
            height: 15mm !important;
          }
          .lasik-sheet .sheet-print-type {
            font-size: 18px !important;
            font-weight: 700 !important;
          }
          .lasik-sheet .sheet-watermark img {
            width: 120mm !important;
            height: 120mm !important;
            opacity: 0.07 !important;
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }
          .lasik-sheet .gap-8 { gap: 12px !important; }
          .lasik-sheet .gap-6 { gap: 10px !important; }
          .lasik-sheet .gap-5 { gap: 8px !important; }
          .lasik-sheet .gap-4 { gap: 6px !important; }
          .lasik-sheet .p-8 { padding: 0 !important; }
          .lasik-sheet .p-4 { padding: 8px !important; }
          /* min-width:0 lets this grid item shrink below its content's
             intrinsic width — grid items default to min-width:auto, so
             without this a wide table (see table-layout:fixed below) plus
             the 10mm padding-left pushes the whole row past the page's
             210mm edge instead of respecting its 1.3fr track. This was the
             real source of the right-edge overflow/crop on lasik/external
             print (the pentacam eye cards consultant doesn't render). */
          .print-lasik-eye-card {
            display: flex !important;
            flex-direction: column !important;
            min-width: 0 !important;
            padding-left: 10mm !important;
            padding-top: 4px !important;
            padding-bottom: 4px !important;
          }
          /* Stretch the table down through the card's full stretched height
             (align-items:stretch on the section below) instead of sitting
             at its own small intrinsic size with empty space beneath it. */
          .print-lasik-eye-card table {
            flex: 1 1 auto !important;
            height: 100% !important;
          }
          .print-lasik-pentacam-right table {
            table-layout: fixed !important;
            width: 100% !important;
            font-size: 13px !important;
          }
          .print-lasik-pentacam-right td,
          .print-lasik-pentacam-right th {
            padding: 4px 6px !important;
            line-height: 1.3 !important;
          }
          .print-lasik-pentacam-right td input {
            font-size: 13px !important;
          }
          .print-lasik-pentacam-right .mb-2 {
            margin-bottom: 2px !important;
          }
          .lasik-sheet .pt-6 { padding-top: 10px !important; }
          .lasik-sheet .pt-4 { padding-top: 8px !important; }
          .lasik-sheet .pb-3 { padding-bottom: 6px !important; }
          .lasik-sheet .mb-3 { margin-bottom: 6px !important; }
          .lasik-sheet .mt-3 { margin-top: 6px !important; }
          .lasik-sheet .h-9 { height: 28px !important; }
          .lasik-sheet .h-8 { height: 22px !important; }
          .lasik-sheet .h-6 { height: 16px !important; }
          .print-lasik-patient-grid {
            display: flex !important;
            flex-wrap: wrap !important;
            column-gap: 6mm !important;
            row-gap: 1mm !important;
            padding: 5px !important;
            gap: 3px !important;
          }
          .print-lasik-patient-grid > div {
            gap: 3px !important;
          }
          .print-lasik-pentacam-right {
            display: grid !important;
            grid-template-columns: 1fr 1.3fr 1.3fr !important;
          }
          .print-lasik-pentacam-right > div:first-child { display: block !important; }
          .sheet-type-lasik .print-lasik-pentacam-right {
            min-height: 65mm !important;
            align-items: stretch !important;
          }
          .sheet-type-external .print-lasik-pentacam-right {
            min-height: 65mm !important;
            align-items: stretch !important;
          }
          .print-lasik-treatment-plan table {
            font-size: 10px !important;
          }
          .print-lasik-treatment-plan th,
          .print-lasik-treatment-plan td {
            padding: 2px 3px !important;
            line-height: 1.05 !important;
          }
          .print-consultant-diagrams {
            display: flex !important;
            flex-wrap: wrap !important;
            align-items: stretch !important;
            justify-content: center !important;
            gap: 3mm !important;
            flex: 1 1 auto !important;
            min-height: 125mm !important;
            padding: 4mm !important;
          }
          .print-consultant-diagrams .fundus-drawing-surface {
            width: 26mm !important;
            height: 26mm !important;
          }
          .print-consultant-diagrams [class*="f4c98a"] {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }
          .print-consultant-diagrams .consultant-eyes-block {
            width: calc(25% - 1.5mm) !important;
          }
          .print-consultant-diagrams .consultant-right-column {
            width: calc(75% - 1.5mm) !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 2mm !important;
          }
          .print-consultant-diagrams .consultant-complains-block {
            flex: 1 !important;
          }
          .print-consultant-diagrams .consultant-examination-block {
            flex: 2.4 !important;
          }
          .print-consultant-diagrams p {
            margin-top: 2mm !important;
          }
          .print-consultant-diagrams .consultant-complains-block p {
            margin-top: 0 !important;
          }
          .print-lasik-history-visual-row {
            display: flex !important;
            align-items: stretch !important;
          }
          .print-lasik-questions {
            width: calc(75% - 3mm) !important;
          }
          .print-lasik-visual-grid {
            width: calc(25% - 3mm) !important;
          }
          .print-external-vision-grid {
            gap: 3mm !important;
          }
          .print-external-vision-grid table {
            font-size: 10px !important;
          }
          .print-external-vision-grid th,
          .print-external-vision-grid td {
            padding: 2px 3px !important;
            line-height: 1.05 !important;
          }
          .print-lasik-questions table {
            font-size: 10px !important;
          }
          .print-lasik-questions th {
            padding: 3px !important;
            line-height: 1.05 !important;
          }
          .print-lasik-questions td {
            padding: 2px 3px !important;
            line-height: 1.05 !important;
          }
          .print-lasik-questions input[type="checkbox"],
          .lasik-sheet input[type="checkbox"] {
            width: 12px !important;
            height: 12px !important;
            -webkit-appearance: none !important;
            appearance: none !important;
            border: 1.2px solid #191c1e !important;
            background-color: white !important;
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
            flex-shrink: 0 !important;
            position: relative !important;
          }
          .print-lasik-questions input[type="checkbox"]:checked,
          .lasik-sheet input[type="checkbox"]:checked {
            background-color: #191c1e !important;
          }
          .print-lasik-questions input[type="checkbox"]:checked::after,
          .lasik-sheet input[type="checkbox"]:checked::after {
            content: "" !important;
            position: absolute !important;
            left: 3px !important;
            top: 0px !important;
            width: 3px !important;
            height: 6px !important;
            border: solid white !important;
            border-width: 0 1.5px 1.5px 0 !important;
            transform: rotate(45deg) !important;
          }
          .lasik-sheet input[type="radio"] {
            -webkit-appearance: none !important;
            appearance: none !important;
            width: 12px !important;
            height: 12px !important;
            border: 1.2px solid #191c1e !important;
            border-radius: 50% !important;
            background-color: white !important;
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }
          .lasik-sheet input[type="radio"]:checked {
            background-color: #191c1e !important;
          }
          .print-lasik-footer-grid { display: grid !important; grid-template-columns: minmax(0, 8fr) minmax(0, 4fr) !important; }
          .print-lasik-signatures { display: grid !important; grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
          .print-page-center-a4 > .lasik-sheet > .print-lasik-compact-footer {
            flex: 0 0 auto !important;
            min-height: 0 !important;
            margin-top: 0 !important;
            padding-top: 2px !important;
            gap: 2px !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .print-lasik-compact-footer {
            padding-top: 2px !important;
          }
          .print-lasik-compact-footer > :not([hidden]) ~ :not([hidden]) {
            margin-top: 2px !important;
          }
          .print-lasik-compact-footer .space-y-4 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 2px !important;
          }
          .print-lasik-compact-footer textarea {
            min-height: 36px !important;
            height: 36px !important;
            font-size: 10px !important;
            margin-top: 0 !important;
            padding: 1px !important;
          }
          .sheet-type-lasik .print-lasik-compact-footer textarea,
          .sheet-type-external .print-lasik-compact-footer textarea {
            min-height: 62px !important;
            height: 62px !important;
          }
          .print-lasik-compact-footer label {
            font-size: 11px !important;
          }
          .print-lasik-compact-footer .print-lasik-footer-grid {
            gap: 3px !important;
          }
          .print-lasik-compact-footer .print-lasik-footer-grid > div:first-child {
            gap: 2px !important;
          }
          .print-lasik-compact-footer .print-lasik-footer-grid > div:last-child {
            padding: 3px !important;
          }
          .print-lasik-compact-footer .print-lasik-footer-grid > div:last-child > div:first-child {
            font-size: 9px !important;
            padding-bottom: 1px !important;
            margin-bottom: 1px !important;
          }
          .print-lasik-compact-footer .print-lasik-footer-grid > div:last-child > div {
            margin-bottom: 1px !important;
            padding-bottom: 1px !important;
          }
          .print-lasik-compact-footer .print-lasik-footer-grid > div:last-child .h-6 {
            height: 20px !important;
            margin-bottom: 2px !important;
          }
          .sheet-type-lasik .print-lasik-compact-footer .print-lasik-footer-grid > div:last-child .h-6,
          .sheet-type-external .print-lasik-compact-footer .print-lasik-footer-grid > div:last-child .h-6 {
            height: 30px !important;
            margin-bottom: 3px !important;
          }
          .print-lasik-compact-footer .print-lasik-signatures {
            padding-top: 2px !important;
            gap: 8px !important;
          }
          .print-lasik-compact-footer .print-lasik-signatures > div {
            gap: 1px !important;
          }
          .print-lasik-compact-footer .print-lasik-signatures .h-9 {
            height: 18px !important;
          }

        }
      `}),e?null:(0,p.jsxs)(`header`,{className:`sticky top-0 z-50 flex items-center justify-between border-b border-border/60 bg-card px-6 py-2 print:hidden`,style:{fontFamily:`Inter, sans-serif`},children:[b?(0,p.jsx)(`div`,{className:`flex items-center gap-1 text-sm`,children:[{key:`consultant`,label:`استشاري`},{key:`lasik`,label:`ليزك`},{key:`external`,label:`اشعه خارجي`},{key:`referral`,label:`خطاب تحويل`}].map(e=>{let t=v.startsWith(`/patient-hub/`)?`/patient-hub`:``,n=e.key===`referral`?`${t}/sheets/referral/${b}`:`${t}/sheets/${e.key}/${b}`;return(0,p.jsx)(`button`,{type:`button`,onClick:()=>Ee(n),className:`rounded px-3 py-1.5 font-bold ${e.key===y?`bg-primary text-primary-foreground`:`text-muted-foreground hover:bg-primary/10`}`,children:e.label},e.key)})}):(0,p.jsx)(`div`,{}),(0,p.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,p.jsx)(`div`,{className:`w-60`,children:(0,p.jsx)(se,{initialPatientId:b,onSelect:wt})}),(0,p.jsx)(l,{size:`sm`,className:`rounded bg-primary px-4 py-2 font-bold text-primary-foreground hover:opacity-90 active:scale-95`,onClick:Et,disabled:Q.isPending,type:`button`,children:Q.isPending?`حفظ…`:`حفظ`}),(0,p.jsxs)(l,{size:`sm`,variant:`outline`,className:`rounded border-primary px-4 py-2 font-bold text-primary hover:bg-primary/5`,onClick:Dt,type:`button`,children:[(0,p.jsx)(te,{className:`h-4 w-4 mr-1`}),` Print`]})]})]}),!e&&X.printView&&(0,p.jsx)(me,{title:ke,subtitle:A.patientName||void 0,onPrint:Dt}),(0,p.jsxs)(`div`,{className:e?`py-0`:`py-8 print:py-0`,children:[e&&m!==`examination`?(0,p.jsx)(`div`,{className:`sticky top-0 z-30 mb-2 flex justify-end bg-white/95 py-2 print:hidden`,dir:`rtl`,children:(0,p.jsx)(l,{size:`sm`,onClick:Et,disabled:Q.isPending,type:`button`,children:Q.isPending?`حفظ…`:`حفظ الملف`})}):null,e&&m===`examination`?(0,p.jsxs)(`div`,{className:`mb-2 flex flex-wrap items-end justify-end gap-2 print:hidden`,dir:`rtl`,children:[(0,p.jsx)(l,{size:`sm`,onClick:Et,disabled:Q.isPending,type:`button`,children:Q.isPending?`حفظ…`:`حفظ الفحص`}),(0,p.jsxs)(l,{type:`button`,variant:`destructive`,size:`sm`,className:`h-9 gap-1.5`,disabled:!h||xt.isPending,onClick:()=>{!b||!h||window.confirm(`مسح شيت هذه الزيارة من sheet_entries؟`)&&xt.mutate({patientId:b,visitId:h,sheetType:y})},children:[(0,p.jsx)(u,{className:`h-4 w-4`}),xt.isPending?`جاري المسح…`:`مسح الزيارة`]})]}):null,(0,p.jsxs)(`div`,{className:`print:hidden ${X.printView?`hidden`:``}`,children:[(0,p.jsx)(`div`,{className:e?`w-full`:`a4-page-card`,children:Ot()}),J&&(0,p.jsx)(`div`,{className:`combined-followup-screen mt-8 ${e?`w-full max-w-none`:`a4-page-card`}`,children:kt()})]}),(0,p.jsxs)(`div`,{className:`hidden print:block ${J?`combined-sheet-print`:``}`,"data-print-document":`lasik`,"data-sheet-type":y,children:[(0,p.jsx)(`div`,{className:`print-page-center-a4`,"data-print-page":`main`,children:Ot(!0)}),J&&(0,p.jsx)(`div`,{className:`attached-followup-page`,"data-print-page":`followup`,children:kt()})]})]})]})}export{m as t};