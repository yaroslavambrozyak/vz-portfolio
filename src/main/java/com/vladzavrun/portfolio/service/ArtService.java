package com.vladzavrun.portfolio.service;

import com.vladzavrun.portfolio.model.Art;

import java.util.List;

public interface ArtService {

    List<Art> getMainArtsByCategory(String category);

    String getPreloadImagePath();
}
