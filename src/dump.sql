CREATE DATABASE cidadealta;

CREATE TABLE emblemas (
    id SERIAL PRIMARY KEY,
    slug TEXT,
    name TEXT,
    image TEXT
);

INSERT INTO emblemas 
(slug, name, image)
VALUES 
('cda','Cidade Alta','https://cidadealtarp.com/imagens/challenge/cidade-alta.png'),
('cda-valley','Cidade Alta Valley','https://cidadealtarp.com/imagens/challenge/cidade-alta-valley.png'),
('policia','Policia do Cidade Alta','https://cidadealtarp.com/imagens/challenge/policia.png'),
('hospital','Hospital do Cidade Alta','https://cidadealtarp.com/imagens/challenge/hospital.png'),
('mecanica','Mecânica do Cidade Alta','https://cidadealtarp.com/imagens/challenge/mecanica.png'),
('taxi','Taxi do Cidade Alta','https://cidadealtarp.com/imagens/challenge/taxi.png'),
('curuja','Coruja','https://cidadealtarp.com/imagens/challenge/coruja.png'),
('hiena','Hiena','https://cidadealtarp.com/imagens/challenge/hiena.png'),
('gato','Gato','https://cidadealtarp.com/imagens/challenge/gato.png'),
('urso','Urso','https://cidadealtarp.com/imagens/challenge/urso.png');