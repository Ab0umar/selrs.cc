import { build } from "esbuild";
import { readFile, readdir } from "node:fs/promises";
import { createServer } from "node:http";
import puppeteer from "puppeteer";
import path from "node:path";

const root = process.cwd();
const assetsDirectory = path.join(root, "dist/public/assets");
const webCssFile = (await readdir(assetsDirectory)).find((file) =>
  /^web-.*\.css$/.test(file),
);
const productionCss = await readFile(
  path.join(assetsDirectory, webCssFile),
  "utf8",
);
const mobileCanvasCss = await readFile(
  path.join(root, "client/src/components/layout/mobile-brand-canvas.css"),
  "utf8",
);
const cssFiles = [
  "attendance-workspace.css",
  "attendance-studio.css",
  "attendance-premium.css",
];
const css = (
  await Promise.all(
    cssFiles.map((file) =>
      readFile(path.join(root, "client/src/features/attendance", file), "utf8"),
    ),
  )
).join("\n");
const mock = `
export const trpc = {
  useUtils: () => ({ attendance: { dailyByDate: { invalidate: () => window.actions.push('invalidate') } } }),
  medical: { getMyPermissions: { useQuery: () => ({ data: [] }) } },
  attendance: new Proxy({}, { get: (_, key) => ({
    useQuery: () => ({
      data: key === 'dailyByDate' ? (window.fixtureState === 'empty' ? [] : [{empCd:'TEST',empName:'بيانات اختبار',shiftId:1,firstIn:'2026-10-09T08:00:00',lastOut:null,status:'present',lateMinutes:0}]) : key === 'deviceStatus' ? {connected:true} : {bySection:{center:{insideNow:12},clinic:{insideNow:3}}},
      isLoading: window.fixtureState === 'loading', isError: window.fixtureState === 'error', isFetching:false,
      refetch: () => window.actions.push(String(key) + ':refetch')
    }),
    useMutation: options => ({isPending:false,mutate: input => {window.actions.push(String(key)); options.onSuccess({success:true,rowsInserted:2,rowsWritten:3});}})
  }) })
};`;
const result = await build({
  stdin: {
    contents: `import React from 'react'; import {createRoot} from 'react-dom/client'; import Home from './client/src/features/attendance/AttendanceHome'; window.render = () => createRoot(document.getElementById('root')).render(<Home/>); window.render();`,
    resolveDir: root,
    loader: "tsx",
  },
  bundle: true,
  write: false,
  format: "iife",
  jsx: "automatic",
  plugins: [
    {
      name: "verification-fixtures",
      setup(b) {
        b.onResolve({ filter: /^@\// }, (args) => {
          if (args.path === "@/lib/trpc")
            return { path: "trpc", namespace: "fixture" };
          if (args.path === "@/hooks/useAuth")
            return { path: "auth", namespace: "fixture" };
          return {
            path: path.join(root, "client/src", args.path.slice(2)),
            namespace: "alias",
          };
        });
        b.onLoad({ filter: /.*/, namespace: "fixture" }, (args) => ({
          contents:
            args.path === "trpc"
              ? mock
              : `export const useAuth = () => ({user:{role:window.fixtureRole || 'admin'}});`,
          loader: "js",
        }));
        b.onResolve({ filter: /.*/, namespace: "alias" }, () => undefined);
        b.onLoad({ filter: /.*/, namespace: "alias" }, async (args) => {
          for (const ext of [".tsx", ".ts"]) {
            try {
              return {
                contents: await readFile(args.path + ext, "utf8"),
                loader: ext === ".tsx" ? "tsx" : "ts",
                resolveDir: path.dirname(args.path),
              };
            } catch {}
          }
          throw new Error("Missing alias " + args.path);
        });
        b.onLoad({ filter: /\.css$/ }, () => ({ contents: "", loader: "js" }));
      },
    },
  ],
});
const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><style>
:root {--foreground:#233a39;--background:#f2f5f3;--card:#fff;--border:#d6e0dc;--muted:#e8eeec;--muted-foreground:#526765;--input:#526765;--primary:#246354;--primary-foreground:#fff;--font-arabic:'Tahoma';--success:#286849;--destructive:#973b3b}
*{box-sizing:border-box}body{margin:0;background:var(--background);font-family:Tahoma}h1,h2,p,dd{margin:0}button,input,select{font:inherit}button{cursor:pointer}button:disabled{cursor:default}svg{width:16px;height:16px}button{border:0}a{color:inherit}.min-w-0{min-width:0}.text-sm{font-size:.875rem}.text-xs{font-size:.75rem}.flex{display:flex}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-4{gap:16px}.gap-2{gap:8px}.attendance-home-focused>div{margin-top:16px}
${productionCss}\n${mobileCanvasCss}\n${css}</style></head><body><div class="selrs-mobile-brand-canvas selrs-page-bg"><main data-app-scroll-container class="bg-background"><div class="selrs-app-content"><div class="attendance-studio" data-operational-module="attendance"><div id="module-content"><div class="attendance-workspace"><div id="root"></div></div></div></div></div></main></div><script>window.actions=[];window.fixtureState=new URLSearchParams(location.search).get('state')||'ready';window.fixtureRole=new URLSearchParams(location.search).get('role')||'admin';</script><script>${result.outputFiles[0].text.replaceAll("</script", "<\\/script")}</script></body></html>`;
const server = createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(html);
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const browser = await puppeteer.launch({
  headless: true,
  executablePath:
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
});
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const report = [];
try {
  for (const dark of [false, true])
    for (const width of [360, 768, 1024, 1440]) {
      await page.setViewport({ width, height: 1000 });
      await page.goto("http://127.0.0.1:" + server.address().port);
      if (dark)
        await page.evaluate(() =>
          document.documentElement.classList.add("dark"),
        );
      await page.waitForSelector(".attendance-home-net");
      await page.emulateMediaFeatures([
        { name: "prefers-reduced-motion", value: "reduce" },
      ]);
      const geometry = await page.evaluate(() => ({
        pageBackground: getComputedStyle(
          document.querySelector(".selrs-mobile-brand-canvas"),
        ).backgroundColor,
        contentBackground: getComputedStyle(
          document.querySelector("#module-content"),
        ).backgroundColor,
        canvas: getComputedStyle(document.querySelector(".attendance-studio"))
          .backgroundColor,
        tray: getComputedStyle(document.querySelector(".attendance-home-pane"))
          .backgroundColor,
        overflow: document.documentElement.scrollWidth > innerWidth,
        heading: document.querySelector("h1").getBoundingClientRect().width,
        buttons: [
          ...document.querySelectorAll(".attendance-home-actions button"),
        ].map((x) => ({
          w: x.getBoundingClientRect().width,
          h: x.getBoundingClientRect().height,
        })),
      }));
      if (
        !dark &&
        (geometry.pageBackground !== "rgb(255, 255, 255)" ||
          geometry.canvas !== "rgb(255, 255, 255)" ||
          !["rgb(255, 255, 255)", "rgba(0, 0, 0, 0)"].includes(
            geometry.contentBackground,
          ) ||
          geometry.tray !== "rgb(236, 236, 236)")
      )
        throw Error(
          "White page and neutral content separation failed " +
            JSON.stringify(geometry),
        );
      if (
        geometry.overflow ||
        geometry.heading < 20 ||
        geometry.buttons.some((x) => x.w < 44 || x.h < 44)
      )
        throw Error(
          "Geometry failed " + JSON.stringify({ width, dark, geometry }),
        );
      await page.screenshot({
        path: `outputs/attendance-premium/${dark ? "dark" : "light"}-${width}.png`,
        fullPage: true,
      });
      report.push({ width, dark, geometry });
    }
  await page.goto("http://127.0.0.1:" + server.address().port);
  for (const label of ["تحديث", "مزامنة سجلات البصمة", "تطبيق قواعد الاحتساب"])
    await page.click('button[aria-label="' + label + '"]');
  await page.type("input", "no-match");
  if (
    !(await page.evaluate(() =>
      document.body.textContent.includes("لا توجد نتائج"),
    ))
  )
    throw Error("Search failed");
  await page.click("input", { clickCount: 3 });
  await page.keyboard.down("Control");
  await page.keyboard.press("A");
  await page.keyboard.up("Control");
  await page.keyboard.press("Backspace");
  await page.select("select", "absent");
  if (
    !(await page.evaluate(() =>
      document.body.textContent.includes("لا توجد نتائج"),
    ))
  )
    throw Error("Status filter failed");
  await page.select("select", "present");
  await page.waitForSelector(".attendance-register-person");
  await page.click('a[href="/attendance/reports"]');
  if (!(await page.evaluate(() => location.pathname === "/attendance/reports")))
    throw Error("Reports navigation failed");
  const actions = await page.evaluate(() => window.actions);
  for (const key of [
    "dashboardSummary:refetch",
    "deviceStatus:refetch",
    "invalidate",
    "syncNow",
    "materializeDaily",
  ])
    if (!actions.includes(key)) throw Error("Action missing " + key);
  for (const state of ["empty", "loading", "error"]) {
    await page.goto(
      "http://127.0.0.1:" + server.address().port + "?state=" + state,
    );
    const text = await page.evaluate(() => document.body.textContent);
    if (
      !text.includes(
        state === "empty"
          ? "لا توجد سجلات"
          : state === "loading"
            ? "جارٍ التحميل"
            : "تعذر تحميل",
      )
    )
      throw Error("State failed " + state);
    if (state === "error")
      for (const button of await page.$$("button"))
        if (
          await button.evaluate((x) => x.textContent.includes("إعادة المحاولة"))
        )
          await button.click();
  }
  await page.goto(
    "http://127.0.0.1:" + server.address().port + "?role=employee",
  );
  if (await page.$('button[aria-label="مزامنة سجلات البصمة"]'))
    throw Error("Permission gate failed");
  await page.keyboard.press("Tab");
  const focus = await page.evaluate(
    () => getComputedStyle(document.activeElement).outlineStyle,
  );
  if (focus === "none") throw Error("Focus missing");
  if (errors.length) throw Error(errors.join("\n"));
  console.log(
    JSON.stringify(
      {
        report,
        actions,
        states: ["empty", "loading", "error"],
        permissions: "PASS",
        keyboard: "PASS",
        errors,
      },
      null,
      2,
    ),
  );
} finally {
  await browser.close();
  server.close();
}
