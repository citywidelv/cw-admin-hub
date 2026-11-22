/* CW Admin Hub shared script. Build 2026-11-21 (header and menu bar rebuilt on the Ops Hub pattern: one panel per menu with groups side by side, aria-expanded, a search box that finds every tool, an Other hubs button; menus regrouped by job; CWNav cascade helpers no longer used here). 2026-10-01 (Vendor Recruiting queue: recruiting.html under Vendors). 2026-09-24 (Team & Admin rebuilt as side cascades, Uniform Orders page; group headings in any tall dropdown open to the side and every panel is kept on screen via CWNav.place). 2026-09-21 (Shop Codes & Certificates under Vendor of the Month). 2026-09-19b (Vendor Onboarding desk: onboarding.html; Asana onboarding boards and the Asana background check form retired from the menus). 2026-09-19 (Ops Admin Desk: desk.html, records.html, sheet.html under Team & Admin). 2026-09-13 (Site Admin: MENU below is the fallback, nav.js is live; cascade submenus; Vendor of the Month).
   Gate, header, cascading nav, webhook helper, Asana project registry.
   Every page: <link admin.css> ... <div id="gate"> + <div id="app" class="hidden">, then
   this file, then ADMIN.init({page:'...'}). Data lives in Google Sheets through the
   CW Solicitations Apps Script (VendorDirectory.gs, kinds vd_*). */
