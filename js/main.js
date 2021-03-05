var nome = "Strufaldi";
var idade = 20;
var idade2 = "21";
var num = 30;
var frase = "JavaScript é roxo";
var lista = ["pera", "uva", "maçã"]; //Lista de array
var fruta = {nome: "pera", cor: "verde"}; //Dicionario
var frutas = [{nome: "uva", cor: "Roxa"}, {nome: "maçã", cor: "vermelha"}]; //Dicionario de Array
var n2 = prompt("Digite sua Idade: ");
var count = 0;
var data = new Date();

alert ("Bem vindo " + nome + " Hoje vc faz " + idade + " anos");
alert(idade + idade2);

console.log(idade + num);
console.log(num * idade);
console.log(idade / num);
console.log(num - idade);
console.log(frase);
console.log(frase.replace("JavaScript", "React")); //o replace Troca a palavra JavaScript por React
console.log(frase.toLocaleUpperCase()); // o toLocaleUPPERCase deixa a frase em maiúsculo
console.log(frase.toLocaleLowerCase()); // o toLocaleLOWERCase deixa a frase em minúsculo 

alert(frase.replace("JavaScript", "ReactNative"));

console.log(lista); //Lista todos os elementos da lista
console.log(lista[2]); //Cita apenas o 3 elemento da lista, no array começa a se contar do zero, ou seja, vai imprimir maçã.
lista.push("Salada Mista"); //Adiciona mais um elemento no array
console.log(lista);
lista.pop(); //Remove o último elemento da lista.
console.log(lista);
console.log(lista.length); //Conta quantos elementos tem na lista
console.log(lista.reverse()); //Exibe lista de trás para frente
console.log(lista.toString()); // Array vira string
console.log(lista.join(" | ")); // Array vira string e é colocado junto com oq tiver dentro do join

alert(lista[1]);

console.log(fruta); //Imprime o dicionario
console.log(fruta.nome); 

alert(fruta.cor);

console.log(frutas); //Imprime o dicionario com todos os arrays
console.log(frutas[1].nome);

alert(frutas[1].cor);

if(n2>=18){
    alert("Liberado");
}else{
    alert("Negado");
}

while(count < 5){
    console.log(count);
    count++; // mesma coisa count = count + 1;
}

for(count=0; count<=5; count++){
    console.log(count);
}

alert(data);
alert(data.getMonth()+1); //Trás apenas o mês em números, o +1 é para trazer o mês certo.
alert(data.getMinutes()); //Trás os minutos
alert(data.getDay() + "/" + data.getMonth()+1 + "/" + data.getFullYear()+ "-" +data.getHours() + ":" + data.getMinutes());


function soma(s1, s2){
    return s1 + s2;
}
alert (soma(20, 22));

function setReplace(trocar, troca1, troca2){
    return trocar.replace(troca1, troca2);
}
alert(setReplace("JavaScript é roxo", "JavaScript", "React"));

function botao(){
    alert("Função do botão");
    document.getElementById("funcao").innerHTML = "Função do botão";
}

function redirecionar(){
    window.open("https://github.com/");
    window.location.href = "https://github.com/";
}

function mouse(elemento){
    elemento.innerHTML = "Troca mensagem"; // faz a mesma coisa que o -> document.getElementById("mousemove").innerHTML = "Troca mensagem", porém possibilita ede fazer em outras linhas sem escrever mais outras funções.
}

function voltar (elemento){
    elemento.innerHTML = "Função do Mouse"; // document.getElementById("mousemove").innerHTML = "Função do Mouse";
}

function load(){
    alert("função de carregamento da página");
}

function opcao(elemento){
    console.log(elemento.value);
}