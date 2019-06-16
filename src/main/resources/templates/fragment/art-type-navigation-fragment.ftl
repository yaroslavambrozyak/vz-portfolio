<div class="type-link-container">
<#list 0..categories?size-1 as i>
    <#if i==0>
        <span class="type-link active">${categories[i].name}</span>
    <#else>
        <span class="type-link">${categories[i].name}</span>
    </#if>

    <#sep>
        <span class="text-separator">/</span>
    </#sep>
</#list>
</div>