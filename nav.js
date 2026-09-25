/* nav.js for the Admin Hub. Seeded from the page menu on 2026-09-13 by Claude.
   The Site Admin hub (cw-admin-hub/site-admin.html) republishes this file; do not edit by hand.
   The page keeps its own MENU as a fallback if this file is missing or malformed.
   Edited by hand 2026-09-25 (menu cleanup: one home per tool, short labels with tag chips; Account Changes still hidden): before the next Site Admin publish, click Import live menu. */
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
     "label": "Review and Record Results",
     "href": "background-checks.html",
     "tag": "Hub"
    },
    {
     "label": "Add a Person",
     "href": "background-checks.html#add",
     "tag": "Hub"
    },
    {
     "label": "Background Check Requests",
     "href": "onboarding.html#bc",
     "tag": "Hub"
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
     "label": "Background Checks",
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
   "label": "COI Requests",
   "icon": "sheet",
   "page": "coi",
   "items": [
    {
     "label": "Request Log and Status",
     "href": "coi-log.html",
     "tag": "Hub"
    },
    {
     "label": "New COI Request",
     "href": "https://citywidelv.github.io/cw-ops-desk/coi-request.html",
     "tag": "Ops Hub"
    },
    {
     "label": "Vendor COIs Coming In",
     "href": "https://citywidelv.github.io/cw-ops-desk/insurance.html",
     "tag": "Ops Hub"
    },
    {
     "label": "COI Requests",
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
   "label": "Vendors",
   "icon": "clip",
   "page": "vendors",
   "items": [
    {
     "label": "Vendor Profile",
     "href": "vendor-profile.html",
     "tag": "Hub"
    },
    {
     "label": "Vendor Activity",
     "href": "vendor-activity.html",
     "tag": "Hub"
    },
    {
     "label": "Vendor Email",
     "href": "https://citywidelv.github.io/cw-ops-desk/vendor-email.html?from=admin",
     "tag": "Ops Hub"
    },
    {
     "sub": "Onboarding",
     "items": [
      {
       "label": "Onboarding Desk",
       "href": "onboarding.html",
       "tag": "Hub"
      },
      {
       "label": "Start Onboarding",
       "href": "onboarding.html#start",
       "tag": "Hub"
      },
      {
       "label": "Old Asana Boards",
       "href": "asana.html",
       "tag": "Hub"
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
       "label": "New Vendor Steps",
       "href": "https://citywidelv.github.io/cw-vendor-hub/new-vendors.html",
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
       "label": "Winners and Plates",
       "href": "recognition.html",
       "tag": "Hub"
      },
      {
       "label": "Shop Codes and Certificates",
       "href": "recognition.html#coupons",
       "tag": "Hub"
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
    },
    {
     "sub": "Directory",
     "items": [
      {
       "label": "Edit a Vendor Record",
       "href": "records.html?s=vendors_lv",
       "tag": "Hub"
      },
      {
       "label": "Add a Vendor",
       "href": "https://citywidelv.github.io/cw-ops-desk/vendor-add.html",
       "tag": "Ops Hub"
      },
      {
       "label": "Do Not Email or Remove",
       "href": "https://citywidelv.github.io/cw-ops-desk/vendor-dne.html?from=admin",
       "tag": "Ops Hub"
      },
      {
       "label": "Las Vegas",
       "href": "https://citywidelv.github.io/cw-ops-desk/vendors.html#/lv",
       "tag": "Ops Hub"
      },
      {
       "label": "Northern Nevada",
       "href": "https://citywidelv.github.io/cw-ops-desk/vendors.html#/nnv",
       "tag": "Ops Hub"
      }
     ]
    }
   ]
  },
  {
   "label": "Asana Boards",
   "icon": "asana",
   "page": "asana",
   "items": [
    {
     "label": "All Boards, Live",
     "href": "asana.html",
     "tag": "Hub"
    },
    {
     "label": "Business Ops Team",
     "href": "https://app.asana.com/0/1211434492126259/overview",
     "tag": "Asana"
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
     "label": "Office Management",
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
     "label": "Ops Admin Desk",
     "href": "desk.html",
     "tag": "Hub"
    },
    {
     "label": "Account FSM",
     "href": "account-fsm.html",
     "tag": "Hub"
    },
    {
     "label": "Team Emails by Position",
     "href": "team-emails.html",
     "tag": "Hub"
    },
    {
     "label": "Site Admin",
     "href": "site-admin.html",
     "tag": "Hub"
    },
    {
     "sub": "Power BI",
     "items": [
      {
       "label": "Reports and Targets",
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
       "label": "Employee Uniforms",
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
       "label": "Order More EnvirOx",
       "href": "https://citywidelv.github.io/cw-ops-desk/envirox.html",
       "tag": "Ops Hub"
      },
      {
       "label": "Brady Industries",
       "href": "https://www.bradyindustries.com/"
      },
      {
       "label": "Staples Advantage",
       "href": "https://www.staplesadvantage.com/"
      },
      {
       "label": "HD Supply Solutions",
       "href": "https://hdsupplysolutions.com/"
      },
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