(function(){
var WEBHOOK = "https://script.google.com/macros/s/AKfycbzfNnrpidCbWB1DeUNgXvRhDFMQgApfpn-3C9GU45wMEHcJpWFl8ZQVo6PUBSRfEVfRdg/exec";
// Sep 15 2026: one password for the whole platform. The Admin Hub no longer has a
// passcode of its own; cw-auth.js keeps the single team key and deletes the old one.
var OPSKEY = "cwOpsHubPass";        // the one team passcode key, shared by every hub
var NAMEKEY = "cwAdminName";
var PORTAL = "https://citywidelv.github.io/";
var OPS = "https://citywidelv.github.io/cw-ops-desk/";
var VS = "https://citywidelv.github.io/cw-vendor-hub/";
var SHEET = "https://docs.google.com/spreadsheets/d/1a_Usbs1FIzaZPnbUpc8vqFg2XV2_QjTAKtqVNPxBPh8/edit";
var LOGO = "https://emailer.emfluence.com/clients/citywide/uploadedfiles/signature_logo.png";

/* Asana. The Business Operations Management team; projects are fetched live from the
   Apps Script (kind vd_bom_asana, team) and fall back to this list. */
var ASANA_TEAM = "1211434492126259";
var ASANA_WS = "13140959242873";
var ASANA_TEAM_URL = "https://app.asana.com/0/" + ASANA_TEAM + "/overview";
var ASANA_PROJECTS = [
  { gid:"1211554681536533", name:"IC Background Checks", group:"Background Checks", icon:"shield" },
  { gid:"1211434492126262", name:"LV Onboarding - JS ICs", group:"Onboarding", icon:"clip" },
  { gid:"1211502025994506", name:"LV Onboarding - OS ICs", group:"Onboarding", icon:"clip" },
  { gid:"1211502025994509", name:"NNV Onboarding - JS ICs", group:"Onboarding", icon:"clip" },
  { gid:"1211502025994512", name:"NNV Onboarding - OS ICs", group:"Onboarding", icon:"clip" },
  { gid:"1212873397063867", name:"NNV IC Transfers", group:"Onboarding", icon:"route" },
  { gid:"1211502025570262", name:"Exhibit A Requests", group:"Requests", icon:"sheet" },
  { gid:"1211522761691094", name:"Office Management", group:"Office", icon:"home" }
];
function asanaUrl(gid){ return "https://app.asana.com/1/" + ASANA_WS + "/project/" + gid; }

/* Asana forms (form.asana.com allows embedding; app.asana.com does not) */
/* Sep 11 2026: the vendor packet forms, the walkthrough email form and the
   Exhibit A request form were retired. The Ops Hub does all three itself now
   (vendor-invite.html, postings.html, create-exhibit-a.html). The background
   check form is still live and is also linked from the Vendor Hub. */
var FORMS = {
  /* Sep 19 2026: the Asana background check form is retired. The Vendor Hub page posts to
     Onboarding.gs and lands on onboarding.html. Kept as a key so old callers still resolve. */
  bgcheck: VS + "background-check.html"
};

var ICONS = {
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>',
  clip:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 12l2 2 4-4"/>',
  sheet:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
  route:'<path d="M9 20l-6-3V4l6 3 6-3 6 3v13l-6-3-6 3z"/><path d="M9 7v13M15 4v13"/>',
  home:'<path d="M3 12l9-8 9 8M5 10v10h14V10"/>',
  board:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 14h8M8 17h5"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>',
  users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  check:'<path d="M20 6L9 17l-5-5"/>',
  x:'<path d="M18 6L6 18M6 6l12 12"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  ext:'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14L21 3"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  work:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  refresh:'<path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 3v6h-6"/>',
  asana:'<circle cx="12" cy="7" r="3.2"/><circle cx="6.5" cy="16" r="3.2"/><circle cx="17.5" cy="16" r="3.2"/>'
};
function icon(k, size){
  size = size || 15;
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[k] || ICONS.home) + '</svg>';
}
function esc(s){ return String(s == null ? "" : s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

/* ---------- nav tree. Add a tool here and it shows on every Admin Hub page. ---------- */
var MENU = [
 {
  "label": "Vendors",
  "icon": "users",
  "page": "vendors",
  "items": [
   {
    "sub": "Find a vendor",
    "items": [
     {
      "label": "Vendor Profile",
      "href": "vendor-profile.html"
     },
     {
      "label": "Vendor Activity",
      "href": "vendor-activity.html"
     },
     {
      "label": "Las Vegas Directory",
      "href": "https://citywidelv.github.io/cw-ops-desk/vendors.html#/lv",
      "tag": "Ops Hub"
     },
     {
      "label": "Northern Nevada Directory",
      "href": "https://citywidelv.github.io/cw-ops-desk/vendors.html#/nnv",
      "tag": "Ops Hub"
     },
     {
      "label": "Edit a Las Vegas Vendor Record",
      "href": "records.html?s=vendors_lv"
     },
     {
      "label": "Edit a Northern Nevada Vendor Record",
      "href": "records.html?s=vendors_nnv"
     }
    ]
   },
   {
    "sub": "Bring on a vendor",
    "items": [
     {
      "label": "Vendor Recruiting",
      "href": "recruiting.html"
     },
     {
      "label": "Invite for Las Vegas",
      "href": "https://citywidelv.github.io/cw-ops-desk/vendor-invite.html?region=lv",
      "tag": "Ops Hub"
     },
     {
      "label": "Invite for Northern Nevada",
      "href": "https://citywidelv.github.io/cw-ops-desk/vendor-invite.html?region=nnv",
      "tag": "Ops Hub"
     },
     {
      "label": "Onboarding Desk",
      "href": "onboarding.html"
     },
     {
      "label": "Start Onboarding",
      "href": "onboarding.html#start"
     },
     {
      "label": "Add a Vendor",
      "href": "https://citywidelv.github.io/cw-ops-desk/vendor-add.html",
      "tag": "Ops Hub"
     },
     {
      "label": "New Vendor Steps",
      "href": "https://citywidelv.github.io/cw-vendor-hub/new-vendors.html",
      "tag": "Vendor Hub"
     }
    ]
   },
   {
    "sub": "Email and removal",
    "items": [
     {
      "label": "Vendor Email",
      "href": "https://citywidelv.github.io/cw-ops-desk/vendor-email.html?from=admin",
      "tag": "Ops Hub"
     },
     {
      "label": "Do Not Email or Remove",
      "href": "https://citywidelv.github.io/cw-ops-desk/vendor-dne.html?from=admin",
      "tag": "Ops Hub"
     }
    ]
   },
   {
    "sub": "Vendor of the Month",
    "items": [
     {
      "label": "Add a Vendor of the Month",
      "href": "recognition.html#add"
     },
     {
      "label": "Winners and Plates",
      "href": "recognition.html"
     },
     {
      "label": "Shop Codes and Certificates",
      "href": "recognition.html#coupons"
     },
     {
      "label": "Nominate",
      "href": "https://citywidelv.github.io/cw-ops-desk/nominate.html",
      "tag": "Ops Hub"
     },
     {
      "label": "The Wall",
      "href": "https://citywidelv.github.io/cw-vendor-hub/#recognition",
      "tag": "Vendor Hub"
     }
    ]
   }
  ]
 },
 {
  "label": "Compliance",
  "icon": "shield",
  "page": "bc",
  "items": [
   {
    "sub": "Background checks",
    "items": [
     {
      "label": "Review and Record Results",
      "href": "background-checks.html"
     },
     {
      "label": "Add a Person",
      "href": "background-checks.html#add"
     },
     {
      "label": "Background Check Requests",
      "href": "onboarding.html#bc"
     },
     {
      "label": "Send Vendor Notices",
      "href": "https://citywidelv.github.io/cw-ops-desk/bc-notices.html",
      "tag": "Ops Hub"
     },
     {
      "label": "Vendor Request Page",
      "href": "https://citywidelv.github.io/cw-vendor-hub/background-check.html",
      "tag": "Vendor Hub"
     },
     {
      "label": "Background Checks Sheet",
      "href": "https://docs.google.com/spreadsheets/d/1a_Usbs1FIzaZPnbUpc8vqFg2XV2_QjTAKtqVNPxBPh8/edit",
      "tag": "Sheet"
     },
     {
      "label": "Verified First",
      "href": "https://portal.verifiedfirst.com/#/dashboard",
      "tag": "Site"
     }
    ]
   },
   {
    "sub": "Customer COIs",
    "items": [
     {
      "label": "Request Log and Status",
      "href": "coi-log.html"
     },
     {
      "label": "New COI Request",
      "href": "https://citywidelv.github.io/cw-ops-desk/coi-request.html",
      "tag": "Ops Hub"
     },
     {
      "label": "COI Requests Sheet",
      "href": "https://docs.google.com/spreadsheets/d/10orOD2OQGgq9GxJldMNJNKKGmy1fU6uhe4SmCLTDGLg/edit",
      "tag": "Sheet"
     },
     {
      "label": "InsurLink",
      "href": "https://insurlink.vertafore.com/end-insured/2260313c6a34459c8a098ede23d21fb7/2094911/overview",
      "tag": "Site"
     }
    ]
   },
   {
    "sub": "Vendor insurance",
    "items": [
     {
      "label": "Vendor COIs Coming In",
      "href": "https://citywidelv.github.io/cw-ops-desk/insurance.html",
      "tag": "Ops Hub"
     }
    ]
   }
  ]
 },
 {
  "label": "Orders and Supplies",
  "icon": "work",
  "page": "orders",
  "items": [
   {
    "sub": "Uniforms",
    "items": [
     {
      "label": "Uniform Orders",
      "href": "uniform-orders.html"
     },
     {
      "label": "Vendor Shop Orders",
      "href": "records.html?s=shop"
     },
     {
      "label": "Employee Uniform Request",
      "href": "https://citywidelv.github.io/cw-ops-desk/uniforms.html",
      "tag": "Ops Hub"
     },
     {
      "label": "Office Inventory",
      "href": "https://citywidelv.github.io/cw-ops-desk/inventory-onhand.html",
      "tag": "Ops Hub"
     }
    ]
   },
   {
    "sub": "Supplies",
    "items": [
     {
      "label": "Supplies Needed Reports",
      "href": "records.html?s=supplies"
     },
     {
      "label": "EnvirOx Orders",
      "href": "records.html?s=envirox"
     },
     {
      "label": "Order More EnvirOx",
      "href": "https://citywidelv.github.io/cw-ops-desk/envirox.html",
      "tag": "Ops Hub"
     }
    ]
   },
   {
    "sub": "Prices and catalogs",
    "items": [
     {
      "label": "Vendor Shop Catalog and Prices",
      "href": "sheet.html?b=shop",
      "tag": "Sheet"
     },
     {
      "label": "EnvirOx Catalog and Pricing",
      "href": "sheet.html?b=supply",
      "tag": "Sheet"
     },
     {
      "label": "Building Supplies List",
      "href": "https://citywidelv.github.io/cw-vendor-hub/building-supplies.html",
      "tag": "Vendor Hub"
     }
    ]
   },
   {
    "sub": "Suppliers",
    "items": [
     {
      "label": "Brady Industries",
      "href": "https://www.bradyindustries.com/",
      "tag": "Site"
     },
     {
      "label": "Staples Advantage",
      "href": "https://www.staplesadvantage.com/",
      "tag": "Site"
     },
     {
      "label": "HD Supply Solutions",
      "href": "https://hdsupplysolutions.com/",
      "tag": "Site"
     },
     {
      "label": "Amazon Business",
      "href": "https://www.amazon.com/business",
      "tag": "Site"
     },
     {
      "label": "City Wide Company Store",
      "href": "https://shopcitywide.mybrightsites.com/",
      "tag": "Site"
     },
     {
      "label": "Order CW Merch",
      "href": "https://cwlv.printful.me/",
      "tag": "Site"
     }
    ]
   }
  ]
 },
 {
  "label": "Accounts and Postings",
  "icon": "board",
  "page": "accounts",
  "items": [
   {
    "sub": "Opportunity wall",
    "items": [
     {
      "label": "Opportunity Postings",
      "href": "records.html?s=postings"
     },
     {
      "label": "Vendor Responses",
      "href": "records.html?s=responses"
     },
     {
      "label": "Post a New Opportunity",
      "href": "https://citywidelv.github.io/cw-ops-desk/post.html",
      "tag": "Ops Hub"
     }
    ]
   },
   {
    "sub": "Accounts",
    "items": [
     {
      "label": "Account FSM and CRM Upload",
      "href": "account-fsm.html"
     },
     {
      "label": "Account Directory",
      "href": "accounts.html"
     }
    ]
   },
   {
    "sub": "Exhibit A",
    "items": [
     {
      "label": "Create an Exhibit A",
      "href": "https://citywidelv.github.io/cw-ops-desk/create-exhibit-a.html",
      "tag": "Ops Hub"
     },
     {
      "label": "Exhibit A Requests",
      "href": "https://app.asana.com/1/13140959242873/project/1211502025570262",
      "tag": "Asana"
     }
    ]
   }
  ]
 },
 {
  "label": "Account Changes",
  "icon": "sheet",
  "page": "act",
  "hidden": true,
  "items": [
   {
    "label": "ACT and Ledger Documents",
    "href": "act-document.html",
    "tag": "Hub"
   },
   {
    "label": "Accounting Queue",
    "href": "accounting-queue.html",
    "tag": "Hub"
   },
   {
    "label": "Log an Account Change",
    "href": "https://citywidelv.github.io/cw-ops-desk/act-entry.html",
    "tag": "Ops Hub"
   },
   {
    "ghead": "Directories"
   },
   {
    "label": "Account Directory",
    "href": "accounts.html",
    "tag": "Hub"
   },
   {
    "label": "Active Vendors",
    "href": "https://citywidelv.github.io/cw-ops-desk/vendors.html#/lv/janitorial",
    "tag": "Ops Hub"
   },
   {
    "ghead": "Records"
   },
   {
    "label": "CW Account Changes",
    "href": "https://docs.google.com/spreadsheets/d/1IqSFi5gNL1YyDYqFxr2m3KNpILzz27XIvs_hC86MOhI/edit",
    "tag": "Sheet"
   },
   {
    "label": "Load the Excel History",
    "href": "act-import.html",
    "tag": "Hub"
   }
  ]
 },
 {
  "label": "Team and Reports",
  "icon": "home",
  "page": "emails",
  "items": [
   {
    "sub": "Team",
    "items": [
     {
      "label": "Team Roster",
      "href": "records.html?s=staff"
     },
     {
      "label": "Team Emails by Position",
      "href": "team-emails.html"
     },
     {
      "label": "Office Management Board",
      "href": "https://app.asana.com/1/13140959242873/project/1211522761691094",
      "tag": "Asana"
     },
     {
      "label": "Business Ops Team",
      "href": "https://app.asana.com/0/1211434492126259/overview",
      "tag": "Asana"
     },
     {
      "label": "All Asana Boards",
      "href": "asana.html"
     }
    ]
   },
   {
    "sub": "Power BI",
    "items": [
     {
      "label": "Reports and Targets",
      "href": "powerbi.html"
     },
     {
      "label": "FSM and Director Reports",
      "href": "https://citywidelv.github.io/cw-ops-desk/powerbi.html",
      "tag": "Ops Hub"
     },
     {
      "label": "Sales Reports",
      "href": "https://citywidelv.github.io/sales-hub/powerbi.html",
      "tag": "Sales Hub"
     }
    ]
   },
   {
    "sub": "Systems",
    "items": [
     {
      "label": "ADP TotalSource",
      "href": "https://workforcenow.adp.com/",
      "tag": "Site"
     },
     {
      "label": "CW Sales CRM",
      "href": "https://gocitywide.crm.dynamics.com/main.aspx",
      "tag": "Site"
     },
     {
      "label": "Microsoft Bookings",
      "href": "https://bookings.cloud.microsoft/bookings/homepage",
      "tag": "Site"
     },
     {
      "label": "Slack",
      "href": "https://slack.com/signin",
      "tag": "Site"
     },
     {
      "label": "Jotform",
      "href": "https://www.jotform.com/myforms/",
      "tag": "Site"
     }
    ]
   },
   {
    "sub": "Site",
    "items": [
     {
      "label": "Site Admin",
      "href": "site-admin.html"
     },
     {
      "label": "Ops Admin Desk and Google Sheets",
      "href": "desk.html"
     }
    ]
   }
  ]
 }
];

/* Site Admin (2026-09-13): nav.js publishes window.CW_NAV; the MENU above stays as the fallback. */
if(window.CWNav){ var __m = CWNav.menuFor("admin"); if(__m) MENU = __m; }

function isExternal(href){ return /^https?:/.test(href) && href.indexOf("citywidelv.github.io") < 0; }

/* Nov 21 2026: the header and menu bar follow the Ops Hub. Each menu opens as one panel with
   its groups side by side, so every tool is named and one click away. The menu buttons say
   open or closed (aria-expanded), Escape closes and returns focus, and a search box in the
   header finds any tool by name ("/" jumps to it). The menu data contract is unchanged:
   MENU and nav.js CW_NAV keep the shape TOP > { sub, items } | { ghead } | LEAF. */
var SALES = "https://citywidelv.github.io/sales-hub/";
var HUBS = [["Nevada Team Portal", PORTAL], ["Ops Hub", OPS], ["Sales Hub", SALES], ["Vendor Hub", VS]];
ICONS.chev = '<path d="M6 9l6 6 6-6"/>';
/* Extra words people type that are not in a tool's name. Keyed by the menu label. */
var FIND = {
  "Review and Record Results":"background check bg clear", "Add a Person":"background check bg crew", "Background Check Requests":"bg badge",
  "Send Vendor Notices":"background check bg", "Vendor Request Page":"background check bg badge", "Verified First":"background check bg",
  "Request Log and Status":"coi certificate insurance", "New COI Request":"certificate insurance", "InsurLink":"coi certificate insurance usi",
  "Vendor COIs Coming In":"certificate insurance", "Uniform Orders":"bennett apparel shirts", "Vendor Shop Orders":"apparel uniform picked up",
  "Employee Uniform Request":"shirts apparel", "Office Inventory":"stock on hand", "Supplies Needed Reports":"building", "EnvirOx Orders":"chemical",
  "Order More EnvirOx":"chemical", "EnvirOx Catalog and Pricing":"chemical prices", "Opportunity Postings":"wall pay filled", "Vendor Responses":"wall quotes",
  "Post a New Opportunity":"wall", "Account FSM and CRM Upload":"building customer", "Account Directory":"customer building", "Team Roster":"staff employees fsm",
  "ADP TotalSource":"payroll hr", "CW Sales CRM":"dynamics", "Jotform":"forms", "Site Admin":"menus lists switches", "Ops Admin Desk and Google Sheets":"sheet spreadsheet records",
  "Do Not Email or Remove":"block unsubscribe dne", "Add a Vendor of the Month":"goat plate", "Winners and Plates":"goat nominations vendor of the month",
  "Shop Codes and Certificates":"coupon", "Northern Nevada Directory":"reno vendors", "Las Vegas Directory":"vendors", "Add a Vendor":"new",
  "Reports and Targets":"power bi", "FSM and Director Reports":"power bi", "Sales Reports":"power bi", "Vendor Profile":"lookup record"
};
function navLeaves(list){
  var out = [];
  (list || []).forEach(function(it){
    if(!it || it.hidden || it.ghead) return;
    if(it.sub || it.items) out = out.concat(navLeaves(it.items));
    else if(it.href) out.push(it);
  });
  return out;
}
function menuGroups(m){
  var groups = [], loose = { title: m.label, items: [] }, cur = null;
  (m.items || []).forEach(function(it){
    if(!it || it.hidden) return;
    if(it.ghead){ cur = { title: it.ghead, items: [] }; groups.push(cur); }
    else if(it.sub || it.items){ groups.push({ title: it.sub || it.label, items: navLeaves(it.items) }); cur = null; }
    else if(it.href){ (cur || loose).items.push(it); }
  });
  if(loose.items.length) groups.unshift(loose);
  return groups.filter(function(g){ return g.items.length; });
}
function menuLink(it){
  var tgt = isExternal(it.href) ? ' target="_blank" rel="noopener"' : '';
  return '<a href="' + esc(it.href) + '"' + tgt + '>' + esc(it.label) + (it.tag ? '<span class="tag">' + esc(it.tag) + '</span>' : '') + '</a>';
}
/* Which menu holds the page that is open. A full match (file and ?s= or ?b=) beats a file match. */
function hereScore(href){
  if(!href || /^https?:/.test(href)) return 0;
  var file = location.pathname.split("/").pop() || "index.html";
  var parts = href.split("#")[0].split("?");
  if((parts[0] || "index.html") !== file) return 0;
  return (parts[1] && location.search === "?" + parts[1]) ? 2 : 1;
}
var SEARCH_INDEX = [], SEARCH_SEL = -1;
function renderHeader(page){
  var h = document.getElementById("adminhead");
  if(!h) return;
  var row = '<a class="nbtn' + (page === "home" ? ' here' : '') + '" href="index.html">Home</a>', panels = "";
  var best = -1, bestScore = 0;
  SEARCH_INDEX = [];
  MENU.forEach(function(m, mi){
    if(!m || m.hidden) return;                       // hidden:true hides a whole menu without deleting it
    var groups = menuGroups(m);
    if(!groups.length) return;
    groups.forEach(function(g){
      g.items.forEach(function(x){
        var s = hereScore(x.href);
        if(s > bestScore){ bestScore = s; best = mi; }
        SEARCH_INDEX.push({ label:x.label, href:x.href, path:m.label + ", " + g.title,
          hay:(x.label + " " + g.title + " " + m.label + " " + (x.tag || "") + " " + (FIND[x.label] || "")).toLowerCase() });
      });
    });
    row += '<button class="nbtn" type="button" aria-expanded="false" aria-controls="dd-' + mi + '" data-dd="' + mi + '">' + esc(m.label) + icon("chev", 12) + '</button>';
    panels += '<div class="npanel" id="dd-' + mi + '" hidden><div class="npin">' + groups.map(function(g){
      return '<div><h3>' + esc(g.title) + '</h3>' + g.items.map(menuLink).join("") + '</div>';
    }).join("") + '</div></div>';
  });
  HUBS.forEach(function(x){ SEARCH_INDEX.push({ label:x[0], href:x[1], path:"Other hubs", hay:(x[0] + " hub").toLowerCase() }); });
  h.innerHTML =
    '<div class="bar"><a class="logo" href="index.html"><img src="' + LOGO + '" alt="City Wide Facility Solutions, Admin Hub home"></a>' +
    '<span class="t">Admin Hub</span>' +
    '<div class="hsearch" role="search"><label class="sr" for="admsearch">Find an Admin Hub tool</label>' + icon("search", 16) +
      '<input id="admsearch" type="search" placeholder="Find a tool or a page" autocomplete="off" role="combobox" aria-expanded="false" aria-controls="admresults" aria-autocomplete="list">' +
      '<button class="x" id="admsearchx" type="button" aria-label="Clear search">' + icon("x", 14) + '</button><kbd aria-hidden="true">/</kbd>' +
      '<div class="spanel" id="admsearchzone" hidden><div id="admresults" role="listbox" aria-label="Search results"></div>' +
      '<div class="noresults" id="admnores" hidden><b>No tool matches that.</b>Try one word, like uniform, COI, roster or postings.</div></div></div>' +
    '<div class="hubsw"><button class="out" id="hubsbtn" type="button" aria-expanded="false" aria-controls="hubsmenu" aria-label="Other hubs"><span class="hw">Other hubs</span><span class="hn">Hubs</span>' + icon("chev", 12) + '</button>' +
      '<div class="hubsmenu" id="hubsmenu" hidden>' + HUBS.map(function(x){ return '<a href="' + esc(x[1]) + '">' + esc(x[0]) + '</a>'; }).join("") + '</div></div>' +
    '<a class="out" id="adminsignout" href="#">Sign out</a></div>' +
    '<nav class="mainnav" aria-label="Admin Hub menu"><div class="nav-in" id="mainnav">' + row + '</div><span class="navfade" aria-hidden="true"></span><div id="navpanels">' + panels + '</div></nav>';
  if(best >= 0 && page !== "home"){ var hb = h.querySelector('.nbtn[data-dd="' + best + '"]'); if(hb) hb.classList.add("here"); }

  document.getElementById("mainnav").onclick = function(e){
    var btn = e.target.closest ? e.target.closest(".nbtn[data-dd]") : null;
    if(!btn) return;
    var was = btn.getAttribute("aria-expanded") === "true";
    closeMenus();
    if(!was){ btn.setAttribute("aria-expanded", "true"); document.getElementById("dd-" + btn.getAttribute("data-dd")).hidden = false; }
  };
  var hubsBtn = document.getElementById("hubsbtn");
  hubsBtn.addEventListener("click", function(){
    var was = hubsBtn.getAttribute("aria-expanded") === "true";
    closeMenus();
    if(!was){ hubsBtn.setAttribute("aria-expanded", "true"); document.getElementById("hubsmenu").hidden = false; }
  });
  document.getElementById("adminsignout").addEventListener("click", function(e){
    e.preventDefault();
    if(window.CWAuth) CWAuth.signOut(); else location.reload();
  });

  var box = document.getElementById("admsearch");
  box.addEventListener("input", applySearch);
  box.addEventListener("focus", function(){ if(box.value.trim()) applySearch(); });
  box.addEventListener("keydown", function(e){
    if(e.key === "ArrowDown"){ e.preventDefault(); searchMove(1); }
    else if(e.key === "ArrowUp"){ e.preventDefault(); searchMove(-1); }
    else if(e.key === "Enter"){ var o = document.querySelector('#admresults .srow[aria-selected="true"]'); if(o){ e.preventDefault(); o.click(); } }
    else if(e.key === "Escape"){ e.stopPropagation(); box.value = ""; applySearch(); }
  });
  document.getElementById("admsearchx").addEventListener("click", function(){ box.value = ""; applySearch(); box.focus(); });

  document.addEventListener("click", function(e){
    var t = e.target;
    if(!t || !t.closest) return;
    if(!t.closest("nav.mainnav") && !t.closest(".hubsw")) closeMenus();
    if(!t.closest(".hsearch")) searchClose();
  });
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){ closeMenus(true); return; }
    var a = document.activeElement, tag = a ? a.tagName : "";
    if(e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey && tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT" && !(a && a.isContentEditable)){
      e.preventDefault(); box.focus();
    }
  });
  window.addEventListener("resize", function(){ closeMenus(); });
}
function closeMenus(focusBack){
  document.querySelectorAll('#adminhead [aria-expanded="true"]').forEach(function(b){
    if(b.id === "admsearch") return;
    b.setAttribute("aria-expanded", "false");
    var p = document.getElementById(b.getAttribute("aria-controls")); if(p) p.hidden = true;
    if(focusBack) b.focus();
  });
}
function searchClose(){
  var z = document.getElementById("admsearchzone"); if(!z) return;
  z.hidden = true;
  document.getElementById("admsearch").setAttribute("aria-expanded", "false");
}
function applySearch(){
  var box = document.getElementById("admsearch");
  var q = (box.value || "").toLowerCase().trim();
  document.getElementById("admsearchx").classList.toggle("show", !!q);
  if(!q){ searchClose(); return; }
  closeMenus();
  var words = q.split(/\s+/).filter(Boolean);
  var hits = SEARCH_INDEX.filter(function(x){ return words.every(function(w){ return x.hay.indexOf(w) >= 0; }); });
  hits.sort(function(a, b){ return (a.label.toLowerCase().indexOf(words[0]) < 0) - (b.label.toLowerCase().indexOf(words[0]) < 0); });
  hits = hits.slice(0, 12);
  document.getElementById("admresults").innerHTML = hits.map(function(x, i){
    var tgt = isExternal(x.href) ? ' target="_blank" rel="noopener"' : '';
    return '<a class="srow" role="option" id="admopt' + i + '" aria-selected="' + (i === 0) + '" href="' + esc(x.href) + '"' + tgt + '>' + esc(x.label) + '<span class="path">' + esc(x.path) + '</span></a>';
  }).join("");
  SEARCH_SEL = hits.length ? 0 : -1;
  document.getElementById("admnores").hidden = !!hits.length;
  document.getElementById("admsearchzone").hidden = false;
  box.setAttribute("aria-expanded", "true");
  if(hits.length) box.setAttribute("aria-activedescendant", "admopt0"); else box.removeAttribute("aria-activedescendant");
}
function searchMove(d){
  var opts = document.querySelectorAll("#admresults .srow"); if(!opts.length) return;
  SEARCH_SEL = (SEARCH_SEL + d + opts.length) % opts.length;
  opts.forEach(function(o, i){ o.setAttribute("aria-selected", i === SEARCH_SEL); });
  if(opts[SEARCH_SEL].scrollIntoView) opts[SEARCH_SEL].scrollIntoView({ block:"nearest" });
  document.getElementById("admsearch").setAttribute("aria-activedescendant", "admopt" + SEARCH_SEL);
}

