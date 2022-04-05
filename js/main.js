
$(this).scrollTop(0);

$( document ).ready(function() {


	$('#fullpage').fullpage({
	    licenseKey: '1DFB76D6-E47E4819-9534C971-BE0C78B6',
		scrollBar: true,
		scrollingSpeed: 700,
	});

  	$('.people-wrapp').slick({
		slidesToShow: 3,
  		slidesToScroll: 3,
  		prevArrow: ".prev-arrow",
  		nextArrow: ".next-arrow",
  		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		 ]
	});

  	$('.works-wrapp').slick({
		slidesToShow: 4,
  		slidesToScroll: 4,
  		prevArrow: ".prev-arrow",
  		nextArrow: ".next-arrow",
  		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		 ]
	});

	$( ".people" ).mouseover(function() {
		$( this ).children().addClass("active");
		if ($(window).width() <= 728) {  
            $(".st0").css({"fill":"#ffffff"});
			$(".linea").css({"background-color":"white"});
       }
	});

	$( ".people" ).mouseleave(function() {
		$( this ).children().removeClass("active");
		if ($(window).width() <= 728) {  
            $(".st0").css({"fill":"#000000"});
			$(".linea").css({"background-color":"black"});
       }
	});



	/*animaciones home*/
	setTimeout(
     	function(){
        	$(".first.home-text").animate({opacity:"1"});
        	$(".video-wrapp").animate({opacity:".8"});
    },  1000);
	setTimeout(
     	function(){
        	$(".first.home-text").animate({opacity:"0"});
    }, 	2500);
	setTimeout(
     	function(){
        	$(".first.home-text").css({"display":"none"})
    }, 	3000);
	setTimeout(
     	function(){
        	$(".second.home-text").css({"display":"block"})
    }, 	3100);
    setTimeout(
     	function(){
        	$(".second.home-text").animate({opacity:"1"});
            $(".second.home-text").removeClass("hidden");
    }, 	3500);



    /*videos aleatorios al cargar pagina*/
    //var video = ['particles.mp4', 'ElectricLooped.mp4', 'fluorescent.mp4', 'squares.mp4'];
 	  //$('.video-home').attr({'src': 'video/' + video[Math.floor(Math.random() * video.length)] });
	/*****/


	/*efecto hamburguesa, menu y contacto*/
	$( ".burguer" ).click(function() {
		$(".logo, .legal, .contacto").toggleClass("oculto");
	  	$("nav").toggleClass("active");
	  	$(".fondo-negro").toggleClass("active");
		$(".contacto-wrapp").removeClass("active");
		$(".linea, ul li, ul li a").toggleClass("active");
		$(".footer-page, .back-general").toggleClass("oculto");
	});
	$( ".contacto" ).click(function() {
	   $(".contacto-wrapp").toggleClass("active");
	   $("nav").removeClass("active");
	});


	/*EFECTOS PAGINA PROPUESTA*/
	setTimeout(
		function(){
			$(".propuesta .forma-blanca1").addClass("active");
    		$(".propuesta .st0").css({"fill":"#000000"});
			if ($(window).width() <= 750) {
				$("propuesta .linea").css({"background-color":"black"});
			}
	}, 	4500);

	setTimeout(
		function(){
			$(".propuesta .caso1").addClass("animacion");
	}, 	2000);



	/*EFECTOS PAGINA CASO SOLO*/
	setTimeout(
		function(){
			$(".caso_solo .forma-blanca-der").addClass("active");
			$(".caso_solo .linea").css({"background-color":"#000000"});
			if ($(window).width() <= 750) {
				$(".caso_solo .linea").css({"background-color":"black"});
			}
	}, 	1000);



	$( ".verMas" ).click(function() {
		$(".forma-blanca-der").addClass("active-100");
		$(".txt-completo").addClass("active");
		$(".wrapp-casos").addClass("oculto");
		$(".caso_solo .st0").css({"fill":"#000000"});
		if ($(window).width() <= 750) {
			$(".caso_solo .forma").addClass("active-mobile");
		}
	});


	$(".cerrar-txt-completo").click(function() {
		$(".forma-blanca-der").removeClass("active-100");
		$(".txt-completo").removeClass("active");
		$(".wrapp-casos").removeClass("oculto");
		$(".caso_solo .st0").css({"fill":"#ffffff"});
		if ($(window).width() <= 750) {
			$(".caso_solo .forma").removeClass("active-mobile");
		}
	});
	
	$(".play, .caso1 .boton").click(function() {
		$(".video-case-wrapp").addClass("active");
		$('.video-case').get(0).play();
		$('.video-case').get(0).currentTime = 0;
	});


	$(".cerrar-video").click(function() {
		$(".video-case-wrapp").removeClass("active");
		$('.video-case').get(0).currentTime = 0;
		$('.video-case').get(0).pause();
	});




	setTimeout(
		function(){
			$(".caso1 .wrapp-casos").removeClass("oculto").addClass("active");
	}, 	6000);


	$(window).scroll( function(e){
        e.preventDefault();
        $('.waypoint0').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
            	

            	setTimeout(
					function(){
						$(".caso2 .wrapp-casos").removeClass("active").addClass("oculto");
				}, 	1500);

            }else{
            	$(".caso2 .wrapp-casos").addClass("oculto").removeClass("active");
            }
        });
    });


	$(window).scroll( function(e){
        e.preventDefault();
        $('.waypoint1').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
				if ($(window).width() <= 750) {
					$(".linea").css({"background-color":"#000000"});
				}else{
					$(".linea").css({"background-color":"#ffffff"});
				}

				setTimeout(
					function(){
						$(".caso2 .wrapp-casos").removeClass("oculto").addClass("active");
				}, 	1500);
				$(".caso3 .wrapp-casos").addClass("oculto").removeClass("active");

				$(".back-general-color").css({"fill":"#000"});
                $(".st0").css({"fill":"#000000"});
                $(".fondo1").addClass("oculto");
                $(".fondo1").addClass("animate-right");
                $(".fondo2").removeClass("oculto");
               
                $(".fondo2").removeClass("animate-right");
            }else{
            	$(".fondo1").removeClass("oculto");
                $(".fondo1").removeClass("animate-right");
            }
        });
    });


    $(window).scroll( function(e){
        e.preventDefault();
        $('.waypoint2').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
					if ($(window).width() <= 750) {
						$(".linea").css({"background-color":"#ffffff"});
						$(".st0").css({"fill":"#ffffff"});
					}

				setTimeout(
					function(){
						$(".caso3 .wrapp-casos").removeClass("oculto").addClass("active");
				}, 	1500);
				$(".caso4 .wrapp-casos").addClass("oculto").removeClass("active");


                $(".st0").css({"fill":"#000000"});
                $(".fondo2").addClass("oculto");
                $(".fondo2").addClass("animate-right");
                
                $(".fondo3").removeClass("oculto");
                $(".forma-blanca1, forma-blanca2, .forma-negra").removeClass("oculto");
                $(".forma-blanca-der").removeClass("active");
                $(".fondo3").removeClass("animate-right");
                $(".fondo4").removeClass("animate-left");
            }
        });
    });


    $(window).scroll( function(e){
        e.preventDefault();
        $('.waypoint3').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
					if ($(window).width() <= 750) {
						$(".st0").css({"fill":"#000000"});
					}

				setTimeout(
					function(){
						$(".caso4 .wrapp-casos").removeClass("oculto").addClass("active");
				}, 	1500);
				$(".caso5 .wrapp-casos").addClass("oculto").removeClass("active");

				$(".linea").css({"background-color":"#000000"});
                $(".fondo3").addClass("oculto");
                $(".fondo3").addClass("animate-right");
   				$(".forma-negra").addClass("oculto");
   				$(".forma-blanca1, forma-blanca2").addClass("oculto");
   				$(".forma-blanca-der").addClass("active").removeClass("oculto");
                $(".forma-negra-der").removeClass("active");
                $(".fondo4").addClass("animate-left").removeClass("oculto");;
                $(".fondo5").removeClass("animate-right");
                $(".back-general-color").css({"fill":"#000"});
            }
        });
    });


    $(window).scroll( function(e){
        e.preventDefault();
        $('.waypoint4').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
				if ($(window).width() <= 750) {
					$(".st0").css({"fill":"#ffffff"});
				}

				setTimeout(
					function(){
						$(".caso5 .wrapp-casos").removeClass("oculto").addClass("active");
				}, 	1500);
				$(".caso6 .wrapp-casos").addClass("oculto").removeClass("active");

				$(".linea").css({"background-color":"#ffffff"});
                $(".st0").css({"fill":"#ffffff"});
                $(".back-general-color").css({"fill":"#fff"});
            	$(".forma-blanca-der").addClass("oculto");
            	$(".fondo4").addClass("oculto");
            	$(".fondo5").addClass("animate-right").removeClass("oculto");
            	$(".forma-blanca3").addClass("oculto");
                $(".forma-negra").addClass("active").removeClass("oculto");
                $(".fondo6").removeClass("animate-right");
            }
        });
    });


    $(window).scroll( function(e){
        e.preventDefault();
        $('.waypoint5').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
				if ($(window).width() <= 750) {
					$(".linea").css({"background-color":"#000000"});
				}

				setTimeout(
					function(){
						$(".caso6 .wrapp-casos").removeClass("oculto").addClass("active");
				}, 	1500);
				


                $(".st0").css({"fill":"#000000"});
			   	$(".fondo5").addClass("oculto");
			   	$(".forma-blanca3").addClass("active");
			   	$(".forma-blanca3").removeClass("oculto");
                $(".forma-negra-der").removeClass("active");
				$(".forma-amarila-der").removeClass("active");
                $(".fondo6").addClass("animate-right");
                $(".st1").css({"fill":"#ffc411"});
                $(".back-general-color").css({"fill":"#000"});
            }
        });
    });


	$(window).scroll( function(){
        $('.waypoint6').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){

            	setTimeout(
					function(){
						$(".caso8 .wrapp-casos").removeClass("oculto").addClass("active");
				}, 	1500);


   				$(".forma-amarila-der").addClass("active");
   				$(".forma-blanca-der2").removeClass("active");
   				$(".forma-amarila-izq").removeClass("active");
   				$(".st1").css({"fill":"#ffc411"});
   				$(".linea").css({"background-color":"#ffffff"});
            }
        });
    });

    /*$(window).scroll( function(){
        $('.waypoint7').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
   				$(".forma-blanca-der2").addClass("active");
   				$(".forma-amarila-izq").addClass("active");
   				$(".st1").css({"fill":"#000000"});
   				$(".linea").css({"background-color":"#000000"});
            }
        });
    });*/


	/*CULTURA*/


	setTimeout(
     	function(){
        	$(".casos.cultura1").addClass("zoomOut");
        	$(".cultura1 .wrapp-casos").addClass("active");
    },  4500);


    if ($(window).width() <= 750) {
		setTimeout(
	     	function(){
	        	$(".casos.cultura1").addClass("zoomOut");
	        	$(".cultura1 .wrapp-casos").addClass("active");
	    },  0);
	}

 

	$(window).scroll( function(){
        $('.waypoint-cultura-0').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){

				$(".linea").css({"background-color":"#fff"});
				$(".back-general-color").css({"fill":"#fff"});
				$(".linea").css({"background-color":"#ffffff"});

				$('.video-home').get(0).play();



				$(".cultura2 .wrapp-casos").addClass("oculto").removeClass("active");

            }
        });
    });


	$(window).scroll( function(){
        $('.waypoint-cultura-1').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){

            	setTimeout(
					function(){
						$(".cultura2 .wrapp-casos").removeClass("oculto").addClass("active");
				}, 	1500);
				$(".cultura3 .wrapp-casos").addClass("oculto").removeClass("active");


				$(".fondo-cultura-1").addClass("animate-left");
				$(".forma-blanca-der").addClass("active");
				$(".fondo-cultura-2").addClass("oculto");
				$(".linea").css({"background-color":"#000000"});
				$(".st0").css({"fill":"#fff"});
				$(".st1").css({"fill":"#ffc411"});
				$(".back-general-color").css({"fill":"#000"});

				if ($(window).width() <= 750) {
					$(".st0").css({"fill":"#000"});
				}
            }else{
				$(".fondo-cultura-1").removeClass("animate-left");
				$(".forma-blanca-der").removeClass("active");

				$(".st0").css({"fill":"#fff"});

			}
        });
    });


	$(window).scroll( function(){
		$('.waypoint-cultura-2').each( function(i){
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			if( bottom_of_window > bottom_of_object ){

				setTimeout(
					function(){
						$(".cultura3 .wrapp-casos").removeClass("oculto").addClass("active");
				}, 	1500);
				$(".cultura4 .wrapp-casos").addClass("oculto").removeClass("active");


				$(".fondo-cultura-2").addClass("animate-left");
				$(".fondo-cultura-2").removeClass("oculto");
				$(".fondo-cultura-3").addClass("oculto");
				$(".fondo-cultura-3").removeClass("animate-right");
				$(".forma-blanca2").removeClass("active");
			}
		});
	});


	$(window).scroll( function(){
		$('.waypoint-cultura-3').each( function(i){
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			if( bottom_of_window > bottom_of_object ){

				setTimeout(
				function(){
					$(".cultura4 .wrapp-casos").removeClass("oculto").addClass("active");
				}, 	1500);
				$(".cultura5 .wrapp-casos").addClass("oculto").removeClass("active");


				$(".st0").css({"fill":"#000000"});
				$(".fondo-cultura-3").addClass("animate-right");
				$(".fondo-cultura-3").removeClass("oculto");
				$(".forma-blanca-der").removeClass("active");
				$(".forma-blanca2").addClass("active");
				$(".fondo-cultura-4").addClass("oculto");
				$(".fondo-cultura-4").removeClass("animate-left");
				$(".forma-amarila-der").removeClass("active");
			}
		});
	});


	$(window).scroll( function(){
		$('.waypoint-cultura-4').each( function(i){
				var bottom_of_object = $(this).offset().top + $(this).outerHeight();
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				if( bottom_of_window > bottom_of_object ){
					$(".fondo-cultura-4").addClass("animate-left");
					$(".fondo-cultura-4").removeClass("oculto");
					$(".forma-amarila-der").addClass("active");
					$(".forma-blanca2").removeClass("active");
					if ($(window).width() <= 750) {
						$(".st1").css({"fill":"#000"});
					}
				}
		});
	});

	/*animaciones interior trabajos*/


	setTimeout(
     	function(){
        	$(".caso_solo .inverso").addClass("active");

    },  2500);

    


	/**mas info directiva equipo**/
	$('.cerrar-modal').click(function() {
		$(".mas-info-modal").removeClass("active");
		$(".mas-info-modal .wrapp").removeClass("active");  
    });
	$('.directiva .persona-mobile').click(function() {
		$(".mas-info-modal").addClass("active");  
    });
    $('.directiva .directivo-1').click(function() {
		$(".mas-info-modal .directivo-1").addClass("active");  
    });
    $('.directiva .directivo-2').click(function() {
		$(".mas-info-modal .directivo-2").addClass("active");  
    });
    $('.directiva .directivo-3').click(function() {
		$(".mas-info-modal .directivo-3").addClass("active");  
    });
    $('.directiva .directivo-4').click(function() {
		$(".mas-info-modal .directivo-4").addClass("active");  
    });
    $('.directiva .directivo-5').click(function() {
		$(".mas-info-modal .directivo-5").addClass("active");  
    });
    $('.directiva .directivo-6').click(function() {
		$(".mas-info-modal .directivo-6").addClass("active");  
    });
    
    
	/*pantalla de carga*/
	setTimeout(
     	function(){
        	$(".fondo-carga").addClass("oculto");
    },  4600);
    setTimeout(
     	function(){
        	$(".BackSlash").addClass("oculto");
    },  4600);
    if ($(window).width() <= 728) {  
       $(".mosaico .wrapp .persona-mobile").unwrap();
   	}




   /*funcion cookies*/

    

    $(".rechazar-cookies").click(function() {
		$(".cookies-wrapp").removeClass("active");

		setTimeout(
	     	function(){
	        	$(".cookies").removeClass("active");
	    },  500);
	});




    function checkCookieLaw(){
		if ( window.localStorage.getItem('cookieLawKeyMiWeb') ){

			$(".cookies-wrapp, .cookies").removeClass("active");
		}else{
			$(".cookies").addClass("active");
 
			setTimeout(
		     	function(){
		        	$(".cookies-wrapp").addClass("active");
		    },  500);
		}
	}

	checkCookieLaw();

	$('.aceptar-cookies').on( "click", function(){
		window.localStorage.setItem('cookieLawKeyMiWeb', true);

		$(".cookies-wrapp").removeClass("active");

		setTimeout(
	     	function(){
	        	$(".cookies").removeClass("active");
	    },  500);
	});






/*fin*/
});
