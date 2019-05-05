window.onload = () => {
    document.querySelector('body').style.opacity = 1;
};

let artsContainer = document.querySelector('.arts-container');

function onTypeLinkClick(clickedLink) {
    let activeLink = document.querySelector('.active');
    activeLink.classList.remove('active');
    clickedLink.classList.add('active');
    let href = '/arts';
    artsContainer.style.opacity = 0;
    doAjaxCall(href).then((response) => {
        artsContainer.innerHTML = response;
        artsContainer.style.opacity = 1;
    })
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