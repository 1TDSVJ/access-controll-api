package br.com.fiap.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import br.com.fiap.factory.ConectionFactory;
import br.com.fiap.to.UsuarioTO;

public class UsuarioDAO {

	private Connection con = null;

	public UsuarioDAO() {
		this.con = new ConectionFactory().getConnection();
	}

	public UsuarioTO loginDAO(UsuarioTO u) {

		PreparedStatement ps = null;

		String sqlQuery = "SELECT * FROM T_USUARIO WHERE LOGIN = ? AND SENHA = ?";

		try {
			ps = con.prepareStatement(sqlQuery);

			ps.setString(1, u.getLogin());
			ps.setString(2, u.getSenha());

			ResultSet rs = ps.executeQuery();

			UsuarioTO ut = null;

			while (rs.next()) {
				ut = new UsuarioTO();
				ut.setLogin(rs.getString(2));
				ut.setSenha(rs.getString(3));
			}
			if (ut != null) {
				rs.close();
				ps.close();
				con.close();
				return ut;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}

}
