let slidesContainer = document.querySelector(".slides");
let currentSlideIndex = 0;

document.getElementById('preload-link').onclick = () => {
    document.getElementById("preload-text-container").style.opacity = "0";
    document.querySelector(".slides").style.filter = "grayscale(0%)";

    let begin = new Date().getMilliseconds();
    doAjaxCall("/main?preload=true").then((response) => {
        let end = new Date().getMilliseconds();
        let diff = end - begin;
        let delay = diff < 2100 ? 2100 - diff : 0;
        setTimeout(function () {
            document.getElementById("preload-text-container").style.display = "none";
            let sliderContainer = document.querySelector('.slides');
            sliderContainer.insertAdjacentHTML('beforeend', response);
            //slider('.slides');

            initSlider();
            document.querySelector('.footer-container').style.display = 'block';
            document.querySelector('.header-container').style.display = 'block';
        }, delay);
    });
};

function doAjaxCall(url) {
    return new Promise(function (succeed, fail) {
        let request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        request.addEventListener("load", () => {
            if (request.status < 400)
                succeed(request.response);
            else
                fail(new Error("Request failed: " + request.statusText));
        });
        request.addEventListener("error", () => {
            fail(new Error("Network error"));
        });
        request.send();
    });
}

function onTypeLinkClick(clickedLink) {
    let activeLink = document.querySelector('.active');
    activeLink.classList.remove('active');
    clickedLink.classList.add('active');
    slidesContainer.opacity = 0;
    let href = '/main?type=' + clickedLink.innerHTML;
    let sliderIndicators = document.querySelector('.slider__indicators');
    sliderIndicators.style.opacity = 0;
    doAjaxCall(href).then((response) => {
        slidesContainer.innerHTML = response;
        slidesContainer.style.opacity = 1;
        sliderIndicators.parentNode.removeChild(sliderIndicators);
        slider('.slides');
        sliderIndicators.style.opacity = 1;
    });
}


function initSlider() {

    new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed: 950,
        easingcss3: 'cubic-bezier(1,.67,0,.98)',
        licenseKey: '1B6F0697-D7C5407B-BD386A4C-C79B4EB8',
        afterLoad: function (origin, destination, direction) {
            changeSliderNav();
            if (origin === null) {
                changeViewLink(currentSlideIndex);
            } else {
                currentSlideIndex = origin.index + 1
                changeViewLink(currentSlideIndex);
            }
        }
    });

    let spanElements = document.querySelectorAll('#fp-nav ul li a span');
    for (let i = 0; i < spanElements.length; i++) {
        spanElements[i].parentNode.removeChild(spanElements[i]);
    }

}

function changeSliderNav() {
    let navigation = document.querySelectorAll('#fp-nav ul li a');
    console.log(navigation);
    for (let i = 0; i < navigation.length; i++) {
        let navElem = navigation[i];
        if (navElem.classList.contains('active')) {
            navElem.innerHTML = i + 1 + '/' + navigation.length;
        } else {
            navElem.innerHTML = '&nbsp;/';
        }
    }
}


let viewLinkElement = document.querySelector('.view-link');

function changeViewLink(sliderIndex) {
    let artName = document.getElementsByClassName('art-name')[sliderIndex].innerHTML;
    viewLinkElement.href = '/art/' + artName;
}

viewLinkElement.onmouseover = () => {
    let artNames = document.getElementsByClassName("art-name");
    let artName = artNames[currentSlideIndex];
    artName.style.transform = "translateX(0%)";
    artName.style.left = "5%";
};

viewLinkElement.onmouseout = () => {
    let artNames = document.getElementsByClassName("art-name");
    let artName = artNames[currentSlideIndex];
    artName.style.left = "0%";
    artName.style.transform = "translateX(-101%)";
};
