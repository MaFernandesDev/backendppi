
import Cursos from './Models/cursos.js';

const curso = new Cursos(null, 'Terço', 'teste', '2 semanas', 900.00, 10, 'Iniciante', 'Duda Fernandes');

await curso.gravar();
console.log("Curso gravada com sucesso.");

console.log(curso.toString());