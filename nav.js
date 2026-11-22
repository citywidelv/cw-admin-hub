/* nav.js for the Admin Hub. Seeded from the page menu on 2026-09-13 by Claude.
   The Site Admin hub (cw-admin-hub/site-admin.html) republishes this file; do not edit by hand.
   The page keeps its own MENU as a fallback if this file is missing or malformed.
   Edited by hand 2026-11-21 (menus rebuilt by job: Vendors, Compliance, Orders and Supplies, Accounts and Postings, Team and Reports; every Ops Admin Desk tool now has a menu entry; the four hub links moved to the Other hubs button in the header; Account Changes still hidden): before the next Site Admin publish, click Import live menu. Earlier hand edits 2026-10-01 and 2026-09-25. */
window.CW_NAV = {
 "hub": "admin",
 "label": "Admin Hub",
 "menu": [
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
 ]
};
