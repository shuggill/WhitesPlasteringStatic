$(document).ready(function(){ 	
						   
						   
	// radius Box
	$('.social-links').css({"border-radius": "6px", "-moz-border-radius":"6px", "-webkit-border-radius":"6px"});
	$('.post-date').css({"border-radius": "6px", "-moz-border-radius":"6px", "-webkit-border-radius":"6px"});
	$('.wp-pagenavi a').css({"border-radius": "4px", "-moz-border-radius":"4px", "-webkit-border-radius":"4px"});
	$('.wp-pagenavi .current').css({"border-radius": "4px", "-moz-border-radius":"4px", "-webkit-border-radius":"4px"});
    $('.topnav li a').css({"border-radius": "8px", "-moz-border-radius":"8px", "-webkit-border-radius":"8px"});
	$('#rightcol .box').css({"border-radius": "8px", "-moz-border-radius":"8px", "-webkit-border-radius":"8px"});
	$('#slider, #slider ul, #slider li, #slider ul li img').css({"border-radius": "10px", "-moz-border-radius":"10px", "-webkit-border-radius":"10px"});
	$('#columns').css({"border-radius": "10px", "-moz-border-radius":"10px", "-webkit-border-radius":"10px"});
	// end radius Box

    // add tags span to a href
//    $('.topnav ul').children('li').each(function() {
//      $(this).children('a').html('<span>'+$(this).children('a').text()+'</span>'); // add tags span to a href
//    });
//    $('#nav1 ul').children('li').each(function() {
//      $(this).children('a').html('<span>'+$(this).children('a').text()+'</span>'); // add tags span to a href
//    });
	// end add tags span to a href
	
	$("ul.sf-menu").superfish({
		autoArrows:  false,
		delay:       400,                             // one second delay on mouseout 
		animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation 
		speed:       'fast',                          // faster animation speed 
		autoArrows:  false,                           // disable generation of arrow mark-up 
		dropShadows: false                            // disable drop shadows 			
	}); 
	
	$('ul.list li').each(function() {
	  var a = $(this).children('a');
	  var aClass = a.attr('rel');
	  if (a.hasClass('active')) {     
	   $('.'+aClass).css({'display':'block'});
	  } else {
	   $('.'+aClass).css({'display':'none'});
	  }
	 });
	 $('ul.list li a').click(function () {             
	  var thisaClass = $(this).attr('rel');
	  $(this).parent('li').parent('ul').children('li').each(function() {
	   var a = $(this).children('a');
	   var aClass = a.attr('rel');
	   if (thisaClass == aClass) {
		$('.'+aClass).show();
		a.attr('class','active');
	   } else {
		$('.'+aClass).hide();
		a.attr('class','');
	   }
	  });
	  return false;
	});
	 
	 $("#slider").easySlider({
		controlsBefore:	'<p id="controls">',
		controlsAfter:	'</p>',
		auto: true, 
		continuous: true
	});	
	 
	 
});	