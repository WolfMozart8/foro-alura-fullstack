package com.alura.foro.dto;

import com.alura.foro.modelo.StatusTopico;
import com.alura.foro.modelo.Topico;

import java.time.LocalDateTime;

public record DatosModificarTopico(
        Long id,
        String titulo,
        String mensaje,
//        LocalDateTime fecha,
        StatusTopico statusTopico
//        String autor,
//        String curso
) {
    public DatosModificarTopico(Topico topico) {
        this(
                topico.getId(),
                topico.getTitulo(),
                topico.getMensaje(),
//                topico.getFechaCreacion(),
                topico.getStatus()
//                topico.getAutor().getNombre(),
//                topico.getCurso().getNombre()
        );
    }
}
