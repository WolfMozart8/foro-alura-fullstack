package com.alura.foro.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

public record DatosRegistroUsuario (
        @NotNull
        String nombre,
        @NotNull
        @Email
        String email,
        @NotNull
        String contrasena
) {
}
