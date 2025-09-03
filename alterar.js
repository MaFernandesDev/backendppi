import Cursos from './Models/cursos.js';

const curso = new Cursos(1, 'Terço', 'teste', '2 semanas', 900.00, 10, 'Iniciante', 'Duda Fernandes');

curso.duracao = '4 semanas';
await curso.alterar();
console.log("Curso alterado com sucesso.");

console.log(curso.toString());