package com.alura.foro.modelo;

import com.alura.foro.dto.DatosModificarRespuesta;
import com.alura.foro.dto.DatosRegistroRespuesta;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "respuestas")
@NoArgsConstructor
@Data
public class Respuesta {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String mensaje;

	@ManyToOne
	@JoinColumn(name = "topico_id")
	private Topico topico;
	private LocalDateTime fechaCreacion = LocalDateTime.now();
	@OneToOne
	@JoinColumn(name = "autor_id")
	private Usuario autor;
	private Boolean solucion = false;


	public Respuesta(DatosRegistroRespuesta datosRegistroRespuesta) {
		this.mensaje = datosRegistroRespuesta.mensaje();
	}

	public void modificar(DatosModificarRespuesta datosModificarRespuesta) {
		if (datosModificarRespuesta.mensaje() != null){
			this.mensaje = datosModificarRespuesta.mensaje();
		}
		if (datosModificarRespuesta.solucion() != null){
			this.solucion = datosModificarRespuesta.solucion();
		}
	}
}
