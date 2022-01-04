package edu.put.server.models.filters;

import lombok.Data;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Data
public class PageFilter {

    @NotNull
    private Integer currentPage;

    @NotNull
    @Min(1)
    private Integer itemsPerPage;

}
