chrome.tabs.onUpdated.addListener((tabId, tab) => {

    if (tab.url && tab.url.includes("youtube.com/watch")) {
      const queryParameters = tab.url.split("?")[1];
      const urlParameters = new URLSearchParams(queryParameters);
  // sendMessage , tabId is decided to which it has to be sent
  console.log(urlParameters);
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        videoId: urlParameters.get("v"),
      });
    }
  });
  
  // chrome.tabs: refers to the chrome extension API
  // onUpdated: An event that fires whenever a tab is updated. This includes changes to the tab’s URL, status (like loading or complete), or other properties.
//   (tabId, tab): The callback function receives two arguments:
// tabId: The unique identifier for the updated tab.
// tab: An object representing the updated tab, containing properties like url, status, etc.
// URLSearchParams: A built-in JavaScript object that parses a query string into key-value pairs.
// Example: If queryParameters is v=12345&list=67890, urlParameters becomes an object that allows easy access to the parameters (v, list).