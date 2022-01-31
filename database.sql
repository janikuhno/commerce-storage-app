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
    product_id INT,
    full_name VARCHAR(255) NOT NULL,
    image_path VARCHAR(255),
    weight INT NOT NULL,
    PRIMARY KEY (product_id)
);

--nutritions
CREATE TABLE nutritions(
    product_id INT,
    energy_kcal INT,
    energy_kj INT,
    fat DECIMAL,
    fat_saturated DECIMAL,
    carbs DECIMAL,
    carbs_sugar DECIMAL,
    protein DECIMAL,
    salt DECIMAL,
    PRIMARY KEY (product_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);