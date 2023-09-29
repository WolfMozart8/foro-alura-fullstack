package com.alura.foro.controller;

import com.alura.foro.dto.DatosObtenerCurso;
import com.alura.foro.dto.DatosRegistroCurso;
import com.alura.foro.services.CursoService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cursos")
public class CursoController {

    @Autowired
    private CursoService cursoService;

    @PostMapping
    @Transactional
    public ResponseEntity registrarCurso(@RequestBody DatosRegistroCurso datosRegistroCurso) {
        var curso = cursoService.registraCurso(datosRegistroCurso);
        return ResponseEntity.ok().body(datosRegistroCurso);
    }

    @GetMapping
    public ResponseEntity obtenerCursos() {
        var cursos = cursoService.obtenerCursos().stream().map(DatosObtenerCurso::new).toList();

        return ResponseEntity.ok().body(cursos);
    }
}
