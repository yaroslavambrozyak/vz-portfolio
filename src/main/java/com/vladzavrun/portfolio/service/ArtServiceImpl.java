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
        if (category.equals("concept")) {
            List<Art> arts = new ArrayList<>();
            arts.addAll(prepareArt());
            return arts;
        }

        return Arrays.asList(Art.builder()
                .imagePath("/art/main.jpg")
                .name("qweqwee")
                .build() ,
                Art.builder()
                        .imagePath("/art/main.jpg")
                        .name("qweqwee")
                        .build() ,
                Art.builder()
                        .imagePath("/art/main.jpg")
                        .name("qweqwee")
                        .build());
    }

    @Override
    public String getPreloadImagePath() {
        return "https://pmcvariety.files.wordpress.com/2018/08/slash-chester-bennington.jpg?w=998&h=563&crop=1";
    }

    @Override
    public Art getArtByName(String artName) {
        List<String> sub = Arrays.asList(
                "http://cdn2.tstatic.net/tribunnews/foto/bank/images/5-fakta-konser-guns-n-roses-di-stadion-utama-gelora-bung-karno-sugbk-jakarta-kamis-8112018_20181107_185235.jpg",
                "http://cdn2.tstatic.net/tribunnews/foto/bank/images/5-fakta-konser-guns-n-roses-di-stadion-utama-gelora-bung-karno-sugbk-jakarta-kamis-8112018_20181107_185235.jpg",
                "http://cdn2.tstatic.net/tribunnews/foto/bank/images/5-fakta-konser-guns-n-roses-di-stadion-utama-gelora-bung-karno-sugbk-jakarta-kamis-8112018_20181107_185235.jpg",
                "http://cdn2.tstatic.net/tribunnews/foto/bank/images/5-fakta-konser-guns-n-roses-di-stadion-utama-gelora-bung-karno-sugbk-jakarta-kamis-8112018_20181107_185235.jpg",
                "http://cdn2.tstatic.net/tribunnews/foto/bank/images/5-fakta-konser-guns-n-roses-di-stadion-utama-gelora-bung-karno-sugbk-jakarta-kamis-8112018_20181107_185235.jpg"
                );
        return Art.builder()
                .imagePath("https://cdna.artstation.com/p/assets/images/images/012/460/512/large/eddie-mendoza-biker-girl.jpg?1534910429")
                .name("hello")
                .sub(sub)
                .build();
    }

    private List<Art> prepareArt() {
        Art art1 = Art.builder()
                .imagePath("https://cdna.artstation.com/p/assets/images/images/012/460/512/large/eddie-mendoza-biker-girl.jpg?1534910429")
                .name("hello")
                .build();

        Art art2 = Art.builder()
                .imagePath("https://pmcvariety.files.wordpress.com/2018/08/slash-chester-bennington.jpg?w=998&h=563&crop=1")
                .name("123123")
                .build();

        Art art4 = Art.builder()
                .imagePath("/art/main.jpg")
                .name("hello")
                .build();

        Art art5 = Art.builder()
                .imagePath("/art/main.jpg")
                .name("hello")
                .build();
        return Arrays.asList(art1, art2, art4, art5);
    }
}
