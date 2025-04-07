/*
num = prompt("Digite um número de 1 a 100");


if (num >= 1 && num <= 10) {
    alert("O número está entre 1 e 10")
}
else if (num >= 11 && num <= 20) {
    alert("O numero está entre 10 e 20")
}
else if (num >= 21 && num <= 30) {
    alert("O numero está entre 20 e 30")
}
else if (num >= 31 && num <= 40) {
    alert("O numero está entre 30 e 40")
}
else if (num >= 41 && num <= 50) {
    alert("O numero está entre 40 e 50")
}
else if (num >= 51 && num <= 60) {
    alert("O numero está entre 50 e 60")
}
else if (num >= 61 && num <= 70) {
    alert("O numero está entre 60 e 70")
}
else if (num >= 71 && num <= 80) {
    alert("O numero está entre 70 e 80")
}
else if (num >= 81 && num <= 90) {
    alert("O numero está entre 80 e 90")
}
else if (num >= 91 && num <= 100) {
    alert("O numero está entre 90 e 100")
}
else {
    alert("Digite um numero valido")
}
*/


var nome = prompt("inserir nome: ");
var sobrenome = prompt("Inserir sobrenome: ")

if ((nome != "") && (sobrenome != "")) {
    alert("Nome: " + nome + "\nSobrenome: " +
        sobrenome);
} else {
    alert("Erro ao inserir nome e sobrenome");
}
