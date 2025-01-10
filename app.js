console.log ("Boas-vindas!");
let nome = "Sara";
    console.log(`Olá, ${nome}`);
    alert(`Olá, ${nome}`);

let linguagemPref = prompt("Qual é a linguagem de programação que você mais gosta? ");
    console.log(linguagemPref);

let valor1 = 10;
let valor2 = 2;
let resultado = valor1 + valor2;
    console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

let valor3 = 5;
let valor4 = 7;
let resultadoTotal = valor3 - valor4;
    console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultadoTotal}.`);

let idade = prompt("Qual é sua idade: ");
    if (idade >= 18) {
        console.log("Você é maior de 18 anos");
    }else{
        console.log("Você é menor de idade");
    }

let num = prompt("Digite um número:");
    if(num > 0) {
        console.log(`O valor ${num} é positivo`);
    }else if (num < 0) {
            console.log(`O valor ${num} é negativo`);
    }else{
        alert("O valor é zero");
    }

var contador = 1;
    while(contador <= 10){
    console.log(contador);
    contador++;
}

let nota = 10;
    if(nota >= 7) {
        console.log("Aprovado");
    }else{
        console.log("Reprovado");
    }

let numeroAleatorio = (Math.random());
    console.log(numeroAleatorio);

let numeroSecreto = parseInt(Math.random()* 10 + 1);
    console.log(numeroSecreto);

let numeroSecreto1 = parseInt(Math.random()* 1000 + 1);
    console.log(numeroSecreto1);

//console.log(`${nome}, a linguagem que você mais gosta é ${linguagemPref} e você tem ${idade} anos`);
//console.log(`${nome}, a soma de ${valor1} e ${valor2} é ${resultado} sua note foi de ${nota}`)

alert(`${nome}, a linguagem que você mais gosta é ${linguagemPref} e você tem ${idade} anos`);
alert(`${nome}, a soma de ${valor1} e ${valor2} é ${resultado} sua note foi de ${nota}`)








