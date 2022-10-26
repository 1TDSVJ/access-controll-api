package br.com.fiap.dao;

import java.util.ArrayList;
import java.util.List;
import br.com.fiap.to.UsuarioTO;

public class UsuarioDAO2 {
	public static List<UsuarioTO> listaUsuario;

	public UsuarioDAO2() {
		if (listaUsuario == null) {
			listaUsuario = new ArrayList<UsuarioTO>();
			
			UsuarioTO user = new UsuarioTO();
			user.setLogin("Selva");
			user.setSenha("12345");
			listaUsuario.add(user);
			
			user = new UsuarioTO();
			user.setLogin("2");
			user.setSenha("2");
			listaUsuario.add(user);
			
			user = new UsuarioTO();
			user.setLogin("3");
			user.setSenha("3");
			listaUsuario.add(user);
			
			user = new UsuarioTO();
			user.setLogin("4");
			user.setSenha("4");
			listaUsuario.add(user);
			
			user = new UsuarioTO();
			user.setLogin("5");
			user.setSenha("5");
			listaUsuario.add(user);
		}

	}

	public UsuarioTO loginDAO(UsuarioTO u) {
		for (int i = 0; i < listaUsuario.size(); i++) {
			if (listaUsuario.get(i).getLogin().equals(u.getLogin())
					&& listaUsuario.get(i).getSenha().equals(u.getSenha())) {
				System.out.println("USUÁRIO : " + listaUsuario.get(i).getLogin() + " LOGOU!");
				return listaUsuario.get(i);
			}
		}
		System.out.println("USUÁRIO : " + u.getLogin() + " NÃO VALIDADO!");
		return null;
	}
}
