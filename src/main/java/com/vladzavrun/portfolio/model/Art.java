package com.vladzavrun.portfolio.model;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Art {

    private Long id;
    private String imagePath;
    private String name;
    private boolean isMainArt;
    private long mainOrder;
    private long order;
    private String description;

    private Category category;

}
