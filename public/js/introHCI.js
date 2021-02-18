'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $('[class^=like]').click(sendGAInfo); //click handler
	// $('.like').click(sendGAInfo); //click handler
}

function sendGAInfo(e) {
    console.log("Hit like");
    ga("send", "event", 'like', 'click');
}