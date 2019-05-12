let slidesContainer = document.querySelector(".slides");

function onViewLinkHover() {
    let artNames = document.getElementsByClassName("art-name");
    let artName = artNames[currentSlide - 1];
    artName.style.transform = "translateX(0%)";
    artName.style.left = "5%";
}

function onViewLinkHoverOut() {
    let artNames = document.getElementsByClassName("art-name");
    let artName = artNames[currentSlide - 1];
    artName.style.left = "0%";
    artName.style.transform = "translateX(-101%)";
}

function onStartLinkClick() {
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
            slider('.slides');
            document.querySelector('.footer-container').style.display = 'block';
            document.querySelector('.header-container').style.display = 'block';
        }, delay);
    });
}

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
    doAjaxCall(href).then((response) =>{
        slidesContainer.innerHTML = response;
        slidesContainer.style.opacity = 1;
        sliderIndicators.parentNode.removeChild(sliderIndicators);
        slider('.slides');
        sliderIndicators.style.opacity = 1;
    });
}



