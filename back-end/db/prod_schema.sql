DROP DATABASE IF EXISTS d3ej33nmbsaaq;
CREATE DATABASE d3ej33nmbsaaq;

\c d3ej33nmbsaaq;

CREATE TABLE boutique (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    brand TEXT,
    category TEXT,
    price INT,
    in_stock BOOLEAN,
    url TEXT
);