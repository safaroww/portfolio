/**
 * DarkStar
 * Theme JS
 * Author: Dragan Milenkovic
 * Copyright - 2022 Skilltech Web Design - skilltechwebdesign.com
 */

$(document).ready(function(){

	/**
	 * Helper functions
	 */

	/**
	 * Helper - detect mobile device - as best as possible
	 */
	function isItMobileDevice() {
		var isMobile = false; //initiate as false
		// device detection
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
		    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
		return isMobile;
	}
	var isMobile = isItMobileDevice();


	/**
	 * Helper - screen ratio 1/2
	 */
	var screenRatio = window.innerWidth / window.innerHeight;
	function getScreenRatio() {
		let w = window.innerWidth;
		let h = window.innerHeight;
		let ratio = w / h;
		return ratio;
	}


	/**
	 * Fixer function - dispatches resize event unless 
	 * body has a specified class. Fixes stutter on 
	 * initial scroll where some GSAP effects are
	 * present.
	 * @param {string} $bodyClass - CSS selector
	 */
	function dispatchResizeExceptOn( $bodyClass ) {
		let targetClass = $bodyClass;
		let element = document.querySelector( 'body' );
		if ( ! element.classList.contains(targetClass) ) {
			$( 'body' ).addClass( 'nav-ignore-close' );
			window.dispatchEvent(new Event( 'resize' ));
			$( 'body' ).removeClass( 'nav-ignore-close' );
		}
	}


	/**
	 * Helper - constants for vw and vh, use them like e.g. vw(10), vh(15)
	 */
	const vw = (coef) => window.innerWidth * (coef/100);
	const vh = (coef) => window.innerHeight * (coef/100);


	/**
	 * Setup GSAP
	 */
	
	/**
	 * GSAP - Register Plugins
	 */
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	/**
	 * GSAP - Smooth scrolling
	 * Create/Initiate ScrollSmoother / Smooth scrolling
	 */
	let smoother = ScrollSmoother.create({
		smooth: 2, // seconds it takes to "catch up" to native scroll position
		effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
	});

	/**
	 * GSAP - Setup parallax images and videos (not hero)
	 * Uses ScrollSmoother
	 */ 
	smoother.effects( ".sk__parallax-container > img", { speed: "auto" } );
	smoother.effects( ".sk__parallax-container > video", { speed: "auto" } );


	/**
	 * 1. Setup master "curtain" effect that reveals page content.
	 * If sk__master-curtain HTML is present on the page, the
	 * page will have the loading animation and a master delay
	 * will be applied to a number of entrance effects.
	 * 
	 * 2. Calculate and set the master delay value
	 * the formula is: duration + delay + (stagger * 2)
	 */
	let masterCurtain = $( '.sk__master-curtain' );
	let effectsMasterDelay = parseFloat(0);
	if ( masterCurtain.length ) {

		$( '.sk__master-curtain .mcurtain' ).addClass( 'mcurtain-visible' );

		// define master "curtain" animation variables
		let masterCurtainDelay = 2.4;
		let masterCurtainDuration = 0.4;
		let masterCurtainStagger = 0.24;

		// update master delay time
		effectsMasterDelay = masterCurtainDelay + masterCurtainDuration + ( masterCurtainStagger * 2 );
		effectsMasterDelay = parseFloat(effectsMasterDelay);

		// create the curtain animation
		gsap.to( '.mcurtain', {
				yPercent: -100,
				duration: masterCurtainDuration,
				delay: masterCurtainDelay - 0.7,
				stagger: masterCurtainStagger,
				ease: "power2.in"
			});
		
		setTimeout(function(){
			$( '.sk__master-curtain' ).detach();
		}, ((effectsMasterDelay + 0.7) * 1000));

	}


	/**
	 * Now show mobile menu stuff
	 * Hidden in priority CSS
	 */
	var MenuCSSselector = '#main-nav';
	setTimeout(function(){
		$( MenuCSSselector ).css( 'opacity', '1' );
	}, 1000);


	/**
	 * On scroll-started events
	 */
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		/**
		 * Assign a 'scroll-started' class to body
		 * when scrolling starts (over 100px)
		 */
		if (scroll >= 100) {
			$('body').addClass('sk__scrolling-started');
		} else {
			$('body').removeClass('sk__scrolling-started');
		}

	});


	/**
	 * Desktop Menu Dropdown V2.0
	 */
	// When clicked on 'li' element (so :before dropdown icon would also work)
	$( '.navbar-nav > li > ul li.menu-item-has-children' ).on( 'click', function(e) {
		if (e.target !== this) {
			return;
		} else {
			event.preventDefault();
			$( this ).siblings().removeClass( 'sk__expand-children' );
			$( this ).toggleClass( 'sk__expand-children' );
		}
	});
	// When clicked on 'a' element
	$( '.navbar-nav > li > ul li.menu-item-has-children > a' ).on( 'click', function() {
		event.preventDefault();
		$( this ).parent().siblings().removeClass( 'sk__expand-children' );
		$( this ).parent().toggleClass( 'sk__expand-children' );
	});


	/**
	 * Initiate Off Canvas Menu (offcanvas-nav)
	 * selector var defined above (near start)
	 */
	$( MenuCSSselector ).hcOffcanvasNav({
		// width: '100vw';
		disableAt: 1900, /* menu crossover */
		width: 290,
		disableBody: false,
		insertClose: false,
		insertBack: true,
		labelBack: 'Back',
		levelTitleAsBack: false,
		pushContent: true,
		pushContent: '.pushable-content',
		position: 'right',
		swipeGestures: true,
		levelSpacing: 7,
	});

	// Fix for Off Canvas Menu
	var $nav = $( MenuCSSselector ).hcOffcanvasNav();
	var Nav = $nav.data('hcOffcanvasNav');
	$(window).on('resize', function() {
		if ( $( MenuCSSselector ).length ) {
			if ( $( window ).width() > 576 && Nav.isOpen() ) {
				if ( !( $('body').hasClass('nav-ignore-close') ) ) {
					Nav.close(true);
				}
			}
		}
	});
	// Off Canvas Menu - add class to body when menu opens
	$( '.hc-nav-trigger' ).on( 'click', function( event ) {
		$( 'body' ).toggleClass( 'sk__nav-open' );
	});

	/**
	 * Nav Menu Expand / Retract
	 */
	$( '.menu-trigger' ).on( 'click', function( event ) {
		event.preventDefault();
		$( '#smooth-wrapper' ).toggleClass( 'main-menu-open' );
	});

	/**
	 * Menu - wrap submenu ULs for dropdown effect
	 * Important: only run after initializing .hcOffcanvasNav()
	 */
	$( '.sk__submenu-ul' ).wrapInner( '<span class="nav-subwrap"></span>' );


	/**
	 * Initiate Hero Slider / Bootstrap Carousel
	 */
	var heroSliderSlidingAnimationTime = 6.5; // (seconds), GLOBAL var
	var heroSliderExists = $( '#sk__hero-carousel-slider .carousel-item' ).length;
	if ( heroSliderExists ) {

		// Count hero slider	
		var numberOfHeroSlides = $( '#sk__hero-carousel-slider .carousel-item' ).length;

		// Equalize JS values to CSS values
		// #sk__hero-carousel-slider .carousel-item {transition-delay + transition-duration}
		var heroSliderTransitionTime = 1.9;

		// Total hero slider animating time (seconds)
		var heroSliderTotalTime = 26.4;
		heroSliderTotalTime = numberOfHeroSlides * ( heroSliderSlidingAnimationTime + heroSliderTransitionTime );

		// Initiate bootstrap carousel - and autoplay
		$( '#sk__hero-carousel-slider:not(.sk__static-carousel-slider)' ).carousel({
			ride: "carousel",
			pause: false,
			interval: heroSliderSlidingAnimationTime * 1000
		});

		// Initiate bootstrap carousel - don't play (one slide only)
		$( '#sk__hero-carousel-slider.sk__static-carousel-slider' ).carousel({
			ride: false,
			touch: false,
			interval: false
		});

	}


	// --- --- --- --- --- --- ### 
	// --- --- --- --- --- --- ###  Animation Functions
	// --- --- --- --- --- --- ###

	/**
	 * Fade in - basic - for predetermined CSS classes.
	 * Use .sk__fade-in-* class where * can be a number
	 * from 1-100. The number determines the delay before
	 * the element fades in, where 1 = 0.1s, 100 = 10s.
	 * You can additionally combine a "duration" class with
	 * this class, which will be automatically recognized
	 * and custom duration will be applied. Example:
	 * class="sk__fade-in-7 duration-12".
	 */
	function fadeInBasic() {

		// expression that matches the "fade in" class
		let expression = 'sk__fade-in-';
		let elements = $( '[class*=' + expression +']' );

		// set the maximum number (100 will become 10 seconds)
		let max = 100;

		// loop from 1 to (max+1), incrementing the "n"
		let n = 1;
		while ( n < ( max + 1 ) ) {

			// firstly divide n by 10 to get the value which we'll use for delay
			let theDelay = n/10;
			
			// now target only the class that starts with the expression
			// and ends in number matching n
			let elements = '.' + expression + n;

			// and, for THAT class, create an each() function
			$( elements ).each(function( i ) {
				
				// now we can enumerate all unique matches with a custom attribute
				$( this ).attr( 'data-sk-fade-match', ( i + 1 ) );

				// and create a fully unique selector
				let finalTarget = $( '.' + expression +  n  + '[data-sk-fade-match="' + ( i + 1 ) + '"]' );

				// additionally check if custom duration is specified
				let theDuration = 1;
				let classes = finalTarget.attr( 'class' );
				let classesArr = classes.split( ' ' );
				classesArr.forEach( function (item, index) {
					if ( item.includes( 'duration-' ) ) {
						let extractDuration = item.replace( 'duration-', '' );
						extractDuration = parseInt( extractDuration );
						theDuration = extractDuration / 10;
					}
				});

				if ( finalTarget.length ) {

					// and finally, create an animation
					gsap.to( finalTarget, {
						opacity: 1, 
						ease: "power1.inOut",
						scrollTrigger: {
							trigger: finalTarget,
							start: "top 90%",
							end: "top top-=200px",
							toggleActions: "play complete",
							scrub: false
						},
						duration: theDuration, 
						delay: theDelay 
					});
				}

			});

			n++;
		}
	}
	fadeInBasic();
	

	/**
	 * GSAP-powered text-revealing "clip-mask" style effect (reusable).
	 * In HTML, text tag must be wrapped in .cover-text-wrapper class div.
	 * @param {string} $element - CSS selector
	 * @param {float} $duration, $delay & $stagger (e.g. 0.4) - if unspecified,
	 * defaults will be loaded ( $duration 0.4, $delay 0, $stagger 0.3 )
	 * @param {string} $fromDirection - left, right, top, bottom - from
	 * which direction to animate, default bottom.
	 */
	function revealText( $element, $duration, $delay, $stagger, $fromDirection ) {

		let elementSelector = $element;

		$( elementSelector ).each( function( i ) {

			let element = $( this );

			if ( element.length ) {

				let newDuration = $duration;
				let newDelay = $delay;
				let newStagger = $stagger;

				let newDirection = $fromDirection;

				function ifUpdate( $newElement, $oldElement) {
					let newElement = $newElement;
					let oldElement = $oldElement;
					if ( ( newElement === 0) || ( newElement ) ) {
						oldElement = newElement;
					}
					return oldElement;
				}

				let theDuration = ifUpdate( newDuration, 0.4);
				let theDelay = ifUpdate( newDelay, 0);
				let theStagger = ifUpdate( newStagger, 0.3);
				let theDirection = ifUpdate( newDirection, 'default');

				let xFrom = 0;
				let yFrom = 120;
				if ( theDirection == 'left' ) {
					xFrom = -20;
					yFrom = 0;
				} else if ( theDirection == 'right' ) {
					xFrom = 20;
					yFrom = 0;
				} else if ( theDirection == 'top' ) {
					xFrom = 0;
					yFrom = -120;
				}

				gsap.timeline()
					.fromTo( element, { opacity:0, xPercent:xFrom, yPercent:yFrom }, { opacity: 1, xPercent:0, yPercent: 0, duration: theDuration, stagger: theStagger, delay: theDelay } );

			}

		});	

	}

	/**
	 * GSAP-powered text-revealing "clip-mask" style effect (reusable).
	 * ScrollTrigger version - fires when element enters viewport.
	 * Params: $scrub, $startString, $endString & $toggleActions, leave
	 * empty or see https://greensock.com/docs/v3/Plugins/ScrollTrigger
	 * The rest is the same as revealText()
	 */
	function scrollRevealText( $element, $duration, $delay, $stagger, $fromDirection, $scrub, $startString, $endString, $toggleActions ) {
		
		let elementSelector = $element;

		$( elementSelector ).each( function( i ) {

			let element = $( this );

			if ( element.length ) {

				let newDuration = $duration;
				let newDelay = $delay;
				let newStagger = $stagger;
				let newDirection = $fromDirection;
				let newScrub = $scrub;
				let newStartString = $startString;
				let newEndString = $endString;
				let newActions = $toggleActions;

				function ifUpdate( $newElement, $oldElement) {
					let newElement = $newElement;
					let oldElement = $oldElement;
					if ( newElement ) {
						if ( ( newElement === 0) || ( newElement ) ) {
							oldElement = newElement;
						}
					}
					return oldElement;
				}

				// scrub needs separate function
				let theScrub = true;
				function ifScrub( $newScrub ) {
					let newScrub = $scrub;
					if ( newScrub === false ) {
						theScrub = false;
					}
				}
				theScrub = ifScrub( newScrub );

				let theDuration = ifUpdate( newDuration, 0.7 );
				let theDelay = ifUpdate( newDelay, 0 );
				let theStagger = ifUpdate( newStagger, 0.3 );
				let theDirection = ifUpdate( newDirection, 'default' );
				let theStartString = ifUpdate( newStartString, 'top 80%' );
				let theEndString = ifUpdate( newEndString, 'top 30%' );
				let theActions = ifUpdate( newActions, 'play complete reverse pause' );

				let xFrom = 0;
				let yFrom = 120;
				if ( theDirection == 'left' ) {
					let xFrom = -20;
					let yFrom = 0;
				}
				else if ( theDirection == 'right' ) {
					let xFrom = 20;
					let yFrom = 0;
				}
				else if ( theDirection == 'top' ) {
					let xFrom = 0;
					let yFrom = -120;
				}

				let finalSelector = elementSelector + '-' + i;

				gsap.fromTo( element, 
					{
						opacity:0, 
						xPercent:xFrom, 
						yPercent:yFrom
					}, {
						opacity: 1,
						xPercent:0,
						yPercent: 0, 
						ease: "power1.out",
						scrollTrigger: {
							trigger: element,
							start: theStartString,
							end: theEndString,
							toggleActions: theActions,
							scrub: theScrub
						},
						duration: theDuration, 
						stagger: theStagger, 
						delay: theDelay 
				});

			}

		});

	}


	/**
	 * GSAP-powered staggered fade in of multiple elements. Suitable for a wave-like fade in effects when there are a lot of small similar elements.
	 * @param {string} $triggerSelector - CSS selector for element that will trigger the animation when scrolled to.
	 * @param {string} $targetToAnimateSelector - CSS selector for targeted elements to fade in.
	 * @param {float} $staggerTime - Delay in seconds between each animated element - default 0.1.
	 * @param {string} $fromString - Which direction(s) to animate from. Leave empty or see "From" on this link https://greensock.com/docs/v3/Staggers
	 * @param {int} $presetType - Predefined animation type. 1 or 2 (check below for available types)
	 */
	function massFadeIn( $triggerSelector, $targetToAnimateSelector, $staggerTime, $fromString, $delay, $presetType ) {

		let theTrigger = $triggerSelector;
		let theTarget = $targetToAnimateSelector;
		let newStagger = $staggerTime;
		let newFromString = $fromString;
		let newDelay = $delay;
		let newType = $presetType;

		$( theTrigger ).each( function( i ) {

			let finalTrigger = $( this );

			if ( finalTrigger.length ) {

				function ifUpdate( $newElement, $oldElement) {
					let newElement = $newElement;
					let oldElement = $oldElement;
					if ( newElement ) {
						if ( ( newElement === 0) || ( newElement ) ) {
							oldElement = newElement;
						}
					}
					return oldElement;
				}

				let staggerTime = ifUpdate( newStagger, 0.1 );
				let fromString = ifUpdate( newFromString, "[0,0]" );
				let theDelay = ifUpdate( newDelay, 0.1 );
				let theType = ifUpdate( newType, 1 );

				let finalTarget = $( theTarget );
				if ( finalTarget.length ) { // if trigger.length done at the start

					// type 1 - fade in simple
					if ( theType == 1 ) {
						gsap.fromTo( finalTarget, {
							opacity: 0
						}, {
							opacity: 1,
							delay: theDelay,
							stagger: {
								each: staggerTime,
								from: fromString,
								grid: "auto"
							},
							scrollTrigger: {
								trigger: theTrigger,
								start: "top 70%",
								scrub: false
							}
						});
					}

					// type 2 - fade in with subtle slide from left
					if (theType == 2 ) {
						gsap.fromTo( theTarget, {
							x: -200,
							opacity: 0,
							scale: 0.8
						}, {
							x: 0,
							opacity: 1,
							scale: 1,
							delay: theDelay,
							stagger: staggerTime, 
							duration: 0.6, 
							scrollTrigger: {
								trigger: theTrigger,
								start: "top 80%",
								scrub: false
							}
						});
					}

				}

			}

		});
	}


	/**
	 * Animated headlines (word in a headline)
	 * @param {string} $targetSelector - CSS selector to target
	 */
	function animatedHeadlines( $targetSelector ) {
		var duration = 2200;
		$( $targetSelector ).each(function () {
			let element = $( this );
			let words = element.find( '.sk__visible' ).attr( 'data-sk-animated-words' );
			if ( words.length ) {
				let wordsArr = words.split( ',' );
				wordsArr.forEach( function (item) {
					element.find( '.sk__visible' ).parent().append( '<span class="sk__clipped-text sk__gradient-back-v1">' + item + '</span>' );
				});
				$( $targetSelector + ' > span' ).addClass( 'lvl1' );
				$( $targetSelector + ' > span > span' ).addClass( 'lvl2' );
				function switchVisibility( $word ) {
					let nextWord = $word.is( ':last-child' ) ? $word.parent().children().eq( 0 ) : $word.next();
					$word.removeClass( 'sk__visible' ).addClass( 'sk__hidden' );
					nextWord.removeClass( 'sk__hidden' ).addClass( 'sk__visible' );
					let newWidth = parseInt( element.find( '.sk__animated-headline-words span.lvl2.sk__visible' ).css( 'width') );
					newWidth = newWidth + 30;
					element.find( '.sk__animated-headline-words' ).css({
						width: newWidth,
						marginLeft: '-18px',
						paddingLeft: '15px',
						marginRight: '-18px',
						paddingRight: '15px'
					});
					setTimeout( function () {
						switchVisibility( nextWord );
					}, duration );
				}
				element.find( '.sk__animated-headline-words span.lvl2.sk__visible' ).wrap( '<b></b>' );
				let initialWidth = parseInt( element.find( '.sk__animated-headline-words b' ).css( 'width') );
				initialWidth = initialWidth + 16;
				element.find( '.sk__animated-headline-words span.lvl2.sk__visible' ).unwrap();
				element.find( '.sk__animated-headline-words' ).css( 'width', initialWidth );
				setTimeout(function () {
					switchVisibility( element.find( '.sk__visible' ).eq( 0 ) );
				}, duration + 1200);
			}
		});
    }
    animatedHeadlines( '.sk__animated-headline' );


	/**
	 * Hero slider - assign "first-load" class to active carousel item
	 */
	$( '#sk__hero-carousel-slider .carousel-item.active' ).addClass( 'first-load' );

	/**
	 * Hero slider entrance animations
	 */ 
	function homeHeroSliderEntranceAnimations() {

		if ( heroSliderExists ) {

			/**
			 * Phase delays - for effects rolling out in phases
			 */

			// Phase 1 delay
			let phaseOneDelay = effectsMasterDelay - 0.5;
			if ( phaseOneDelay < 0 ) { 
				phaseOneDelay = 0;
			}

			// Phase 2 delay
			let phaseTwoDelay = effectsMasterDelay + 0.35;

			/**
			 * .first-load class, used for entrance animations on first load,
			 * then class is removed and normal animations take over.
			 * So most hero animations have .first-load and :not(.first-load) versions
			 */
			let phaseOneDelayMilisec = phaseOneDelay * 1000;
			setTimeout(function(){
				$( '#sk__hero-carousel-slider' ).find( '.first-load' ).removeClass( 'first-load' );
			}, phaseOneDelayMilisec);		

			/**
			 * Zooming hero backgrounds animations (all slides)
			 */
			function zoomingHero( $targetSelector ) {
				// Depends on effects master delay global var, so check that first
				if ( !effectsMasterDelay ) {
					var effectsMasterDelay = 0;
				}
				let targetSelector = $targetSelector;
				let firstLoadSourceSelector = '#sk__hero-carousel-slider .carousel-item.zooming.active.first-load ';
				let notFirstLoadSourceSelector = '#sk__hero-carousel-slider .carousel-item.zooming.active:not(.first-load) ';
				let finalSelectorFirstLoad = firstLoadSourceSelector + targetSelector;
				let finalSelectorNotFirstLoad = notFirstLoadSourceSelector + targetSelector;

				let heroActiveSlideFirstLoad = $( finalSelectorFirstLoad );
				if ( heroActiveSlideFirstLoad.length ) {
					let firstLoadSlideDelay = effectsMasterDelay - 1.2;
					if ( firstLoadSlideDelay < 0 ) { 
						firstLoadSlideDelay = 0;
					}
					gsap.timeline()
						.fromTo( heroActiveSlideFirstLoad, { transform: "matrix(1, 0, 0, 1, 0, 0)" }, { transform: "matrix(1.1, 0, 0, 1.1, 0, 0)", duration: heroSliderSlidingAnimationTime, delay: firstLoadSlideDelay } );
				}

				let heroActiveSlideNotFirstLoad = $( finalSelectorNotFirstLoad );
				if ( heroActiveSlideNotFirstLoad.length ) {
					gsap.timeline()
						.fromTo( heroActiveSlideNotFirstLoad, { transform: "matrix(1, 0, 0, 1, 0, 0)" }, { transform: "matrix(1.1, 0, 0, 1.1, 0, 0)", duration: heroSliderSlidingAnimationTime } );
				}
			}
			zoomingHero( '.sk__parallax-background-element' );
			zoomingHero( '.sk__morphing-hover-hero-container' );

			
			/**
			 * Animate all elements with class '.animated-element' inside .active hero .carousel-item
			 * Animate in two phases. Add delay for 'first-load'.
			 * Elements with class .animated-element.phase-1 will run in phase 1
			 * Elements with class .animated-element.phase-2 will run in phase 2
			 */
			let n = 1;
			let phase1FirstLoad = [];
			let phase1Regular = [];
			let phase2FirstLoad = [];
			let phase2Regular = [];
			while ( n < numberOfHeroSlides + 1 ) {
				
				// Phase 1
				phase1FirstLoad[n] = $( '#sk__hero-carousel-slider .hero-slide-' + n + '.carousel-item.active.first-load .animated-element.phase-1' );
				if ( phase1FirstLoad[n].length ) {
					gsap.timeline()
						.fromTo( phase1FirstLoad[n], { opacity: 0, yPercent: 120 }, { opacity: 1, yPercent: 0, duration: 0.4, stagger: 0.3, delay: phaseOneDelay } );
				}
				phase1Regular[n] = $( '#sk__hero-carousel-slider .hero-slide-' + n + '.carousel-item.active:not(.first-load) .animated-element.phase-1' );
				if ( phase1Regular[n].length ) {
					gsap.timeline()
						.fromTo( phase1Regular[n], { opacity: 0, yPercent: 120 }, { opacity: 1, yPercent: 0, duration: 0.4, stagger: 0.3 } );
				}

				// Phase 2
				phase2FirstLoad[n] = $( '#sk__hero-carousel-slider .hero-slide-' + n + '.carousel-item.active.first-load .animated-element.phase-2' );
				if ( phase2FirstLoad[n].length ) {
					gsap.timeline()
						.fromTo( phase2FirstLoad[n], { opacity: 0, xPercent: 20 }, { opacity: 1, xPercent: 0, duration: 0.4, stagger: {
							amount: 0.25,
							from: "end",
							grid: "auto"
						}, delay: phaseTwoDelay
					});
				}
				phase2Regular[n] = $( '#sk__hero-carousel-slider .hero-slide-' + n + '.carousel-item.active:not(.first-load) .animated-element.phase-2' );
				if ( phase2Regular[n].length ) {
					gsap.timeline()
						.fromTo( phase2Regular[n], { opacity: 0, xPercent: 20 }, { opacity: 1, xPercent: 0, duration: 0.4, stagger: {
							amount: 0.25,
							from: "end",
							grid: "auto"
						}, delay: 1.1
					});
				}

				n++;
			}

		}
		
	}
	homeHeroSliderEntranceAnimations();


	/**
	 * Hero slider exit animations
	 */ 

	function homeHeroSliderExitAnimations() {

		if ( heroSliderExists ) {

			/**
			 * Zooming hero backgrounds animations (all slides)
			 */
			function zoomingHeroOut( $targetSelector ) {
				// Depends on heroSliderTotalTime global var, so check that first
				if ( !heroSliderTotalTime ) {
					var heroSliderTotalTime = 20;
				}
				let targetSelector = $targetSelector;
				let sourceSelector = '#sk__hero-carousel-slider .carousel-item.zooming.active ';
				let finalSelector = sourceSelector + targetSelector;
				$( finalSelector ).each( function( i ) {
					let element = $( this );
					if ( element.length ) {
						let currentScale = $( element ).css( 'transform' );
						// zoom back from the current scale value
						gsap.timeline()
							.fromTo( element, { transform: currentScale }, { transform: "matrix(1.00001, 0, 0, 1.00001, 0, 0)", duration: 0.4 } )
							.to( element, { transform: "matrix(1.00001, 0, 0, 1.00001, 0, 0)", duration: heroSliderTotalTime } );
					}
				});
			}
			zoomingHeroOut( '.sk__parallax-background-element' );
			zoomingHeroOut( '.sk__morphing-hover-hero-container' );

			/**
			 * Exit animations for all '.animated-element' inside each hero .carousel-item
			 */
			let n = 1;
			let phase1 = [];
			let phase2 = [];
			while ( n < numberOfHeroSlides + 1 ) {

				// Phase 1
				phase1[n] = $( '.hero-slide-' + n + ' .animated-element.phase-1' );
				if ( phase1[n].length ) {
					gsap.timeline()
						.to( phase1[n], { opacity: 0, yPercent: 120, delay: 0.15, duration: 0.5 }, "<" );
				}

				// Phase 2
				phase2[n] = $( '.hero-slide-' + n + ' .animated-element.phase-2' );
				if ( phase2[n].length ) {
					gsap.to( phase2[n], { opacity: 0, xPercent: 20, delay: 0.15, duration: 0.5 }, "<" );
				}

				n++;

			}
		
		}

	}


	/**
	 * Parallax header on scroll
	 * Not full-screen header
	 */
	function parallaxHeader() {
		$( '.sk__parallax-header' ).each(function() {
			// let scroll = $(window).scrollTop();
			let parallaxHeaderParent = $( this );
			let parallaxHeaderImage = $( this ).find( '.sk__parallax-header-image' );
			if ( ( parallaxHeaderParent.length ) && ( parallaxHeaderImage.length ) ) {
				gsap.to( parallaxHeaderImage, 
					{
						top:200,
						scrollTrigger: {
							trigger: parallaxHeaderParent,
							start: "top top-=5px",
							end: "bottom top-=200px",
							scrub: true,
						}
				});
			}
		});
	}

	/**
	 * Hero parallax animations with variable speeds
	 * Reusable
	 */
	function heroParallaxVaribleSpeeds( $targetSelector ) {
		let targetSelector = $targetSelector;
		// On scroll animations
		$( targetSelector ).each( function( i ) {
			let element = $( this );
			if ( element.length ) {
				let parentEl = $( this ).parent();
				let speed = $( this ).attr( 'data-sk-speed' );
				if ( ( element.length ) && ( parentEl.length ) && ( 1 <= speed <= 20 ) ) {
					let n = 1;
					while (n < 21) {
						if ( n == speed ) {
							let finalSpeed = speed * 5;
							finalSpeed = finalSpeed + '%';
							gsap.to( element, 
								{
									top:finalSpeed,
									scrollTrigger: {
										trigger: parentEl,
										start: "top top-=5px",
										end: "bottom top-=5px",
										scrub: true,
									}
							});
						}
						n++;
					}
				}
			}
		});
	}
	// Run hero layered parallax elements
	heroParallaxVaribleSpeeds( '.sk__layered-parallax-header .sk__layered-parallax-element');


	/**
	 * Parallax vertical strips
	 * @deps function heroParallaxVaribleSpeeds()
	 */
	function parallaxHeroVerticalStrips() {
		// Build structure
		let strips = $( '.sk__hero-section .sk__hero-parallax-strip-vertical' )
		if ( strips.length ) {
			let numberOfStrips = strips.length;
			let parent = $( strips ).parent();
			let width = 100 / numberOfStrips;
			$( parent ).find( '.sk__hero-parallax-strip-vertical' ).css( 'width', width + 'vw' );
			let n = 0;
			while (n < numberOfStrips) {
				if ( n > 0 ) {
					$( parent ).find( '.sk__hero-parallax-strip-vertical:nth-child(' + ( n + 1 ) + ')' ).css( 'left', ( width * n ) + 'vw' );
				}
				n++;
			}
		}
		heroParallaxVaribleSpeeds( '.sk__hero-parallax-strip-vertical' );
	}
	parallaxHeroVerticalStrips();


	/**
	 * Animated counters
	 */
	gsap.utils.toArray( ".sk__counter" ).forEach( element => {
		let clean = v => (v + "").replace(/[^\d\.-]/gi, ""), // get rid of anything except numbers and periods
		num = clean(element.getAttribute("data-gsap-counter-number")),
		decimals = (num.split(".")[1] || "").length,

		proxy = {val: parseFloat(clean(element.innerText)) || 0}; // v1 - Start from the specified number
		// proxy = {val: 0} // v2 - Start from 0, regardless of the number
		
		gsap.to(proxy, {
			val: +num,
			duration: 2,
			scrollTrigger: {
				trigger: element,
				toggleActions: "restart none none none"
			},
			onUpdate: () => element.innerText = formatNumber(proxy.val, decimals)
		});
	});

	function formatNumber(value, decimals) {
		let s = (+value).toLocaleString('en-US').split(".");
		return decimals ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
	}


	// --- --- --- --- --- --- ### 
	// --- --- --- --- --- --- ###  Animation Functions - End
	// --- --- --- --- --- --- ###


	// Hero Slider Navigation UI - Prev/Next Buttons - Entrance Aniamtion (Runs once)
	let heroSliderNavUI = $( '#sk__hero-carousel-slider .carousel-control-next, #sk__hero-carousel-slider .carousel-control-prev' );
	if (heroSliderNavUI.length) {
		let theDelay = effectsMasterDelay + 1;
		gsap.timeline()
			.fromTo( heroSliderNavUI, { opacity:0 }, { opacity:0.5, duration: 0.3, stagger: {
				amount: 0.25,
				from: "end",
				grid: "auto"
			}, delay:theDelay
		});
	}

	// Hero Slider Navigation UI - Dots Nav (Carousel Indicators) - Entrance Aniamtion (Runs once)
	let heroSliderNavDots = $( '#sk__hero-carousel-slider .carousel-indicators button' );
	if ( heroSliderNavDots.length ) {
		let theDelay = effectsMasterDelay + 0.5;
		gsap.timeline()
			.fromTo( heroSliderNavDots, { opacity:0 }, { opacity: 1, duration: 0.3, stagger: {
				amount: 0.25,
				from: "end",
				grid: "auto"
			}, delay:theDelay
		});
	}


	/**
	 * Fix hero heading position 1/5
	 * Adjust the hero top box (empty helper div) height to help
	 * position the main heading and bottom content vertically
	 */
	function equalizeHeroBoxesHeights() {
		let w = window.innerWidth;
		$( '.sk__hero-section .carousel-item' ).each(function() {
			let heroBottomLeftDivHeight = $( this ).find( '.hero-box-bottom-left' ).height();
			if ( w >= 1800 ) {
				$( this ).find( '.flex-helper-div' ).css( 'height', heroBottomLeftDivHeight + 'px' );
			} else if ( w >= 1281 && w <= 1799 ) {
				$( this ).find( '.flex-helper-div' ).css( 'height', ( heroBottomLeftDivHeight * 0.75 ) + 'px' );
			} else if ( w >= 992 && w <= 1280 ) {
				$( this ).find( '.flex-helper-div' ).css( 'height', ( heroBottomLeftDivHeight * 0.6 ) + 'px' );
			} else if ( w >= 768 && w <= 991 ) {
				$( this ).find( '.flex-helper-div' ).css( 'height', ( heroBottomLeftDivHeight * 0.82 ) + 'px' );
			} else {
				$( this ).find( '.flex-helper-div' ).css( 'height', ( heroBottomLeftDivHeight * 0.2 ) + 'px' );
			}
		});

	}
	// Fix hero heading position 2/5
	equalizeHeroBoxesHeights();


	/**
	 * Align social icons with main heading (1/5)
	 */
	function alignSocialsWithHeading() {
		var socials = $( '.hero-socials' );
		var heading = $( '.carousel-item.active .hero-h1-box .hero-h1' );
		var socialsHeight = 421;
		if (socials.length) {
			socialsHeight = socials.outerHeight();
		}
		// align socials vertically with side-style main heading
		if ( (socials.length) && (heading.length) ) {
			var scrollTop = $( window ).scrollTop();
			var headingHeight = heading.height();
			if ( headingHeight ) {
				var headingOffset = heading.parent().offset().top;
				var headingY = ( headingOffset - scrollTop );
				var headingCenter = headingY + ( headingHeight / 2 );
				var correction = headingCenter - ( socialsHeight / 2 );
				socials.css( 'top', correction + 'px' );
			}
		}
		// if no side-style heading, align socials to vertical screen center
		if ( (socials.length) && !(heading.length) ) {
			var socialsHalfHeight = socialsHeight / 2;
			var distance = vh(50) - socialsHalfHeight;
			socials.css( 'top', distance + 'px' );
		}
	}
	// Align social icons with main heading (2/5)
	alignSocialsWithHeading();


	/**
	 * Rings section setup
	 */

	// Determine orientation of the rings elements wrapper
	function areRingsPortrait() {
		let w = $( '#sk__parallax-layers-1' ).width();
		var h = window.innerHeight;
		if ( h > w ) {
			return true;
		}
	}

	// Check if rings are exiting the screen vertically
	function areRingsExitingScreenVertically( $element ) {
		var element = $( $element );
		let rh = $( element ).height();
		let h = window.innerHeight;
		if ( rh > h ) {
			return true;
		}
	}

	// Bind ring widths (and heights) to parent container's width
	function widthsRelativeToParent() {
		var parentWidth = $( '#sk__parallax-layers-1' ).width();
		var mWidth = parentWidth * 0.77707;
		var sWidth = parentWidth * 0.550318;
		$( '.ring-l' ).css({
			'width' : parentWidth + 'px',
			'height' : parentWidth + 'px'
		});
		$( '.ring-m' ).css({
			'width' : mWidth + 'px',
			'height' : mWidth + 'px'
		});
		$( '.ring-s' ).css({
			'width' : sWidth + 'px',
			'height' : sWidth + 'px'
		});
	}

	// Resets rings dimensions
	function ringsResetDimensions() {
		$( '.ring-l' ).css({
			'width' : '785px',
			'height' : '785px'
		});
		$( '.ring-m' ).css({
			'width' : '610px',
			'height' : '610px'
		});
		$( '.ring-s' ).css({
			'width' : '432px',
			'height' : '432px'
		});
	}

	// Prevent rings exiting screen boundaries
	function ringsLimitDimensions() {
		$( '.ring-l' ).css({
			'width' : '98vh',
			'height' : '98vh'
		});
		$( '.ring-m' ).css({
			'width' : '76.1529vh',
			'height' : '76.1529vh'
		});
		$( '.ring-s' ).css({
			'width' : '59.9312vh',
			'height' : '59.9312vh'
		});
	}

	/**
	 * Rings section - adjust dimensions with display orientation
	 */
	function manageRingsSection() {
		if ( screenRatio < 0.5656 ) {
			$( '.sk__rings-section > .sk__full-height' ).css( 'height', '63vh' );
		} 
		if ( ( screenRatio >= 0.5656 ) && ( screenRatio <= 0.78358 ) ) {
			$( '.sk__rings-section > .sk__full-height' ).css( 'height', '76vh' );
		} 
		if ( screenRatio > 0.78358 ) {
			$( '.sk__rings-section > .sk__full-height' ).css( 'height', '100vh' );
		}
		if ( areRingsPortrait() ) {
			$( '.ring-l, .ring-m, .ring-s' ).addClass( 'portrait' );
			$( '.ring-l, .ring-m, .ring-s' ).removeClass( 'landscape' );
			widthsRelativeToParent();
		} else {
			$( '.ring-l, .ring-m, .ring-s' ).addClass( 'landscape' );
			$( '.ring-l, .ring-m, .ring-s' ).removeClass( 'portrait' );
			ringsResetDimensions();
			if ( areRingsExitingScreenVertically( '.ring-l' ) ) {
				ringsLimitDimensions();
			}
		}
	}	

	// Rings section 1/2 - runs once more on window resize
	manageRingsSection();


	/**
	 * Huge vertical decorative text (used on portfolio item page)
	 */
	function hugeDecorativeVerticalTexts() {

		let w = window.innerWidth;
		let h = window.innerHeight;
		let ratio = w / h;

		if ( ratio > 1 ) {

			$('.sk__huge-vertical-deco-text-section').each(function() {

				let trigger = $( this );
				let hugeTextVrapper = $( this ).find( '.sk__huge-vertical-deco-text-wrapper' );
				let hugeVerticalText = $( this ).find( '.sk__huge-vertical-deco-text' );

				if ( ( hugeTextVrapper.length ) && ( hugeVerticalText.length ) ) {

					$( hugeTextVrapper ).css( 'display', 'block' );

					let wrapperWidth = $( hugeTextVrapper ).width();

					let textWidth = $( hugeVerticalText ).width();
					let distance = textWidth;

					gsap.fromTo( hugeVerticalText, 
						{
							x:wrapperWidth+wrapperWidth/2,
						}, {
							x:-distance+wrapperWidth*0.4,
							scrollTrigger: {
								trigger: trigger,
								start: "top bottom",
								end: "bottom top",
								scrub: true
							}
					});
				}
			});

		}		
	}


	/**
	 * CTA section (warped text cta) 1/2
	 * - clone the text element
	 * - assign animations
	 */
	function warpedText() {

		var warpTextSection = $( 'section.sk__cta-warp:not(.not-animated)' );

		if ( warpTextSection.length ) {

			if ( isMobile != true ) {

				$( '.sk__cta-warp:not(.not-animated) .sk__warped-text-wrapper' ).each(function() {
					let wrapper = $( this );
					// create clones
					let classnameL = '';
					let classnameR = '';
					let distance = 1;
					let n = 1;
					while (n < 6) {
						classnameL = 'warped-text-clone-l' + n;
						classnameR = 'warped-text-clone-r' + n;
						$( this ).clone().insertBefore( this ).addClass( classnameL );
						$( this ).clone().insertBefore( this ).addClass( classnameR );
						n++;
					}
				});
				
				var warpTextOriginalElement = $( '.sk__cta-warp:not(.not-animated) .sk__warped-text-wrapper:not([class*="clone"]) .sk__warped-text' );
				if ( warpTextOriginalElement.length ) {

					// make text fancy style
					$( warpTextOriginalElement ).addClass( 'sk__gradient-fancy-text' );

					// animate original
					gsap.to( '.sk__cta-warp:not(.not-animated) .sk__warped-text-wrapper:not([class*="clone"])', 
						{
							opacity: 1,
							ease: "power1.out",
							duration: 1.2,
							scrollTrigger: {
								trigger: '.sk__warped-text-wrapper:not([class*="clone"])',
								toggleActions: "play play reverse reverse",
								start: "top 80%",
								end: "top 50%",
								scrub: false
							}
					});

					// do blur with toggle class due to poor GSAP blur performance
					let warpTextOriginalElementTL = gsap.timeline({
						scrollTrigger: {
							trigger: warpTextSection,
							start: "top 80%",
							toggleClass: {targets: warpTextOriginalElement, className: "deblur"},
						},
					});

					// animate clones
					gsap.to( '.sk__cta-warp:not(.not-animated) .sk__warped-text-wrapper[class*="warped-text-clone"]', 
						{
							x: 0,
							opacity: 0,
							ease: "power1.out",
							duration: 1.2,
							scrollTrigger: {
								trigger: '.sk__warped-text-wrapper:not([class*="clone"])',
								toggleActions: "play play reverse reverse",
								start: "top 80%",
								end: "top 50%",
								scrub: false
							}
					});

					// animate color for clones
					let warpedTextColorTL = gsap.timeline({
						scrollTrigger: {
							trigger: '.sk__cta-warp:not(.not-animated) .sk__warped-text-wrapper:not([class*="clone"])',
							start: "top 80%",
							toggleClass: {targets: ".sk__cta-warp:not(.not-animated) .sk__warped-text", className: "sk__warped-text-color-changed"},
						},
					});

				}	

				// assign animation to subheading
				var warpedTexth3 = $( '.sk__cta-warp h3' );
				if ( warpedTexth3.length ) {
					let warpedTexth3TL = gsap.timeline({
						// delayed through css
						scrollTrigger: {
							trigger: '.sk__cta-warp:not(.not-animated) .sk__warped-text-wrapper:not([class*="clone"])',
							start: "top 80%",
							toggleClass: {targets: ".sk__cta-warp:not(.not-animated).sk__cta-warp h3", className: "sk__cta-warp-h3-unspaced"},
						},
					});
				}

				// assign animation to button
				var warpedTextButton = $( '.btn.sk__warped-button' );
				if ( warpedTextButton.length ) {
					gsap.fromTo( warpedTextButton, 
						{
							opacity: 0,
						}, {
							opacity: 1,
							delay: 0.65,
							ease: "power1.out",
							duration: 0.3,
							scrollTrigger: {
								trigger: '.sk__warped-text-wrapper:not([class*="clone"])',
								toggleActions: "play play reverse reverse",
								start: "top 80%"
							}
					});
				}

			} else {

				// Mobile device, go easy on effects
				$( '.sk__warped-text-wrapper' ).css( 'opacity', '1' );
				$( '.sk__warped-text-wrapper .sk__warped-text' ).addClass( 'sk__gradient-fancy-text deblur' );
				$( '.sk__cta-warp h3' ).addClass( 'sk__cta-warp-h3-unspaced' );
				$( '.btn.sk__warped-button' ).css( 'opacity', '1' );
				
			}	

		}
			
	}

	// CTA section - Show non-animated version elements
	$( '.sk__cta-warp.not-animated .sk__warped-text-wrapper:not([class*="clone"]) .sk__warped-text' ).addClass( 'sk__gradient-fancy-text' );
	$( '.sk__cta-warp.not-animated .sk__warped-text-wrapper' ).css( 'opacity', '1' );
	$( '.sk__cta-warp.not-animated h3' ).addClass( 'sk__cta-warp-h3-unspaced' );
	$( '.sk__cta-warp.not-animated .sk__warped-text-wrapper .sk__warped-text' ).addClass( 'sk__gradient-fancy-text deblur' );


	// Align warpedText() 1/3
	function warpedTextAlign() {
		// align clones vertically with original
		$( '.sk__cta-warp:not(.not-animated) .sk__warped-text-wrapper[class*="clone"]' ).each(function() {
			var clone = $( this );
			var original = $( this ).parentsUntil( '.sk__cta-warp:not(.not-animated)' ).find( '.sk__warped-text-wrapper:not([class*="clone"])' );
			var originalPosition = original.position();
			let w = original.innerWidth();
			$( clone ).css( 'width', w + 'px' ).css( 'margin-left', originalPosition.left + 'px' );
			var cloneY = clone.offset().top;
			var originalY = original.offset().top;
			var difference = 1;
			if ( cloneY < originalY ) {
				difference = originalY - cloneY;
				$( clone ).css( 'margin-top', difference + 'px' );
			}
		});
	}


	/**
	 * Hero slider (bootstrap carousel) sliding start event
	 */
	$( '#sk__hero-carousel-slider' ).bind( 'slide.bs.carousel', function (e) {
		
		// For fixing the parallax inactive slide height issue (1/2)
		dispatchResizeExceptOn( 'sk__has-youtube-video' );

		// run GSAP hero slider exit animations
		homeHeroSliderExitAnimations();

	});

	/**
	 * Hero slider (bootstrap carousel) sliding ended event
	 */
	$( '#sk__hero-carousel-slider' ).bind( 'slid.bs.carousel', function (e) {

		// Fix hero heading position 3/5
		equalizeHeroBoxesHeights();

		// run GSAP hero slider entrance animations
		homeHeroSliderEntranceAnimations();

		// Align social icons with main heading (3/5)
		alignSocialsWithHeading();

	});


	/**
	 * Project gallery (full-screen parallax) nav dots
	 */
	$( '.sk__project-gallery' ).each(function(i) {

		// give gallery unique ID
		$( this ).attr( 'id', 'sk__project-gallery' + i );
		var galleryNumber = i + 1;

		// create navigation wrapper
		$( 'body' ).prepend( '<div id="sk__parallax-gallery-nav-' + ( i + 1 ) + '" class="sk__parallax-gallery-nav"><div class="sk__parallax-gallery-nav-icon"></div></div>' );	

		// Enumerate gallery items with new IDs
		var items = $( this ).find( '.sk__gallery-item' );
		$( items ).each(function(i){
			$(this).attr( 'id', 'sk__gallery-' + galleryNumber + '-item-' + ( i + 1 ) );
		});
		
		var numberOfItems = $( items ).length;
		let n = 1;
		while ( n < numberOfItems + 1 ) {

			// insert navigation dots
			$( '#sk__parallax-gallery-nav-' + ( i + 1 ) ).append( '<a id="sk__gallery-' + ( i + 1 ) + '-nav-link-' + n + '" href="#sk__gallery-' + ( i + 1 ) + '-item-' + n + '" class="sk__gallery-nav-link" data-gallery-item-number="' + n + '"></a>' );
			
			// assign ".active" class to nav dot of the active slide
			window[ 'activeNavDotTL' + n ] = gsap.timeline({
				scrollTrigger: {
					trigger: '#sk__gallery-' + ( i + 1 ) + '-item-' + n,
					start: 'top 40%',
					end: 'bottom 40%',
					toggleClass: {targets: '#sk__gallery-' + ( i + 1 ) + '-nav-link-' + n, className: 'active'},
				},
			});

			n++;

		}
		
		// make gallery nav appear only while gallery is in the viewport
		var section = $( this );
		var thisNavInstance = $( '#sk__parallax-gallery-nav-' + ( i + 1 ) );
		var firstImage = items[0];
		let navVisibilityTL = gsap.timeline({
			scrollTrigger: {
				trigger: firstImage,
				endTrigger: section,
				start: "center center+=360px",
				end: "bottom 70%",
				toggleClass: {targets: thisNavInstance, className: "sk__gallery-nav-visible"},
			},
		});
			
	});


	/**
	 * Gallery with thumbnails - generate thumbnails
	 */
	$( '.sk__gallery-basic-thumbnails' ).each(function() {

		let gallery = $( this );
		let numb = $( this ).find( '.carousel-inner .carousel-item' ).length;

		if ( numb >= 1 ) {

			$( gallery ).find( '.carousel' ).append( '<div class="carousel-indicators sk__flex-center"></div>' );
			let thumbsWrap = $( gallery ).find( '.carousel-indicators' );
			let n = 0;
			let classHTML = '';
			while ( n < numb ) {
				let img = $( gallery ).find( '.carousel-item:nth-child(' + ( n + 1 ) + ') img' );
				let item = $( gallery ).find( '.carousel-item:nth-child(' + ( n + 1 ) + ')' ).attr( 'class' );
				if ( item.includes( 'active' ) ) {
					classHTML = 'class="active"';
				} else {
					classHTML = '';
				}
				$( thumbsWrap ).append( '<button type="button" data-bs-target="#sk__project-1-gallery-basic" data-bs-slide-to="' + n + '" ' + classHTML + '></button>');
				let button = $( thumbsWrap ).find( 'button[data-bs-slide-to="' + n + '"]' );
				$( img ).clone().prependTo( button );
				n++;
			}

		}
			
	});


	/**
	 * Rotating hover border on iconboxes (used on services)
	 */
	function iconboxCloneIcons() {
		$( '.sk__iconbox .sk__iconbox-icon-link > span.sk__iconbox-icon' ).each(function() {
			if ( $( this ).length ) {
				let i = 1;
				while (i < 4) {
					$( this ).clone().html( '<span class="sk__iconbox-trail"></span>' ).insertAfter( this );
					i++;
				}
			}
		});
	}


	// --- --- --- --- --- --- ### 
	// --- --- --- --- --- --- ###  Animations
	// --- --- --- --- --- --- ###


	/**
	 * General (reusable) animations
	 */

	/**
	 * Reveal header text (h1, h2 and p), reausable when:
	 *  - main container must be .sk__reveal-header-text and
	 *  - <h1> and/or <h2> and/or <p> must each be wrapped in .cover-text-wrapper div
	 *  - it also works if .cover-text-wrap div has the .sk__reveal-header-text
	 *    class instead of its container (as you can see in the selectors below).
	 * What's specific for this effect is the slight delay which works well
	 * when combining top of the page h1 heading with h2 or p.
	 */
	revealText( '.sk__reveal-header-text .cover-text-wrapper h1, .sk__reveal-header-text.cover-text-wrapper h1', 0.4, 0.4 );
	revealText( '.sk__reveal-header-text .cover-text-wrapper h2, .sk__reveal-header-text.cover-text-wrapper h2', 0.4, 0.6, 0.3, 'top' );
	revealText( '.sk__reveal-header-text .cover-text-wrapper p, .sk__reveal-header-text.cover-text-wrapper p', 0.4, 0.8, 0.3, 'top' );

	/**
	 * Simple reveal of all wrapped text in ".sk__reveal-all-wrapped-text" container
	 * E.g. h1 wrapped in .cover-text-wrapper and that is wrapped in .sk__reveal-all-wrapped-text
	 */
	scrollRevealText( '.sk__reveal-all-wrapped-text .cover-text-wrapper > *, .sk__reveal-all-wrapped-text.cover-text-wrapper > *', 0.4, 0.4, 0, 'bottom', false, false, false, 'play complete' );

	/**
	 * Edge beauty effect - add subtle styled edges and shadows to specified
	 * sections (suitable for repeated fullscreen parallax sections).
	 */
	$( '.sk__edge-beauty' ).prepend( '<div class="sk__edge-beauty-top"></div><div class="sk__edge-beauty-bottom"></div><div class="sk__edge-beauty-bottom-shadow"></div>' );


	/**
	 * Homepage animations
	 */

	// Hero background elements (on scroll)
	let heroBackgroundOnScroll = $( '.carousel-item .sk__parallax-background-element' );
	if ( heroBackgroundOnScroll.length ) {
		gsap.fromTo( heroBackgroundOnScroll, 
			{
				filter: "brightness(1)",
			}, {
				filter: "brightness(0.1)",
				scrollTrigger: {
					trigger: ".sk__hero-section",
					start: "top top-=1%",
					end: "top top-=85%",
					scrub: true
				}
		});
	}	

	// Hero animated elements (on scroll)
	let heroAnimatedElements = $( '.sk__hero-section .animated-element' ).parent();
	if ( heroAnimatedElements.length ) {
		gsap.fromTo( heroAnimatedElements, 
			{
				opacity: 1
			}, {
			y: 0,
			opacity: 0,
			scrollTrigger: {
				trigger: ".sk__hero-section",
				start: "top top-=1%",
				end: "top top-=25%",
				scrub: true
			}
		});
	}

	// Hero social icons group (on scroll)
	let heroSocialsSection = $( '.hero-socials-section' );
	if ( heroSocialsSection.length ) {
		// fade out
		gsap.fromTo( '.hero-socials-section', {
			y: 0,
			opacity: 1,
		} , {
			y: 100,
			opacity: 0,
			scrollTrigger: {
				trigger: "#smooth-content section:first-child",
				start: "top top-=1%",
				end: "top top-=50%",
				scrub: true
			}
		});
		// display none
		let disappearSocialsTL = gsap.timeline({
			scrollTrigger: {
				trigger: "body",
				start: "top -90%",
				toggleClass: {targets: ".hero-socials", className: "d-none"},
			},
		});
	}

	// Hero - mega text (on scroll)
	let heroMegaTextOnScroll = $( '.sk__hero-section.sk__mega-video-text-section' );
	if ( heroMegaTextOnScroll.length ) {
		gsap.fromTo( heroMegaTextOnScroll, 
			{
				filter: "brightness(1)",
			}, {
				filter: "brightness(0.1)",
				yPercent: 30,
				scrollTrigger: {
					trigger: heroMegaTextOnScroll,
					start: "top top-=1%",
					end: "top top-=85%",
					scrub: true
				}
		});
	}

	// Hero slider indicators (on scroll)
	let heroSliderIndicators = $( '.sk__hero-section .carousel-indicators' );
	if ( heroSliderIndicators.length ) {
		gsap.fromTo( heroSliderIndicators, 
			{
				opacity: 1
			}, {
			y: 0,
			opacity: 0,
			scrollTrigger: {
				trigger: ".sk__hero-section",
				start: "top top-=1%",
				end: "top top-=25%",
				scrub: true
			}
		});
	}

	// Hero social icons individual icons
	let heroSocialIcon = $( '.hero-socials span' );
	if ( heroSocialIcon.length ) {
		let socIconsDelay = effectsMasterDelay - 0.3;
		if ( socIconsDelay < 0 ) { 
			socIconsDelay = 0;
		}
		let heroSocialIcons = gsap.timeline()
			.to( '.hero-socials span', {
				scale: 1,
				opacity: 1,
				duration: 1.3,
				ease: "power1.out",
				delay: socIconsDelay,
				stagger: 0.05
			});
	}

	/**
	 * Fancy gradient text effect
	 * Create a copy for every heading with .sk__gradient-fancy-text
	 * class and assign special styling classes
	 */
	$( '.fancy-gradient-text-box h1.sk__gradient-fancy-text, ' +
		'.fancy-gradient-text-box h2.sk__gradient-fancy-text, ' +
		'.fancy-gradient-text-box h3.sk__gradient-fancy-text, ' +
		'.fancy-gradient-text-box h4.sk__gradient-fancy-text, ' +
		'.fancy-gradient-text-box h5.sk__gradient-fancy-text, ' +
		'.fancy-gradient-text-box h6.sk__gradient-fancy-text' ).each(function() {
		let insideHTML = $( this ).html();
		let classes = $( this ).attr( 'class' );
		if ( classes.length ) {
			let newClasses = classes.replace( 'sk__gradient-fancy-text', 'sk__gradient-fancy-text-back' );
			$( '<span class="' + newClasses + '"> ' + insideHTML + '</span>' ).insertAfter( this );
		}
	});

	// Half-screen sections text
	$( '.sk__halfscreen-text-col' ).each(function() {
		let halfScreenSectionsText = $( this );
		let halfScreenTextElements = $( this ).find( '.animated-element' );
		if ( ( halfScreenSectionsText.length ) && ( halfScreenTextElements.length ) ) {
			gsap.fromTo( halfScreenTextElements, 
				{
					opacity:0,
					y:40
				}, {
					opacity: 1,
					y:0, 
					ease: "power1.out",
					scrollTrigger: {
						trigger: halfScreenSectionsText,
						start: "top 50%", 
						end: "top 30%",
						toggleActions: "play complete reverse pause",
					},
					stagger: 0.08
			});
		}
	});
		
	// Portfolio thumbnails 
	if ( isMobile != true ) {
		let portfoilioThumbnailsSlider = $( '.sk__portfolio-wrapper:not(.not-slick)' );
		if ( portfoilioThumbnailsSlider.length ) {
			// entrance
			gsap.from( portfoilioThumbnailsSlider, {
				x: 900,
				ease: "back",
				scrollTrigger: {
					trigger: portfoilioThumbnailsSlider,
					start: "top bottom",
					end: "top 25%",
					scrub: true
				}
			});
			// exit
			gsap.fromTo( portfoilioThumbnailsSlider, {
				x: 0,
			}, {
				x: -900,
				ease: "power1.inOut",
				scrollTrigger: {
					trigger: portfoilioThumbnailsSlider,
					start: "bottom 45%",
					end: "bottom top",
					scrub: true
				}
			});
		}
	}

	// Fade in portfolio thumbnails on portfolio page
	massFadeIn( '.sk__portfolio-page .sk__portfolio-wrapper.not-slick', '.sk__portfolio-item', 0.05, false, 1, 2 );
	// Fade in portfolio thumbnails on portfolio homepage
	massFadeIn( '.sk__home-portfolio .sk__portfolio-wrapper.not-slick', '.sk__portfolio-item', 0.05, false, 0, 2 );

	// About us image
	let aboutUsImage = $( '.about-right-image' );
	let aboutUsImageSubwrap = $( '.about-right-image-subwrap' );
	if ( ( aboutUsImage.length ) && ( aboutUsImageSubwrap.length ) ) {
		// image zoom
		gsap.from( '.about-right-image', {
			scale: 1.5,
			scrollTrigger: {
				trigger: ".about-right-image-subwrap",
				toggleActions: "play complete reverse pause",
				start: "top 80%",
				end: "top 20%",
				delay: 0.2,
				scrub: true
			}
		});
		// image wrapper height
		gsap.from( '.about-right-image-subwrap', {
			scrollTrigger: {
				trigger: ".about-right-image-subwrap",
				toggleActions: "play complete reverse pause",
				start: "top 80%",
				end: "top 20%",
				scrub: true
			},
			height: 0,
			ease: "power1"
		});
	}

	// Partners images (on scroll)
	let partnersImages = $( '.sk__partners > div' );
	if ( partnersImages.length ) {
		gsap.fromTo( partnersImages, 
			{
				opacity:0,
			}, {
				opacity: 1,
				scrollTrigger: {
					trigger: ".sk__partners",
					start: "top 99%",
					end: "bottom 80%",
					scrub: true
				},
				stagger: 0.3
		});
	}

	// Features section items (on scroll)
	function featuresFadeIn( $selector, $delayTime ) {
		let featuresItems = $( $selector );
		let delayTime = $delayTime;
		if ( featuresItems.length ) {
			gsap.fromTo( featuresItems, 
				{
					opacity: 0,
				}, {
					opacity: 1,
					delay: delayTime,
					duration: 0.4,
					scrollTrigger: {
						trigger: ".sk__features",
						start: "top 99%",
						end: "bottom 85%"
					},
					stagger: 0.1
			});
		}
	}
	featuresFadeIn( '.sk__features:not(.delayed) .sk__feature-col', 0 );
	featuresFadeIn( '.sk__features.delayed .sk__feature-col', 1.3 );

	// Features V2 Mass fade in (on scroll)
	massFadeIn( '.sk__featureboxes', '.sk__featurebox-col',  0.1, false, 0.2, 2 );


	// Laptop mockup entrance animation
	let laptopMockup = $( '.sk__laptop-mockup-subcontainer' );
	if ( laptopMockup.length ) {
		gsap.fromTo( laptopMockup, 
			{
				opacity:0,
				xPercent:-5
			}, {
				opacity: 1,
				xPercent:0, 
				ease: "power3.out",
				scrollTrigger: {
					trigger: laptopMockup,
					start: "top 70%", 
					end: "top 30%",
					toggleActions: 'play complete',
					scrub: false
				},
				duration: 1
		});
	}

	// Browsers section mass fade in (on scroll)
	function browserMockupsAnimate() {
		$( '.sk__browsers-wrapper' ).each(function() {
			let browserMockups = [ 
				'.sk__browsers-wrapper > .sk__browsers-tablet', 
				'.sk__browsers-wrapper > .sk__browsers-desktop', 
				'.sk__browsers-wrapper > .sk__browsers-phone' 
			];
			let n = 0;
			while (n < 3) {

				let theDelay = 0.2;
				let fromLeft = "30%";
				let toLeft = "0";
				let fromBottom = 0;
				let theOpacity = 0;

				if ( n == 0 ) {
					theDelay = 0.6;
				}
				if ( n == 1 ) {
					fromLeft = "25.757575%";
					toLeft = "25.757575%";
					fromBottom = "-120%";
					theOpacity = 1;
				}
				if ( n == 2 ) {
					fromLeft = "64.0326332%";
					toLeft = "84.0326332%";
					theDelay = 0.6;
				}
				
				let element = $( browserMockups[n] );
				if ( element.length ) {
					// and finally, create an animation
					gsap.fromTo( element, {
						bottom: fromBottom,
						left: fromLeft,
						opacity: theOpacity,
					}, {
						opacity: 1,
						bottom: 0,
						left: toLeft,
						ease: "power1.inOut",
						scrollTrigger: {
							trigger: ".sk__browsers-wrapper",
							start: "top 90%",
							end: "top top-=200px",
							toggleActions: "play complete",
							scrub: false
						},
						duration: 0.8, 
						delay: theDelay 
					});
				}

				n++;
			}
		});
	}
	browserMockupsAnimate();

	// Skills section - apply widths
	$( '.sk__skill-wrap' ).each(function() {
		var amount = $( this ).find( '.sk__counterskills' ).html();
		var skillBar = $( this ).find( '.sk__skill-bar' );
		$( skillBar ).css( 'width', amount + '%' );
	});

	// Skills section - animate bars
	let skillBarEl = $( '.sk__skill-bar' );
	if ( skillBarEl.length ) {
		let skillBars = gsap.timeline()
			gsap.fromTo( skillBarEl, 
				{
					scaleX: 0,
				}, {
					scaleX: 1,
					duration: 0.9,
					scrollTrigger: {
						trigger: ".sk__skills-row",
						toggleActions: "play play reverse reverse",
						start: "bottom 99%",
						end: "bottom 20%"
					},
					stagger: 0.1
			});
	}

	// Reveal services section heading, subheading & paragraph text
	scrollRevealText( 'body:not(.sk__services-page) #services .cover-text-wrapper h1', 0.3, 0, 0, 'bottom', false, "top 90%", "top 20%", "play complete reverse pause" );
	scrollRevealText( 'body:not(.sk__services-page) #services .cover-text-wrapper h2', 0.4, 0.6, 0.3, 'bottom', false, "top 90%", "top 20%", "play complete reverse pause" );
	scrollRevealText( 'body:not(.sk__services-page) #services .cover-text-wrapper p', 0.4, 0.8, 0.3, 'bottom', false, "top 90%", "top 20%", "play complete reverse pause" );

	// Icon boxes (on services page)
	let iconBoxIcon = $( '.sk__services-page .sk__iconbox .sk__iconbox-icon-link' );
	let iconBoxTextLink = $( '.sk__services-page .sk__iconbox .sk__iconbox-text-link' );
	let iconBoxParagraph = $( '.sk__services-page .sk__iconbox > p' );
	function iconBoxElementsEntrance( $element ) {
		let element = $element;
		let iconBoxTL = gsap.timeline()
			.fromTo( element, 
				{
					x: -100,
					opacity: 0,
				}, {
					x: 0,
					opacity: 1,
					duration: 0.9,
					delay: 1,
					stagger: 0.1
			});
	}
	// ran on load
	if ( iconBoxIcon.length ) {
		iconBoxElementsEntrance( iconBoxIcon );
	}
	if ( iconBoxTextLink.length ) {
		iconBoxElementsEntrance( iconBoxTextLink );
	}
	if ( iconBoxParagraph.length ) {
		iconBoxElementsEntrance( iconBoxParagraph );
	}


	/**
	 * Portfolio item page (project page) animations
	 */
	
	// Portfolio item page - header
	let projectHeaderSection = $( '.sk__project-header' );
	if ( projectHeaderSection.length ) {

		let projectHeaderDelay = effectsMasterDelay - 1;
		if ( projectHeaderDelay < 0 ) {
			projectHeaderDelay = 0;
		}

		if ( isMobile != true ) {

			//entire section on scroll
			gsap.fromTo( projectHeaderSection, 
				{
					filter: "brightness(1)",
				}, {
					filter: "brightness(0)",
					yPercent: 20,
					scrollTrigger: {
						trigger: projectHeaderSection,
						start: "top top-=100px",
						end: "top top-=85%",
						scrub: true
					}
			});

			// entrance animations

			// thumbnail (landscape)
			let phsThumbnailLandscapeImg = $( '.sk__project-header .sk__project-thumbnail-landscape-col img' );
			let phsThumbnailLandscapeCover = $( '.sk__project-header .sk__project-thumbnail-landscape-cover' );
			if ( ( phsThumbnailLandscapeImg.length ) && ( phsThumbnailLandscapeCover.length ) ) {
				let phsThumbnailLandscapeDelay = 0.5 + projectHeaderDelay;
				let phsThumbnailLandscape = gsap.timeline()
					.set( phsThumbnailLandscapeCover, { scaleX: 0 } )
					.fromTo( phsThumbnailLandscapeCover, { scaleX: 0 }, { scaleX: 1, duration: 0.65, delay: phsThumbnailLandscapeDelay, transformOrigin: "right center", ease: "power1.in" } )
					.set( phsThumbnailLandscapeImg, { opacity: 1 } )
					.fromTo( phsThumbnailLandscapeCover, { scaleX: 1 }, { scaleX: 0, duration: 0.65, delay: 0.1, transformOrigin: "left center", ease: "power1.out"  } );
			}
			// thumbnail (portrait)
			let phsThumbnailPortraitImg = $( '.sk__project-header .sk__project-thumbnail-portrait-col img' );
			let phsThumbnailPortraitCover = $( '.sk__project-header .sk__project-thumbnail-portrait-cover' );
			if ( ( phsThumbnailPortraitImg.length ) && ( phsThumbnailPortraitCover.length ) ) {
				let phsThumbnailPortraitDelay = 1.2 + projectHeaderDelay;
				let phsThumbnailPortrait = gsap.timeline()
					.set( phsThumbnailPortraitCover, { scaleY: 0 } )
					.fromTo( phsThumbnailPortraitCover, { scaleY: 0 }, { scaleY: 1, duration: 0.65, delay: phsThumbnailPortraitDelay, transformOrigin: "center top", ease: "power1.in" } )
					.set( phsThumbnailPortraitImg, { opacity: 1 } )
					.fromTo( phsThumbnailPortraitCover, { scaleY: 1 }, { scaleY: 0, duration: 0.65, delay: 0.1, transformOrigin: "center bottom", ease: "power1.out"  } );
			}
			// project infos
			let pshInfoBox = $( '.sk__project-infoboxes' );
			let phsInfoBoxH4 = $( '.sk__project-infoboxes h4' );
			let phsInfoBoxDivider = $( '.sk__project-infoboxes .fat-divider' );
			let phsInfoBoxTexts1 = $( '.sk__project-infoboxes .sk__proj-infobox-label' );
			let phsInfoBoxTexts2 = $( '.sk__project-infoboxes .sk__proj-infobox-value' );
			if ( ( pshInfoBox.length ) && ( phsInfoBoxH4.length ) && ( phsInfoBoxDivider.length ) && ( phsInfoBoxTexts1.length ) && ( phsInfoBoxTexts2.length ) ) {
				let pshInfoBoxDelay = 0.8 + projectHeaderDelay;
				let phsInfoBoxTL = gsap.timeline()
					.fromTo( phsInfoBoxDivider, { scaleX: 0 }, { scaleX: 1, duration: 0.65, delay: pshInfoBoxDelay, transformOrigin: "right center", ease: "power1.out"  } )
					.to( phsInfoBoxTexts1, { opacity: 1, duration:0.3, stagger: 0.05 }, "-=0.25" )
					.to( phsInfoBoxTexts2, { opacity: 1, duration:0.3, stagger: 0.05 }, "<0.1" )
					.fromTo( phsInfoBoxH4, { opacity: 0, y:-100 }, { opacity: 1, y:0, duration: 0.65, ease: "power1.out" }, "-=1.2" );
			}
			// main heading
			let phsHeading = $( '.sk__project-main-heading h1' );
			if ( phsHeading.length ) {
				let phsHeadingDelay = 2 + projectHeaderDelay;
				gsap.fromTo( phsHeading, { yPercent: 0 }, { yPercent: -140, opacity: 1, duration: 0.65, delay: phsHeadingDelay, ease: "power1.out" } );
			}
			// main subheading
			let phsSubHeading = $( '.sk__project-main-heading h2' );
			if ( phsSubHeading.length ) {
				let phsSubHeadingDelay = 2.3 + projectHeaderDelay;
				gsap.fromTo( phsSubHeading, { yPercent: 0 }, { yPercent: 100, opacity: 1, duration: 0.65, delay: phsSubHeadingDelay, ease: "power1.out" } );
			}

		} else {

			// Mobile device (reorder animations)
	
			// main heading
			let phsHeading = $( '.sk__project-main-heading h1' );
			if ( phsHeading.length ) {
				let phsHeadingDelay = 0.5 + projectHeaderDelay;
				gsap.fromTo( phsHeading, { yPercent: 0 }, { yPercent: -140, opacity: 1, duration: 0.65, delay: phsHeadingDelay, ease: "power1.out" } );
			}
			// main subheading
			let phsSubHeading = $( '.sk__project-main-heading h2' );
			if ( phsSubHeading.length ) {
				let phsSubHeadingDelay = 0.8 + projectHeaderDelay;
				gsap.fromTo( phsSubHeading, { yPercent: 0 }, { yPercent: 100, opacity: 1, duration: 0.65, delay: phsSubHeadingDelay, ease: "power1.out" } );
			}
			// project infos
			let pshInfoBox = $( '.sk__project-infoboxes' );
			let phsInfoBoxH4 = $( '.sk__project-infoboxes h4' );
			let phsInfoBoxDivider = $( '.sk__project-infoboxes .fat-divider' );
			let phsInfoBoxTexts1 = $( '.sk__project-infoboxes .sk__proj-infobox-label' );
			let phsInfoBoxTexts2 = $( '.sk__project-infoboxes .sk__proj-infobox-value' );
			if ( ( pshInfoBox.length ) && ( phsInfoBoxH4.length ) && ( phsInfoBoxDivider.length ) && ( phsInfoBoxTexts1.length ) && ( phsInfoBoxTexts2.length ) ) {
				let pshInfoBoxDelay = 1 + projectHeaderDelay;
				let phsInfoBoxTL = gsap.timeline()
					.fromTo( phsInfoBoxDivider, { scaleX: 0 }, { scaleX: 1, duration: 0.65, delay: pshInfoBoxDelay, transformOrigin: "right center", ease: "power1.out"  } )
					.to( phsInfoBoxTexts1, { opacity: 1, duration:0.3, stagger: 0.05 }, "-=0.25" )
					.to( phsInfoBoxTexts2, { opacity: 1, duration:0.3, stagger: 0.05 }, "<0.1" )
					.fromTo( phsInfoBoxH4, { opacity: 0, y:-100 }, { opacity: 1, y:0, duration: 0.65, ease: "power1.out" }, "-=1.2" );
			}
			// thumbnail (landscape)
			let phsThumbnailLandscapeImg = $( '.sk__project-header .sk__project-thumbnail-landscape-col img' );
			let phsThumbnailLandscapeCover = $( '.sk__project-header .sk__project-thumbnail-landscape-cover' );
			if ( ( phsThumbnailLandscapeImg.length ) && ( phsThumbnailLandscapeCover.length ) ) {
				let phsThumbnailLandscapeDelay = 1.3 + projectHeaderDelay;
				let phsThumbnailLandscape = gsap.timeline()
					.set( phsThumbnailLandscapeCover, { scaleX: 0 } )
					.fromTo( phsThumbnailLandscapeCover, { scaleX: 0 }, { scaleX: 1, duration: 0.65, delay: phsThumbnailLandscapeDelay, transformOrigin: "right center", ease: "power1.in" } )
					.set( phsThumbnailLandscapeImg, { opacity: 1 } )
					.fromTo( phsThumbnailLandscapeCover, { scaleX: 1 }, { scaleX: 0, duration: 0.65, delay: 0.1, transformOrigin: "left center", ease: "power1.out"  } );
			}
			// thumbnail (portrait)
			let phsThumbnailPortraitImg = $( '.sk__project-header .sk__project-thumbnail-portrait-col img' );
			let phsThumbnailPortraitCover = $( '.sk__project-header .sk__project-thumbnail-portrait-cover' );
			if ( ( phsThumbnailPortraitImg.length ) && ( phsThumbnailPortraitCover.length ) ) {
				let phsThumbnailPortraitDelay = 0.5 + projectHeaderDelay;
				let phsThumbnailPortrait = gsap.timeline()
					.set( phsThumbnailPortraitCover, { scaleY: 0 } )
					.fromTo( phsThumbnailPortraitCover, { scaleY: 0 }, { scaleY: 1, duration: 0.65, delay: phsThumbnailPortraitDelay, transformOrigin: "center top", ease: "power1.in" } )
					.set( phsThumbnailPortraitImg, { opacity: 1 } )
					.fromTo( phsThumbnailPortraitCover, { scaleY: 1 }, { scaleY: 0, duration: 0.65, delay: 0.1, transformOrigin: "center bottom", ease: "power1.out"  } );
			}

		}
			
	}

	// Portfolio item page - project body - image
	let projectBodyImgColumn = $( '.sk__project-body-image-col' );
	let projectBodyImg = $( '.sk__project-body-image-col img' );
	if ( (projectBodyImg.length) && (projectBodyImgColumn.length) ) {
		gsap.fromTo( projectBodyImg, 
			{
				opacity:0,
				xPercent:100
			}, {
				opacity: 1,
				xPercent:0, 
				ease: "power1.out",
				duration:1,
				delay: 0.2,
				scrollTrigger: {
					trigger: projectBodyImgColumn,
					start: "top 50%"
				},
				stagger: 0.08
		});
	}
	
	// Portfolio item page - project body - info elements
	let projectBodyInfo = $( '.sk__project-body-info-col' );
	let projectBodyInfoElements = $( '.sk__project-body-info-col .animated-element' );
	if ( (projectBodyInfo.length) && (projectBodyInfoElements.length) ) {
		gsap.fromTo( projectBodyInfoElements, 
			{
				opacity:0,
				x:-40
			}, {
				opacity: 1,
				x:0, 
				ease: "power1.out",
				scrollTrigger: {
					trigger: projectBodyInfo,
					start: "top 50%"
				},
				stagger: 0.08
		});
	}


	/**
	 * Contact us page animations
	 */
	let contactMainSection = $( '.sk__contact-page #contact-us');
	if ( contactMainSection.length ) {
		gsap.to( contactMainSection, {
			opacity: 1,
			duration: 0.6,
			ease: "power1.out",
			delay: 1.2
		});
	}


	/**
	 * General elements animations
	 */

	// Main menu logo (mobile)
	let mainMenuMobileLogo = $( '.sk__mobile-main-logo' );
	if ( mainMenuMobileLogo.length ) {
		gsap.to( mainMenuMobileLogo, {
			opacity: 1,
			duration: 0.6,
			ease: "power1.out",
			delay: 0.15
		});
	}
	// Main menu logo (desktop)
	let mainMenuDesktopLogo = $( '.navbar-brand' );
	if ( mainMenuDesktopLogo.length ) {
		gsap.to( mainMenuDesktopLogo, {
			opacity: 1,
			duration: 0.6,
			ease: "power1.out",
			delay: 0.15
		});
	}
	// Main menu bar / menu header
	let mainMenuBar = $( '.sk__mobile-menu-bar' );
	if ( mainMenuBar.length ) {
		gsap.to( mainMenuBar, {
			opacity: 1,
			duration: 0.6,
			ease: "power1.out",
			delay: 0.3
		});
	}
	// Main menu (mobile) trigger/hamburger
	let mainMenuTrigger = $( '.hc-nav-trigger' );
	if ( mainMenuTrigger.length ) {
		gsap.to( mainMenuTrigger, {
			opacity: 1,
			duration: 0.6,
			ease: "power1.out",
			delay: 0.15
		});
	}

	// Header section entrance animation
	let generalHeaderSection = $( 'section.sk__animated-header' );
	if ( generalHeaderSection.length ) {
		let delayTime = 0.7;
		let durationTime = 0.6;
		gsap.to( generalHeaderSection, {
			y:0,
			opacity: 1,
			duration: 0.6,
			ease: "power1.out",
			delay:delayTime,
			onComplete:parallaxHeader
		});
	} else {
		parallaxHeader();
	}

	/**
	 * Body section aka the first section after animated header,
	 * faded in with delay to let header animations finish first
	 */
	let bodySection = $( '.sk__body-section' );
	if ( bodySection.length ) {
		gsap.to( bodySection, {
			delay: 1.2,
			opacity: 1,
			duration: 0.6,
			ease: "power1.out"
		});
	}

	/**
	 * Parallax Backgrounds on Scroll
	 * https://codepen.io/ChrisCrossCrash/pen/YzwjKYG
	 */
	var parallaxBackgroundsSelector = '.sk__parallax-background-section';
	if ( !( isMobile != true ) ) {
		// skip loading parallax on hero images on mobile
		$( '.carousel-item .sk__parallax-background-section' ).addClass( 'sk__skip-parallax-background-section' );
		$( '.carousel-item .sk__skip-parallax-background-section' ).removeClass( 'sk__parallax-background-section' );
	}
	gsap.utils.toArray( ".sk__parallax-background-section" ).forEach((section, i) => {
		section.bg = section.querySelector( ".sk__parallax-background-element" );
		function originX() {
			let parallaxBackgroundOriginX = section.bg.dataset.skOriginX; // data-sk-origin-x
			if ( parallaxBackgroundOriginX == 'left' ) {
				parallaxBackgroundOriginX = 'left';
			} else if ( parallaxBackgroundOriginX == 'right' ) {
				parallaxBackgroundOriginX = 'right';
			} else if ( parallaxBackgroundOriginX == 'center' ) {
				parallaxBackgroundOriginX = '50%';
			} else {
				parallaxBackgroundOriginX = '50%';
			}
			return parallaxBackgroundOriginX;
		}
		if (i) {
			parallaxBackgroundOriginX = originX();
			section.bg.style.backgroundPosition = `${parallaxBackgroundOriginX} ${innerHeight / 2}px`;
			gsap.to(section.bg, {
				backgroundPosition: `${parallaxBackgroundOriginX} ${-innerHeight / 2}`,
				ease: "none",
				scrollTrigger: {
					trigger: section,
					scrub: true,
					onUpdate: function(self) {
						gsap.set(section.bg, { top: self.scroll() - section.bg.parentElement.offsetTop })
					}
				}
			});
		} else {
			parallaxBackgroundOriginX = originX();
			section.bg.style.backgroundPosition = `${parallaxBackgroundOriginX} 0px`;
			gsap.to(section.bg, {
				backgroundPosition: `${parallaxBackgroundOriginX} ${-innerHeight / 2}px`,
				ease: "none",
				scrollTrigger: {
					trigger: section,
					start: "top top",
					scrub: true,
					onUpdate: function(self) {
						gsap.set(section.bg, { top: self.scroll() - section.bg.parentElement.offsetTop })
					}
				}
			});
		}
	});


	// Parallax Hero Video Carousel Item (on scroll)
	$( '.sk__hero-section .carousel-item .sk__video-background-section' ).each(function() {
		let parallaxHeroVideoTrigger = $( this );
		let parallaxHeroVideo = $( this ).find( '.sk__parallax-hero-video' );
		if ( (parallaxHeroVideo.length) && (parallaxHeroVideoTrigger.length) ) {
			gsap.fromTo( parallaxHeroVideo, 
				{
					yPercent: 0,
				}, {
					yPercent:60,
					ease: "none",
					scrollTrigger: {
						trigger: parallaxHeroVideoTrigger,
						start: "top top",
						end: "bottom top",
						scrub: true
					}
			});
		}
	});

	/**
	 * When footer is fixed to bottom (Coming soon and 404 pages)
	 * add "static-simple-footer" to body
	 */
	massFadeIn( '.static-simple-footer', '.footer-bottom > *', 0.2, '[0,0]', 2.3, 1 );

	/**
	 * Fancy gradient texts reveal
	 * put it in .cover-text-wrapper div
	 */
	$( '.fancy-gradient-text-box:not(.reveal-onscroll)' ).each(function() {
		let fancyGradientTextbox = $( this );
		if ( fancyGradientTextbox.length ) {
			revealText( '.fancy-gradient-text-box:not(.reveal-onscroll)', 0.4, 0.8 );
		}
	});
	let fancyGradientTextboxOnScroll = $( this );
	if ( fancyGradientTextboxOnScroll.length ) {
		scrollRevealText( '.fancy-gradient-text-box.reveal-onscroll', 0.4, 0, 0, 'bottom', false, 'top 95%', 'top 30%', 'play complete' );
	}

	// make menu background solid over selected sections
	$( '.sk__solid-menu-bar' ).each(function() {
		var section = $( this );
		if ( section.length ) {
			let sectionTL = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: "top 100px",
					end: "bottom 110px",
					toggleClass: {targets: "body", className: "sk__solid-menu"},
				},
			});
		}
	});
		
	// Back to Top Button
	let backToTopSection = $( '.sk__back-to-top-wrap' );
	if (backToTopSection.length) {
		gsap.to( backToTopSection,{
			scrollTrigger: {
				trigger: "body",
				start: "top -90%",
				toggleClass: {targets: backToTopSection, className: "sk__backtotop-visible"},
				scrub: true
			}
		});
	}

	// --- --- --- --- --- --- ### 
	// --- --- --- --- --- --- ###  Animations - End
	// --- --- --- --- --- --- ###


	/**
	 * Initiate hover parallax effect
	 * Parallax elements that react
	 * to mouse movement
	 */
	if ( isMobile != true ) {
		var parallaxLayersSceneRings = document.getElementById( 'sk__parallax-layers-1' );
		if ( parallaxLayersSceneRings ) {
			var parallaxLayersInstanceRings = new Parallax(parallaxLayersSceneRings);
		}
		var parallaxLayersSceneAbout = document.getElementById( 'sk__parallax-layers-about' );
		if ( parallaxLayersSceneAbout ) {
			var parallaxLayersInstanceAbout = new Parallax(parallaxLayersSceneAbout);
		}
		var parallaxLayersSceneFeaturedProject = document.getElementById( 'sk__parallax-layers-featured-project' );
		if ( parallaxLayersSceneFeaturedProject ) {
			var parallaxLayersInstanceFeaturedProject = new Parallax(parallaxLayersSceneFeaturedProject);
		}
		var parallaxLayersSceneLaptop = document.getElementById( 'sk__parallax-layers-laptop' );
		if ( parallaxLayersSceneLaptop ) {
			var parallaxLayersInstanceLaptop = new Parallax(parallaxLayersSceneLaptop);
		}
		var parallaxLayersSceneTextRight = document.getElementById( 'sk__parallax-layers-text-right' );
		if ( parallaxLayersSceneTextRight ) {
			var parallaxLayersInstanceTextRight = new Parallax(parallaxLayersSceneTextRight);
		}
	}


	/**
	 * Slick carousel - Initiate portfolio thumbnails carousel
	 */
	$( '.sk__portfolio-wrapper:not(.not-slick)' ).slick({
		dots: true,
		infinite: false,
		speed: 1200,
		slidesToShow: 5,
		slidesToScroll: 3,
		autoplay: true, // (when in viewport)
		autoplaySpeed: 6000,
		responsive: [
			{
				breakpoint: 1920,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3, 
					arrows: false
				}
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2, 
					arrows: false
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	}).slick('slickPause');

	// Play slick carousel when portfolio becomes visible
	function playSlickPortfolio() {
		$('.sk__portfolio-wrapper:not(.not-slick)').slick('slickPlay')
	}
	let slickPortfolio = $( '.sk__portfolio-wrapper:not(.not-slick)' );
	if ( slickPortfolio.length ) {
		ScrollTrigger.create({
			trigger: slickPortfolio,
			onEnter: playSlickPortfolio
		});
	}


	/**
	 * Window on load events
	 */
	window.onload = () => {

		/**
		 * Make anchor links work with GSAP ScrollSmoother
		 */

		// Detect if a link's href goes to the current page
		function getSamePageAnchor (link) {
			if (
				link.protocol !== window.location.protocol ||
				link.host !== window.location.host ||
				link.pathname !== window.location.pathname ||
				link.search !== window.location.search
			) {
				return false;
			}
			// console.log( link.hash.length );
			return link.hash;
		}

		// Scroll to a given hash, preventing the event given if there is one
		function scrollToHash(hash, e) {
			const elem = hash ? document.querySelector(hash) : false;
			if ( elem ) {
				if ( e ) e.preventDefault();
				// gsap.to( window, { scrollTo: elem } );
				smoother.scrollTo(elem, true);
			}
		}

		// If a link's href is within the current page, scroll to it instead
		document.querySelectorAll( 'a[href]:not([href="#"])' ).forEach( a => { // added :not([href="#"]) to avoid hrefs that ONLY contain the # sign and nothing else
			a.addEventListener( 'click', e => {
				scrollToHash( getSamePageAnchor( a ), e );
			});
		});

		// Scroll to the element in the URL's hash on load
		scrollToHash(window.location.hash);

		// Fix hero heading position 4/5
		equalizeHeroBoxesHeights();

		// Align social icons with main heading (4/5)
		alignSocialsWithHeading();

		// Vertical decorative text animation 1/2
		hugeDecorativeVerticalTexts();	

		// CTA section (warped text cta) 2/2
		warpedText();

		// Align warpedText() 2/3
		warpedTextAlign();

		// Clone services icons for hover effect
		iconboxCloneIcons();

		// Hero mega text - remove initial text spacing class
		let heroMegaText = $( '.h1-hero-mega-text' ); 
		if ( heroMegaText.length ) {
			let megaTextDelayMS = ( effectsMasterDelay - 1.1 ) * 1000;
			if ( megaTextDelayMS < 0 ) {
				megaTextDelayMS = 0;
			}
			setTimeout(function(){
				$( heroMegaText ).removeClass( 'unspaced' );
			}, megaTextDelayMS);
			setTimeout(function(){
				$( heroMegaText ).css( 'color', '#f9bd93' );
			}, ( megaTextDelayMS + 1800 ) );
		}

	};


	// For fixing the parallax inactive slide height issue (2/2)
	dispatchResizeExceptOn( 'sk__has-youtube-video' );


	/**
	 * Fix for on scroll hero slide background unwanted tick
	 * aka trigger scroll event
	 */
	window.scrollTo(window.scrollX, window.scrollY - 1);
	window.scrollTo(window.scrollX, window.scrollY + 1);


	/**
	 * On window resize events
	 */
	window.addEventListener( 'resize', function () {

		/**
		 * Helper - screen ratio 2/2
		 */
		screenRatio = getScreenRatio();

		// Fix hero heading position 5/5
		equalizeHeroBoxesHeights();

		// Rings section 2/2 - runs initially on load
		manageRingsSection();

		// Align social icons with main heading (5/5)
		alignSocialsWithHeading();

		// Vertical decorative text animation 2/2
		hugeDecorativeVerticalTexts();

		// Align warpedText() 3/3
		warpedTextAlign();

	});

	/**
	 * Theme Preview ONLY - START =============================================================
	 */

	// Parallax halfscreens homepage(s) - turn ON pattern overlay
	$( 'a.demo-turn-on-pattern-overlay' ).on( 'click', function( event ) {
		event.preventDefault();
		$( this ).parentsUntil( 'section' ).find( '.sk__pattern-overlay' ).toggleClass( 'd-block d-none' );
	});

	// Parallax halfscreens homepage(s) - turn ON pattern overlay
	$( 'a.demo-turn-on-gradient-overlay' ).on( 'click', function( event ) {
		event.preventDefault();
		$( this ).parentsUntil( 'section' ).find( '.sk__gradient-back-v1' ).toggleClass( 'd-block d-none' );
	});

	/**
	 * Theme preview Animations
	 */

	// Theme preview hero thumnails entrance
	let themePreviewHero = $( '.tp-hero' );
	let themePreviewHeroThumbsColumn = $( '.tp-thumbs' );
	let themePreviewHeroThumbs = $( '.tp-thumbs div[class*="tp-thumb-"]' );
	if ( ( themePreviewHeroThumbsColumn.length ) && ( themePreviewHeroThumbs.length ) ) {
		$( themePreviewHeroThumbs ).each(function(i) {
			let elem = $( this );
			let theDuration = 0.8;
			let delayOne = 1 + (i * 0.05);
			let delayTwo = theDuration + delayOne;
			gsap.to( elem, { scale: 0.9, opacity: 1, duration: theDuration, delay: delayOne, ease: "power3.inOut" } );
			gsap.to( elem, { scale: 1, duration: 5, delay: delayTwo, ease: "power1.out" } );
		});
	}
	// Theme preview hero (on scroll)
	if ( ( themePreviewHero.length ) && ( themePreviewHeroThumbs.length ) ) {
		gsap.to( ".tp-hero > div:not(.sk__parallax-header-image)", {
			y: 430,
			opacity: 0,
			scrollTrigger: {
				trigger: "body",
				start: "top top-=10px",
				end: "top top-=100%",
				scrub: true
			}
		});
		gsap.to( ".tp-hero .sk__parallax-header-image", {
			y: 430,
			scrollTrigger: {
				trigger: "body",
				start: "top top-=10px",
				end: "top top-=100%",
				scrub: true
			}
		});
	}
	revealText( '.tp-hero h1', 0.7, 0.95, false, 'bottom' );
	revealText( '.tp-hero h2', 0.7, 1.6, false, 'top' );
	revealText( '.tp-hero p', 0.7, 2, false, 'top' );

	revealText( '.sk__icons-presentation-section h1', 0.4, 0.4 );
	revealText( '.sk__icons-presentation-section h2', 0.4, 0.6, 0.3, 'top' );
	massFadeIn( '.sk__icons-presentation-icons', '.sk__icons-presentation-icons > *', 0.03, '[0,0]', 1.4 );
	
	// Theme elements - GSAP - features images mass fade in
	massFadeIn( '.gsap-features', '.gsap-features .img-feature-wrap', 0.1, '[0,0]' );

	massFadeIn( '.sk__elements-typography-col', '.sk__elements-typography-col > *', 0.03, '[0,0]', 1.4 );

	// Demo select thumbnails (on scroll)
	$( '.sk__imagebox' ).each( function( i ) {
		let element = $( this );
		if ( element.length ) {
			gsap.fromTo( element, 
				{
					opacity:0,
					x:-20
				}, {
					opacity: 1,
					x:0, 
					ease: "power3.out",
					scrollTrigger: {
						trigger: element,
						start: "top 80%", 
						end: "top 30%",
						toggleActions: 'play complete',
						scrub: false
					},
					duration: 1
			});
		}
	});

	/**
	 * Theme Preview ONLY - END ===============================================================
	 */

});