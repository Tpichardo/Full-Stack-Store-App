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

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    title TEXT,
    content TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    item_id INTEGER REFERENCES boutique (id)
    ON DELETE CASCADE
);