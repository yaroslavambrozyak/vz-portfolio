package com.vladzavrun.portfolio.tool;

import javax.servlet.http.HttpServletRequest;

public class AjaxTools {

    public static boolean isAjaxRequest(HttpServletRequest request){
        String requestedWithHeader = request.getHeader("X-Requested-With");
        return "XMLHttpRequest".equals(requestedWithHeader);
    }

}
