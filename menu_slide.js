$("#coffe_flip").click(function() {
	$("#coffe_panel").slideDown(1000);
	$("#juice_panel").slideUp(1000);
	$("#tea_panel").slideUp(1000);
	$("#dessert_panel").slideUp(1000);
});

$("#juice_flip").click(function() {
	$("#coffe_panel").slideUp(1000);
	$("#juice_panel").slideDown(1000);
	$("#tea_panel").slideUp(1000);
	$("#dessert_panel").slideUp(1000);
});

$("#tea_flip").click(function() {
	$("#coffe_panel").slideUp(1000);
	$("#juice_panel").slideUp(1000);
	$("#tea_panel").slideDown(1000);
	$("#dessert_panel").slideUp(1000);
});

$("#dessert_flip").click(function() {
	$("#coffe_panel").slideUp(1000);
	$("#juice_panel").slideUp(1000);
	$("#tea_panel").slideUp(1000);
	$("#dessert_panel").slideDown(1000);
});
