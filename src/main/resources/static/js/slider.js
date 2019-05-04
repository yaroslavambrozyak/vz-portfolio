var currentSlide;
var isInitialized = false;

var slider = function (sliderElement) {

	var pages = [];
	var isChanging = false;
	var keyUp = {38:1, 33:1};
	var keyDown = {40:1, 34:1};
    var slidesAmount = document.getElementsByClassName("slide").length;
    var viewLink = document.querySelector(".view-link");
	currentSlide = 1;

	var init = function () {
		if(!isInitialized) {
            document.body.classList.add('slider__body');

            // control scrolling
            whatWheel = 'onwheel' in document.createElement('div') ? 'wheel' : document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
            window.addEventListener(whatWheel, function (e) {
                var direction = e.wheelDelta || e.deltaY;
                if (direction > 0) {
                    changeSlide(-1);
                } else {
                    changeSlide(1);
                }
            });

            // allow keyboard input
            window.addEventListener('keydown', function (e) {
                if (keyUp[e.keyCode]) {
                    changeSlide(-1);
                } else if (keyDown[e.keyCode]) {
                    changeSlide(1);
                }
            });

            // page change animation is done
            detectChangeEnd() && document.querySelector(sliderElement).addEventListener(detectChangeEnd(), function () {
                if (isChanging) {
                    setTimeout(function () {
                        isChanging = false;
                        window.location.hash = document.querySelector('[data-slider-index="' + currentSlide + '"]').id;
                    }, 400);
                }
            });
        }
		// set up page and build visual indicators
		document.querySelector(sliderElement).classList.add('slider__container');
		var indicatorContainer = document.createElement('div');
		indicatorContainer.classList.add('slider__indicators');



		var index = 1;
		[].forEach.call(document.querySelectorAll(sliderElement + ' > *'), function (section) {

			var indicator = document.createElement('a');
			indicator.classList.add('slider__indicator');
			indicator.setAttribute('data-slider-target-index', index);
			indicatorContainer.appendChild(indicator);

			if(index === 1)
            	indicator.innerHTML = index + "/" + slidesAmount;
			else
				indicator.innerHTML = "&nbsp;/&nbsp;";

			section.classList.add('slider__page');
			pages.push(section);
			section.setAttribute('data-slider-index', index++);

		});

		document.body.appendChild(indicatorContainer);
		document.querySelector('a[data-slider-target-index = "' + currentSlide +'"]').classList.add('slider__indicator--active');


		// stuff for touch devices
		var touchStartPos = 0;
		var touchStopPos = 0;
		var touchMinLength = 90;
		if(!isInitialized) {
            document.addEventListener('touchstart', function (e) {
                e.preventDefault();
                if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
                    var touch = e.touches[0] || e.changedTouches[0];
                    touchStartPos = touch.pageY;
                }
            });
            document.addEventListener('touchend', function (e) {
                e.preventDefault();
                if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
                    var touch = e.touches[0] || e.changedTouches[0];
                    touchStopPos = touch.pageY;
                }
                if (touchStartPos + touchMinLength < touchStopPos) {
                    changeSlide(-1);
                } else if (touchStartPos > touchStopPos + touchMinLength) {
                    changeSlide(1);
                }
            });
        }
		isInitialized = true;
		changeViewLinkAddress(currentSlide);
	};


	// prevent double scrolling
	var detectChangeEnd = function () {
		var transition;
		var e = document.createElement('foobar');
		var transitions = {
			'transition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'MozTransition': 'transitionend',
			'WebkitTransition': 'webkitTransitionEnd'
		};

		for(transition in transitions) {
			if (e.style[transition] !== undefined) {
				return transitions[transition];
			}
		}
		return true;
	};


	// handle css change
	var changeCss = function (obj, styles) {
		for (var _style in styles) {
			if (obj.style[_style] !== undefined) {
				obj.style[_style] = styles[_style];
			}
		}
	};


	// change view button address on slide changes
	var changeViewLinkAddress = function (index) {
		var elements = document.getElementsByClassName("art-name");
		var element = elements[index-1];
		viewLink.href = element.innerHTML;
    };

	// handle page/section change
	var changeSlide = function (direction) {

		// already doing it or last/first page, staph plz
		if (isChanging || (direction == 1 && currentSlide == pages.length) || (direction == -1 && currentSlide == 1)) {
			return;
		}

		// change page
		currentSlide += direction;
		isChanging = true;
		changeCss(document.querySelector(sliderElement), {
			transform: 'translate3d(0, ' + -(currentSlide - 1) * 100 + '%, 0)'
		});

		changeViewLinkAddress(currentSlide);

		// change dots
        var oldSlideNav = document.querySelector('a.slider__indicator--active');
		oldSlideNav.classList.remove('slider__indicator--active');
		oldSlideNav.innerHTML = "&nbsp;/&nbsp;";

        var newSlideNav = document.querySelector('a[data-slider-target-index="' + currentSlide +'"]');
		newSlideNav.classList.add('slider__indicator--active');
		newSlideNav.innerHTML = currentSlide + "/" + slidesAmount;
	};

	// go to spesific slide if it exists
	var gotoSlide = function (where) {
		var target = document.querySelector(where).getAttribute('data-slider-index');
		if (target != currentSlide && document.querySelector(where)) {
			changeSlide(target - currentSlide);
		}
	};

	// if page is loaded with hash, go to slide
	if (location.hash) {
	  setTimeout(function () {
	    window.scrollTo(0, 0);
	    gotoSlide(location.hash);
	  }, 1);
	};

	// we have lift off
	if (document.readyState === 'complete') {
		init();
	} else {
		window.addEventListener('onload', init(), false);
	}
};

