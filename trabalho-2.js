const prompt = require("prompt-sync")({sigint: true });

const nome = prompt("Digite seu nome: ")

const idade = parseInt(prompt("Digite sua idade: "))

const curso = prompt("Digite seu curso: ")

const nota1 = parseInt(prompt("Digite a primeira nota: "))

const nota2 = parseInt(prompt("Digite a segunda nota: "))

console.log("O aluno " +nome+ " tem " +idade+ " anos, cursa " +curso+ " e suas notas foram " +nota1+ " e " +nota2 )