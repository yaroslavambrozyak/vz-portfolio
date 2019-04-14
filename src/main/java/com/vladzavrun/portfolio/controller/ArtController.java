package com.vladzavrun.portfolio.controller;

import com.vladzavrun.portfolio.service.ArtService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ArtController {

    private final ArtService artService;

    public ArtController(ArtService artService) {
        this.artService = artService;
    }

    @GetMapping("/")
    public String showPreloadPage(Model model){
        model.addAttribute("imagePath", artService.getPreloadImagePath());
        return "preload";
    }

    @GetMapping("/mainArts")
    public String showMainArtPage(Model model){
        model.addAttribute("arts",artService.getMainArtsByCategory(""));
        return "main-arts";
    }
}
