package edu.put.server.models.filters;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Builder
public class Filter {

    @NotBlank
    private String field;

    @NotNull
    private QueryOperator queryOperator;

    @NotBlank
    private String value;

}
