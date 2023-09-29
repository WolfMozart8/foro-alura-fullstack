ALTER TABLE topicos
CHANGE autor autor_id BIGINT;

ALTER TABLE topicos
CHANGE curso curso_id BIGINT;


ALTER TABLE topicos
ADD FOREIGN KEY(autor_id) REFERENCES usuarios(id);

ALTER TABLE topicos
ADD FOREIGN KEY(curso_id) REFERENCES cursos(id);