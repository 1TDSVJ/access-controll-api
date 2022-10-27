package br.com.fiap.resource;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.com.fiap.bo.UsuarioBO;
import br.com.fiap.to.UsuarioTO;

@Path("/login")
public class UsuarioResource {

	UsuarioBO usuarioBO = new UsuarioBO();
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response loginUsuario(UsuarioTO usuario) {
		
		return Response
		.status(200)
		.entity(usuarioBO.validacao(usuario))
		.build();
	}
	
}
