import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{p as t}from"./charts-CKYPXezW.js";import{E as n}from"./data-core-CrqxPXdn.js";import{t as r}from"./trpc-BXgQr0U5.js";import{a as i,o as a}from"./react-core-Cbv4oCTl.js";import{r as o}from"./utils-D5ZYrGtY.js";import{i as s}from"./ui-misc-D38wyx1_.js";import{t as c}from"./useAuth-CFioRwUL.js";import{t as l}from"./button-putbLdKw.js";import{S as u,Z as ee,mt as te}from"./icons-Bh8r5BPY.js";import{t as ne}from"./textarea-DtK_QCB9.js";import{c as re,i as ie,l as ae}from"./refractionOptions-B1fjLv9h.js";import{t as d}from"./RefractionValueSelect-D9gmcjTM.js";import{t as oe}from"./date-input-DNin7Xlz.js";import{i as se}from"./nativePdf-CtH9RqDb.js";import{t as ce}from"./PatientPicker-C40oxaGn.js";import{i as le,n as ue,r as de,t as fe}from"./sheetDesigner-BGclgCQ9.js";import{t as pe}from"./useAppNavigation-mGNcU55M.js";import{n as me,t as he}from"./PrintPreviewBanner-DAbb717I.js";import{n as ge,r as _e,t as ve}from"./sheetDates-CvR7UcpH.js";import{n as ye,t as be}from"./SheetWatermark-TN2Q8DV5.js";import{t as xe}from"./FollowupTablesBody-DTikxfnm.js";/* empty css                        */import{t as Se}from"./ws-CsoVwBEJ.js";var f=e(t(),1),p=n();function Ce({value:e,onChange:t}){let n=(0,f.useRef)(null),r=(0,f.useRef)(!1);(0,f.useEffect)(()=>{let t=n.current,r=t?.getContext(`2d`);if(!t||!r||(r.clearRect(0,0,t.width,t.height),!e))return;let i=new Image;i.onload=()=>{r.clearRect(0,0,t.width,t.height),r.drawImage(i,0,0,t.width,t.height)},i.src=e},[e]);let i=()=>{r.current=!1;let e=n.current;e&&t(e.toDataURL(`image/webp`,.82))},a=e=>{let t=e.currentTarget.getBoundingClientRect();return{x:(e.clientX-t.left)/t.width*e.currentTarget.width,y:(e.clientY-t.top)/t.height*e.currentTarget.height}};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`canvas`,{ref:n,width:360,height:720,className:`absolute inset-0 z-10 h-full w-full touch-none cursor-crosshair`,onPointerDown:e=>{r.current=!0,e.currentTarget.setPointerCapture(e.pointerId);let t=e.currentTarget.getContext(`2d`),n=a(e);t?.beginPath(),t?.moveTo(n.x,n.y)},onPointerMove:e=>{if(!r.current)return;let t=e.currentTarget.getContext(`2d`);if(!t)return;let n=a(e);t.strokeStyle=`#dc2626`,t.lineWidth=2.5,t.lineCap=`round`,t.lineJoin=`round`,t.lineTo(n.x,n.y),t.stroke()},onPointerUp:i,onPointerCancel:i}),(0,p.jsx)(`button`,{type:`button`,title:`مسح الرسم`,"aria-label":`مسح الرسم`,className:`absolute right-1 top-1 z-20 flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-[10px] font-bold text-slate-500 shadow print:hidden`,onClick:()=>{let e=n.current;e&&(e.getContext(`2d`)?.clearRect(0,0,e.width,e.height),t(``))},children:`×`})]})}var we=[`المتابعة الأولى`,`المتابعة الثانية`,`المتابعة الثالثة`,`المتابعة الرابعة`];function Te(e=we){return we.map((t,n)=>({id:`empty-${n+1}`,date:``,type:e[n]??t}))}function m({embedded:e=!1,patientId:t,visitId:n,sheetType:we,embeddedMode:m=`full`}={}){let[h,Ee]=(0,f.useState)(n),{user:g,isAuthenticated:_}=c(),[,v]=i(),{goBack:De}=pe(),[,Oe]=a(`/sheets/:type/:id`),y=typeof window<`u`?window.location.pathname:``,b=we??(y.includes(`/sheets/consultant`)?`consultant`:y.includes(`/sheets/external`)||y.includes(`/sheets/operation`)?`external`:`lasik`),ke=b===`consultant`?`كشف`:b===`external`?`د.الصواف`:`تصحيح ابصار`,Ae=(()=>{if(Oe?.id)return Number(Oe.id);if(typeof window>`u`)return;let e=window.location.pathname.match(/^\/(?:patient-hub\/)?sheets\/(?:lasik|consultant|external)\/(\d+)/);return e?.[1]?Number(e[1]):void 0})(),x=Number.isFinite(t)?t:Number.isFinite(Ae)?Ae:void 0;typeof window<`u`&&new URLSearchParams(window.location.search).get(`original`);let je=typeof window<`u`&&new URLSearchParams(window.location.search).get(`includeFollowups`)===`1`,Me=b===`consultant`?fe.followupConsultant:fe.followupLasik,[Ne,Pe]=(0,f.useState)(Me),[Fe,S]=(0,f.useState)(()=>Te(Me.followupNames)),[C,w]=(0,f.useState)({}),[Ie,Le]=(0,f.useState)(``),[Re,ze]=(0,f.useState)(``),[T,E]=(0,f.useState)(``),[D,Be]=(0,f.useState)(``),[O,Ve]=(0,f.useState)({right:!0,left:!1,both:!1}),[k,A]=(0,f.useState)({patientName:``,dateOfBirth:``,age:``,address:``,phone:``,alternatePhone:``,patientCode:``,job:``,examinationDate:new Date().toISOString().split(`T`)[0]}),[j,M]=(0,f.useState)({autorefraction:{od:{s:``,c:``,axis:``,va:``,iop:``,ucva:``,bcva:``},os:{s:``,c:``,axis:``,va:``,iop:``,ucva:``,bcva:``}},pentacam:{od:{k1:``,k2:``,ax1:``,ax2:``,thinnest:``,apex:``,residual:``,ttt:``,ablation:``},os:{k1:``,k2:``,ax1:``,ax2:``,thinnest:``,apex:``,residual:``,ttt:``,ablation:``}}}),[N,P]=(0,f.useState)({od:{s:``,c:``,axis:``,pd:``},os:{s:``,c:``,axis:``,pd:``}}),[F,I]=(0,f.useState)({reception:``,nurse:``,technician:``,doctor:b===`external`?`د. الصواف`:``}),[He,Ue]=(0,f.useState)(``),[We,Ge]=(0,f.useState)(``),[Ke,qe]=(0,f.useState)(``),[L,R]=(0,f.useState)({OD:{target:``,beforeFlap:``,afterFlap:``,afterTreatment:``,flapReposition:``,ciclo:``,note:``},OS:{target:``,beforeFlap:``,afterFlap:``,afterTreatment:``,flapReposition:``,ciclo:``,note:``}}),[Je,Ye]=(0,f.useState)(``),[Xe,Ze]=(0,f.useState)(``),[Qe,$e]=(0,f.useState)(``),[et,tt]=(0,f.useState)(``),[nt,rt]=(0,f.useState)(``),[z,B]=(0,f.useState)({externalPtosis:!1,externalSquint:!1,externalOthers:!1,externalOthersNote:``,muscleNormal:!1,muscleAbnormal:!1,muscleAbnormalNote:``,otherAbnormalities:``,fundusNormal:!1,fundusAbnormal:!1,fundusAbnormalNote:``,complains:``});(0,f.useEffect)(()=>{Ee(n)},[n]),(0,f.useEffect)(()=>{h&&(B({externalPtosis:!1,externalSquint:!1,externalOthers:!1,externalOthersNote:``,muscleNormal:!1,muscleAbnormal:!1,muscleAbnormalNote:``,otherAbnormalities:``,fundusNormal:!1,fundusAbnormal:!1,fundusAbnormalNote:``,complains:``}),P({od:{s:``,c:``,axis:``,pd:``},os:{s:``,c:``,axis:``,pd:``}}),rt(``))},[h]);let[V,it]=(0,f.useState)(``),[at,ot]=(0,f.useState)(!1),st=r.medical.getAllSymptoms.useQuery(void 0,{enabled:_,retry:2,refetchOnWindowFocus:!1}),H=(e,t)=>{B(n=>({...n,[e]:t}))},[ct,lt]=(0,f.useState)(0),[ut,dt]=(0,f.useState)(0),[ft,pt]=(0,f.useState)(1),[mt,ht]=(0,f.useState)(``),[gt,_t]=(0,f.useState)(fe.templates.lasik),vt=r.medical.getSystemSetting.useQuery({key:`sheet_designer_config`},{enabled:_,retry:2,refetchOnWindowFocus:!1}),yt=r.medical.getSystemSetting.useQuery({key:`mobile_sheet_mode_v1`},{enabled:_,retry:2,refetchOnWindowFocus:!1});if((0,f.useEffect)(()=>{_||v(`/`)},[_,v]),(0,f.useEffect)(()=>{let e=de();ht(e.css[b]||``),_t(e.templates[b]),lt(e.layout[b].offsetXmm),dt(e.layout[b].offsetYmm),pt(e.layout[b].scale);let t=b===`consultant`?e.followupConsultant:e.followupLasik;Pe(t),S(e=>e.map((e,n)=>({...e,type:t.followupNames[n]??e.type})))},[b]),(0,f.useEffect)(()=>{if(!vt.data?.value)return;let e=ue(vt.data.value);ht(e.css[b]||``),_t(e.templates[b]),lt(e.layout[b].offsetXmm),dt(e.layout[b].offsetYmm),pt(e.layout[b].scale);let t=b===`consultant`?e.followupConsultant:e.followupLasik;Pe(t),S(e=>e.map((e,n)=>({...e,type:t.followupNames[n]??e.type}))),le(e)},[b,vt.data]),!_)return null;let bt=yt.data?.value;bt&&typeof bt==`object`&&bt.enabled;let U=r.patient.getPatient.useQuery(x??0,{enabled:_&&!!x,retry:2,refetchOnWindowFocus:!1}),W=r.medical.getSheetEntry.useQuery({patientId:x??0,visitId:h,sheetType:b},{enabled:_&&!!x,retry:2,refetchOnWindowFocus:!1}),xt=b===`consultant`?`lasik`:b===`lasik`?`consultant`:null,St=r.medical.getSheetEntry.useQuery({patientId:x??0,sheetType:xt??`consultant`},{enabled:_&&!!x&&je&&!!xt,retry:2,refetchOnWindowFocus:!1}),Ct=r.medical.getPatientPageState.useQuery({patientId:x??0,page:`examination`},{enabled:_&&!!x,retry:2,refetchOnWindowFocus:!1}),G=r.medical.getExaminationsByPatient.useQuery({patientId:x??0},{enabled:_&&!!x,retry:2,refetchOnWindowFocus:!1}),K=r.medical.getGlassesRecordsByPatient.useQuery({patientId:x??0},{enabled:_&&!!x,retry:2,refetchOnWindowFocus:!1}),q=r.medical.getAutorefractometryByPatient.useQuery({patientId:x??0},{enabled:_&&!!x,retry:2,refetchOnWindowFocus:!1}),wt=r.medical.getExaminationChecklistsByPatient.useQuery({patientId:x??0},{enabled:_&&!!x,retry:2,refetchOnWindowFocus:!1}),J=r.medical.getVisitsByPatient.useQuery({patientId:x??0},{enabled:_&&!!x,retry:2,refetchOnWindowFocus:!1}),Y=m!==`examination`&&(b===`consultant`||b===`lasik`),X=r.medical.getFollowupSheets.useQuery({patientId:x??0},{enabled:_&&!!x&&Y,retry:2,refetchOnWindowFocus:!1}),Z=me({ready:!!x&&!W.isLoading&&!G.isLoading&&!J.isLoading&&(!Y||!X.isLoading)}),Q=r.medical.getMedicalReportsByPatient.useQuery({patientId:x??0},{enabled:_&&!!x,retry:2,refetchOnWindowFocus:!1}),Tt=r.medical.getPrescriptionsByPatient.useQuery({patientId:x??0},{enabled:_&&!!x,retry:2,refetchOnWindowFocus:!1}),Et=r.medical.getSurgeriesByPatient.useQuery({patientId:x??0},{enabled:_&&!!x,retry:2,refetchOnWindowFocus:!1}),Dt=r.medical.getPentacamFilesByPatient.useQuery({patientId:x??0},{enabled:_&&!!x,retry:2,refetchOnWindowFocus:!1}),Ot=r.medical.getTestRequestsByPatient.useQuery({patientId:x??0},{enabled:_&&!!x,retry:2,refetchOnWindowFocus:!1}),$=r.medical.getMedicalHistoryByPatient.useQuery({patientId:x??0},{enabled:_&&!!x,retry:2,refetchOnWindowFocus:!1}),kt=r.medical.upsertMedicalHistory.useMutation(),At=[W,G,K,q,wt,J,Q,Tt,Et,Dt,Ot,$],jt=At.some(e=>e.isError),Mt=()=>{for(let e of At)e.isError&&e.refetch()};(0,f.useEffect)(()=>{if(!X.data)return;let e=e=>{if(!e)return{};try{return typeof e==`string`?JSON.parse(e):e}catch{return{}}},t=X.data.slice().sort((e,t)=>Number(e.version)-Number(t.version)).flatMap(e=>(e.items??[]).map(t=>({...t,sheetVersion:e.version}))).filter(e=>e.followupDate).sort((e,t)=>{let n=new Date(e.followupDate).getTime()-new Date(t.followupDate).getTime();if(n!==0)return n;let r=Number(e.sheetVersion)-Number(t.sheetVersion);return r===0?Number(e.tableIndex)-Number(t.tableIndex):r}).slice(0,4);S(Te(Ne.followupNames).map((n,r)=>{let i=t[r];if(!i)return n;let a=e(i.refracOD),o=e(i.refracOS);return{...n,id:i.id,date:ge(i.followupDate),odVa:i.vaOD??``,osVa:i.vaOS??``,odS:a.s??``,odC:a.c??``,odAxis:a.axis??``,osS:o.s??``,osC:o.c??``,osAxis:o.axis??``,odIop:i.iopOD??``,osIop:i.iopOS??``,treatment:i.treatment??``,notes:i.notes??``}}))},[Ne.followupNames,X.data]),(0,f.useEffect)(()=>{let e=!1;try{let t=W.data?JSON.parse(W.data):null;e=Object.prototype.hasOwnProperty.call(t??{},`medicalHistoryOther`)}catch{e=!1}if($.data&&$.data.length>0){let t=$.data[0];if(w({"سكر؟":t.diabetes?`yes`:`no`,"ضغط؟":t.hypertension?`yes`:`no`,"الغدة الدرقية؟":t.thyroid?`yes`:`no`,"أمراض مناعة؟":t.autoimmune?`yes`:`no`,"ماء زرقاء؟":t.glaucoma?`yes`:`no`,"قرنية مخروطية بالعائلة؟":t.familyKeratoconus?`yes`:`no`}),!e&&(t.previousSurgeries||t.familyHistory)){let e=[t.previousSurgeries&&`عمليات سابقة: ${t.previousSurgeries}`,t.familyHistory&&`تاريخ عائلي: ${t.familyHistory}`].filter(Boolean).join(` | `);e&&Le(e)}}else w({"سكر؟":`no`,"ضغط؟":`no`,"الغدة الدرقية؟":`no`,"أمراض مناعة؟":`no`,"ماء زرقاء؟":`no`,"قرنية مخروطية بالعائلة؟":`no`})},[$.data,W.data]),(0,f.useEffect)(()=>{if(!x)return;let e=Se({patientId:x,onUpdate:()=>{Promise.all([W.refetch(),St.refetch(),U.refetch(),G.refetch(),K.refetch(),q.refetch(),wt.refetch(),J.refetch(),Q.refetch(),Tt.refetch(),Et.refetch(),X.refetch(),Dt.refetch(),Ot.refetch()])}});return()=>e?.close()},[x,W,St,U,G,K,q,wt,J,Q,Tt,Et,X,Dt,Ot]);let Nt=r.medical.saveSheetEntry.useMutation({onSuccess:()=>{s.success(`تم الحفظ`)}}),Pt=r.medical.deleteSheetEntryForVisit.useMutation({onSuccess:async({deleted:e})=>{B({externalPtosis:!1,externalSquint:!1,externalOthers:!1,externalOthersNote:``,muscleNormal:!1,muscleAbnormal:!1,muscleAbnormalNote:``,otherAbnormalities:``,fundusNormal:!1,fundusAbnormal:!1,fundusAbnormalNote:``,complains:``}),await W.refetch(),s.success(e?`تم مسح شيت الزيارة`:`لا يوجد شيت محفوظ لهذه الزيارة`)},onError:e=>s.error(o(e,`تعذر مسح شيت الزيارة`))}),Ft=r.medical.saveRefractionToExamination.useMutation(),It=r.medical.updateVisitChiefComplaint.useMutation(),Lt=e=>{A(t=>({...t,patientName:e.fullName??``,phone:e.phone??``,alternatePhone:e.alternatePhone??``,age:e.age==null?``:String(e.age),dateOfBirth:_e(e),address:e.address??``,patientCode:e.patientCode??``,job:e.occupation??``})),e.id&&v(`${y.startsWith(`/patient-hub/`)?`/patient-hub`:``}/sheets/${b}/${e.id}`)};(0,f.useEffect)(()=>{if(!U.data)return;let e=U.data;A(t=>({...t,patientName:e.fullName??``,phone:e.phone??``,alternatePhone:e.alternatePhone??``,age:e.age==null?``:String(e.age),dateOfBirth:_e(e),address:e.address??``,patientCode:e.patientCode??``,job:e.occupation??``}))},[U.data]);let Rt=W.data??St.data;(0,f.useEffect)(()=>{if(Rt)try{let e=JSON.parse(Rt);if(e.formData&&A(t=>({...t,...e.formData,patientName:t.patientName||e.formData.patientName,phone:t.phone||e.formData.phone,alternatePhone:t.alternatePhone||e.formData.alternatePhone||``,age:t.age||e.formData.age,dateOfBirth:t.dateOfBirth||ge(e.formData.dateOfBirth),address:t.address||e.formData.address})),e.examData&&M(t=>({autorefraction:{od:{...t.autorefraction.od,...e.examData.autorefraction?.od??{}},os:{...t.autorefraction.os,...e.examData.autorefraction?.os??{}}},pentacam:{od:{...t.pentacam.od,...e.examData.pentacam?.od??{}},os:{...t.pentacam.os,...e.examData.pentacam?.os??{}}}})),e.signatures&&I({reception:e.signatures.reception??``,nurse:e.signatures.nurse??``,technician:e.signatures.technician??``,doctor:e.signatures.doctor??``}),e.consultantExam&&B(t=>({...t,...e.consultantExam})),rt(String(e.consultantDrawing??``)),Ze(String(e.consultantDrawingDescription??``)),Ye(String(e.officeNotes??``)),Ue(String(e.readingValue??``)),Ge(String(e.fundus?.od??``)),qe(String(e.fundus?.os??``)),e.treatmentPlan&&R(t=>({OD:{...t.OD,...e.treatmentPlan?.OD??{}},OS:{...t.OS,...e.treatmentPlan?.OS??{}}})),Object.prototype.hasOwnProperty.call(e,`diabetesDuration`)&&ze(String(e.diabetesDuration??``)),e.medicalHistory&&w(t=>({...e.medicalHistory,...t})),Object.prototype.hasOwnProperty.call(e,`medicalHistoryOther`)){let t=String(e.medicalHistoryOther??``).trim(),n=String(e.consultantExam?.complains??``).trim(),r=t.replace(/^أدوية:\s*/u,``).trim();Le(n&&r===n?``:t)}if(e.operationDetails){E(e.operationDetails.type??``),Be(e.operationDetails.date??``);let t=e.operationDetails.eyes??{},n=!!t.right,r=!!t.left,i=!!t.both||n&&r;Ve({right:i?!0:n,left:i?!0:r,both:i})}e.diagnosisText&&$e(e.diagnosisText),e.finalDecisionText&&tt(e.finalDecisionText)}catch{}},[Rt]);let zt=r.opHistory.getSuggestedOperationType.useQuery({patientId:x??0},{enabled:_&&!!x,retry:2,refetchOnWindowFocus:!1});(0,f.useEffect)(()=>{if(W.isLoading||T)return;let e=zt.data;if(!e)return;let t={PRK:`PRK`,Lasik:`LASIK`,FL:`FL`,FS:`FS`,IOL:`IOL`,ICL:`ICL`}[e.operationType];t&&E(t)},[zt.data,W.isLoading,T]),(0,f.useEffect)(()=>{if(W.isLoading||D)return;let e=zt.data;e?.operationDate&&Be(ve(e.operationDate))},[zt.data,W.isLoading,D]),(0,f.useEffect)(()=>{if(!G.data||G.data.length===0)return;let e=(G.data??[]).find(e=>Number(e.visitId)===Number(h))??(h?null:G.data[0]);if(e){if(e.autorefraction){let t=e.autorefraction;M(e=>({autorefraction:{od:{...e.autorefraction.od,...t?.od??{}},os:{...e.autorefraction.os,...t?.os??{}}},pentacam:e.pentacam}))}if(e.pentacam){let t=e.pentacam;M(e=>({autorefraction:e.autorefraction,pentacam:{od:{...e.pentacam.od,...t?.od??{}},os:{...e.pentacam.os,...t?.os??{}}}}))}}},[G.data,h]),(0,f.useEffect)(()=>{let e=(G.data??[]).find(e=>Number(e.visitId)===Number(h)),t=(K.data??[]).find(t=>Number(t.visitId)===Number(h)||Number(t.examinationId)===Number(e?.id))??(h?null:(K.data??[])[0]);t&&(P({od:{s:String(t.sOD??``),c:String(t.cOD??``),axis:String(t.axisOD??``),pd:String(t.pdOD??``)},os:{s:String(t.sOS??``),c:String(t.cOS??``),axis:String(t.axisOS??``),pd:String(t.pdOS??``)}}),M(e=>({...e,autorefraction:{od:{...e.autorefraction.od,bcva:String(t.bcvaOD||e.autorefraction.od.bcva||``)},os:{...e.autorefraction.os,bcva:String(t.bcvaOS||e.autorefraction.os.bcva||``)}}})))},[G.data,K.data,h]),(0,f.useEffect)(()=>{let e=(G.data??[]).find(e=>Number(e.visitId)===Number(h)),t=(q.data??[]).find(t=>Number(t.visitId)===Number(h)||Number(t.examinationId)===Number(e?.id))??(h?null:(q.data??[])[0]);t&&M(e=>({...e,autorefraction:{od:{...e.autorefraction.od,s:String(t.sphereOD??``),c:String(t.cylinderOD??``),axis:String(t.axisOD??``),ucva:String(t.ucvaOD??``),bcva:String(t.bcvaOD||e.autorefraction.od.bcva||``),iop:String(t.iopOD??``)},os:{...e.autorefraction.os,s:String(t.sphereOS??``),c:String(t.cylinderOS??``),axis:String(t.axisOS??``),ucva:String(t.ucvaOS??``),bcva:String(t.bcvaOS||e.autorefraction.os.bcva||``),iop:String(t.iopOS??``)}}}))},[q.data,G.data,h]),(0,f.useEffect)(()=>{let e=(G.data??[]).find(e=>Number(e.visitId)===Number(h))??(h?null:(G.data??[])[0]),t=(J.data??[]).find(t=>Number(t.id)===Number(e?.visitId))??(J.data??[]).find(e=>Number(e.id)===Number(h)),n=String(t?.chiefComplaint??``).trim(),r=!1;try{let e=W.data?JSON.parse(W.data):null;r=Number(e?.visitId)===Number(h)&&Object.prototype.hasOwnProperty.call(e?.consultantExam??{},`complains`)}catch{r=!1}r||B(e=>({...e,complains:n}))},[G.data,h,W.data,J.data]),(0,f.useEffect)(()=>{let e=(Q.data??[]).find(e=>Number(e.visitId)===Number(h))??(h?null:(Q.data??[])[0]);$e(String(e?.diagnosis??``)),tt(String(e?.recommendations??e?.treatment??``))},[Q.data,h]),(0,f.useEffect)(()=>{let e=Ct.data?.data;if(!e)return;let t=String(e.doctorName??``).trim()||String(e.signatures?.doctor??``).trim();t&&I(e=>({...e,doctor:t}))},[Ct.data]),(0,f.useEffect)(()=>{let e=String(g?.name??``).trim();if(!e)return;let t=String(g?.role??``).toLowerCase();I(n=>({...n,reception:t===`reception`?e:n.reception,nurse:t===`nurse`?e:n.nurse,technician:t===`technician`?e:n.technician,doctor:t===`doctor`?n.doctor||e:n.doctor}))},[g?.name,g?.role,W.data,Ct.data]);let Bt=Nt.isPending||Ft.isPending||It.isPending||kt.isPending,Vt=async()=>{if(!x){s.error(`يرجى اختيار المريض أولاً`);return}if(e&&!h){s.error(`يجب اختيار زيارة موجودة قبل الحفظ`);return}let t=(G.data??[]).find(e=>Number(e.visitId)===Number(h));if(m===`examination`&&!t?.id){s.error(`الزيارة المختارة لا تحتوي على فحص قياسات محفوظ`);return}try{let e=(()=>{try{return W.data?JSON.parse(W.data):{}}catch{return{}}})(),n=(e,t)=>e&&e.trim()?e:t,r={autorefraction:{od:{...e.examData?.autorefraction?.od??{},ucva:n(j.autorefraction.od.ucva,e.examData?.autorefraction?.od?.ucva),bcva:n(j.autorefraction.od.bcva,e.examData?.autorefraction?.od?.bcva),s:n(j.autorefraction.od.s,e.examData?.autorefraction?.od?.s),c:n(j.autorefraction.od.c,e.examData?.autorefraction?.od?.c),axis:n(j.autorefraction.od.axis,e.examData?.autorefraction?.od?.axis),iop:n(j.autorefraction.od.iop,e.examData?.autorefraction?.od?.iop)},os:{...e.examData?.autorefraction?.os??{},ucva:n(j.autorefraction.os.ucva,e.examData?.autorefraction?.os?.ucva),bcva:n(j.autorefraction.os.bcva,e.examData?.autorefraction?.os?.bcva),s:n(j.autorefraction.os.s,e.examData?.autorefraction?.os?.s),c:n(j.autorefraction.os.c,e.examData?.autorefraction?.os?.c),axis:n(j.autorefraction.os.axis,e.examData?.autorefraction?.os?.axis),iop:n(j.autorefraction.os.iop,e.examData?.autorefraction?.os?.iop)}},pentacam:{od:{...e.examData?.pentacam?.od??{},k1:n(j.pentacam.od.k1,e.examData?.pentacam?.od?.k1),k2:n(j.pentacam.od.k2,e.examData?.pentacam?.od?.k2),ax1:n(j.pentacam.od.ax1,e.examData?.pentacam?.od?.ax1),ax2:n(j.pentacam.od.ax2,e.examData?.pentacam?.od?.ax2),thinnest:n(j.pentacam.od.thinnest,e.examData?.pentacam?.od?.thinnest),apex:n(j.pentacam.od.apex,e.examData?.pentacam?.od?.apex),residual:n(j.pentacam.od.residual,e.examData?.pentacam?.od?.residual),ttt:n(j.pentacam.od.ttt,e.examData?.pentacam?.od?.ttt),ablation:n(j.pentacam.od.ablation,e.examData?.pentacam?.od?.ablation)},os:{...e.examData?.pentacam?.os??{},k1:n(j.pentacam.os.k1,e.examData?.pentacam?.os?.k1),k2:n(j.pentacam.os.k2,e.examData?.pentacam?.os?.k2),ax1:n(j.pentacam.os.ax1,e.examData?.pentacam?.os?.ax1),ax2:n(j.pentacam.os.ax2,e.examData?.pentacam?.os?.ax2),thinnest:n(j.pentacam.os.thinnest,e.examData?.pentacam?.os?.thinnest),apex:n(j.pentacam.os.apex,e.examData?.pentacam?.os?.apex),residual:n(j.pentacam.os.residual,e.examData?.pentacam?.os?.residual),ttt:n(j.pentacam.os.ttt,e.examData?.pentacam?.os?.ttt),ablation:n(j.pentacam.os.ablation,e.examData?.pentacam?.os?.ablation)}}};await Nt.mutateAsync({patientId:x,visitId:h,sheetType:b,content:JSON.stringify({...e,visitId:h,formData:{...e.formData??{},...k},examData:r,consultantExam:z,consultantDrawing:nt,consultantDrawingDescription:Xe,officeNotes:Je,readingValue:He,diabetesDuration:Re,fundus:{od:We,os:Ke},treatmentPlan:L,medicalHistory:C,medicalHistoryOther:Ie,diagnosisText:Qe,finalDecisionText:et,operationDetails:{type:T,date:D,eyes:O}})}),h&&await It.mutateAsync({visitId:h,chiefComplaint:z.complains.trim()}),await kt.mutateAsync({patientId:x,diabetes:C[`سكر؟`]===`yes`,hypertension:C[`ضغط؟`]===`yes`,thyroid:C[`الغدة الدرقية؟`]===`yes`,autoimmune:C[`أمراض مناعة؟`]===`yes`,glaucoma:C[`ماء زرقاء؟`]===`yes`,familyKeratoconus:C[`قرنية مخروطية بالعائلة؟`]===`yes`}),t?.id&&await Ft.mutateAsync({patientId:x,visitId:h,examinationId:t.id,createVisitIfMissing:!1,glassesData:{od:{s:N.od.s||void 0,c:N.od.c||void 0,axis:N.od.axis||void 0,pd:N.od.pd||void 0,bcva:j.autorefraction.od.bcva||void 0},os:{s:N.os.s||void 0,c:N.os.c||void 0,axis:N.os.axis||void 0,pd:N.os.pd||void 0,bcva:j.autorefraction.os.bcva||void 0}}}),await Promise.all([W.refetch(),G.refetch(),K.refetch(),q.refetch(),J.refetch()])}catch(e){s.error(o(e,`حدث خطأ أثناء الحفظ`))}},Ht=()=>{se(`${String(k.patientName||k.patientCode||x||`lasik-sheet`).trim()}.pdf`,{forceBrowserPrint:!0})},Ut=()=>{let t=parseFloat(j.pentacam.od.thinnest),n=parseFloat(j.pentacam.os.thinnest),r=parseFloat(j.autorefraction.od.iop),i=parseFloat(j.autorefraction.os.iop);new Date().toLocaleDateString(`en-GB`);let a=(e,t)=>n=>M(r=>({...r,autorefraction:{...r.autorefraction,[e]:{...r.autorefraction[e],[t]:n.target.value}}})),o=(e,t)=>n=>P(r=>({...r,[e]:{...r[e],[t]:n.target.value}})),s=(e,t)=>n=>M(r=>({...r,pentacam:{...r.pentacam,[e]:{...r.pentacam[e],[t]:n.target.value}}})),c=`w-full text-center bg-transparent border-0 border-b border-solid border-[#737685] focus:outline-none focus:border-[#003d9b] py-1 text-sm`,l=e=>{H(`complains`,z.complains?`${z.complains}, ${e}`:e),it(``),ot(!1)},u=`p-1 border border-[#c3c6d6]`;return(0,p.jsxs)(`div`,{className:`lasik-sheet sheet-type-${b} relative overflow-hidden bg-white text-[#191c1e] font-sans print:p-[10mm] print:border-0 print:shadow-none flex flex-col ${m===`examination`?`consultant-examination-only w-full max-w-none gap-0 border-0 p-0 shadow-none`:e?`w-full max-w-none gap-5 border border-[#c3c6d6] p-8 shadow-sm`:`w-full max-w-[210mm] mx-auto gap-5 border border-[#c3c6d6] p-8 shadow-sm`}`,dir:`ltr`,children:[m===`examination`?null:(0,p.jsx)(be,{}),jt?(0,p.jsxs)(`div`,{role:`alert`,className:`print:hidden mb-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-red-300 bg-red-50 px-4 py-3`,children:[(0,p.jsx)(`p`,{className:`text-sm font-semibold text-red-900`,children:`تعذر تحميل بيانات المريض بالكامل. تحقق من الاتصال ثم أعد المحاولة.`}),(0,p.jsx)(`button`,{type:`button`,onClick:Mt,className:`rounded-md border border-red-400 bg-white px-3 py-1.5 text-xs font-bold text-red-900 hover:bg-red-100`,children:`إعادة المحاولة`})]}):null,m===`examination`?null:(0,p.jsx)(ye,{sheetType:ke,sheetTypeContent:(0,p.jsx)(`div`,{className:`flex flex-col items-start gap-0.5`,children:(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1.5 whitespace-nowrap text-base font-normal leading-none`,dir:`ltr`,children:[(0,p.jsx)(`span`,{className:`font-bold text-[#434654]`,children:`ID:`}),(0,p.jsx)(`input`,{size:(k.patientCode||``).length+1||6,className:`!h-7 !min-h-0 min-w-0 bg-transparent border-0 border-b border-[#c3c6d6] p-0 text-left !text-lg font-bold leading-none text-[#526069] focus:outline-none focus:border-[#003d9b]`,dir:`ltr`,value:k.patientCode,onChange:e=>A(t=>({...t,patientCode:e.target.value}))})]})}),bottomContent:b===`consultant`?void 0:(0,p.jsxs)(`div`,{className:`flex w-full items-center justify-between gap-5 text-[11px]`,dir:`rtl`,children:[(0,p.jsxs)(`div`,{className:`flex min-w-0 items-center gap-2 whitespace-nowrap`,children:[(0,p.jsx)(`span`,{className:`font-bold text-[#434654]`,children:`تاريخ العملية:`}),(0,p.jsx)(`input`,{type:`text`,inputMode:`numeric`,"aria-label":`تاريخ العملية`,placeholder:Z.printView?``:`dd / mm / yyyy`,className:`h-7 w-40 shrink-0 rounded-none border-0 border-b border-[#c3c6d6] bg-transparent px-1 text-center text-[11px] font-normal tabular-nums outline-none focus:border-[#003d9b] placeholder:text-muted-foreground`,value:D,onChange:e=>Be(e.target.value)})]}),(0,p.jsxs)(`div`,{className:`flex min-w-0 items-center gap-2 whitespace-nowrap`,children:[(0,p.jsx)(`span`,{className:`font-bold text-[#434654]`,children:`نوع العملية:`}),(0,p.jsxs)(`select`,{"aria-label":`نوع العملية`,className:`lasik-op-select h-7 w-auto min-w-[18mm] rounded-none border-0 border-b border-[#c3c6d6] bg-transparent px-1 text-center text-[12px] font-bold outline-none focus:border-[#003d9b] print:appearance-none`,dir:`ltr`,value:T,onChange:e=>E(e.target.value),children:[(0,p.jsx)(`option`,{value:``}),[[`PRK`,`PRK`],[`LASIK`,`LASIK`],[`F.S`,`FS`],[`F.L`,`FL`],[`IOL`,`IOL`],[`ICL`,`ICL`]].map(([e,t])=>(0,p.jsx)(`option`,{value:t,children:e},t))]})]}),(0,p.jsxs)(`div`,{className:`flex min-w-0 items-center gap-2 whitespace-nowrap`,children:[(0,p.jsx)(`span`,{className:`font-bold text-[#434654]`,children:`العين:`}),(0,p.jsxs)(`select`,{"aria-label":`العين`,className:`lasik-op-select h-7 w-auto min-w-[14mm] rounded-none border-0 border-b border-[#c3c6d6] bg-transparent px-1 text-center text-[12px] font-bold outline-none focus:border-[#003d9b] print:appearance-none`,dir:`ltr`,value:O.both?`OU`:O.right?`OD`:O.left?`OS`:``,onChange:e=>{let t=e.target.value;Ve({right:t===`OD`||t===`OU`,left:t===`OS`||t===`OU`,both:t===`OU`})},children:[(0,p.jsx)(`option`,{value:``}),(0,p.jsx)(`option`,{value:`OD`,children:`OD`}),(0,p.jsx)(`option`,{value:`OS`,children:`OS`}),(0,p.jsx)(`option`,{value:`OU`,children:`OU`})]})]})]})}),(0,p.jsxs)(`section`,{className:`print-lasik-patient-grid p-4 bg-[#f3f4f6] rounded-xl border-0 flex flex-col gap-2 text-sm`,dir:`rtl`,children:[(0,p.jsxs)(`div`,{className:`patient-info-grid-3x3 grid grid-cols-3 gap-x-4 gap-y-2 text-xs`,children:[(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap font-bold min-w-0 shrink`,children:[(0,p.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`الاسم:`}),(0,p.jsx)(`input`,{size:(k.patientName||``).length||12,className:`patient-detail-emphasis min-w-0 text-[#003d9b] bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none focus:border-[#003d9b] text-right text-lg font-extrabold`,dir:`rtl`,value:k.patientName,onChange:e=>A(t=>({...t,patientName:e.target.value}))})]}),(0,p.jsxs)(`span`,{className:`inline-flex items-center gap-1 whitespace-nowrap font-bold min-w-0 shrink`,children:[(0,p.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`تاريخ الميلاد:`}),(0,p.jsx)(`span`,{className:`px-1 border-b border-[#c3c6d6] text-right min-w-0 truncate`,children:ve(k.dateOfBirth)})]}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap font-bold min-w-0 shrink`,children:[(0,p.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`السن:`}),(0,p.jsx)(`input`,{size:(k.age||``).length||3,className:`patient-detail-emphasis min-w-0 bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none focus:border-[#003d9b] text-right text-sm font-bold`,dir:`rtl`,value:k.age,onChange:e=>A(t=>({...t,age:e.target.value}))})]})]}),(0,p.jsxs)(`div`,{className:`grid grid-cols-3 gap-x-4 gap-y-2 text-xs`,children:[(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,p.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`العنوان:`}),(0,p.jsx)(`input`,{size:(k.address||``).length||8,className:`min-w-0 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none focus:border-[#003d9b] text-right`,dir:`rtl`,value:k.address,onChange:e=>A(t=>({...t,address:e.target.value}))})]}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,p.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`التليفون:`}),(0,p.jsx)(`input`,{size:(k.phone||``).length||8,className:`min-w-0 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none focus:border-[#003d9b] text-right`,dir:`rtl`,value:k.phone,onChange:e=>A(t=>({...t,phone:e.target.value}))})]}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,p.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`موبايل:`}),(0,p.jsx)(`input`,{size:(k.alternatePhone||``).length||8,className:`min-w-0 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none focus:border-[#003d9b] text-right`,dir:`rtl`,value:k.alternatePhone,onChange:e=>A(t=>({...t,alternatePhone:e.target.value}))})]})]}),(0,p.jsxs)(`div`,{className:`grid grid-cols-3 gap-x-4 gap-y-2 text-xs`,children:[(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,p.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`الطبيب:`}),(0,p.jsx)(`input`,{size:(F.doctor||``).length+3||12,className:`min-w-[30mm] max-w-[75mm] bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none focus:border-[#003d9b] text-right text-xs font-bold`,dir:`rtl`,value:F.doctor,onChange:e=>I(t=>({...t,doctor:e.target.value}))})]}),(0,p.jsxs)(`div`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,p.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`تاريخ الفحص:`}),(0,p.jsx)(oe,{className:`h-7 w-40 min-w-[10rem] shrink-0 rounded-none border-0 border-b border-[#c3c6d6] bg-transparent px-1 text-center text-xs font-bold`,inputClassName:`!min-h-0 min-w-0 w-full px-1 !text-xs`,value:k.examinationDate,onChange:e=>A(t=>({...t,examinationDate:e.target.value}))})]}),(0,p.jsxs)(`label`,{className:`lasik-pt-job inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,p.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`المهنة:`}),(0,p.jsx)(`input`,{size:(k.job||``).length||8,className:`patient-detail-emphasis min-w-0 bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none focus:border-[#003d9b] text-right text-sm font-bold`,dir:`rtl`,value:k.job,onChange:e=>A(t=>({...t,job:e.target.value}))})]})]})]}),(0,p.jsxs)(`section`,{className:`print-lasik-history-visual-row flex flex-wrap items-stretch gap-3`,dir:`rtl`,children:[b===`external`?null:(0,p.jsx)(`div`,{className:`print-lasik-questions overflow-x-auto flex h-full w-full sm:w-[calc(75%-0.375rem)] min-w-0 flex-col`,children:(0,p.jsxs)(`table`,{className:`w-full h-full border-collapse border border-[#c3c6d6] rounded-lg overflow-hidden text-sm`,children:[(0,p.jsx)(`thead`,{className:`bg-[#e7e8ea]`,children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{className:`w-12 p-2 border border-[#c3c6d6]`,children:`لا`}),(0,p.jsx)(`th`,{className:`w-12 p-2 border border-[#c3c6d6]`,children:`نعم`}),(0,p.jsx)(`th`,{className:`p-2 border border-[#c3c6d6] text-right`,children:`التاريخ المرضي`}),(0,p.jsx)(`th`,{className:`w-12 p-2 border border-[#c3c6d6]`,children:`لا`}),(0,p.jsx)(`th`,{className:`w-12 p-2 border border-[#c3c6d6]`,children:`نعم`}),(0,p.jsx)(`th`,{className:`p-2 border border-[#c3c6d6] text-right`,children:`التاريخ المرضي`})]})}),(0,p.jsxs)(`tbody`,{children:[[[`قرنية مخروطية بالعائلة؟`,`الغدة الدرقية؟`],[`ماء زرقاء؟`,`أمراض مناعة؟`],[`ضغط؟`,`سكر؟`]].map((e,t)=>(0,p.jsx)(`tr`,{children:e.map((e,n)=>e?(0,p.jsxs)(f.Fragment,{children:[(0,p.jsx)(`td`,{className:`text-center border border-[#c3c6d6]`,children:(0,p.jsx)(`input`,{type:`checkbox`,className:`w-4 h-4 rounded text-[#003d9b]`,checked:C[e]===`no`,onChange:t=>{let n=t.target.checked?`no`:``;w(t=>{let r={...t,[e]:n};return x&&kt.mutate({patientId:x,diabetes:r[`سكر؟`]===`yes`,hypertension:r[`ضغط؟`]===`yes`,thyroid:r[`الغدة الدرقية؟`]===`yes`,autoimmune:r[`أمراض مناعة؟`]===`yes`,glaucoma:r[`ماء زرقاء؟`]===`yes`,familyKeratoconus:r[`قرنية مخروطية بالعائلة؟`]===`yes`}),r})}})}),(0,p.jsx)(`td`,{className:`text-center border border-[#c3c6d6]`,children:(0,p.jsx)(`input`,{type:`checkbox`,className:`w-4 h-4 rounded text-[#003d9b]`,checked:C[e]===`yes`,onChange:t=>{let n=t.target.checked?`yes`:``;w(t=>{let r={...t,[e]:n};return x&&kt.mutate({patientId:x,diabetes:r[`سكر؟`]===`yes`,hypertension:r[`ضغط؟`]===`yes`,thyroid:r[`الغدة الدرقية؟`]===`yes`,autoimmune:r[`أمراض مناعة؟`]===`yes`,glaucoma:r[`ماء زرقاء؟`]===`yes`,familyKeratoconus:r[`قرنية مخروطية بالعائلة؟`]===`yes`}),r})}})}),(0,p.jsx)(`td`,{className:`p-1.5 border border-[#c3c6d6] text-right`,children:(0,p.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,p.jsx)(`span`,{children:e}),e===`سكر؟`&&C[e]===`yes`?(0,p.jsxs)(`select`,{className:`text-xs border border-[#c3c6d6] rounded px-1.5 py-1 bg-white`,value:Re,onChange:e=>ze(e.target.value),children:[(0,p.jsx)(`option`,{value:``,children:`مدة الإصابة`}),(0,p.jsx)(`option`,{value:`less than 5 years`,children:`أقل من 5 سنوات`}),(0,p.jsx)(`option`,{value:`5-10 years`,children:`من 5 إلى 10 سنوات`}),(0,p.jsx)(`option`,{value:`more than 10 years`,children:`أكثر من 10 سنوات`})]}):null]})})]},`${t}-${n}`):(0,p.jsxs)(f.Fragment,{children:[(0,p.jsx)(`td`,{className:`border border-[#c3c6d6] bg-[#f8f9fb]`}),(0,p.jsx)(`td`,{className:`border border-[#c3c6d6] bg-[#f8f9fb]`}),(0,p.jsx)(`td`,{className:`border border-[#c3c6d6] bg-[#f8f9fb]`})]},`${t}-${n}`))},t)),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`p-1.5 border border-[#c3c6d6] text-right bg-[#f3f4f6]`,colSpan:3,children:`أخرى؟`}),(0,p.jsx)(`td`,{className:`p-1.5 border border-[#c3c6d6]`,colSpan:3,children:(0,p.jsx)(`input`,{className:`w-full h-6 border-0 border-b border-[#c3c6d6] bg-transparent px-1 outline-none focus:border-[#003d9b]`,value:Ie,onChange:e=>Le(e.target.value)})})]})]})]})}),b===`external`?(0,p.jsx)(`div`,{className:`print-external-vision-grid grid w-full grid-cols-3 gap-2`,dir:`ltr`,children:[{key:`iop`,label:`IOP`,unit:`mmHg`},{key:`ucva`,label:`UCVA`,unit:`Eye`},{key:`bcva`,label:`BCVA`,unit:`Eye`}].map(e=>(0,p.jsxs)(`table`,{className:`w-full text-center border-collapse`,children:[(0,p.jsx)(`thead`,{className:`bg-[#e7e8ea] text-xs font-bold uppercase`,children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{className:u,children:e.label}),(0,p.jsx)(`th`,{className:`${u} text-[#003d9b]`,children:`OD`}),(0,p.jsx)(`th`,{className:`${u} text-[#526069]`,children:`OS`})]})}),(0,p.jsx)(`tbody`,{children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] text-[#434654]`,children:e.unit}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:`${c} ${e.key===`iop`&&!Number.isNaN(r)&&r>21?`text-red-600`:``}`,value:j.autorefraction.od[e.key],onChange:a(`od`,e.key)})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:`${c} ${e.key===`iop`&&!Number.isNaN(i)&&i>21?`text-red-600`:``}`,value:j.autorefraction.os[e.key],onChange:a(`os`,e.key)})})]})})]},e.key))}):(0,p.jsxs)(`div`,{className:`print-lasik-visual-grid flex h-full w-full sm:w-[calc(25%-0.375rem)] shrink-0 flex-col gap-2`,dir:`ltr`,children:[(0,p.jsxs)(`table`,{className:`w-full flex-1 text-center border-collapse`,children:[(0,p.jsx)(`thead`,{className:`bg-[#e7e8ea] text-xs font-bold uppercase`,children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{className:u,children:`IOP`}),(0,p.jsx)(`th`,{className:`${u} text-[#003d9b]`,children:`OD`}),(0,p.jsx)(`th`,{className:`${u} text-[#526069]`,children:`OS`})]})}),(0,p.jsx)(`tbody`,{children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] text-[#434654]`,children:`mmHg`}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:`${c} ${!Number.isNaN(r)&&r>21?`text-red-600`:``}`,value:j.autorefraction.od.iop,onChange:a(`od`,`iop`)})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:`${c} ${!Number.isNaN(i)&&i>21?`text-red-600`:``}`,value:j.autorefraction.os.iop,onChange:a(`os`,`iop`)})})]})})]}),(0,p.jsxs)(`table`,{className:`w-full flex-1 text-center border-collapse`,children:[(0,p.jsx)(`thead`,{className:`bg-[#e7e8ea] text-xs font-bold uppercase`,children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{className:u,children:`Eye`}),(0,p.jsx)(`th`,{className:u,children:`UCVA`}),(0,p.jsx)(`th`,{className:u,children:`BCVA`})]})}),(0,p.jsxs)(`tbody`,{children:[(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} text-[#003d9b] bg-[#003d9b]/5`,children:`OD`}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:c,value:j.autorefraction.od.ucva,onChange:a(`od`,`ucva`)})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:c,value:j.autorefraction.od.bcva,onChange:a(`od`,`bcva`)})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} text-[#526069] bg-[#f3f4f6]`,children:`OS`}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:c,value:j.autorefraction.os.ucva,onChange:a(`os`,`ucva`)})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:c,value:j.autorefraction.os.bcva,onChange:a(`os`,`bcva`)})})]})]})]})]})]}),(0,p.jsxs)(`section`,{className:m===`examination`?`mx-auto w-full max-w-4xl`:void 0,"data-purpose":`clinical-refraction`,children:[m===`examination`?(0,p.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center gap-2`,dir:`ltr`,children:[(0,p.jsx)(`span`,{className:`min-w-[42px] text-xs font-medium`,children:`BCVA`}),(0,p.jsx)(d,{value:j.autorefraction.od.bcva,onChange:e=>M(t=>({...t,autorefraction:{...t.autorefraction,od:{...t.autorefraction.od,bcva:e}}})),options:ae,placeholder:`OD`,triggerClassName:`h-8 w-20 text-center text-xs font-mono`}),(0,p.jsx)(`span`,{className:`text-muted-foreground`,children:`/`}),(0,p.jsx)(d,{value:j.autorefraction.os.bcva,onChange:e=>M(t=>({...t,autorefraction:{...t.autorefraction,os:{...t.autorefraction.os,bcva:e}}})),options:ae,placeholder:`OS`,triggerClassName:`h-8 w-20 text-center text-xs font-mono`}),(0,p.jsx)(`span`,{className:`mx-2 h-6 border-l`}),(0,p.jsx)(`span`,{className:`min-w-[28px] text-xs font-medium`,children:`PD`}),(0,p.jsx)(`input`,{className:`h-8 w-20 rounded border border-input bg-background px-2 text-center text-xs font-mono outline-none focus:border-[#003d9b]`,inputMode:`decimal`,value:N.od.pd,onChange:e=>{let t=e.target.value;P(e=>({od:{...e.od,pd:t},os:{...e.os,pd:t}}))}})]}):null,m===`examination`?(0,p.jsxs)(`div`,{className:`mb-3 grid grid-cols-1 gap-2 sm:hidden`,dir:`ltr`,children:[[`od`,`os`].map(e=>(0,p.jsxs)(`div`,{className:`overflow-hidden rounded-lg border border-slate-200 bg-white`,children:[(0,p.jsx)(`div`,{className:`px-3 py-2 text-sm font-bold ${e===`od`?`bg-blue-50 text-blue-900`:`bg-slate-100 text-slate-700`}`,children:e===`od`?`OD (Right)`:`OS (Left)`}),(0,p.jsxs)(`div`,{className:`grid grid-cols-2 gap-1.5 p-2`,children:[(0,p.jsxs)(`label`,{className:`min-w-0 text-center text-xs font-semibold text-slate-500`,children:[`S`,(0,p.jsx)(d,{value:N[e].s,onChange:t=>P(n=>({...n,[e]:{...n[e],s:t}})),options:re,triggerClassName:`mt-1 h-9 w-full border-slate-200 text-center font-mono text-sm`})]}),(0,p.jsxs)(`label`,{className:`min-w-0 text-center text-xs font-semibold text-slate-500`,children:[`C`,(0,p.jsx)(d,{value:N[e].c,onChange:t=>P(n=>({...n,[e]:{...n[e],c:t}})),options:ie,triggerClassName:`mt-1 h-9 w-full border-slate-200 text-center font-mono text-sm`})]}),(0,p.jsxs)(`label`,{className:`col-span-2 min-w-0 text-center text-xs font-semibold text-slate-500`,children:[`Axis`,(0,p.jsx)(`input`,{className:`mt-1 h-9 w-full rounded-md border border-slate-200 bg-white px-1 text-center font-mono text-sm outline-none focus:border-blue-600`,inputMode:`numeric`,value:N[e].axis,onChange:o(e,`axis`)})]})]})]},e)),(0,p.jsxs)(`label`,{className:`flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2 text-sm font-semibold text-blue-900`,children:[(0,p.jsx)(`span`,{className:`shrink-0`,children:`Reading / Add +`}),(0,p.jsx)(`input`,{className:`h-9 min-w-0 flex-1 rounded-md border border-slate-200 bg-white px-2 text-center font-mono outline-none focus:border-blue-600`,value:He,onChange:e=>Ue(e.target.value)})]})]}):null,(0,p.jsx)(`div`,{className:`clinical-data-scroll overflow-x-auto`,children:(0,p.jsxs)(`table`,{className:`sheet-refraction-table clinical-refraction-desktop-table w-full table-fixed border-collapse text-center ${m===`examination`?`hidden sm:table`:``}`,children:[(0,p.jsxs)(`colgroup`,{children:[(0,p.jsx)(`col`,{style:{width:`16%`}}),(0,p.jsx)(`col`,{style:{width:`14%`}}),(0,p.jsx)(`col`,{style:{width:`14%`}}),(0,p.jsx)(`col`,{style:{width:`14%`}}),(0,p.jsx)(`col`,{style:{width:`14%`}}),(0,p.jsx)(`col`,{style:{width:`14%`}}),(0,p.jsx)(`col`,{style:{width:`14%`}})]}),(0,p.jsxs)(`thead`,{className:`bg-[#e7e8ea] text-xs uppercase font-bold`,children:[(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{className:u,children:`Refraction`}),(0,p.jsx)(`th`,{className:`${u} text-[#003d9b]`,colSpan:3,children:`OD (Right)`}),(0,p.jsx)(`th`,{className:`${u} text-[#526069]`,colSpan:3,children:`OS (Left)`})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{className:u,children:`Distance`}),(0,p.jsx)(`th`,{className:u,children:`S`}),(0,p.jsx)(`th`,{className:u,children:`C`}),(0,p.jsx)(`th`,{className:u,children:`A`}),(0,p.jsx)(`th`,{className:u,children:`S`}),(0,p.jsx)(`th`,{className:u,children:`C`}),(0,p.jsx)(`th`,{className:u,children:`A`})]})]}),(0,p.jsxs)(`tbody`,{className:`font-mono`,children:[(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6]`,children:`\xA0`}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(d,{value:N.od.s,onChange:e=>P(t=>({...t,od:{...t.od,s:e}})),options:re,triggerClassName:`h-8 border-0 text-center font-mono`})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(d,{value:N.od.c,onChange:e=>P(t=>({...t,od:{...t.od,c:e}})),options:ie,triggerClassName:`h-8 border-0 text-center font-mono`})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:c,value:N.od.axis,onChange:o(`od`,`axis`)})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(d,{value:N.os.s,onChange:e=>P(t=>({...t,os:{...t.os,s:e}})),options:re,triggerClassName:`h-8 border-0 text-center font-mono`})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(d,{value:N.os.c,onChange:e=>P(t=>({...t,os:{...t.os,c:e}})),options:ie,triggerClassName:`h-8 border-0 text-center font-mono`})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:c,value:N.os.axis,onChange:o(`os`,`axis`)})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] font-bold text-[#003d9b]`,children:`Reading`}),(0,p.jsx)(`td`,{className:u,colSpan:6,children:(0,p.jsxs)(`div`,{className:`flex items-center justify-center gap-2`,children:[(0,p.jsx)(`span`,{className:`whitespace-nowrap font-bold`,children:`Add +`}),(0,p.jsx)(`input`,{className:`${c} max-w-24`,value:He,onChange:e=>Ue(e.target.value)})]})})]}),b===`consultant`?null:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} text-left bg-[#f3f4f6]`,children:`Fundus`}),(0,p.jsx)(`td`,{className:u,colSpan:3,children:(0,p.jsx)(`input`,{className:c,value:We,onChange:e=>Ge(e.target.value)})}),(0,p.jsx)(`td`,{className:u,colSpan:3,children:(0,p.jsx)(`input`,{className:c,value:Ke,onChange:e=>qe(e.target.value)})})]})]})]})})]}),b===`consultant`?(0,p.jsxs)(`section`,{className:`print-consultant-diagrams flex flex-wrap items-stretch gap-2 border border-[#c3c6d6] rounded-xl p-4 bg-white flex-1 min-h-[70mm]`,"data-purpose":`clinical-diagrams`,children:[(0,p.jsxs)(`div`,{className:`consultant-eyes-block relative flex w-full sm:w-1/4 flex-col items-center justify-center gap-4 overflow-hidden rounded-lg`,children:[(0,p.jsxs)(`div`,{className:`flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-1`,children:[(0,p.jsxs)(`div`,{className:`fundus-drawing-surface aspect-square w-full max-w-[150px] rounded-full border-4 border-[#003d9b]/30 flex items-center justify-center relative bg-white`,children:[(0,p.jsxs)(`div`,{className:`absolute inset-0 flex items-center justify-center opacity-10`,children:[(0,p.jsx)(`div`,{className:`w-full border-t border-slate-900`}),(0,p.jsx)(`div`,{className:`h-full border-l border-slate-900 absolute top-0`})]}),(0,p.jsx)(`div`,{className:`absolute h-9 w-9 translate-x-3 -translate-y-1 rounded-full bg-[#f4c98a] border border-[#c98f4a]/60 flex items-center justify-center`,children:(0,p.jsx)(`div`,{className:`h-4 w-4 rounded-full bg-white border border-[#c98f4a]/50`})})]}),(0,p.jsx)(`span`,{className:`text-[#003d9b]/70 text-xs font-bold select-none`,children:`OD`})]}),(0,p.jsxs)(`div`,{className:`flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-1`,children:[(0,p.jsxs)(`div`,{className:`fundus-drawing-surface aspect-square w-full max-w-[150px] rounded-full border-4 border-slate-300 flex items-center justify-center relative bg-white`,children:[(0,p.jsxs)(`div`,{className:`absolute inset-0 flex items-center justify-center opacity-10`,children:[(0,p.jsx)(`div`,{className:`w-full border-t border-slate-900`}),(0,p.jsx)(`div`,{className:`h-full border-l border-slate-900 absolute top-0`})]}),(0,p.jsx)(`div`,{className:`absolute h-9 w-9 -translate-x-3 -translate-y-1 rounded-full bg-[#f4c98a] border border-[#c98f4a]/60 flex items-center justify-center`,children:(0,p.jsx)(`div`,{className:`h-4 w-4 rounded-full bg-white border border-[#c98f4a]/50`})})]}),(0,p.jsx)(`span`,{className:`text-slate-500 text-xs font-bold select-none`,children:`OS`})]}),(0,p.jsx)(Ce,{value:nt,onChange:rt})]}),(0,p.jsxs)(`div`,{className:`consultant-right-column flex w-full sm:w-[calc(75%-0.5rem)] flex-col gap-2`,children:[(0,p.jsxs)(`div`,{className:`consultant-complains-block flex-[1] rounded-lg border border-[#c3c6d6] bg-[#f8f9fb] px-3 pb-3 pt-0 text-left text-[12px] text-[#1f2937]`,dir:`ltr`,children:[(0,p.jsx)(`p`,{className:`mb-2 text-[13px] font-bold text-[#003d9b]`,children:`Complains:`}),(0,p.jsx)(`textarea`,{className:`w-full min-h-[48px] resize-none rounded-md border border-[#c3c6d6] bg-white px-2 py-1 text-[12px] outline-none focus:border-[#003d9b] print:placeholder-transparent`,value:z.complains,onChange:e=>H(`complains`,e.target.value),placeholder:`اكتب الشكوى يدويًا أو ابحث من الأعراض بالأسفل…`}),(0,p.jsxs)(`div`,{className:`relative mt-2 print:hidden`,children:[(0,p.jsx)(ee,{className:`pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground`}),(0,p.jsx)(`input`,{className:`h-8 w-full rounded-md border border-[#c3c6d6] bg-white pl-7 pr-2 text-[12px] outline-none focus:border-[#003d9b]`,placeholder:`ابحث عن الأعراض…`,value:V,onChange:e=>it(e.target.value),onFocus:()=>ot(!0),onBlur:()=>window.setTimeout(()=>ot(!1),150)}),at&&V?(0,p.jsx)(`div`,{className:`absolute z-10 mt-1 max-h-[160px] w-full overflow-y-auto rounded-md border border-[#c3c6d6] bg-white p-1 shadow-md`,children:st.isLoading?(0,p.jsx)(`p`,{className:`px-2 py-1 text-[11px] text-muted-foreground`,children:`جاري التحميل...`}):(st.data??[]).filter(e=>String(e.name??``).toLowerCase().includes(V.toLowerCase())).length===0?(0,p.jsx)(`p`,{className:`px-2 py-1 text-[11px] text-muted-foreground`,children:`لا توجد نتائج`}):(st.data??[]).filter(e=>String(e.name??``).toLowerCase().includes(V.toLowerCase())).map(e=>(0,p.jsx)(`button`,{type:`button`,role:`option`,"aria-selected":`false`,className:`block w-full rounded px-2 py-1 text-left text-[12px] hover:bg-muted/60 focus:bg-muted/60 focus:outline-none focus-visible:border focus-visible:border-[#003d9b]`,onMouseDown:t=>{t.preventDefault(),l(String(e.name??``))},onClick:()=>l(String(e.name??``)),children:e.name},e.id))}):null]})]}),(0,p.jsxs)(`div`,{className:`consultant-examination-block flex-[3] rounded-lg border border-[#c3c6d6] bg-[#f8f9fb] p-3 text-left text-[12px] text-[#1f2937]`,dir:`ltr`,children:[(0,p.jsx)(`p`,{className:`mb-2 text-[13px] font-bold text-[#003d9b]`,children:`Examination:`}),(0,p.jsxs)(`div`,{className:`space-y-2`,children:[(0,p.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-3 gap-y-1`,children:[(0,p.jsx)(`span`,{className:`font-semibold`,children:`1. External Apperance:`}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,p.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:z.externalPtosis,onChange:e=>H(`externalPtosis`,e.target.checked)}),(0,p.jsx)(`span`,{children:`Ptosis`})]}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,p.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:z.externalSquint,onChange:e=>H(`externalSquint`,e.target.checked)}),(0,p.jsx)(`span`,{children:`Squint`})]}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,p.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:z.externalOthers,onChange:e=>H(`externalOthers`,e.target.checked)}),(0,p.jsx)(`span`,{children:`Others`})]}),(0,p.jsx)(`input`,{className:`h-6 min-w-[170px] flex-1 border-0 border-b border-[#c3c6d6] bg-transparent px-1 outline-none focus:border-[#003d9b]`,value:z.externalOthersNote,onChange:e=>H(`externalOthersNote`,e.target.value)})]}),(0,p.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-3 gap-y-1`,children:[(0,p.jsx)(`span`,{className:`font-semibold`,children:`2. Muscle action:`}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,p.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:z.muscleNormal,onChange:e=>H(`muscleNormal`,e.target.checked)}),(0,p.jsx)(`span`,{children:`Normal`})]}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,p.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:z.muscleAbnormal,onChange:e=>H(`muscleAbnormal`,e.target.checked)}),(0,p.jsx)(`span`,{children:`Abnormal`})]}),(0,p.jsx)(`input`,{className:`h-6 min-w-[190px] flex-1 border-0 border-b border-[#c3c6d6] bg-transparent px-1 outline-none focus:border-[#003d9b]`,value:z.muscleAbnormalNote,onChange:e=>H(`muscleAbnormalNote`,e.target.value)})]}),(0,p.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,p.jsx)(`span`,{className:`font-semibold`,children:`3. Other abnormalities:`}),(0,p.jsx)(`input`,{className:`h-6 flex-1 border-0 border-b border-[#c3c6d6] bg-transparent px-1 outline-none focus:border-[#003d9b]`,value:z.otherAbnormalities,onChange:e=>H(`otherAbnormalities`,e.target.value)})]}),(0,p.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-[#d9dce8] pt-2`,children:[(0,p.jsx)(`span`,{className:`font-bold`,children:`Fundus:`}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,p.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:z.fundusNormal,onChange:e=>H(`fundusNormal`,e.target.checked)}),(0,p.jsx)(`span`,{children:`Normal`})]}),(0,p.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,p.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:z.fundusAbnormal,onChange:e=>H(`fundusAbnormal`,e.target.checked)}),(0,p.jsx)(`span`,{children:`Abnormal`})]}),(0,p.jsx)(`input`,{className:`h-6 min-w-[220px] flex-1 border-0 border-b border-[#c3c6d6] bg-transparent px-1 outline-none focus:border-[#003d9b]`,value:z.fundusAbnormalNote,onChange:e=>H(`fundusAbnormalNote`,e.target.value)})]})]})]})]})]}):(0,p.jsxs)(`section`,{className:`print-lasik-pentacam-right grid grid-cols-1 lg:grid-cols-[1fr_1.3fr_1.3fr] gap-4`,children:[(0,p.jsx)(`div`,{"aria-hidden":`true`,className:`hidden lg:block print:block`}),[`od`,`os`].map(e=>{let r=e===`od`,i=r?t:n;return(0,p.jsxs)(`div`,{className:`${r?`od-bg border-[#003d9b]/20`:`os-bg border-[#c3c6d6]`} print-lasik-eye-card p-2 rounded-xl border`,children:[(0,p.jsx)(`div`,{className:`flex justify-between items-center mb-2`,children:(0,p.jsx)(`span`,{className:`text-[11px] font-bold uppercase px-2 py-1 bg-white rounded shadow-sm ${r?`text-[#003d9b]`:`text-[#526069]`}`,children:r?`Right Eye (RT)`:`Left Eye (LT)`})}),(0,p.jsxs)(`table`,{className:`w-full border-collapse text-sm bg-white rounded-lg overflow-hidden`,children:[(0,p.jsxs)(`colgroup`,{children:[(0,p.jsx)(`col`,{}),(0,p.jsx)(`col`,{}),(0,p.jsx)(`col`,{}),(0,p.jsx)(`col`,{})]}),(0,p.jsxs)(`tbody`,{children:[(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] w-1/3 text-right text-[11px]`,children:`K1 (Flat)`}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:c,value:j.pentacam[e].k1,onChange:s(e,`k1`)})}),(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] text-center w-8 text-[11px]`,rowSpan:2,children:`AX`}),(0,p.jsx)(`td`,{className:u,rowSpan:2,children:(0,p.jsx)(`input`,{className:c,value:j.pentacam[e].ax1,onChange:s(e,`ax1`)})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] text-right text-[11px]`,children:`K2 (Steep)`}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:c,value:j.pentacam[e].k2,onChange:s(e,`k2`)})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] text-right text-[11px]`,children:`Thinnest`}),(0,p.jsx)(`td`,{className:u,colSpan:3,children:(0,p.jsx)(`input`,{className:`${c} ${i<480?`text-red-600`:``}`,value:j.pentacam[e].thinnest,onChange:s(e,`thinnest`)})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] text-right text-[11px]`,children:`Apex`}),(0,p.jsx)(`td`,{className:u,colSpan:3,children:(0,p.jsx)(`input`,{className:c,value:j.pentacam[e].apex,onChange:s(e,`apex`)})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] text-[#003d9b] text-right text-[11px]`,children:`Residual`}),(0,p.jsx)(`td`,{className:`${u} bg-[#003d9b]/5`,colSpan:3,children:(0,p.jsx)(`input`,{className:`${c} text-[#003d9b]`,value:j.pentacam[e].residual,onChange:s(e,`residual`)})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] text-right text-[11px]`,children:`Planned TTT`}),(0,p.jsx)(`td`,{className:u,colSpan:3,children:(0,p.jsx)(`input`,{className:c,value:j.pentacam[e].ttt,onChange:s(e,`ttt`)})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:`${u} bg-[#f3f4f6] text-[#ba1a1a] text-right text-[11px]`,children:`Ablation`}),(0,p.jsx)(`td`,{className:u,colSpan:3,children:(0,p.jsx)(`input`,{className:`${c} text-[#ba1a1a]`,value:j.pentacam[e].ablation,onChange:s(e,`ablation`)})})]})]})]})]},e)})]}),b===`consultant`?null:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(`section`,{className:`print-lasik-treatment-plan overflow-x-auto`,children:(0,p.jsxs)(`table`,{className:`w-full text-center border-collapse text-sm`,children:[(0,p.jsx)(`thead`,{className:`bg-[#e7e8ea] text-xs uppercase font-bold text-[#434654]`,children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{className:u,children:`Target Refraction`}),(0,p.jsx)(`th`,{className:u,children:`OD/OS`}),(0,p.jsx)(`th`,{className:u,children:`Before Flap`}),(0,p.jsx)(`th`,{className:u,children:`After Flap`}),(0,p.jsx)(`th`,{className:u,children:`After Treatment`}),(0,p.jsx)(`th`,{className:u,children:`Flap Reposition`}),(0,p.jsx)(`th`,{className:u,children:`Ciclo 3x`}),(0,p.jsx)(`th`,{className:u,children:`Note`})]})}),(0,p.jsx)(`tbody`,{children:[`OD`,`OS`].map(e=>(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:c,value:L[e].target,onChange:t=>R(n=>({...n,[e]:{...n[e],target:t.target.value}}))})}),(0,p.jsx)(`td`,{className:`${u} ${e===`OD`?`text-[#003d9b] bg-[#003d9b]/5`:`text-[#526069] bg-[#f3f4f6]`}`,children:e}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:c,value:L[e].beforeFlap,onChange:t=>R(n=>({...n,[e]:{...n[e],beforeFlap:t.target.value}}))})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:c,value:L[e].afterFlap,onChange:t=>R(n=>({...n,[e]:{...n[e],afterFlap:t.target.value}}))})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:c,value:L[e].afterTreatment,onChange:t=>R(n=>({...n,[e]:{...n[e],afterTreatment:t.target.value}}))})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:c,value:L[e].flapReposition,onChange:t=>R(n=>({...n,[e]:{...n[e],flapReposition:t.target.value}}))})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:c,value:L[e].ciclo,onChange:t=>R(n=>({...n,[e]:{...n[e],ciclo:t.target.value}}))})}),(0,p.jsx)(`td`,{className:u,children:(0,p.jsx)(`input`,{className:c,value:L[e].note,onChange:t=>R(n=>({...n,[e]:{...n[e],note:t.target.value}}))})})]},e))})]})})}),(0,p.jsxs)(`footer`,{className:`pt-6 border-t-2 border-[#003d9b] space-y-6 print-lasik-compact-footer`,children:[(0,p.jsxs)(`div`,{className:`print-lasik-footer-grid grid grid-cols-1 lg:grid-cols-12 gap-8`,children:[(0,p.jsxs)(`div`,{className:`lg:col-span-8 space-y-4`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`label`,{id:`lasik-diagnosis-label`,htmlFor:`lasik-diagnosis`,className:`font-bold text-[#003d9b] text-sm`,children:`Diagnosis / التشخيص:`}),(0,p.jsx)(`textarea`,{id:`lasik-diagnosis`,"aria-labelledby":`lasik-diagnosis-label`,className:`mt-1 min-h-14 w-full resize-none border-0 border-b border-[#c3c6d6] bg-transparent p-1 outline-none focus:border-[#003d9b]`,value:Qe,onChange:e=>$e(e.target.value)})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`label`,{id:`lasik-final-decision-label`,htmlFor:`lasik-final-decision`,className:`font-bold text-[#003d9b] text-sm`,children:`Final Decision / القرار النهائي:`}),(0,p.jsx)(`textarea`,{id:`lasik-final-decision`,"aria-labelledby":`lasik-final-decision-label`,className:`mt-1 min-h-12 w-full resize-none border-0 border-b border-[#c3c6d6] bg-transparent p-1 outline-none focus:border-[#003d9b]`,value:et,onChange:e=>tt(e.target.value)})]})]}),(0,p.jsxs)(`div`,{className:`lg:col-span-4 border-2 border-[#003d9b] rounded-xl p-4 bg-[#003d9b]/5`,children:[(0,p.jsx)(`div`,{className:`text-center font-bold text-[#003d9b] text-xs border-b border-[#003d9b]/20 pb-2 mb-3`,children:(0,p.jsx)(`label`,{htmlFor:`lasik-office-notes`,children:`Notes | ملاحظات`})}),(0,p.jsx)(ne,{id:`lasik-office-notes`,value:Je,onChange:e=>Ye(e.target.value),className:`min-h-16 resize-none border-[#003d9b]/40 bg-transparent`})]})]}),(0,p.jsx)(`div`,{className:`print-lasik-signatures grid grid-cols-2 md:grid-cols-4 gap-8 pt-4 border-t border-[#c3c6d6]`,children:[[`التمريض / Nursing`,F.nurse],[`الطبيب / Surgeon`,F.doctor],[`فني / Optometrist`,F.technician],[`الاستقبال / Reception`,F.reception]].map(([e,t],n)=>(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsx)(`span`,{className:`text-[11px] font-bold ${n===1?`text-[#003d9b]`:`text-[#434654]`}`,children:e}),(0,p.jsx)(`div`,{className:`border-b-2 h-9 flex items-end justify-center ${n===1?`border-[#003d9b]`:`border-[#191c1e]`}`,children:(0,p.jsx)(`span`,{className:`text-xs italic ${n===1?`text-[#003d9b] font-bold`:`text-[#434654]`}`,children:t||``})})]},n))})]})]})},Wt=()=>(0,p.jsx)(xe,{titleEn:b===`consultant`?`Consultant Follow-up`:`LASIK Follow-up`,titleAr:b===`consultant`?`متابعة الاستشاري`:`متابعة الليزك`,patientName:k.patientName,patientDOB:ve(k.dateOfBirth),operationType:T,setOperationType:E,operationEyes:O,setOperationEyes:Ve,operationDateRight:D,setOperationDateRight:Be,followups:Fe,setFollowups:S,followupLabels:Ne,signatures:F,readOnly:!0,printVariant:`attached`});return(0,p.jsxs)(`div`,{className:e?`lasik-print-root clinical-sheet-workspace ${Z.printView?`print-view-active`:``} bg-background`:`lasik-print-root clinical-sheet-workspace ${Z.printView?`print-view-active`:``} min-h-screen print:min-h-0 bg-background`,dir:`ltr`,children:[(0,p.jsx)(`style`,{children:`
        ${mt}
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
            margin-bottom: 4px !important;
          }
        .lasik-sheet .sheet-print-context {
          margin-top: 2px !important;
        }
        .lasik-sheet .print-lasik-meta-row {
          font-size: 12px !important;
        }
        .lasik-sheet .print-lasik-meta-row .header-eye-field,
        .lasik-sheet .print-lasik-meta-row .header-operation-type-field {
          font-size: 12px !important;
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

        .lasik-sheet .print-lasik-patient-grid span,
        .lasik-sheet .print-lasik-patient-grid input:not([type="checkbox"]):not([type="radio"]),
        .lasik-sheet .print-lasik-patient-grid [data-slot="input"] {
          font-size: 14px !important;
        }
        .lasik-sheet .sheet-print-context .lasik-op-select {
          font-family: inherit !important;
          font-size: 12px !important;
          font-weight: 700 !important;
          line-height: 1.2 !important;
          color: #191c1e !important;
          text-align: center !important;
          text-align-last: center !important;
          min-height: 0 !important;
          height: 24px !important;
          padding: 0 4px !important;
        }
        .lasik-sheet .sheet-print-context span.font-bold {
          font-size: 12px !important;
        }
        .lasik-sheet .print-lasik-patient-grid {
          gap: 6px !important;
          padding: 6px 10px !important;
        }
        .lasik-sheet .print-lasik-patient-grid > div.grid {
          column-gap: 16px !important;
          row-gap: 0 !important;
          align-items: center !important;
          min-height: 24px !important;
        }
        .lasik-sheet .print-lasik-patient-grid > div.grid > label,
        .lasik-sheet .print-lasik-patient-grid > div.grid > span,
        .lasik-sheet .print-lasik-patient-grid > div.grid > div {
          gap: 6px !important;
          line-height: 1.3 !important;
        }
        .lasik-sheet .print-lasik-patient-grid > div.grid input:not([type="checkbox"]):not([type="radio"]) {
          padding: 0 2px !important;
          height: 22px !important;
          min-height: 0 !important;
        }
        .lasik-sheet table th,
        .lasik-sheet table td,
        .lasik-sheet table input,
        .lasik-sheet table textarea {
          text-align: center !important;
          vertical-align: middle !important;
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
            justify-content: flex-start !important;
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
            transform: translateX(${ct}mm) translateY(${ut}mm) scale(${ft}) !important;
            width: 100% !important;
            max-width: 100% !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .print-page-center-a4 > .lasik-sheet {
            width: 100% !important;
            max-width: 100% !important;
            height: 288mm !important;
            min-height: 288mm !important;
            max-height: 288mm !important;
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
            transform: none !important;
            width: 100% !important;
            max-width: 100% !important;
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
          .lasik-sheet table { font-size: 15px !important; }
          .lasik-sheet table th,
          .lasik-sheet table td,
          .lasik-sheet table input,
          .lasik-sheet table textarea {
            text-align: center !important;
            vertical-align: middle !important;
          }
          .lasik-sheet .sheet-refraction-table th,
          .lasik-sheet .sheet-refraction-table td,
          .lasik-sheet .sheet-refraction-table input,
          .lasik-sheet .sheet-refraction-table button,
          .lasik-sheet .sheet-refraction-table button span {
            font-size: 16px !important;
          }
          .lasik-sheet .sheet-refraction-table span[aria-hidden],
          .lasik-sheet .sheet-refraction-table input:not([type="checkbox"]):not([type="radio"]) {
            border: 0 !important;
            border-bottom: 0 !important;
            font-size: 16px !important;
          }
          .lasik-sheet .sheet-refraction-table tbody td {
            height: 11mm !important;
            padding: 3px 4px !important;
          }
          .lasik-sheet input,
          .lasik-sheet select {
            font-size: 15px !important;
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
            font-size: 15px !important;
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
            padding-bottom: 1mm !important;
            margin-bottom: 0 !important;
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
          .print-lasik-pentacam-right col:nth-child(1) { width: 36% !important; }
          .print-lasik-pentacam-right col:nth-child(2) { width: 24% !important; }
          .print-lasik-pentacam-right col:nth-child(3) { width: 12% !important; }
          .print-lasik-pentacam-right col:nth-child(4) { width: 28% !important; }
          .print-lasik-pentacam-right tr { height: 7.5mm !important; }
          .print-lasik-pentacam-right td:first-child { white-space: nowrap !important; }
          .print-lasik-eye-card { border-color: #c3c6d6 !important; background: white !important; }
          .print-lasik-eye-card > div > span { color: #526069 !important; }
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
            flex-direction: column !important;
            flex-wrap: nowrap !important;
            flex-shrink: 0 !important;
            column-gap: 6mm !important;
            row-gap: 1mm !important;
            padding: 5px !important;
            gap: 3px !important;
          }
          .print-lasik-patient-grid > div {
            gap: 3px !important;
          }
          .print-lasik-patient-grid > div {
            width: 100% !important;
          }
          .lasik-sheet.lasik-sheet .print-lasik-patient-grid {
            gap: 6px !important;
            row-gap: 6px !important;
            padding: 6px 10px !important;
          }
          .lasik-sheet.lasik-sheet .print-lasik-patient-grid > div.grid {
            column-gap: 16px !important;
            row-gap: 0 !important;
            min-height: 24px !important;
          }
          .print-lasik-patient-grid > div.grid > :nth-child(1) { justify-self: start !important; }
          .print-lasik-patient-grid > div.grid > :nth-child(2) { justify-self: center !important; }
          .print-lasik-patient-grid > div.grid > :nth-child(3) { justify-self: end !important; }
          .print-lasik-pentacam-right {
            display: grid !important;
            direction: ltr !important;
            grid-template-columns: 1fr 1.3fr 1.3fr !important;
          }
          .print-lasik-pentacam-right > div:first-child { display: block !important; grid-column: 1 !important; grid-row: 1 !important; }
          .print-lasik-pentacam-right > div:nth-child(2) { grid-column: 2 !important; grid-row: 1 !important; }
          .print-lasik-pentacam-right > div:nth-child(3) { grid-column: 3 !important; grid-row: 1 !important; }
          [data-print-document="lasik"] textarea { resize: none !important; }
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
            min-height: 98mm !important;
            max-height: 98mm !important;
            overflow: hidden !important;
            padding: 3mm !important;
          }
          .print-consultant-diagrams .fundus-drawing-surface {
            width: 22mm !important;
            height: 22mm !important;
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
          .lasik-sheet:not(.consultant-examination-only) [data-purpose="clinical-refraction"] {
            margin-top: 3mm !important;
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
            min-height: 28px !important;
            height: 28px !important;
            font-size: 14px !important;
            margin-top: 0 !important;
            padding: 1px !important;
          }
          .sheet-type-lasik .print-lasik-compact-footer textarea,
          .sheet-type-external .print-lasik-compact-footer textarea {
            min-height: 42px !important;
            height: 42px !important;
          }
          .print-lasik-compact-footer label {
            font-size: 14px !important;
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
            font-size: 12px !important;
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
      `}),e?null:(0,p.jsxs)(`header`,{className:`clinical-sheet-toolbar sticky top-0 z-30 flex min-w-0 flex-wrap items-center justify-between gap-2 border-b border-border bg-card px-3 py-2 sm:px-4 print:hidden`,children:[x?(0,p.jsx)(`nav`,{"aria-label":`نوع الشيت`,className:`flex w-full flex-wrap items-center gap-1 text-sm xl:w-auto`,children:[{key:`consultant`,label:`استشاري`},{key:`lasik`,label:`ليزك`},{key:`external`,label:`اشعه خارجي`},{key:`referral`,label:`خطاب تحويل`}].map(e=>{let t=y.startsWith(`/patient-hub/`)?`/patient-hub`:``,n=e.key===`referral`?`${t}/sheets/referral/${x}`:`${t}/sheets/${e.key}/${x}`,r=e.key===b;return(0,p.jsx)(`button`,{type:`button`,"aria-current":r?`page`:void 0,onClick:()=>v(n),className:`min-h-11 rounded-md px-3 py-2 font-medium ${r?`bg-primary text-primary-foreground`:`text-muted-foreground hover:bg-muted`}`,children:e.label},e.key)})}):(0,p.jsx)(`div`,{}),(0,p.jsxs)(`div`,{className:`flex w-full min-w-0 flex-wrap items-center gap-2 xl:w-auto`,children:[(0,p.jsx)(`div`,{className:`min-w-0 flex-1 basis-full sm:basis-60 sm:max-w-80`,children:(0,p.jsx)(ce,{initialPatientId:x,onSelect:Lt})}),(0,p.jsx)(l,{size:`sm`,className:`shrink-0 gap-2`,onClick:Vt,disabled:Bt,type:`button`,children:Bt?`حفظ…`:`حفظ`}),(0,p.jsxs)(l,{size:`sm`,variant:`outline`,className:`shrink-0 gap-2`,onClick:Ht,type:`button`,children:[(0,p.jsx)(te,{className:`h-4 w-4`,"aria-hidden":!0}),` طباعة`]})]})]}),!e&&Z.printView&&(0,p.jsx)(he,{title:ke,subtitle:k.patientName||void 0,onPrint:Ht}),(0,p.jsxs)(`div`,{className:e?`py-0`:`py-8 print:py-0`,children:[e?(0,p.jsxs)(`div`,{className:`sticky top-0 z-30 mb-2 flex flex-wrap items-center justify-end gap-2 bg-white/95 py-2 print:hidden`,dir:`rtl`,children:[(0,p.jsx)(l,{size:`sm`,onClick:Vt,disabled:Bt,type:`button`,children:Bt?`حفظ…`:m===`examination`?`حفظ الفحص`:`حفظ الملف`}),m===`examination`?(0,p.jsxs)(l,{type:`button`,variant:`destructive`,size:`sm`,className:`h-9 gap-1.5`,disabled:!h||Pt.isPending,onClick:()=>{!x||!h||window.confirm(`مسح شيت هذه الزيارة؟ سيتم حذف بياناتها نهائيًا ولا يمكن التراجع.`)&&Pt.mutate({patientId:x,visitId:h,sheetType:b})},children:[(0,p.jsx)(u,{className:`h-4 w-4`}),Pt.isPending?`جاري المسح…`:`مسح الزيارة`]}):null]}):null,(0,p.jsxs)(`div`,{className:`print:hidden ${Z.printView?`hidden`:``}`,children:[(0,p.jsx)(`div`,{className:e?`w-full`:`a4-page-card`,children:Ut()}),Y&&(0,p.jsx)(`div`,{className:`combined-followup-screen mt-8 ${e?`w-full max-w-none`:`a4-page-card`}`,children:Wt()})]}),(0,p.jsxs)(`div`,{className:`hidden print:block ${Y?`combined-sheet-print`:``}`,"data-print-document":`lasik`,"data-sheet-type":b,children:[(0,p.jsx)(`div`,{className:`print-page-center-a4`,"data-print-page":`main`,children:Ut()}),Y&&(0,p.jsx)(`div`,{className:`attached-followup-page`,"data-print-page":`followup`,children:Wt()})]})]})]})}export{m as t};