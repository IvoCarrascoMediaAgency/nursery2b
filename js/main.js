
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("container").style.top = "0";
  } else {
    document.getElementById("container").style.top = "-85px";
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function(){
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('header').addClass('colormenu1');
      $('.menu').addClass('colormenu2');
     
	
		} else {
			$('header').removeClass('colormenu1');
      $('.menu').removeClass('colormenu2');
     
		}
	});
 
});



$('.menu, .colormenu2,.q').on('click', function(){
  $('#nav').toggleClass('mostrarmenu2');
})

$('#nav').on('click', function(){
  $('#nav').removeClass('mostrarmenu2');
})


$('.mostrarmenu2').on('click', function(){
  $('#nav').removeClass('mostrarmenu2');
  // $('#nav').removeClass('mostrarmenu2');

})

$('.ytp-chrome-top').on('click', function(){
  $('#nav').removeClass('mostrarmenu2');
  // $('#nav').removeClass('mostrarmenu2');

})



  

// $('.menu').scroll(function(){
//   $(this).scrollTop().addClass('colormenu3');
// })



// hay que verificar el metodo click
// $(document).ready(function(){
// $('.q').on('click',function(){
//   if( $(this).click()){
//     $('.menu').toggleClass();}
// });


// remover class delnavbar


// $('.menu-burger, .menu-items').on('click', function() {
//   $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
//   $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
// });




// $('.q').on('click', function(){$('.menu, .hamburger .hul').toggleClass().hide();});

// $('.hul').on('click', function(){$('.hul').hide();});




// $('.q').on('click', function(){
//   $('.menu, .hamburger, .hul').toggleClass('animenu');
  
// $('.menu').show(); $('.menu').hide(); $('.menu').show();

// if ('.menu, .hamburger, .hul' == "hide") {
//   document.getElementsByClassName("menu").scroll.display = "block";
// } else {
//   document.getElementsByClassName("menu").scroll.display = "none";
// }

// });




// $(document).ready(function(){
 
//   $(window).scroll(function(){
//     if( $(this).scrollTop() ){
     
//       $('.menu, .humburger, .hul').removeClass('animenu');
      
//     } 
//   });
 
// });


  // $(window).scroll(function(){
  // ($('.q').length).show();

  
 
    
  


// $(window).on('scroll', function(){$('.menu, .hamburger, .hul').show();});




// $('.menu .hamburger .hul').on('click', function(){$('.menu .hamburger .hul').hide();});




/*Main*/

//Modal videos
$(document).ready(function(){


	/* Toggle Video Modal
  -----------------------------------------*/
	function toggle_video_modal() {
	    
	    // Click on video thumbnail or link
	    $(".js-trigger-video-modal").on("click", function(e){
          
          // prevent default behavior for a-tags, button tags, etc. 
	        e.preventDefault();
        
          // Grab the video ID from the element clicked
          var id = $(this).attr('data-youtube-id');

          // Autoplay when the modal appears
          // Note: this is intetnionally disabled on most mobile devices
          // If critical on mobile, then some alternate method is needed
          var autoplay = '?autoplay=1';

          // Don't show the 'Related Videos' view when the video ends
          var related_no = '&rel=0';

          // String the ID and param variables together
          var src = '//www.youtube.com/embed/'+id+autoplay+related_no;
          
          // Pass the YouTube video ID into the iframe template...
          // Set the source on the iframe to match the video ID
          $("#youtube").attr('src', src);
          
          // Add class to the body to visually reveal the modal
          $("body").addClass("show-video-modal noscroll");
	    
      });

	    // Close and Reset the Video Modal
      function close_video_modal() {
        
        event.preventDefault();

        // re-hide the video modal
        $("body").removeClass("show-video-modal noscroll");

        // reset the source attribute for the iframe template, kills the video
        $("#youtube").attr('src', '');
        
      }
      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-video-modal, .video-modal .overlay', function(event) {
	        
          // call the close and reset function
          close_video_modal();
	        
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            
            // call the close and reset function
            close_video_modal();
            
          }
      });
	}
	toggle_video_modal();



}); 

