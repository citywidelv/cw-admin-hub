/* nav.js for the Admin Hub. Seeded from the page menu on 2026-09-13 by Claude.
   The Site Admin hub (cw-admin-hub/site-admin.html) republishes this file; do not edit by hand.
   The page keeps its own MENU as a fallback if this file is missing or malformed.
   Edited by hand 2026-09-24 (Team & Admin rebuilt as side cascades, Uniform Orders added): before the next Site Admin publish, click Import live menu. */
window.CW_NAV = {
 "hub": "admin",
 "label": "Admin Hub",
 "menu": [
  {
   "label": "Background Checks",
   "icon": "shield",
   "page": "bc",
   "items": [
    {
     "label": "Review & Record Results",
     "href": "background-checks.html",
     "tag": "Hub"
    },
    {
     "label": "Add a Person",
     "href": "background-checks.html#add",
     "tag": "Hub"
    },
    {
     "ghead": "Requests"
    },
    {
     "label": "Requests and crew status (Onboarding desk)",
     "href": "onboarding.html#bc",
     "tag": "Hub"
    },
    {
     "label": "Vendor request page (Vendor Hub)",
     "href": "https://citywidelv.github.io/cw-vendor-hub/background-check.html",
     "tag": "Vendor Hub"
    },
    {
     "label": "Send Vendor Notices",
     "href": "https://citywidelv.github.io/cw-ops-desk/bc-notices.html",
     "tag": "Ops Hub"
    },
    {
     "ghead": "Records"
    },
    {
     "label": "Background Checks on File (Sheet)",
     "href": "https://docs.google.com/spreadsheets/d/1kHRyeQzDsi-bnfE5YpD_KPV17GeD5aJ_5vrDQGU_s-0/edit#gid=12628813",
     "tag": "Sheet"
    },
    {
     "label": "Verified First (portal)",
     "href": "https://portal.verifiedfirst.com/#/dashboard",
     "tag": "Site"
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
     "label": "Accounting Queue (not yet checked off)",
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
     "label": "Active Vendors (Ops Hub)",
     "href": "https://citywidelv.github.io/cw-ops-desk/vendors.html#/lv/janitorial",
     "tag": "Ops Hub"
    },
    {
     "ghead": "Records"
    },
    {
     "label": "CW Account Changes (Sheet)",
     "href": "https://docs.google.com/spreadsheets/d/1IqSFi5gNL1YyDYqFxr2m3KNpILzz27XIvs_hC86MOhI/edit",
     "tag": "Sheet"
    },
    {
     "label": "Load the Excel history (one time)",
     "href": "act-import.html",
     "tag": "Hub"
    }
   ]
  },
  {
   "label": "COI Requests",
   "icon": "sheet",
   "page": "coi",
   "items": [
    {
     "label": "Request Log & Status",
     "href": "coi-log.html",
     "tag": "Hub"
    },
    {
     "label": "New COI Request for a Customer",
     "href": "https://citywidelv.github.io/cw-ops-desk/coi-request.html",
     "tag": "Ops Hub"
    },
    {
     "ghead": "Records"
    },
    {
     "label": "COI Requests (Sheet tab)",
     "href": "https://docs.google.com/spreadsheets/d/1ymbqR7LMvA7sbgZe2Ro5o2dNiXhP08Tn9Hw1b-H5AeQ/edit#gid=1472416765",
     "tag": "Sheet"
    },
    {
     "label": "Vendor COIs Coming In (Ops Hub)",
     "href": "https://citywidelv.github.io/cw-ops-desk/insurance.html",
     "tag": "Ops Hub"
    },
    {
     "ghead": "Broker Portal"
    },
    {
     "label": "InsurLink (Vertafore)",
     "href": "https://insurlink.vertafore.com/end-insured/2260313c6a34459c8a098ede23d21fb7/2094911/overview",
     "tag": "Site"
    }
   ]
  },
  {
   "label": "Vendors",
   "icon": "clip",
   "page": "vendors",
   "items": [
    {
     "label": "Vendor Profile (everything about one vendor)",
     "href": "vendor-profile.html",
     "tag": "Hub"
    },
    {
     "label": "Vendor Activity (what vendors sent or changed)",
     "href": "vendor-activity.html",
     "tag": "Hub"
    },
    {
     "label": "Vendor Email (one place to send)",
     "href": "https://citywidelv.github.io/cw-ops-desk/vendor-email.html?from=admin",
     "tag": "Ops Hub"
    },
    {
     "sub": "Onboarding",
     "items": [
      {
       "label": "Vendor Onboarding desk",
       "href": "onboarding.html",
       "tag": "Hub"
      },
      {
       "label": "Start onboarding for a vendor",
       "href": "onboarding.html#start",
       "tag": "Hub"
      },
      {
       "label": "Background check requests",
       "href": "onboarding.html#bc",
       "tag": "Hub"
      },
      {
       "ghead": "Old boards, read only"
      },
      {
       "label": "LV Onboarding - Janitorial ICs",
       "href": "https://app.asana.com/1/13140959242873/project/1211434492126262",
       "tag": "Asana"
      },
      {
       "label": "LV Onboarding - Other Services ICs",
       "href": "https://app.asana.com/1/13140959242873/project/1211502025994506",
       "tag": "Asana"
      },
      {
       "label": "NNV Onboarding - Janitorial ICs",
       "href": "https://app.asana.com/1/13140959242873/project/1211502025994509",
       "tag": "Asana"
      },
      {
       "label": "NNV Onboarding - Other Services ICs",
       "href": "https://app.asana.com/1/13140959242873/project/1211502025994512",
       "tag": "Asana"
      },
      {
       "label": "IC Background Checks",
       "href": "https://app.asana.com/1/13140959242873/project/1211554681536533",
       "tag": "Asana"
      },
      {
       "label": "NNV IC Transfers",
       "href": "https://app.asana.com/1/13140959242873/project/1212873397063867",
       "tag": "Asana"
      }
     ]
    },
    {
     "sub": "New Vendors",
     "items": [
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
       "label": "New Vendor Steps (Vendor Hub)",
       "href": "https://citywidelv.github.io/cw-vendor-hub/new-vendors.html",
       "tag": "Vendor Hub"
      },
      {
       "label": "Background Check and Name Badge",
       "href": "https://citywidelv.github.io/cw-vendor-hub/background-check.html",
       "tag": "Vendor Hub"
      }
     ]
    },
    {
     "sub": "Vendor of the Month",
     "items": [
      {
       "label": "Add a Vendor of the Month",
       "href": "recognition.html#add",
       "tag": "Hub"
      },
      {
       "label": "Nominations & Plates",
       "href": "recognition.html",
       "tag": "Hub"
      },
      {
       "label": "Shop Codes & Certificates",
       "href": "recognition.html#coupons",
       "tag": "Hub"
      },
      {
       "label": "Nominate a Vendor or G.O.A.T.",
       "href": "https://citywidelv.github.io/cw-ops-desk/nominate.html",
       "tag": "Ops Hub"
      },
      {
       "label": "The Wall (Vendor Hub)",
       "href": "https://citywidelv.github.io/cw-vendor-hub/#recognition",
       "tag": "Vendor Hub"
      }
     ]
    },
    {
     "ghead": "Directory"
    },
    {
     "label": "Edit a Vendor Record (Desk)",
     "href": "records.html?s=vendors_lv",
     "tag": "Hub"
    },
    {
     "label": "Add a Vendor",
     "href": "https://citywidelv.github.io/cw-ops-desk/vendor-add.html",
     "tag": "Ops Hub"
    },
    {
     "label": "Do Not Email or Remove a Vendor",
     "href": "https://citywidelv.github.io/cw-ops-desk/vendor-dne.html?from=admin",
     "tag": "Ops Hub"
    },
    {
     "label": "Active Vendors (Las Vegas)",
     "href": "https://citywidelv.github.io/cw-ops-desk/vendors.html#/lv/janitorial",
     "tag": "Ops Hub"
    },
    {
     "label": "Active Vendors (Northern Nevada)",
     "href": "https://citywidelv.github.io/cw-ops-desk/vendors.html#/nnv/janitorial",
     "tag": "Ops Hub"
    }
   ]
  },
  {
   "label": "Asana Boards",
   "icon": "asana",
   "page": "asana",
   "items": [
    {
     "label": "All Admin Hub boards, live",
     "href": "asana.html",
     "tag": "Hub"
    },
    {
     "label": "Business Ops team in Asana",
     "href": "https://app.asana.com/0/1211434492126259/overview",
     "tag": "Asana"
    },
    {
     "ghead": "Requests"
    },
    {
     "label": "Exhibit A Requests",
     "href": "https://app.asana.com/1/13140959242873/project/1211502025570262",
     "tag": "Asana"
    },
    {
     "label": "Create an Exhibit A",
     "href": "https://citywidelv.github.io/cw-ops-desk/create-exhibit-a.html",
     "tag": "Ops Hub"
    },
    {
     "ghead": "Office"
    },
    {
     "label": "Office Management board",
     "href": "https://app.asana.com/1/13140959242873/project/1211522761691094",
     "tag": "Asana"
    }
   ]
  },
  {
   "label": "Team & Admin",
   "icon": "home",
   "page": "emails",
   "items": [
    {
     "label": "Uniform Orders",
     "href": "uniform-orders.html",
     "tag": "Hub"
    },
    {
     "sub": "Ops Admin Desk",
     "items": [
      {
       "label": "Desk home (records, one per page)",
       "href": "desk.html",
       "tag": "Hub"
      },
      {
       "label": "Account FSM (CRM upload, who owns each account)",
       "href": "account-fsm.html",
       "tag": "Hub"
      }
     ]
    },
    {
     "sub": "Edit records",
     "items": [
      {
       "ghead": "Opportunity Wall"
      },
      {
       "label": "Opportunity postings",
       "href": "records.html?s=postings",
       "tag": "Hub"
      },
      {
       "label": "Vendor responses",
       "href": "records.html?s=responses",
       "tag": "Hub"
      },
      {
       "ghead": "Supplies"
      },
      {
       "label": "Supplies needed reports",
       "href": "records.html?s=supplies",
       "tag": "Hub"
      },
      {
       "label": "EnvirOx orders",
       "href": "records.html?s=envirox",
       "tag": "Hub"
      },
      {
       "label": "Vendor shop orders",
       "href": "records.html?s=shop",
       "tag": "Hub"
      },
      {
       "label": "Shop catalog and prices (Sheet)",
       "href": "sheet.html?b=shop",
       "tag": "Sheet"
      },
      {
       "ghead": "Vendors and team"
      },
      {
       "label": "Vendors, Las Vegas",
       "href": "records.html?s=vendors_lv",
       "tag": "Hub"
      },
      {
       "label": "Vendors, Northern Nevada",
       "href": "records.html?s=vendors_nnv",
       "tag": "Hub"
      },
      {
       "label": "Team roster",
       "href": "records.html?s=staff",
       "tag": "Hub"
      }
     ]
    },
    {
     "sub": "Power BI",
     "items": [
      {
       "label": "Reports and targets",
       "href": "powerbi.html",
       "tag": "Hub"
      },
      {
       "label": "FSM and Director",
       "href": "https://citywidelv.github.io/cw-ops-desk/powerbi.html",
       "tag": "Ops Hub"
      },
      {
       "label": "Sales",
       "href": "https://citywidelv.github.io/sales-hub/powerbi.html",
       "tag": "Sales Hub"
      }
     ]
    },
    {
     "label": "Team Emails by Position",
     "href": "team-emails.html",
     "tag": "Hub"
    },
    {
     "label": "Site Admin (menus, lists, switches)",
     "href": "site-admin.html",
     "tag": "Hub"
    },
    {
     "sub": "Hubs",
     "items": [
      {
       "label": "Nevada Team Portal",
       "href": "https://citywidelv.github.io/"
      },
      {
       "label": "Ops Hub",
       "href": "https://citywidelv.github.io/cw-ops-desk/"
      },
      {
       "label": "Vendor Hub",
       "href": "https://citywidelv.github.io/cw-vendor-hub/"
      },
      {
       "label": "Sales Hub",
       "href": "https://citywidelv.github.io/sales-hub/"
      }
     ]
    },
    {
     "sub": "HR and Systems",
     "items": [
      {
       "label": "ADP TotalSource",
       "href": "https://workforcenow.adp.com/"
      },
      {
       "label": "CW Sales CRM",
       "href": "https://gocitywide.crm.dynamics.com/main.aspx"
      },
      {
       "label": "Employee Uniforms (request page)",
       "href": "https://citywidelv.github.io/cw-ops-desk/uniforms.html",
       "tag": "Ops Hub"
      },
      {
       "label": "Order CW Merch",
       "href": "https://cwlv.printful.me/"
      }
     ]
    },
    {
     "sub": "Team Apps",
     "items": [
      {
       "label": "Microsoft Bookings",
       "href": "https://bookings.cloud.microsoft/bookings/homepage"
      },
      {
       "label": "Slack",
       "href": "https://slack.com/signin"
      },
      {
       "label": "Jotform",
       "href": "https://www.jotform.com/myforms/"
      }
     ]
    },
    {
     "sub": "Ordering",
     "items": [
      {
       "label": "Amazon Business",
       "href": "https://www.amazon.com/business"
      },
      {
       "label": "City Wide Company Store",
       "href": "https://shopcitywide.mybrightsites.com/"
      }
     ]
    }
   ]
  }
 ]
};
