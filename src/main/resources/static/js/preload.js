function onStartLinkClick() {
    document.getElementById("preload-text-container").setAttribute("style","opacity:0");
    document.getElementById("preload-art-container").style.filter = "grayscale(0%)";

    setTimeout(function () {
        window.location.href = '/mainArts';
    },2100)
}

