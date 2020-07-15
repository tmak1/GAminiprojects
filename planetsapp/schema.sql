-- CREATE DATABASE planets_app;

-- \c planets_app

-- CREATE TABLE planets (
--     id SERIAL PRIMARY KEY,
--     name TEXT,
--     image_url TEXT, 
--     diameter REAL,
--     distance REAL,
--     mass REAL,
--     moon_count INTEGER
-- );

INSERT INTO planets (name, image_url, diameter, distance, mass, moon_count) 
VALUES (
'mercury', 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/2_mercury_480x320_new.jpg',
4879, 57.9, 0.33, 0);

INSERT INTO planets (name, image_url, diameter, distance, mass, moon_count) 
VALUES (
'venus', 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/3_480x320_venus.png',
12104, 108.2, 4.87, 0);

INSERT INTO planets (name, image_url, diameter, distance, mass, moon_count) 
VALUES (
'earth', 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/4_earth_480x320.jpg',
12756, 149.6, 5.97, 0);

INSERT INTO planets (name, image_url, diameter, distance, mass, moon_count) 
VALUES (
'mars', 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/6_mars_480x320.jpg',
6792, 227.9, 0.642, 2);

INSERT INTO planets (name, image_url, diameter, distance, mass, moon_count) 
VALUES (
'jupiter', 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/9_jupiter_480x320_new.jpg',
142984, 778.6, 1898, 79);

INSERT INTO planets (name, image_url, diameter, distance, mass, moon_count) 
VALUES (
'saturn', 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/38_saturn_480x320.jpg',
120536, 1433.5, 568, 53);

INSERT INTO planets (name, image_url, diameter, distance, mass, moon_count) 
VALUES (
'uranus', 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/69_uranus_480x320.jpg',
51118, 2872.5, 86.8, 27);

INSERT INTO planets (name, image_url, diameter, distance, mass, moon_count) 
VALUES (
'neptune', 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/90_neptune_480x320.jpg',
49528, 4495.1, 102, 14);

INSERT INTO planets (name, image_url, diameter, distance, mass, moon_count) 
VALUES (
'pluto', 'https://www.pinclipart.com/picdir/big/39-396574_disney-pluto-the-dog-cartoon-clip-art-images.png',
2370, 5906.4, 0.0146, 5);

