CREATE TABLE respuestas (
    id bigint NOT NULL AUTO_INCREMENT,
    mensaje TEXT NOT NULL,
    fecha_creacion DATE NOT NULL,
    topico_id BIGINT NOT NULL,
    autor_id BIGINT NOT NULL,
    solucion TINYINT NOT NULL,


    PRIMARY KEY(id),

    FOREIGN KEY(topico_id) REFERENCES topicos(id),
    FOREIGN KEY(autor_id) REFERENCES usuarios(id)
);