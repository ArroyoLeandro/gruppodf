
$(document).ready(function(){

    'use strict';
   //Scrollspy
   $('body').scrollspy({target: ".navbar-nav", offset:67});

   // Add smooth scrolling to all links
   $(".navbar-nav a").on('click', function(event) {

       // Make sure this.hash has a value before overriding default behavior
       if (this.hash !== "") {
       // Prevent default anchor click behavior
       event.preventDefault();

       // Store hash
       var hash = this.hash;

       // Using jQuery's animate() method to add smooth page scroll
       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
       $('html, body').animate({
           scrollTop: $(hash).offset().top
       }, 200, function(){

           // Add hash (#) to URL when done scrolling (default click behavior)
           window.location.hash = hash;
       });
           // Hide navbar on mobile
       $(".navbar-collapse").collapse("hide");
       } // End if
   });

  /*====================================
			Header Fixed
======================================*/
window.onscroll=function(){
    const docScrollTop=document.documentElement.scrollTop;

    if(window.innerWidth>991){
        if(docScrollTop>100){
            document.querySelector("header").classList.add("fixed")
        }
        else {
            document.querySelector("header").classList.remove("fixed")
        }
    }
}

});


