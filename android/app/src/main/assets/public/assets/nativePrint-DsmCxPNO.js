import{C as e,I as t}from"./vendor-Dg68qOgq.js";import{i as n}from"./ui-misc-DEd6ZQby.js";function r(){return t.isNativePlatform()&&t.getPlatform()===`android`}var i={"print-only-refraction":`.refraction-print-section`,"print-ops-list":`.ops-print-table`};function a(){let e=[];for(let t of Array.from(document.styleSheets)){let n;try{n=t.cssRules}catch{continue}if(n)for(let t of Array.from(n))if(t instanceof CSSMediaRule&&/print/i.test(t.media.mediaText))for(let n of Array.from(t.cssRules))e.push(n.cssText);else e.push(t.cssText)}return e.join(`
`)}var o=`[data-slot="dialog-overlay"], [data-slot="dialog-content"], [role="dialog"], [role="alertdialog"], [data-radix-popper-content-wrapper]`;function s(){let e=a(),t=document.documentElement.cloneNode(!0);t.querySelectorAll(`[class~="print:hidden"]`).forEach(e=>e.remove()),t.querySelectorAll(o).forEach(e=>e.remove()),t.querySelectorAll(`link[rel="stylesheet"]`).forEach(e=>e.remove()),t.querySelectorAll(`img[src]`).forEach(e=>{let t=e.getAttribute(`src`)??``;t&&!/^(https?:|data:)/i.test(t)&&e.setAttribute(`src`,new URL(t,window.location.origin).href)}),t.querySelectorAll(`script`).forEach(e=>e.remove());let n=!1;for(let[e,r]of Object.entries(i))if(document.body.classList.contains(e)){let e=t.querySelector(r),i=t.querySelector(`body`);e&&i&&(i.replaceChildren(e),n=!0);break}if(!n){let e=t.querySelector(`[data-print-document]`),n=t.querySelector(`body`);e&&n&&n.replaceChildren(e)}if(e){let n=document.createElement(`style`);n.textContent=e,(t.querySelector(`head`)??t).appendChild(n)}let r=[document.documentElement,...Array.from(document.documentElement.querySelectorAll(`*`))];[t,...Array.from(t.querySelectorAll(`*`))].forEach((e,t)=>{let n=r[t];if(!n)return;let i=window.getComputedStyle(n);([i.overflow,i.overflowX,i.overflowY].some(e=>e===`auto`||e===`scroll`)||n.scrollHeight>n.clientHeight)&&(e.style.setProperty(`overflow`,`hidden`,`important`),e.style.setProperty(`overflow-y`,`hidden`,`important`),e.style.setProperty(`scrollbar-width`,`none`,`important`),e.style.setProperty(`-ms-overflow-style`,`none`,`important`))});let s=document.createElement(`style`);return s.textContent=`
    html, body, #root,
    [data-app-scroll-container],
    .lasik-print-root, .specialist-page-root {
      height: auto !important;
      min-height: 0 !important;
      max-height: none !important;
      overflow: hidden !important;
      overflow-y: hidden !important;
      scrollbar-width: none !important;
      -ms-overflow-style: none !important;
    }

    /* The print WebView itself must not expose a document scrollbar. */
    html, body, #root {
      overflow-x: hidden !important;
      overflow-y: hidden !important;
    }

    /* Do not let the native-print cleanup override the paper geometry. */
    .a4-page-card, .print-page-center-a4, .print-page-center-a5,
    .followup-print-page, .sheet-followup-body,
    .lasik-sheet, .specialist-sheet {
      overflow: hidden !important;
      overflow-y: hidden !important;
      scrollbar-width: none !important;
      -ms-overflow-style: none !important;
    }

    [data-print-document="lasik"] .print-page-center-a4 > .lasik-sheet {
      height: 275mm !important;
      min-height: 275mm !important;
      max-height: 275mm !important;
      box-sizing: border-box !important;
    }

    [data-print-document="followup"] .followup-print-page,
    [data-print-document="followup"] .sheet-followup-body {
      width: 210mm !important;
      height: 297mm !important;
      min-height: 297mm !important;
      max-height: 297mm !important;
      box-sizing: border-box !important;
    }

    html::-webkit-scrollbar,
    body::-webkit-scrollbar,
    #root::-webkit-scrollbar,
    [data-app-scroll-container]::-webkit-scrollbar,
    .a4-page-card::-webkit-scrollbar,
    .print-page-center-a4::-webkit-scrollbar,
    .print-page-center-a5::-webkit-scrollbar,
    .followup-print-page::-webkit-scrollbar,
    .sheet-followup-body::-webkit-scrollbar,
    .lasik-print-root::-webkit-scrollbar,
    .specialist-page-root::-webkit-scrollbar,
    .lasik-sheet::-webkit-scrollbar,
    .specialist-sheet::-webkit-scrollbar,
    [data-print-document="lasik"] .print-page-center-a4::-webkit-scrollbar,
    [data-print-document="lasik"] .print-page-center-a4 > .lasik-sheet::-webkit-scrollbar {
      display: none !important;
      width: 0 !important;
      height: 0 !important;
      background: transparent !important;
    }
  `,(t.querySelector(`head`)??t).appendChild(s),t.outerHTML}async function c(t=`SELRS Print`,i){if(!r())return{attempted:!1,started:!1};try{let n=i??s();return await e.print({content:n,name:t}),{attempted:!0,started:!0}}catch(e){console.warn(`Native print failed, falling back to web print:`,e);try{window.print()}catch(e){n.error(`تعذر الطباعة. يرجى المحاولة مرة أخرى.`),console.error(`Web print fallback also failed:`,e)}return{attempted:!0,started:!0}}}export{c as n,r as t};