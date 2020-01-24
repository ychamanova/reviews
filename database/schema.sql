CREATE DATABASE freetable_reviews;

USE freetable_reviews;

CREATE TABLE restaurant_pages (
    page_id INT,
    PRIMARY KEY(page_id)
);

CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    vip BOOL NOT NULL,
    location VARCHAR(40),
    review_count INT NOT NULL
);

CREATE TABLE reviews (
    review_id INT NOT NULL AUTO_INCREMENT,
    page_id INT NOT NULL,
    user_id INT NOT NULL,
    dined_date DATE NOT NULL,
    overall INT NOT NULL,
    food INT NOT NULL,
    service INT NOT NULL,
    ambiance INT NOT NULL,
    value INT NOT NULL,
    noise ENUM('quiet', 'moderate', 'loud') NOT NULL,
    would_recommend BOOL NOT NULL,
    good_for_groups BOOL NOT NULL,
    description TEXT NOT NULL
);