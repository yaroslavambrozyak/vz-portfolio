<#list arts as art>
    <section class="slide" >
        <div class="slide-img-container" style='background-image:url(${art.imagePath});'></div>
        <span class="art-name">${art.name}</span>
    </section>
</#list>