// A function to use as callback
function handleResponse(total_sp) {
    // alert("Total selected Story Points: " + total_sp);
    // chrome.browserAction.setBadgeBackgroundColor({ color: [247, 167, 70, 1] });
    chrome.browserAction.setBadgeBackgroundColor({ color: [102, 102, 102, 1] });
    chrome.browserAction.setBadgeText({text: total_sp.toString()});
}

// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener(function (tab) {
	//send a message specifying a callback too
    chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, handleResponse);
    return true;
});
