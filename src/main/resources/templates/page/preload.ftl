<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>VLAD ZVARUN</title>
    <link rel="stylesheet" href="/css/preload.css">
    <link rel="stylesheet" href="/css/main-arts.css"/>
    <!--<link rel="stylesheet" href="/css/slider.css">-->
    <link rel="stylesheet" href="/css/fullpage.css"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous">
</head>
<body>

<!-- vz preload animation part -->
<div id="preload-logo-container">
    <img id="preload-animation" src="/img/load.gif">
</div>

<!-- vz preload text part-->
<div id="preload-text-container">
    <h1 id="preload-owner-name">Vlad Zvarun</h1>
    <h3 id="preload-profession"></h3>
    <span id="preload-link">START</span>
</div>

<!--After preload content, header and footer containers are hidden on preload-->
<div class="header-container" style="display: none">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark transparent-nav">
    <#include "../fragment/logo-fragment.ftl">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    <#include "../fragment/art-type-navigation-fragment.ftl">
    <#include "../fragment/navigation-fragment.ftl">
    </nav>
</div>

<!--Art container-->
<div class="slides" id="fullpage">
<#include "../fragment/main-arts-fragment.ftl">
</div>

<div class="footer-container" style="display: none;">
<#include "../fragment/rights-fragment.ftl">
    <a class="view-link">View</a>
<#include "../fragment/social-links-fragment.ftl">
</div>

<!--<script src="/js/slider.js"></script>-->

<script src="/js/link-animation.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
<script src="/js/fullPage.js"></script>
<script src="/js/main-arts.js"></script>
</body>
</html>