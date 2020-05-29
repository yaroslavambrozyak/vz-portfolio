<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>VLAD ZVARUN</title>
    <link rel="stylesheet" href="/css/art.css">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous">
</head>
<body>

<nav class="navbar fixed-top navbar-expand-lg navbar-dark">
<#include "../fragment/logo-fragment.ftl">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
<#include "../fragment/navigation-fragment.ftl">
</nav>
<div class="art-navigation-arrow-container">
    <a href="#" class="left-button">
        <svg width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="prev" transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)">
                <polygon class="arrow" fill="#FFFFFF" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
            </g>
        </svg>
        <span class="prev-art">previous work</span>
    </a>

    <a href="#" class="right-button">
        <span class="next-art">next work</span>
        <svg width="18px" height="17px" viewBox="-1 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g>
                <polygon class="arrow" fill="#FFFFFF" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
            </g>
        </svg>
    </a>
</div>
<div class="row img-row">
    <div class="col-sm-12 col-md-6 img-container" tabindex="-1" id="focused">
        <#list art.sub as href>
            <!--<div class="img" style="background: url(${href})"></div>-->
            <img src="${href}" class="img">
        </#list>
    </div>

    <div class="col-sm-12 col-md-6 description-container">
        asdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</br>
        asdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</br>
        asdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</br>
        asdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</br>
        asdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</br>
    </div>
</div>

<div class="images-modal">

    <!-- The Close Button -->
    <span class="images-modal-close">&times;</span>

    <!-- Modal Content (The Image) -->
    <img class="img-modal">

    <!-- Modal Caption (Image Text) -->
</div>
<script src="/js/art.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</body>
</html>