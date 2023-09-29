package com.alura.foro.modelo;

import com.alura.foro.dto.DatosRegistroCurso;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "cursos")
@NoArgsConstructor
@Data
public class Curso {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nombre;
	private String categoria;

	public Curso(String nombre, String categoria) {
		this.nombre = nombre;
		this.categoria = categoria;
	}


	public Curso(DatosRegistroCurso datosRegistroCurso) {
		this.nombre = datosRegistroCurso.nombre();
		this.categoria = datosRegistroCurso.categoria();
	}
}
