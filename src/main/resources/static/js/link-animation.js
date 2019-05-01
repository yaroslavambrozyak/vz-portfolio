/*var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        event.preventDefault();
        var element = event.target;
        var href = element.href;
        var body = document.getElementsByTagName('body')[0];
        body.style.opacity = 0;
        setTimeout(function () {
            window.location.href = href;
        }, 700)
    });
}*/

var ajaxLinks = document.getElementsByClassName("type-link");
var slidesContainer = document.querySelector(".slides");

for(var j = 0; j< ajaxLinks.length; j++){
    ajaxLinks[j].addEventListener('click', function (event) {
       event.preventDefault();
       var element = event.target;
       var href = element.href;
       slidesContainer.opacity = 0;
       makeAjaxCall(href).then(function (response) {
           slidesContainer.innerHTML = response;
           slidesContainer.opacity = 1;
           console.log(response);
       })
    });
}

/*function makeAjaxCall(url) {
    return new Promise(function(succeed, fail) {
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.addEventListener("load", function() {
            if (request.status < 400)
                succeed(request.response);
            else
                fail(new Error("Request failed: " + request.statusText));
        });
        request.addEventListener("error", function() {
            fail(new Error("Network error"));
        });
        request.send();
    });
}*/