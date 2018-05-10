$(document).ready(function(){
	$(".spoyler").click(function(){
		$(this).find("i").hasClass("fa-plus")?$(this).find("i").removeClass("fa-plus").addClass("fa-minus"):$(this).find("i").removeClass("fa-minus").addClass("fa-plus");
		$(this).next(".spoyler_body").toggle(300);
	});
});