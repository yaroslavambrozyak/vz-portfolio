<div class="type-link-container">
<#list 0..categories?size-1 as i>
    <#if i==0>
        <span class="type-link active" onclick="onTypeLinkClick(this)">${categories[i].name}</span>
    <#else>
        <span class="type-link" onclick="onTypeLinkClick(this)">${categories[i].name}</span>
    </#if>

    <#sep>
        <span class="text-separator">/</span>
    </#sep>
</#list>
</div>