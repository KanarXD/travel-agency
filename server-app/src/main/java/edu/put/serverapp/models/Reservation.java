package edu.put.serverapp.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "reservations")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Long offerId;

    private Long customerId;

    @JsonFormat(pattern = "yyyy-mm-dd HH:mm:ss")
    private Timestamp reservationTimestamp;

}


