package com.alura.foro.dto;

import com.alura.foro.modelo.Respuesta;
import com.alura.foro.modelo.StatusTopico;
import com.alura.foro.modelo.Topico;

import java.time.LocalDateTime;
import java.util.List;

public record DatosObtenerTopicos(
        Long id,
        String titulo,
        String mensaje,
        LocalDateTime fecha,
        StatusTopico statusTopico,
        String autor,
        String curso,
        List<DatosObtenerRespuesta> respuestas
) {
    public DatosObtenerTopicos(Topico topico) {
        this(
                topico.getId(),
                topico.getTitulo(),
                topico.getMensaje(),
                topico.getFechaCreacion(),
                topico.getStatus(),
                topico.getAutor().getNombre(),
                topico.getCurso().getNombre(),
                topico.getRespuestas().stream().map(DatosObtenerRespuesta::new).toList()
        );
    }
}
