CREATE TABLE books(
	id int PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(255) NOT NULL,
	summary VARCHAR(255),
	url_image VARCHAR(255)
)

INSERT INTO books (title, summary, url_image) VALUES('Historia del rey transparente', 'Historia muy interesante','url');
INSERT INTO books (title, summary, url_image) VALUES('La furia de Aquiles', 'Historia muy interesante','url');


SELECT * FROM books;