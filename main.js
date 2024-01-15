function Celular(modelo, cor) {
    this.modelo = modelo;
    this.cor = cor;
    this.bateria = function() {
        console.log("bateria");
    }
}

const celularDaMaria = {
    modelo: 'sansug',
    cor: 'branco',
    bateria: function() {
        console.log("100%");
    }
}

const celularDoJoao ={
    modelo: 'iphone',
    cor: 'preto',
    bateria: function() {
        console.log("70%");
    }
}

const celularDoMatheus ={
    modelo: 'xiaomi',
    cor: 'vermelho',
    bateria: function() {
        console.log("10%");
    }
}



const celularDaMaria2 = new Celular("sansug", "branco");
const celularDoJoao2 = new Celular("iphone", "preto");
const celularDoMatheus2 = new Celular("xiaomi", "vermelho");

console.log(celularDaMaria2)
console.log(celularDoJoao2)
console.log(celularDoMatheus2)

const nome = "matheus"
const idade = 19
const ehMaiorDeIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof pessoa);