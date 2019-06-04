package com.vladzavrun.portfolio.controller;

import com.vladzavrun.portfolio.aop.AjaxRequire;
import com.vladzavrun.portfolio.model.Art;
import com.vladzavrun.portfolio.service.ArtService;
import com.vladzavrun.portfolio.service.CategoryService;
import com.vladzavrun.portfolio.tool.AjaxTools;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@Controller
public class ArtController {

    private final ArtService artService;
    private final CategoryService categoryService;

    private static final String PRELOAD_CONTEXT_PATH = "/";

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
    public String showMainPage(HttpServletRequest request, Model model) throws URISyntaxException {
        boolean ajaxRequest = AjaxTools.isAjaxRequest(request);
        String category = Optional.ofNullable(request.getParameter("type")).orElse("concept");

        if (ajaxRequest) {
            String refererHeader = request.getHeader("referer");
            boolean afterPreloadPage = false;
            
            if (refererHeader != null) {
                URI uri = new URI(refererHeader);
                String contextPath = uri.getPath();
                afterPreloadPage = contextPath.equals(PRELOAD_CONTEXT_PATH);
            }

            List<Art> mainArts = artService.getMainArtsByCategory(category);
            if(afterPreloadPage){
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
    public String showAllArtsPage(Model model, HttpServletRequest request) {
        model.addAttribute("categories", categoryService.getAllCategories());
        model.addAttribute("arts", artService.getMainArtsByCategory("concept"));
        return AjaxTools.isAjaxRequest(request) ? "/fragment/arts-fragment" : "/page/arts";
    }

    @GetMapping("/arts/{name}")
    public String showArtPage(Model model, @PathVariable("name") String artName) {
        return "/page/art";
    }
}
