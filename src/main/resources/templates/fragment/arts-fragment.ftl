<div class="row">
    <#list arts as art>
    <div class="col-lg-3 col-md-4 col-sm-12 image-container">
        <div class="image" style="background: url(${art.imagePath})"></div>
    </div>
    </#list>
</div>