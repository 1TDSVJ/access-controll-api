package br.com.fiap.bo;

import br.com.fiap.dao.UsuarioDAO;
import br.com.fiap.to.UsuarioTO;

public class UsuarioBO {
	UsuarioDAO ud = null;

	public UsuarioTO validacao(UsuarioTO u) {
		ud = new UsuarioDAO();
		return ud.loginDAO(u);
	}
}