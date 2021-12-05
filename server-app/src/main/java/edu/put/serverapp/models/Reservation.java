package edu.put.serverapp.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "reservations")
@IdClass(Reservation.ReservationPrimaryKey.class)
public class Reservation {

    @Id
    private Long offerId;

    @Id
    private Long customerId;

    @Id
    @Column(insertable = false, updatable = false)
    @JsonFormat(pattern = "yyyy-mm-dd HH:mm:ss")
    private Timestamp reservationTimestamp;

    @Data
    public static class ReservationPrimaryKey implements Serializable {

        private Long offerId;
        private Long customerId;

    }
}


