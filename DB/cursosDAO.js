import Cursos from "../Models/cursos.js";
import connect from "./conexao.js";

export default class cursosDAO {
  async gravar(cursos) {
    if (cursos instanceof Cursos) {
      const conexao = await connect();
      const sql = `INSERT INTO cursos 
                (curso_nome, curso_descricao, curso_duracao, curso_valor, curso_vagas, curso_nivel, curso_tutor) 
                VALUES (?, ?, ?, ?, ?, ?, ?)`;
      const parametros = [
        cursos.nome,
        cursos.descricao,
        cursos.duracao,
        cursos.valor,
        cursos.vagas,
        cursos.nivel,
        cursos.tutor,
      ];

      await conexao.execute(sql, parametros);
      await conexao.release();
    }
  }

  async alterar(cursos) {
    if (cursos instanceof Cursos) {
      const conexao = await connect();
      const sql = `UPDATE cursos SET 
                curso_nome=?, curso_descricao=?, curso_duracao=?, curso_valor=?, 
                curso_vagas=?, curso_nivel=?, curso_tutor=? WHERE curso_id=?`;
      const parametros = [
        cursos.nome,
        cursos.descricao,
        cursos.duracao,
        cursos.valor,
        cursos.vagas,
        cursos.nivel,
        cursos.tutor,
        cursos.id,
      ];

      await conexao.execute(sql, parametros);
      await conexao.release();
    }
  }

  async excluir(cursos) {
    if (cursos instanceof Cursos) {
      const conexao = await connect();
      const sql = "DELETE FROM cursos WHERE curso_id=?";
      const parametros = [cursos.id];

      await conexao.execute(sql, parametros);
      await conexao.release();
    }
  }

  async consultar() {
    const conexao = await connect();
    const sql = "SELECT * FROM cursos ORDER BY curso_id LIMIT 7000";
    const [registros] = await conexao.query(sql);
    await conexao.release();

    const listaCursos = registros.map(
      (registro) =>
        new Cursos(
          registro.curso_id,
          registro.curso_nome,
          registro.curso_descricao,
          registro.curso_duracao,
          registro.curso_valor,
          registro.curso_vagas,
          registro.curso_nivel,
          registro.curso_tutor
        )
    );

    return listaCursos;
  }
}
