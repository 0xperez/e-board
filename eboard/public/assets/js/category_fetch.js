var catMap = {

	"lectures" : "lectures",
	"items for sale" : "itemsale",
	"for rent" : "rentals",
	"events" : "events",
	"newest" : "newest",
	"jobs" : "jobs",
	"other" : "others"

}

function addClickListeners(){


	$(".bottomLI").click(function(){
		let catName = $(this).find("a").text().trim().toLowerCase();
		$("<input>").attr({
    		type: "hidden",
    		name: catMap[catName]
		}).appendTo("#catForm");

		$("#catForm").submit();

	})



}

