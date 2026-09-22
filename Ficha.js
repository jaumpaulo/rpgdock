class Ficha {
    constructor(nome, raca, classe, nivel) {
        this.nome = nome;
        this.raca = raca;
        this.classe = classe;
        this.nivel = nivel;

        this.vida = 100;
        this.mana = 50;

        this.forca = 0;
        this.destreza = 0;
        this.constituicao = 0;
        this.inteligencia = 0;
        this.sabedoria = 0;
        this.carisma = 0;
    }

    mostrarFicha() {
        console.log("\n==============================");
        console.log("       FICHA DO PERSONAGEM");
        console.log("==============================");

        console.log(`Nome: ${this.nome}`);
        console.log(`Raça: ${this.raca}`);
        console.log(`Classe: ${this.classe}`);
        console.log(`Nível: ${this.nivel}`);

        console.log("\n--- ATRIBUTOS ---");
        console.log(`Força: ${this.forca}`);
        console.log(`Destreza: ${this.destreza}`);
        console.log(`Constituição: ${this.constituicao}`);
        console.log(`Inteligência: ${this.inteligencia}`);
        console.log(`Sabedoria: ${this.sabedoria}`);
        console.log(`Carisma: ${this.carisma}`);

        console.log("\n--- STATUS ---");
        console.log(`Vida: ${this.vida}`);
        console.log(`Mana: ${this.mana}`);
    }
}

module.exports = Ficha;