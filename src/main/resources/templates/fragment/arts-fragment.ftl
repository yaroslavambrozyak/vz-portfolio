<div class="row">
    <#list arts as art>
    <div class="col-lg-3 col-md-4 col-sm-12 image-container">
        <div class="image" style="background: url(${art.imagePath})"></div>
        <div class="overlay">
            <div class="overlay-art-name">${art.name}</div>
            <a class="overlay-view animated-transition" href="/arts/${art.name}">View</a>
        </div>
    </div>
    </#list>
</div>