/* ---------- webhook ---------- */
var PASS = "";
function api(payload){
  payload = payload || {};
  payload.passcode = PASS;
  return fetch(WEBHOOK, { method:"POST", headers:{"Content-Type":"text/plain"}, body: JSON.stringify(payload) })
    .then(function(r){ return r.json(); })
    .then(function(r){
      if(r && r.ok === false && /passcode/i.test(r.error || "") && window.CWAuth && !isHubPage()){ CWAuth.locked("admin", r.error); }
      return r;
    });
}

/* ---------- toast ---------- */
var toastTimer = null;
function toast(msg, kind){
  var t = document.getElementById("toast");
  if(!t){ t = document.createElement("div"); t.id = "toast"; t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg; t.className = "toast show" + (kind ? " " + kind : "");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ t.className = "toast"; }, kind === "err" ? 6000 : 3200);
}

/* ---------- gate ---------- */
function gateHtml(){
  return '<div class="box"><img src="' + LOGO + '" alt="City Wide Facility Solutions">' +
    '<h1>Admin Hub</h1>' +
    '<p id="gnote">Internal team access. Enter the team passcode. This browser stays signed in.</p>' +
    '<label class="sr" for="pc">Team passcode</label><input type="password" id="pc" placeholder="Team passcode" autocomplete="current-password" autofocus>' +
    '<button id="enter">Enter</button><div class="err" id="gerr"></div>' +
    '<div class="note">Ask TJ if you do not have the passcode.</div>' +
    '<a class="backlink" href="' + PORTAL + '">&larr; Back to the Nevada Team Portal</a></div>';
}
/* One unlock per device (cw-auth.js, shared by every internal page on this origin).
   The hub page keeps the passcode box. Sub pages never show one: without a cached
   passcode they bounce to the hub gate with ?next= and come straight back. A rotated
   passcode is rejected by the server on the next call, which clears the cache and
   bounces the same way. Sep 15 2026: the separate Admin-only passcode is retired. One
   team passcode unlocks every hub, and the device is remembered for 90 days of no use. */
