chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    "id": "find-my-lyrics",
    "title": "Find selected lyrics",
    "contexts": ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  chrome.windows.create({ focused: true, url: chrome.runtime.getURL("popup.html"), type: "popup", height : 800, width : 500 });
  chrome.storage.local.set({selection: info.selectionText}, function () {})
});
