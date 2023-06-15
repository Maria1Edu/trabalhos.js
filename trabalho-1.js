const prompt = require("prompt-sync")({sigint: true });

const nome = prompt("Digite seu nome: ")

const nota = parseInt(prompt("Digite a nota do aluno: "))

if(nota >= 7){
    console.log( nome+ " : aprovado")
}else{
    console.log(nome+ " : reprovado")
}