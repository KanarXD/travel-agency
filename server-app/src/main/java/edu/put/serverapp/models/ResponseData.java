package edu.put.serverapp.models;

import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class ResponseData<T> {

    private T data;
    private long total;

}
