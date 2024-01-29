"use strict";

var alunos = [{
  nome: 'Alice',
  nota: 8
}, {
  nome: 'Bob',
  nota: 5
}, {
  nome: 'Charlie',
  nota: 7
}, {
  nome: 'David',
  nota: 3
}, {
  nome: 'Eva',
  nota: 9
}];
function alunosAprovados(arrayDeAlunos) {
  return arrayDeAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovadosArray = alunosAprovados(alunos);
console.log(alunosAprovadosArray);