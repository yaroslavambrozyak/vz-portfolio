package com.vladzavrun.portfolio.aop;

import com.vladzavrun.portfolio.tool.AjaxTools;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

@Aspect
@Component
public class AjaxRequireAspect {

    @Autowired
    private HttpServletRequest request;

    @Around("@annotation(annotation)")
    public Object ajaxRequestCheck(ProceedingJoinPoint pjp, AjaxRequire annotation) throws Throwable {
        return AjaxTools.isAjaxRequest(request) ? pjp.proceed() : annotation.fallBackUrl();
    }

}
