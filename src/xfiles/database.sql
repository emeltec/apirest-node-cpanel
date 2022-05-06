CREATE TABLE books(
	id int PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(255) NOT NULL,
	summary TEXT,
	url_image VARCHAR(255)
)

INSERT INTO books (title, summary, url_image) VALUES('Historia del rey transparente', 'Historia muy interesante','');
INSERT INTO books (title, summary, url_image) VALUES('La furia de Aquiles', 'Historia muy interesante','');


SELECT * FROM books;