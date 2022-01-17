\connect travel_agency_db travel_agency;

CREATE INDEX ix_carriers_name ON carriers(name);
CREATE INDEX ix_hotels_name ON hotels(name);
CREATE INDEX ix_offers_name ON offers(name);
