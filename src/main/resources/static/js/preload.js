function onStartLinkClick() {
    document.getElementById("preload-text-container").setAttribute("style","opacity:0");
    document.getElementById("preload-art-container").style.filter = "grayscale(0%)";



    setTimeout(function () {
        //window.location.href = '/mainArts';
        getMainArtContent();
    },2100)
}

function getMainArtContent() {

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
                document.open();
                document.write(xmlhttp.responseText);
                document.close();
            }
            else if (xmlhttp.status == 400) {
                alert('There was an error 400');
            }
            else {
                alert('something else other than 200 was returned');
            }
        }
    };

    xmlhttp.open("GET", "/main", true);
    xmlhttp.send();
}

