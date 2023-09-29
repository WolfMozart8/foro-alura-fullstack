package com.alura.foro.controller;

import com.alura.foro.dto.DatosRegistroUsuario;
import com.alura.foro.modelo.Usuario;
import com.alura.foro.repository.UsuarioRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    //TODO: cambiar logica a service

    @PostMapping
    @Transactional
    public ResponseEntity RegistrarUsuario(@RequestBody @Valid DatosRegistroUsuario datosRegistroUsuario) {
        Usuario usuario = new Usuario(datosRegistroUsuario);
        usuario.setContrasena(passwordEncoder.encode(datosRegistroUsuario.contrasena()));

        repository.save(usuario);
        System.out.println(datosRegistroUsuario);
        return ResponseEntity.ok().body(datosRegistroUsuario);
    }
}
