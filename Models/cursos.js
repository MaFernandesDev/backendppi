import CursoDAO from "../DB/cursosDAO.js";

export default class Cursos {
  #id;
  #nome;
  #descricao;
  #duracao;
  #valor;
  #nivel;
  #vagas;
  #tutor;

  constructor(
    id = 0,
    nome = "",
    descricao = "",
    duracao = "",
    valor = 0,
    vagas = 0,
    nivel = "",
    tutor = ""
  ) {
    this.#id = id;
    this.#nome = nome;
    this.#descricao = descricao;
    this.#duracao = duracao;
    this.#valor = valor;
    this.#vagas = vagas;
    this.#nivel = nivel;
    this.#tutor = tutor;
  }

  get id() {
    return this.#id;
  }
  set id(id) {
    this.#id = id;
  }

  get nome() {
    return this.#nome;
  }

  set nome(nome) {
    this.#nome = nome;
  }

  get descricao() {
    return this.#descricao;
  }

  set descricao(descricao) {
    this.#descricao = descricao;
  }

  get duracao() {
    return this.#duracao;
  }
  set duracao(duracao) {
    this.#duracao = duracao;
  }

  get valor() {
    return this.#valor;
  }

  set valor(valor) {
    this.#valor = valor;
  }

  get vagas() {
    return this.#vagas;
  }

  set vagas(vagas) {
    this.#vagas = vagas;
  }

  get nivel() {
    return this.#nivel;
  }

  set nivel(nivel) {
    this.#nivel = nivel;
  }

  get tutor() {
    return this.#tutor;
  }

  set tutor(tutor) {
    this.#tutor = tutor;
  }

  toString() {
    return `
        ID: ${this.#id}\n 
        Nome: ${this.#nome}\n
        Descrição: ${this.#descricao}\n 
        Duração: ${this.#duracao}\n
        Valor: ${this.#valor}\n 
        Vagas: ${this.#vagas}\n
        Nível: ${this.#nivel}\n 
        Tutor: ${this.#tutor}\n
        `;
  }
  toJSON() {
    return {
      id: this.#id,
      nome: this.#nome,
      descricao: this.#descricao,
      duracao: this.#duracao,
      valor: this.#valor,
      vagas: this.#vagas,
      nivel: this.#nivel,
      tutor: this.#tutor,
    };
  }

  async gravar() {
    const cursosDAO = new CursoDAO();
    await cursosDAO.gravar(this);
  }

  async alterar() {
    const cursosDAO = new CursoDAO();
    await cursosDAO.alterar(this);
  }

  async excluir() {
    const cursosDAO = new CursoDAO();
    await cursosDAO.excluir(this);
  }

  async consultar() {
    const cursosDAO = new CursoDAO();
    return await cursosDAO.consultar(this.#id);
  }
}
