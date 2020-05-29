import {doAjaxCall} from "./ajaxTool.js";

let slidesContainer = document.querySelector(".slides");
let currentSlideIndex = 0;

let typeLinks = document.querySelectorAll('.type-link');
let slideContainer = document.querySelector('.slides');

for (let i = 0; i < typeLinks.length; i++) {
    let typeLink = typeLinks[i];
    typeLink.addEventListener("click", (link) => {
        let target = link.target;
        let activeLink = document.querySelector('.type-link.active');
        activeLink.classList.remove('active');
        target.classList.add('active');
        slidesContainer.style.opacity = 0;

        setTimeout(() => {
            doAjaxCall("/main?type=" + target.innerHTML).then(res => {
                slidesContainer.innerHTML = res;
                fullpage_api.destroy();
                initSlider();
                setTimeout(() => slidesContainer.style.opacity = 1, 1);
            })
        }, 1000);
    })
}

export function initSlider() {

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
                if (direction === 'up') {
                    currentSlideIndex = origin.index - 1;
                } else {
                    currentSlideIndex = origin.index + 1;
                }
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
    viewLinkElement.href = '/arts/' + artName;
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