function isHubPage(){
  var p = location.pathname.replace(/\/+$/, "");
  return /\/cw-admin-hub$/.test(p) || /\/cw-admin-hub\/index\.html$/.test(p);
}
function init(opts){
  opts = opts || {};
  var gate = document.getElementById("gate");
  renderHeader(opts.page);
  function go(r){ if(opts.onReady) opts.onReady(r); }
  if(!window.CWAuth){
    gate.innerHTML = '<div class="box"><h1>Admin Hub</h1><p>The sign-in script did not load. Reload the page.</p></div>';
    return;
  }
  if(isHubPage()){
    gate.innerHTML = gateHtml();
    CWAuth.hubGate({ hub:"admin", kind:"vd_bom_auth", input:"pc", button:"enter", err:"gerr", note:"gnote", gate:"gate", app:"app",
      onUnlock: function(pass, r){ PASS = pass; go(r); },
      onValidated: function(r, pass){ PASS = pass; } });
    return;
  }
  var p = CWAuth.require({ hub:"admin" });
  if(!p) return;
  PASS = p;
  gate.classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
  go(null);
  CWAuth.validate(p, "vd_bom_auth").then(function(res){
    if(res.ok === false){
      var b = CWAuth.getAdmin();
      if(b && b !== p){
        PASS = b;
        CWAuth.validate(b, "vd_bom_auth").then(function(r2){ if(r2.ok === false) CWAuth.locked("admin", "Wrong passcode."); });
      } else CWAuth.locked("admin", "Wrong passcode.");
    }
  });
}

