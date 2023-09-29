package com.alura.foro.infra.security;

import com.alura.foro.modelo.Usuario;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

    //TODO: agregar secret



    public String generarToken(Usuario usuario){
        try {
            Algorithm algorithm = Algorithm.HMAC256("123455");

            return JWT.create()
                    .withIssuer("foro alura")
                    // TODO: ojo
                    .withSubject(usuario.getNombre())
                    .withClaim("id", usuario.getId())
                    .withExpiresAt(generarFechaExp(2))
                    .sign(algorithm);
        } catch (JWTCreationException e){
            throw new RuntimeException(e);
        }
    }

    public String getSubject(String token) {
        if (token == null){
            throw new RuntimeException();
        }

        DecodedJWT verifier = null;

        try {
            //TODO: remplazar secret
            Algorithm algorithm = Algorithm.HMAC256("123455");

            verifier = JWT.require(algorithm)
                    .withIssuer("foro alura")
                    .build()
                    .verify(token);
            verifier.getSubject();
        } catch (JWTVerificationException e){
            throw new RuntimeException(e);
        }

        if (verifier.getSubject() == null){
            throw new RuntimeException("verifier invalido");
        }

        return verifier.getSubject();

    }




    private Instant generarFechaExp(int horas) {
        return LocalDateTime.now().plusHours(horas).toInstant(ZoneOffset.of("-05:00"));
    }
}
