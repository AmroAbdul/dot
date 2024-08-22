function onClickHandler(info, tab) {
  if (info.menuItemId == "DictionaryWebSite") {
    let url = 'https://dictionary.ksaa.gov.sa/';
    chrome.tabs.create({url: url, index: tab.index + 1});
  }else {
//    let url = 'https://google.com/search?q=' + info.selectionText;
 
      
    //Add all you functional Logic here
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "SendToDictionaryExt":info.selectionText
        });
    });
  }   
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  // Create one test item for each context type.
  var contexts = ["selection"];
  for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    var title = 'معنى كلمة "'+ '%s' + '"';
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
    
  }
  // Create a parent item and two children.
  chrome.contextMenus.create({"title": "معجم الرياض", "id": "DictionaryWebSite"});
  
});

