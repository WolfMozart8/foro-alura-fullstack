package com.alura.foro.dto;

import com.alura.foro.modelo.Curso;

public record DatosObtenerCurso(
        Long id,
        String nombre,
        String categoria
) {
    public DatosObtenerCurso(Curso curso){
        this(
                curso.getId(),
                curso.getNombre(),
                curso.getCategoria()
        );
    }
}
