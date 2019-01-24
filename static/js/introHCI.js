'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


function projectClick(e) {
	e.preventDefault();
	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
    	$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
		$(description).fadeOut();
		$(description).fadeIn();
    }
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Pound, not Hashtag");
		$("#testjs").text("Please wait...");
		$("#testjs").toggleClass("active");
	});
	$("a.thumbnail").click(projectClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}