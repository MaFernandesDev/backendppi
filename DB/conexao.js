import mysql from "mysql2/promise";

export default async function connect() {
  if (!global.poolConexoes) {
    global.poolConexoes = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "123456",
      database: "backend",
      waitForConnections: true,
      connectionLimit: 10,
      maxIdle: 10,
      idleTimeout: 60000,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    });
  }

  return await global.poolConexoes.getConnection();
}
