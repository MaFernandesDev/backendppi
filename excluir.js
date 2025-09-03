import Cursos from './Models/cursos.js';

const curso = new Cursos(4, 'Terço', 'teste', '2 semanas', 900.00, 10, 'Iniciante', 'Duda Fernandes');

curso.id = 4;
await curso.excluir();
console.log("Curso excluído com sucesso.");
