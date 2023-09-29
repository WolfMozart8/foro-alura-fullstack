package com.alura.foro.services;

import com.alura.foro.dto.DatosObtenerCurso;
import com.alura.foro.dto.DatosRegistroCurso;
import com.alura.foro.modelo.Curso;
import com.alura.foro.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CursoService {

    @Autowired
    private CursoRepository cursoRepository;

    public Curso registraCurso(DatosRegistroCurso datosRegistroCurso) {
        Curso curso = new Curso(datosRegistroCurso);

        return cursoRepository.save(curso);
    }

    public List<Curso> obtenerCursos() {
        var cursos = cursoRepository.findAll();

        return cursos;
    }
}
