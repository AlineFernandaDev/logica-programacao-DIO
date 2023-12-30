// Definição da classe ItemMagico
class ItemMagico {
  //Construtor que recebe todos os atributos referente ao item mágico
  constructor(tipo, dano, resistencia) {
    this.tipo = tipo;
    this.dano = dano;
    this.resistencia = resistencia;
  }
  //Função que calcula o dano do item
  calcularDano() {
    return this.tipo === "arma" ? this.dano * 2 : this.dano;
  }
}
//Tipo do item mágico, o dano no item e a resistência do item
const tipoItem = "espada";
const danoItem = 200;
const resistenciaItem = 300;

//Objeto ItemMagico personalizado com base no tipo escolhido

const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

// TODO: Impressão dos atributos do item personalizado
console.log("Tipo: " + itemPersonalizado.tipo);
console.log("Dano: " + itemPersonalizado.dano);
console.log("Resistencia: " + itemPersonalizado.resistencia);

// Calculo e impressão do dano causado pelo item personalizado em um combate simulado
const danoTotal = itemPersonalizado.calcularDano();
console.log("Dano em combate: " + danoTotal);
