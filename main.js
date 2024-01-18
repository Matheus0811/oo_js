
function Veiculo(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

// Método "abstrato" que será sobrescrito nas classes filhas
Veiculo.prototype.ligar = function () {
    throw new Error("Método 'ligar' deve ser implementado nas classes filhas.");
};

// Classes filhas
function Carro(marca, modelo, ano) {
    // Chama o construtor da classe pai
    Veiculo.call(this, marca, modelo, ano);
}

Carro.prototype = Object.create(Veiculo.prototype);
Carro.prototype.constructor = Carro;

// Implementação do método ligar para Carro
Carro.prototype.ligar = function () {
    return `O carro ${this.marca} ${this.modelo} está ligado.`;
};

function Moto(marca, modelo, ano) {
    // Chama o construtor da classe pai
    Veiculo.call(this, marca, modelo, ano);
}

Moto.prototype = Object.create(Veiculo.prototype);
Moto.prototype.constructor = Moto;

// Implementação do método ligar para Moto
Moto.prototype.ligar = function () {
    return `A moto ${this.marca} ${this.modelo} está ligada.`;
};

// Três instâncias de objetos
var veiculo1 = new Carro("Toyota", "Corolla", 2022);
var veiculo2 = new Moto("Honda", "CBR500R", 2021);
var veiculo3 = new Carro("Ford", "Fiesta", 2019);

// Testando as instâncias
console.log(veiculo1.ligar());
console.log(veiculo2.ligar());
console.log(veiculo3.ligar());
