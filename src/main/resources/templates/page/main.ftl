<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>VLAD ZVARUN</title>
    <link rel="stylesheet" href="/css/preload.css">
    <link rel="stylesheet" href="/css/main-arts.css"/>
    <link rel="stylesheet" href="/css/slider.css">

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
    <span id="preload-link" onclick="onStartLinkClick()">START</span>
</div>

<!--After preload content, header and footer containers are hidden on preload-->
<div class="header-container" style="display: none">
    <#include "../fragment/logo-fragment.ftl">
    <#include "../fragment/art-type-navigation-fragment.ftl">
    <#include "../fragment/navigation-fragment.ftl">
</div>

<!--Art container-->
<div class="slides">
    <#include "../fragment/main-arts-fragment.ftl">
</div>

<div class="footer-container" style="display: none;">
    <#include "../fragment/rights-fragment.ftl">
    <a onmouseover="onViewLinkHover()" onmouseout="onViewLinkHoverOut()" class="view-link">View</a>
    <#include "../fragment/social-links-fragment.ftl">
</div>

<script src="/js/slider.js"></script>
<script src="/js/main-arts.js"></script>
<script src="/js/link-animation.js"></script>

</body>
</html>