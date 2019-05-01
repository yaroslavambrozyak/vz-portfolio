function onStartLinkClick() {
    document.getElementById("preload-text-container").style.opacity = "0";
    document.querySelector(".slides").style.filter = "grayscale(0%)";

    let begin = new Date().getMilliseconds();
    makeAjaxCall("/main?forPreload=true").then((response) => {
        let end = new Date().getMilliseconds();
        let diff = end - begin;
        let delay = diff < 2100 ? 2100 : 0;
        setTimeout(function () {
            postPreload(response);
        }, delay);
    });
}

function postPreload(response) {
    document.getElementById("preload-text-container").style.display = "none";
    document.querySelector('.slides').innerHTML += response;
    document.querySelector('.footer-container').style.display = 'block';
    document.querySelector('.header-container').style.display = 'block';
    slider('.slides');
}

function makeAjaxCall(url) {
    return new Promise(function (succeed, fail) {
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        request.addEventListener("load", function () {
            if (request.status < 400)
                succeed(request.response);
            else
                fail(new Error("Request failed: " + request.statusText));
        });
        request.addEventListener("error", function () {
            fail(new Error("Network error"));
        });
        request.send();
    });
}

