package com.alura.foro.controller;

import com.alura.foro.dto.DatosModificarRespuesta;
import com.alura.foro.dto.DatosObtenerRespuesta;
import com.alura.foro.dto.DatosRegistroRespuesta;
import com.alura.foro.services.RespuestaService;
import com.alura.foro.services.TopicoService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("topicos/respuestas")
public class RespuestaController {

    @Autowired
    private TopicoService topicoService;

    @Autowired
    private RespuestaService respuestaService;

    @GetMapping("/{id}")
    public ResponseEntity obtenerRespuesta(@PathVariable Long id) {
        var respuesta = respuestaService.obtenerRespuesta(id);

        return ResponseEntity.ok().body(respuesta);
    }
    @PostMapping
    @Transactional
    public ResponseEntity crearRespuesta( @RequestBody DatosRegistroRespuesta datosRegistroRespuesta) {
        var respuesta = respuestaService.crearRespuesta(datosRegistroRespuesta);

        return ResponseEntity.ok().body(new DatosObtenerRespuesta(respuesta));
    }

    @PutMapping
    @Transactional
    public ResponseEntity modificarRespuesta(@RequestBody DatosModificarRespuesta datosModificarRespuesta){
        var respuesta = respuestaService.modificarRespuesta(datosModificarRespuesta);

        return ResponseEntity.ok().body(respuesta);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity eliminarRespuesta(@PathVariable Long id){
        respuestaService.eliminarRespuesta(id);

        return ResponseEntity.noContent().build();
    }

}
