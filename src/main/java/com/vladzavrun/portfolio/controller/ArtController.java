package com.vladzavrun.portfolio.controller;

import com.vladzavrun.portfolio.model.Art;
import com.vladzavrun.portfolio.service.ArtService;
import com.vladzavrun.portfolio.tool.AjaxTools;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.PushBuilder;
import java.util.List;

@Controller
public class ArtController {

    private final ArtService artService;

    public ArtController(ArtService artService) {
        this.artService = artService;
    }

    @GetMapping("/")
    public String showPreloadPage(Model model) {
        model.addAttribute("arts", artService.getMainArtsByCategory("").subList(0, 1));
        return "/page/preload";
    }

    @GetMapping("/main")
    public String showMainArtPage(HttpServletRequest request, Model model
            , @RequestParam(value = "preload",required = false) boolean forPreload) {

        if (!AjaxTools.isAjaxRequest(request)) {
            return "redirect:/";
        }

        List<Art> arts;
        if (forPreload) {
            arts = artService.getMainArtsByCategory("").subList(0, 1);
        } else {
            List<Art> artList = artService.getMainArtsByCategory("");
            artList.remove(0);
            arts = artList;
        }
        model.addAttribute("arts", arts);

        return "/fragment/main-arts-slider-fragment";
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
