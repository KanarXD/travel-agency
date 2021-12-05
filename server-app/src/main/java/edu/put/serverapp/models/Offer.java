package edu.put.serverapp.models;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;


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
    private Long id;
    private BigDecimal basePrice;
    private Date startDate;
    private Date endDate;

}
