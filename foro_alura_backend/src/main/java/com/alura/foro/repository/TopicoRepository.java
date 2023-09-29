package com.alura.foro.repository;

import com.alura.foro.modelo.Topico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TopicoRepository extends JpaRepository<Topico, Long> {
    boolean existsByTituloOrMensaje(String titulo, String mensaje);
}
