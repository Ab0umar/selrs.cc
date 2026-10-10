import { createElement } from "react";
import { createRoot } from "react-dom/client";
import {
  CalendarDays,
  Search,
  RefreshCw,
  Users,
  LayoutDashboard,
  Clock,
  FileText,
  Settings,
  Fingerprint,
  ArrowLeft,
  CircleCheck,
  LogOut,
  MoreHorizontal,
} from "lucide-react";

const icon = (name) =>
  `<span class="icon" data-icon="${name}" aria-hidden="true"></span>`;
const design = document.body.dataset.design;
const nav = ["ملخص الحضور", "الحضور الآن", "الموظفون", "التقارير", "الإعدادات"];
const navIcons = ["LayoutDashboard", "Clock", "Users", "FileText", "Settings"];
const people = [
  {
    name: "أحمد محمد علي",
    code: "0012",
    job: "الاستقبال",
    shift: "صباحية",
    in: "08:02",
    out: "—",
    status: "حاضر",
    tone: "present",
  },
  {
    name: "منى حسن إبراهيم",
    code: "0024",
    job: "التمريض",
    shift: "صباحية",
    in: "08:00",
    out: "—",
    status: "حاضر",
    tone: "present",
  },
  {
    name: "محمد محمود السيد",
    code: "0031",
    job: "فني أشعة",
    shift: "صباحية",
    in: "08:25",
    out: "—",
    status: "متأخر",
    tone: "late",
  },
  {
    name: "سارة أحمد حسن",
    code: "0045",
    job: "الحسابات",
    shift: "صباحية",
    in: "—",
    out: "—",
    status: "غائب",
    tone: "absent",
  },
  {
    name: "خالد عبد الرحمن",
    code: "0052",
    job: "فني ليزك",
    shift: "مسائية",
    in: "—",
    out: "—",
    status: "لم تبدأ الوردية",
    tone: "waiting",
  },
];
const navigation = `<nav class="module-nav" aria-label="الحضور">${nav.map((text, i) => `<button type="button" ${i === 0 ? 'aria-current="page"' : ""}>${icon(navIcons[i])}<span>${text}</span></button>`).join("")}</nav>`;
const metrics = `<section class="metrics" aria-label="ملخص اليوم">${[
  ["حاضرون اليوم", "12", "من 15 موظفاً", "present"],
  ["غائبون اليوم", "2", "لم تُسجّل بصمة دخول", "absent"],
  ["متأخرون اليوم", "1", "تأخير أكثر من 15 دقيقة", "late"],
  ["متواجدون الآن", "8", "داخل المركز", "neutral"],
]
  .map(
    ([label, value, note, tone]) =>
      `<article class="metric ${tone}"><span class="metric-label">${label}</span><strong>${value}</strong><small>${note}</small></article>`,
  )
  .join("")}</section>`;
const table = `<section class="register"><div class="section-head"><div><h2>سجل اليوم</h2><span class="sub">المركز · 5 موظفين</span></div><button class="text-command" id="all-records">التقارير ${icon("ArrowLeft")}</button></div><div class="filters"><label class="search">${icon("Search")}<input id="search" placeholder="ابحث بالاسم أو الكود" aria-label="البحث عن موظف"></label><select id="status" aria-label="حالة الحضور"><option value="all">كل الحالات</option><option value="present">حاضر</option><option value="late">متأخر</option><option value="absent">غائب</option><option value="waiting">لم تبدأ الوردية</option></select><span id="result-count">5 موظفين</span></div><div class="table-wrap"><table><thead><tr><th>الموظف</th><th>القسم</th><th>الوردية</th><th>الدخول</th><th>الخروج</th><th>الحالة</th><th><span class="sr-only">التفاصيل</span></th></tr></thead><tbody id="rows"></tbody></table></div><p id="empty" hidden>لا يوجد موظفون يطابقون البحث.</p><footer class="table-footer">إجمالي النتائج: <span id="total">5</span><span>1 من 1</span></footer></section>`;
const shifts = `<section class="shift-section"><div class="section-head"><h2>الورديات</h2>${icon("Clock")}</div><article class="shift"><div><h3>الوردية الصباحية</h3><span class="sub">08:00 ص – 12:00 م</span></div><span class="badge present">8 حاضرون</span></article><article class="shift"><div><h3>الوردية المسائية</h3><span class="sub">02:00 م – 08:00 م</span></div><span class="badge waiting">تبدأ لاحقاً</span></article></section>`;
const device = `<section class="device-section"><div class="section-head"><h2>جهاز البصمة</h2>${icon("Fingerprint")}</div><div class="device-status">${icon("CircleCheck")}<div><strong>متصل</strong><p class="sub">EF10-K · الاستقبال</p></div><span class="status-dot"></span></div><div class="device-line"><span>آخر مزامنة</span><span id="sync-time" dir="ltr">10:42</span></div><button class="outline full" id="sync">${icon("RefreshCw")} مزامنة السجلات</button></section>`;
document.querySelector("#app").innerHTML =
  `<div class="comparison" aria-label="نماذج التصميم"><a href="1-familiar.html" ${design === "familiar" ? 'aria-current="page"' : ""}>١ · كروت مألوفة</a><a href="2-office.html" ${design === "office" ? 'aria-current="page"' : ""}>٢ · واجهة مكتبية</a><a href="3-balanced.html" ${design === "balanced" ? 'aria-current="page"' : ""}>٣ · شكل متوازن</a><span>بيانات تجريبية</span></div><header class="app-header"><a class="brand" href="1-familiar.html"><img src="../../client/public/center-logo.png" alt="شعار مركز عيون الشروق"><div><strong>مركز عيون الشروق</strong><span>إدارة الموظفين</span></div></a><div class="user"><span class="avatar">أح</span><div><strong>أحمد حسن</strong><small>مسؤول النظام</small></div><button class="icon-button" title="الحساب" aria-label="الحساب">${icon("MoreHorizontal")}</button></div></header><div class="app-layout">${navigation}<main><header class="page-head"><div><span class="eyebrow">الحضور والانصراف</span><h1>ملخص الحضور</h1><p>الاثنين، 5 أكتوبر 2026</p></div><div class="toolbar"><label class="date">${icon("CalendarDays")}<input type="date" value="2026-10-05" aria-label="تاريخ الحضور"></label><button class="primary" id="refresh">${icon("RefreshCw")}تحديث</button></div></header>${design === "balanced" ? `<div class="balanced-body"><div>${table}</div><aside>${metrics}${shifts}${device}</aside></div>` : `${metrics}<div class="workspace"><div>${table}</div><aside>${shifts}${device}</aside></div>`}<p class="update-note" role="status" id="notice">آخر تحديث: 10:43 ص</p></main></div><dialog id="details"><header><h2 id="detail-name"></h2><button class="outline" id="close-detail">إغلاق</button></header><div id="detail-body"></div></dialog>`;
