package edu.put.server.models;

import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class ResponseData<T> {

    private T data;
    private long total;
    private String error;

}
