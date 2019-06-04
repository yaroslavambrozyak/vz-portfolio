package com.vladzavrun.portfolio.controller;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionHandlerController {

    @ExceptionHandler(Throwable.class)
    public String exceptionHandler(){
        return null;
    }

}
