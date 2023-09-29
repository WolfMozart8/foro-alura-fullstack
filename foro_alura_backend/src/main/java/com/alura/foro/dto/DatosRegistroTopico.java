package com.alura.foro.dto;

public record DatosRegistroTopico(
        String titulo,
        String mensaje,
        Long autor_id,
        Long curso_id
) {
}
