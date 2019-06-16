package com.vladzavrun.portfolio.controller;

import com.vladzavrun.portfolio.aop.IsAjaxRequest;
import com.vladzavrun.portfolio.model.Art;
import com.vladzavrun.portfolio.service.ArtService;
import com.vladzavrun.portfolio.service.CategoryService;
import com.vladzavrun.portfolio.tool.AjaxTools;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.net.URISyntaxException;
import java.util.List;

@Controller
public class ArtController {

    private final ArtService artService;
    private final CategoryService categoryService;

    public ArtController(ArtService artService, CategoryService categoryService) {
        this.artService = artService;
        this.categoryService = categoryService;
    }

    @GetMapping("/")
    public String showPreloadPage(Model model) {
        model.addAttribute("categories", categoryService.getAllCategories());
        model.addAttribute("arts", artService.getMainArtsByCategory("concept").subList(0, 1));
        return "/page/preload";
    }

    @GetMapping("/main")
    public String showMainPage(Model model, @IsAjaxRequest Boolean ajaxRequest
            , @RequestParam(name = "type", defaultValue = "concept") String category
            , @RequestParam(name = "preload", defaultValue = "false") Boolean afterPreload) throws URISyntaxException {
        if (ajaxRequest) {
            List<Art> mainArts = artService.getMainArtsByCategory(category);
            if (afterPreload) {
                mainArts.remove(0);
            }
            model.addAttribute("arts", mainArts);
            return "/fragment/main-arts-fragment";
        } else {
            model.addAttribute("categories", categoryService.getAllCategories());
            model.addAttribute("arts", artService.getMainArtsByCategory(category));
            return "/page/main";
        }
    }

    @GetMapping("/arts")
    public String showAllArtsPage(Model model, @IsAjaxRequest Boolean ajaxRequest
            , @RequestParam(name = "type", defaultValue = "concept") String category) {
        model.addAttribute("categories", categoryService.getAllCategories());
        model.addAttribute("arts", artService.getMainArtsByCategory(category));
        return ajaxRequest ? "/fragment/arts-fragment" : "/page/arts";
    }

    @GetMapping("/arts/{name}")
    public String showArtPage(Model model, @PathVariable("name") String artName) {
        model.addAttribute("art", artService.getArtByName(artName));
        return "/page/art";
    }
}
