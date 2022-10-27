package br.com.fiap.factory;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConectionFactory {

		private Connection conn = null;
		
		public Connection getConnection() {
			
			try {
				Class.forName("oracle.jdbc.driver.OracleDriver");
				conn = DriverManager.getConnection("jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL", "RM95962", "261102");
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			}	catch (SQLException e) {
				e.printStackTrace();
			}
			return null;
		}
	
}
