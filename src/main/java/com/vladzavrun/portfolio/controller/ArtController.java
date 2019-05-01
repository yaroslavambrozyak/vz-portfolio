package com.vladzavrun.portfolio.controller;

import com.vladzavrun.portfolio.service.ArtService;
import com.vladzavrun.portfolio.tool.AjaxTools;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.PushBuilder;

@Controller
public class ArtController {

    private final ArtService artService;

    public ArtController(ArtService artService) {
        this.artService = artService;
    }

    @GetMapping("/")
    public String showPreloadPage(Model model) {
        model.addAttribute("imagePath", artService.getPreloadImagePath());
        return "/page/preload";
    }

    @GetMapping("/main")
    public String showMainArtPage(HttpServletRequest request, Model model) {
        model.addAttribute("arts", artService.getMainArtsByCategory(""));

        String requestFromPreloadPage = request.getHeader("X-From-Preload-Page");
        if (requestFromPreloadPage != null && requestFromPreloadPage.equals("true")) {
            return "/component/main-art-component";
        }

        return AjaxTools.isAjaxRequest(request) ? "/fragment/main-arts-slider-fragment" : "/page/main-arts";
    }

    @GetMapping("/arts")
    public String showAllArtsPage() {
        return null;
    }

    @GetMapping("/art")
    public String showArtPage() {
        return null;
    }
}
