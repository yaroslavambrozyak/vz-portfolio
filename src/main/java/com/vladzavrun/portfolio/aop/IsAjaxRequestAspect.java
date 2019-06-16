package com.vladzavrun.portfolio.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.SoftException;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.lang.annotation.Annotation;

@Aspect
@Component
public class IsAjaxRequestAspect {

    @Around("execution(public * *(.., @IsAjaxRequest (*), ..))")
    public Object checkAjaxRequest(ProceedingJoinPoint pjp) throws Throwable {
        Object[] args = pjp.getArgs();

        //get all annotations for arguments
        MethodSignature signature = (MethodSignature) pjp.getSignature();
        String methodName = signature.getMethod().getName();
        Class<?>[] parameterTypes = signature.getMethod().getParameterTypes();
        Annotation[][] annotations;
        try {
            annotations = pjp.getTarget().getClass().
                    getMethod(methodName, parameterTypes).getParameterAnnotations();
        } catch (Exception e) {
            throw new SoftException(e);
        }

        //Find annotated argument
        for (int i = 0; i < args.length; i++) {
            for (Annotation annotation : annotations[i]) {
                if (annotation.annotationType() == IsAjaxRequest.class) {
                    if (parameterTypes[i].isAssignableFrom(Boolean.class)) {
                        // and replace it with a new value
                        args[i] = isAjaxRequest();
                    } else {
                        throw new IllegalArgumentException("parameter must be boolean");
                    }
                }
            }
        }
        //execute original method with new args
        return pjp.proceed(args);
    }

    @Autowired
    private HttpServletRequest request;

    private Boolean isAjaxRequest() {
        String requestedWithHeader = request.getHeader("X-Requested-With");
        return "XMLHttpRequest".equals(requestedWithHeader);
    }
}
