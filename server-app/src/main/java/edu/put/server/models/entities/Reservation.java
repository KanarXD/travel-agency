package edu.put.server.models.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "reservations")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer offerId;

    private Integer customerId;

    @Column(insertable = false, updatable = false)
    @JsonFormat(pattern = "yyyy-mm-dd HH:mm:ss")
    private Timestamp reservationTimestamp;

}


