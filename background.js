chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.startsWith('https://chrome.google.com/webstore') && !tab.url.startsWith('chrome://newtab') && !tab.url.startsWith('chrome://')) {
      chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['content.js']
      });
  }
});
