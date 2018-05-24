/*****This is the menu******/
//Here we set the variable Opened to flase
//var submenu = false;

//Waits for the document to be ready
$(document).ready(function(){
    
    
    //This is the function that open and closes the menu
	$('.hamburger').click(function(mainMenu){
        mainMenu.preventDefault();
        $("nav").toggleClass("slidedown");
        //Here we add a toggleClass to all the children in hamburger, wich is all the lines, so that it will responed to the styling making it to a cross
		$('.hamburger').children().toggleClass('open');
	});
    

  
    //For the dropdown menu under education
    $('.main-menu > li').click(function(e){
        e.preventDefault();

//        $(".main-menu").toggleClass("open-submenu");

        var current = $(".main-menu >li");

        if ($(window).width() < 640) {
            current.removeClass("open-submenu").find("ul.submenu");

            var openNew = $ (this).find(".inner-li").outerHeight();
            $(this).addClass("open-submenu").find("ul.submenu")
        }else{
            current.removeClass("open-submenu");
        }

    });
    
    
    //Will this function make it possible to click the submenu? we have to wait to see. 
//        $(".main-menu > li >a").on("click", function(clickItem) {
//        return false;
//        e.stopPropagation();
//
//    });
});
