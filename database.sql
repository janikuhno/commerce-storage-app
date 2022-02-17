--init database
CREATE DATABASE commerce_storage_db;

--uuid
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--users
CREATE TABLE users(
    user_id UUID DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);

--products
CREATE TABLE products(
    code BIGINT, --example GTIN/EAN code: 6420256001547 (13 integers)
    name VARCHAR(255) NOT NULL,
    image_path VARCHAR(255),
    weight INT NOT NULL,
    kcal INT NOT NULL,
    PRIMARY KEY (code)
);

--nutritions (in 100g)
/*
CREATE TABLE nutritions(
    nutrition_id SERIAL,
    code BIGINT,
    energy_kj INT,
    energy_kcal INT,
    fat DECIMAL,
    fat_saturated DECIMAL,
    carbs DECIMAL,
    carbs_sugar DECIMAL,
    protein DECIMAL,
    salt DECIMAL,
    PRIMARY KEY (nutrition_id, code),
    FOREIGN KEY (code) REFERENCES products(code)
);
*/