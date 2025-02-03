# Chrome-Extension


Build a chrome extension using the new iterations of the web extension platform which is manifest v3

Content scripts for DOM manipulation
UI for extension
Service workers shipment for V2 to V3 

All the browsers like mozilla, firefox, chrome need manifest file for them

Chrome.storage api is used to store things in the user’ s browser for the extension
Chrome.tabs api is used to access the browser’s tab system, so that we can read the tab for the extension


One of the big differences v2 and v3
Use of service workers and the ability to use promises

Service workers?

Service workers are nothing but the javascript files that run separately from the main browser thread. 
This means that your service worker does not have to know the content of the webpage, as it runs separately from the main browser.

However they have the capability to speak to the extension using the extension managing system.

Content scripts are the files that run in the context of the web pages that we are on.


Popup.html decides which file is served as Ui, corresponding file  for this interactivity is served by Popup,js file.
