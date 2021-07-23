DROP TABLE IF EXISTS boutique;

CREATE TABLE boutique (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    brand TEXT,
    category TEXT,
    price INT,
    in_stock BOOLEAN,
    url TEXT
);