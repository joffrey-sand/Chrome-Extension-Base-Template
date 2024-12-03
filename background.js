// background.js
// Author:
// Author URI: https://
// Author Github URI: https://www.github.com/
// Project Repository URI: https://github.com/
// Description: Handles all the browser level activities (e.g. tab management, etc.)
// License: MIT
function a() {
  console.log("My extension ID:", chrome.runtime.id);
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 100,
        priority: 2,
        action: { type: "block" },
        condition: {
          urlFilter: "youtube.com",
          resourceTypes: ["main_frame", "sub_frame", "xmlhttprequest"],
        },
      },
      // {
      //   id: 101,
      //   priority: 1,
      //   action: {
      //     type: "redirect",
      //     redirect: { url: "https://classroom.google.com/" },
      //   },
      //   condition: {
      //     urlFilter: "||youtube.com",
      //     domains: [
      //       "www.youtube.com",
      //       "m.youtube.com",
      //       "youtube.googleapis.com",
      //     ],
      //     resourceTypes: ["main_frame"],
      //   },
      // },
    ],
    removeRuleIds: [100, 101],
  });
}
a();
