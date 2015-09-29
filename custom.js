    var main = function(){
		
		function nextSlide(){
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        
        if(nextSlide.length === 0){
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }
        
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
		};
		
	$('.arrow-prev').click(function(){											// Zmiana slajdu na poprzedni.
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();
        
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();
        
         if(prevSlide.length === 0){		
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }
        
        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');
        
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
		
		clearInterval(dD);
		dD  = setInterval(function() { nextSlide() }, 5000);  
    });
   $('.arrow-next').click(function() { nextSlide()							//// Zmiana slajdu na następny. 
		clearInterval(dD);
		dD  = setInterval(function() { nextSlide() }, 5000);
	});
		
	$('.dot').click(function(){												// Ładuje pierwszy slajd po kliknięciu na pierwszą kropkę.
		var currentSlide = $('.active-slide');
        var nextSlidev2 = $('#'+'slide' + $(this)[0].attributes[1].value);
		var currentDot = $('.active-dot');
        var nextDot = $('#' + $(this)[0].attributes[1].value);
		
		if(nextSlidev2.is(currentSlide) == false){
		currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlidev2.fadeIn(600).addClass('active-slide');
        
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
		}
		clearInterval(dD);
		dD  = setInterval(function() { nextSlide() }, 5000);
	});
	
	$('.slider-nav').mousedown(function(e){ e.preventDefault(); }); // Usuwa efekt podwójnego kliknięcia na pasku navigacji.
	
	$('li').mouseenter(function(){                                               // Dodaje klasę open po najechaniu.
		$(this).addClass('open');
	});
		$('li').mouseleave(function(){										   // Zabiera klasę open po najechaniu.
			$(this).removeClass('open');
			$(this).removeClass('active');
	});
    var dD = setInterval(function() { nextSlide() }, 5000);	// Co pięć sekund przewija slajd.
	};
$(document).ready(main);