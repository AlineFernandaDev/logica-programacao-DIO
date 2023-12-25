class personagem {
  constructor(classe, armadura, arma, status) {
    this.classe = classe;
    this.armadura = armadura;
    this.arma = arma;
    this.status = status;
  }
  ataque() {
    console.log(
      `O ${this.classe} com ${this.armadura} ataca usando ${this.arma} aumentando seus pontos de ${this.status} + XP`
    );
  }
}

const duelista = new personagem(
  "Duelista",
  "Set Marcial",
  "Par de Katanas",
  "Destreza e Força"
);

const mago = new personagem(
  "Mago",
  "Set Mithril",
  "Orbe Ametista",
  "Inteligencia"
);

duelista.ataque();
mago.ataque();
