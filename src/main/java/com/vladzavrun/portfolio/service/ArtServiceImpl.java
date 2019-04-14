package com.vladzavrun.portfolio.service;

import com.vladzavrun.portfolio.model.Art;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArtServiceImpl implements ArtService {

    @Override
    public List<Art> getMainArtsByCategory(String category) {
        List<Art> arts = new ArrayList<>();
        Art art = new Art("https://www.rollingstone.com/wp-content/uploads/2018/08/1319_FOB_Mix_QnA_Slash_A.jpg?crop=900:600&width=440");
        Art art1 = new Art("https://pmcvariety.files.wordpress.com/2018/08/slash-chester-bennington.jpg?w=998&h=563&crop=1");
        Art art2 = new Art("https://www.kerrang.com/assets/images/47412/Slash-And-Myles_b4b62e6b8feb204f329c1700ab8c6c4a.jpg");
        arts.add(art1);
        arts.add(art);
        arts.add(art2);
        return arts;
    }

    @Override
    public String getPreloadImagePath() {
        return "https://pmcvariety.files.wordpress.com/2018/08/slash-chester-bennington.jpg?w=998&h=563&crop=1";
    }
}
