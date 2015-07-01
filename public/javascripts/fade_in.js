$(window).scroll( function() {  
        if ( $(window).scrollTop() > 3100 ) {  
           loadDiv('.spec'); /* calls loadDiv2 Function below */ 
        }
        if ( $(window).scrollTop() > 4800 ) {
           loadDiv('.proto-img'); 
        }  
    });  
/* the loadDiv2 function */  
    function loadDiv(e) {  
        $(e).fadeIn('slow', function() {  
            $(this).fadeTo(1000, 1); 
        });  
    }

