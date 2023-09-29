package com.alura.foro.services;

import com.alura.foro.dto.DatosModificarRespuesta;
import com.alura.foro.dto.DatosObtenerRespuesta;
import com.alura.foro.dto.DatosRegistroRespuesta;
import com.alura.foro.modelo.Respuesta;
import com.alura.foro.repository.RespuestaRepository;
import com.alura.foro.repository.TopicoRepository;
import com.alura.foro.repository.UsuarioRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RespuestaService {

    @Autowired
    private TopicoRepository topicoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private RespuestaRepository respuestaRepository;

    public DatosObtenerRespuesta obtenerRespuesta(Long id) {
        var respuesta = respuestaRepository.findById(id).get();

        return new DatosObtenerRespuesta(respuesta);
    }
    public Respuesta crearRespuesta(DatosRegistroRespuesta datosRegistroRespuesta){
        var respuesta = new Respuesta(datosRegistroRespuesta);

        var autor = usuarioRepository.getReferenceById(datosRegistroRespuesta.autor_id());
        var topico = topicoRepository.getReferenceById(datosRegistroRespuesta.topico_id());

        respuesta.setAutor(autor);
        respuesta.setTopico(topico);

        return respuestaRepository.save(respuesta);
    }

    public DatosModificarRespuesta modificarRespuesta(DatosModificarRespuesta datosModificarRespuesta) {
        var respuesta = respuestaRepository.getReferenceById(datosModificarRespuesta.id());

        respuesta.modificar(datosModificarRespuesta);

        return new DatosModificarRespuesta(respuesta);
    }
    public void eliminarRespuesta (Long id) {
        var respuesta = respuestaRepository.findById(id);

        if (respuesta.isPresent()) {
            Respuesta respuestaAEliminar = respuesta.get();
            respuestaRepository.delete(respuestaAEliminar);
        } else {
            throw new EntityNotFoundException(String.format("la respuesta con el id %d no fue encontrado", id));
        }
    }
}
