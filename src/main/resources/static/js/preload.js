function onStartLinkClick() {
    document.getElementById("preload-text-container").setAttribute("style", "opacity:0");
    document.getElementById("preload-art-container").style.filter = "grayscale(0%)";
    var begin = new Date().getMilliseconds();
    makeAjaxCall("/main").then(function (response) {
        var end = new Date().getMilliseconds();
        var diff = end - begin;
        var delay = diff < 2100 ? 2100 : 0;
        setTimeout(function () {
            document.querySelector('body').innerHTML = response;
            slider('.slides');
        }, delay);
    });
}


function makeAjaxCall(url) {
    return new Promise(function (succeed, fail) {
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        request.setRequestHeader('X-From-Preload-Page', 'true');
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

