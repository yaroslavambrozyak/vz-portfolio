package com.vladzavrun.portfolio.service;

import com.vladzavrun.portfolio.model.Art;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ArtServiceImpl implements ArtService {

    @Override
    public List<Art> getMainArtsByCategory(String category) {
        List<Art> arts = new ArrayList<>();
        arts.addAll(prepareArt());
        return arts;
    }

    @Override
    public String getPreloadImagePath() {
        return "https://pmcvariety.files.wordpress.com/2018/08/slash-chester-bennington.jpg?w=998&h=563&crop=1";
    }

    private List<Art> prepareArt() {
        Art art1 = Art.builder()
                .imagePath("https://www.rollingstone.com/wp-content/uploads/2018/08/1319_FOB_Mix_QnA_Slash_A.jpg?crop=900:600&width=440")
                .name("hello")
                .build();

        Art art2 = Art.builder()
                .imagePath("https://pmcvariety.files.wordpress.com/2018/08/slash-chester-bennington.jpg?w=998&h=563&crop=1")
                .name("123123")
                .build();

        Art art3 = Art.builder()
                .imagePath("https://www.kerrang.com/assets/images/47412/Slash-And-Myles_b4b62e6b8feb204f329c1700ab8c6c4a.jpg")
                .name("qweqwee")
                .build();

        return Arrays.asList(art2, art3, art1);
    }
}
