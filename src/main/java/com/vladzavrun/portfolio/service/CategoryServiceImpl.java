package com.vladzavrun.portfolio.service;

import com.vladzavrun.portfolio.model.Category;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Override
    public List<Category> getAllCategories() {
        Category category1 = new Category();
        category1.setName("asdsda");

        Category category = new Category();
        category.setName("concept");

        Category category2 = new Category();
        category2.setName("sxcghhhhh");

        return Arrays.asList(category, category1, category2);
    }
}
