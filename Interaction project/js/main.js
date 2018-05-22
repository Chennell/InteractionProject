/*****This is the menu******/
//Here we set the variable Opened to flase
var opened = false;
var submenu = false;

//Waits for the document to be ready
$(document).ready(function(){
    
    
    //This is the function that open and closes the menu
	$('.hamburger').click(function(mainMenu){
        mainMenu.preventDefault();
        
        //If the opened is true and you click the cross, the dropdown should slide up and in the less file the hamburger changes from cross to hamburger, we set a background color and opened to false
        //The else statment tells us the oposite
        if(opened){
            $("nav").addClass("closing");
            $("nav").removeClass("slidedown");
            opened = false;
            
        } else {
            $("nav").addClass("slidedown");
            $("nav").removeClass("closing");
            opened = true;
            
        }
        //Here we add a toggleClass to all the children in hamburger, wich is all the lines, so that it will responed to the styling making it to a cross
		$('.hamburger').children().toggleClass('open');
	});
    

    //For the dropdown menu under education
    $('#menu-item-education').click(function(e){
        e.preventDefault();
        
        $(".main-menu").toggleClass("open-submenu");

	});
});
