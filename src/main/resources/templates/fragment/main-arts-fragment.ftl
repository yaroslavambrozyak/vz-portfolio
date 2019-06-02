<#list arts as art>
    <div class="section slide" >
        <div class="slide-img-container" style='background-image:url(${art.imagePath});'></div>
        <span class="art-name">${art.name}</span>
    </div>
</#list>