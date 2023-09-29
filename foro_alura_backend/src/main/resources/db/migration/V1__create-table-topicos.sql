CREATE TABLE topicos (
    id bigint NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_creacion DATE NOT NULL,
    status VARCHAR(30) NOT NULL,
    autor VARCHAR(50) NOT NULL,
    curso VARCHAR(50) NOT NULL,

    PRIMARY KEY(id)
);