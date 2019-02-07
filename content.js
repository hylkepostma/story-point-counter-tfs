// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	// console.log("onMessage")
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the total_sp as argument
		selected_rows = document.getElementsByClassName('grid-row-selected')
		total_sp = 0
		for (var i = 0; i < selected_rows.length; i++) { 
			var sp = selected_rows[i].getElementsByClassName("grid-cell")[5].textContent;
			if(sp != null && sp != "" && sp != " "){
				console.log(total_sp + "+" + parseInt(sp))
				total_sp += parseInt(sp);
				console.log("=" + total_sp)
			}
		}
		// alert("Total selected Story Points: " + total_sp);
		console.log("Total selected Story Points: " + total_sp);
        sendResponse(total_sp);
    }
});