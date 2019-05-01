function onViewLinkHover() {
    var artNames = document.getElementsByClassName("art-name");
    var artName = artNames[currentSlide];
    artName.style.transform = "translateX(0%)";
    artName.style.left = "5%";
}

function onViewLinkHoverOut() {
    var artNames = document.getElementsByClassName("art-name");
    var artName = artNames[currentSlide];
    artName.style.left = "0%";
    artName.style.transform = "translateX(-101%)";
}