function renderRows() {
  const query = document.querySelector("#search").value.trim();
  const status = document.querySelector("#status").value;
  const filtered = people.filter(
    (p) =>
      (p.name.includes(query) || p.code.includes(query)) &&
      (status === "all" || status === p.tone),
  );
  document.querySelector("#rows").innerHTML = filtered
    .map(
      (p) =>
        `<tr><td><button class="employee-name" data-code="${p.code}">${p.name}</button><small class="code">${p.code}</small></td><td>${p.job}</td><td>${p.shift}</td><td class="time">${p.in}</td><td class="time">${p.out}</td><td><span class="badge ${p.tone}">${p.status}</span></td><td><button class="icon-button detail-button" data-code="${p.code}" title="تفاصيل ${p.name}" aria-label="تفاصيل ${p.name}">${icon("ArrowLeft")}</button></td></tr>`,
    )
    .join("");
  document.querySelector("#empty").hidden = Boolean(filtered.length);
  document.querySelector("#result-count").textContent =
    `${filtered.length} موظفين`;
  document.querySelector("#total").textContent = filtered.length;
  mountIcons();
}
const icons = {
  CalendarDays,
  Search,
  RefreshCw,
  Users,
  LayoutDashboard,
  Clock,
  FileText,
  Settings,
  Fingerprint,
  ArrowLeft,
  CircleCheck,
  LogOut,
  MoreHorizontal,
};
function mountIcons() {
  document.querySelectorAll("[data-icon]").forEach((node) => {
    const name = node.dataset.icon;
    node.removeAttribute("data-icon");
    createRoot(node).render(
      createElement(icons[name], { size: 18, strokeWidth: 1.8 }),
    );
  });
}
document.querySelector("#search").addEventListener("input", renderRows);
document.querySelector("#status").addEventListener("change", renderRows);
document.querySelector("#rows").addEventListener("click", (e) => {
  const button = e.target.closest("[data-code]");
  if (!button) return;
  const p = people.find((p) => p.code === button.dataset.code);
  document.querySelector("#detail-name").textContent = p.name;
  document.querySelector("#detail-body").innerHTML =
    `<dl><dt>الكود</dt><dd>${p.code}</dd><dt>القسم</dt><dd>${p.job}</dd><dt>الوردية</dt><dd>${p.shift}</dd><dt>الدخول</dt><dd>${p.in}</dd><dt>الحالة</dt><dd>${p.status}</dd></dl>`;
  document.querySelector("#details").showModal();
});
document.querySelector("#close-detail").onclick = () =>
  document.querySelector("#details").close();
for (const id of ["refresh", "sync"])
  document.querySelector(`#${id}`).onclick = () => {
    document.querySelector("#notice").textContent =
      id === "refresh"
        ? "تم تحديث البيانات التجريبية."
        : "تمت مزامنة السجلات التجريبية.";
  };
document.querySelector("#all-records").onclick = () => {
  document.querySelector("#search").value = "";
  document.querySelector("#status").value = "all";
  renderRows();
  document.querySelector("#search").focus();
};
document.querySelectorAll(".module-nav button").forEach(
  (button) =>
    (button.onclick = () => {
      document
        .querySelectorAll(".module-nav button")
        .forEach((b) => b.removeAttribute("aria-current"));
      button.setAttribute("aria-current", "page");
      document.querySelector("#notice").textContent =
        `${button.textContent.trim()} · معاينة تجريبية`;
    }),
);
renderRows();