function who(){
  var n = "";
  try{ n = localStorage.getItem(NAMEKEY) || ""; }catch(e){}
  return n;
}
function setWho(n){ try{ localStorage.setItem(NAMEKEY, n); }catch(e){} }

function fmtDate(s){
  if(!s) return "";
  var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(s));
  if(!m) return String(s);
  return ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][Number(m[2]) - 1] + " " + Number(m[3]) + ", " + m[1];
}
function ago(iso){
  if(!iso) return "";
  var d = (Date.now() - new Date(iso).getTime()) / 1000;
  if(d < 90) return "just now";
  if(d < 3600) return Math.round(d / 60) + " min ago";
  if(d < 86400) return Math.round(d / 3600) + " hr ago";
  return Math.round(d / 86400) + " days ago";
}

window.ADMIN = { init:init, api:api, esc:esc, icon:icon, toast:toast, who:who, setWho:setWho, fmtDate:fmtDate, ago:ago,
  MENU:MENU, ASANA_PROJECTS:ASANA_PROJECTS, ASANA_TEAM:ASANA_TEAM, ASANA_TEAM_URL:ASANA_TEAM_URL, asanaUrl:asanaUrl,
  FORMS:FORMS, OPS:OPS, VS:VS, PORTAL:PORTAL, SHEET:SHEET, LOGO:LOGO, isExternal:isExternal,
  pass:function(){ return PASS; } };
})();
