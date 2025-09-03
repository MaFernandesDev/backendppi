import Cursos from './Models/cursos.js';

const curso = new Cursos();

const listaDeCursos = await curso.consultar();
console.log("Cursos encontrados:");

for (const c of listaDeCursos) {
  console.log(c.toJSON());
}