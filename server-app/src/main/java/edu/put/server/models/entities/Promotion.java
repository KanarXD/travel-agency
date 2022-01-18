package edu.put.server.models.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "promotions")
public class Promotion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "Poland")
    private Date startDate;

    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "Poland")
    private Date endDate;

    private Integer discount;

}
