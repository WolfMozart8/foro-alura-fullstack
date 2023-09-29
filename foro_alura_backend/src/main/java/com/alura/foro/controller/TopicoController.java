package com.alura.foro.controller;

import com.alura.foro.dto.DatosModificarTopico;
import com.alura.foro.dto.DatosRegistroTopico;
import com.alura.foro.modelo.Topico;
import com.alura.foro.services.RespuestaService;
import com.alura.foro.services.TopicoService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/topicos")
public class TopicoController {

    @Autowired
    private TopicoService topicoService;

    @Autowired
    private RespuestaService respuestaService;


    @PostMapping
    @Transactional
    public ResponseEntity<Topico> RegistrarTopico(@RequestBody @Valid DatosRegistroTopico datosRegistroTopico, UriComponentsBuilder uriComponentsBuilder) {
        Topico topicoCreado = topicoService.RegistrarTopico(datosRegistroTopico);

        // devuelve en el header el link directo al topico creado (/topicos/id)
        URI uri = uriComponentsBuilder.path("topicos/{id}").buildAndExpand(topicoCreado.getId()).toUri();
        return ResponseEntity.created(uri).body(topicoCreado);
    }

    @GetMapping
    public ResponseEntity obtenerTopicos (@PageableDefault(size = 6, sort = "fechaCreacion", direction = Sort.Direction.DESC) Pageable paginacion) {
        var topicos = topicoService.obtenerTopicos(paginacion);

        return ResponseEntity.ok().body(topicos);
    }

    @GetMapping("/{id}")
    public ResponseEntity obtenerTopicoPorId(@PathVariable Long id) {
        var topico = topicoService.obtenerTopico(id);

        return ResponseEntity.ok().body(topico);
    }

    @PutMapping
    @Transactional
    public ResponseEntity modificarTopico(@RequestBody @Valid DatosModificarTopico datosModificarTopico) {
        var topicoModificado = topicoService.modificarTopico(datosModificarTopico);

        return ResponseEntity.ok().body(topicoModificado);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity eliminarTopico (@PathVariable Long id){
        topicoService.eliminarTopico(id);


        return ResponseEntity.noContent().build();
    }
}
