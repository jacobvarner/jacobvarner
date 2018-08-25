$(document).ready(function(){
    $("#menu-link").click(function(){
    	var list = $('ul#nav-elements');
		var listItems = list.children('li.nav-element');
		list.append(listItems.get().reverse());

        $("#nav-elements").toggle();
        $(".nav-element").toggle();
        $("span.bar").toggleClass("is-open", 1, "ease-in-out");
    });
});