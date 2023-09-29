CREATE TABLE usuarios (
    id bigint NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    contrasena VARCHAR(50) NOT NULL,

    PRIMARY KEY(id)
);