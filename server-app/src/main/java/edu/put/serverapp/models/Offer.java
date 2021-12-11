package edu.put.serverapp.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "offers")
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private BigDecimal basePrice;

    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date startDate;

    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date endDate;

}
