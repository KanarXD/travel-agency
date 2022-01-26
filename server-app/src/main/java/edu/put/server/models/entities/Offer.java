package edu.put.server.models.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "offers")
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private BigDecimal basePrice;

    private BigDecimal price;

    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "Poland")
    private Date startDate;

    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "Poland")
    private Date endDate;

    private Integer promotionId;

    private Integer hotelId;

    private Integer carrierId;

}
