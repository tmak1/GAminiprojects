CREATE DATABASE movies_app;

\c movies_app

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(500),
    year VARCHAR(10), 
    imdbrating VARCHAR(10),
    imdbvotes VARCHAR(500),
    runtime VARCHAR(500),
    genre VARCHAR(250),
    rated VARCHAR(250),
    director VARCHAR(800),
    actors VARCHAR(2000),
    poster TEXT
);

INSERT INTO movies (title, year, imdbrating, imdbvotes, runtime, genre, rated, director, actors, poster) 
VALUES (
'Jaws', '1975', '8', '521,717', '124 min', 'Adventure, Drama, Thriller', 'PG', 'Steven Spielberg', 
'Roy Scheider, Robert Shaw, Richard Dreyfuss, Lorraine Gary',
'https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg');


ALTER TABLE movies ADD CONSTRAINT unique_title UNIQUE (title);