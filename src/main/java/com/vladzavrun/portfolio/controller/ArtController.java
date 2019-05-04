package com.vladzavrun.portfolio.controller;

import com.vladzavrun.portfolio.model.Art;
import com.vladzavrun.portfolio.service.ArtService;
import com.vladzavrun.portfolio.tool.AjaxTools;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class ArtController {

    private final ArtService artService;

    public ArtController(ArtService artService) {
        this.artService = artService;
    }

    @GetMapping("/")
    public String showPreloadPage(Model model) {
        model.addAttribute("arts", artService.getMainArtsByCategory("concept").subList(0, 1));
        return "/page/main";
    }

    @GetMapping("/main")
    public String showMainArtPage(HttpServletRequest request, Model model
            , @RequestParam(value = "type", required = false, defaultValue = "concept") String type
            , @RequestParam(value = "preload", required = false) boolean afterPreload) {

        if (!AjaxTools.isAjaxRequest(request)) {
            return "redirect:/";
        }

        List<Art> arts;
        if (afterPreload) {
            List<Art> artList = artService.getMainArtsByCategory(type);
            artList.remove(0);
            arts = artList;
        } else {
            arts = artService.getMainArtsByCategory(type);
        }

        model.addAttribute("arts", arts);
        return "/fragment/main-arts-fragment";
    }

    @GetMapping("/arts")
    public String showAllArtsPage(Model model, HttpServletRequest request) {
        model.addAttribute("arts", artService.getMainArtsByCategory("concept"));
        return AjaxTools.isAjaxRequest(request) ? "/fragment/arts-fragment" : "/page/arts";
    }

    @GetMapping("/art")
    public String showArtPage() {
        return null;
    }
}
