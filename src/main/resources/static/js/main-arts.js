slider('.slides');

var currentSliderPosition;

function onViewLinkHover() {
    var artNames = document.getElementsByClassName("art-name");
    currentSliderPosition = getSliderPosition();
    var artName = artNames[currentSliderPosition];
    artName.style.transform = "translateX(0%)";
    artName.style.left = "5%";
}

function onViewLinkHoverOut() {
    var artNames = document.getElementsByClassName("art-name");
    var artName = artNames[currentSliderPosition];
    artName.style.left = "0%";
    artName.style.transform = "translateX(-101%)";
}

function getSliderPosition() {
    var el = document.getElementsByClassName("slides")[0];
    var values = el.style.transform.split(/\w+\(|\);?/);
    if (!values[1] || !values[1].length) {
        return 0;
    }
    var yTransition = values[1].split(/,\s?/g)[1];
    var yValue = yTransition.replace('%', '');
    return Math.abs(yValue / 100);
}

