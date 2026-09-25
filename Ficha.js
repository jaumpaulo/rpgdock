class Ficha {
    #nome
    #raca
    #classe
    #nivel
    #vida
    #mana

    constructor(nome, raca, classe, nivel) {
        this.#nome = nome
        this.#raca = raca
        this.#classe = classe
        this.#nivel = nivel

        this.#vida = 100
        this.#mana = 50
    }

    get nome() {
        return this.#nome
    }

    get raca() {
        return this.#raca
    }

    get classe() {
        return this.#classe
    }

    get nivel() {
        return this.#nivel
    }

    get vida() {
        return this.#vida
    }

    get mana() {
        return this.#mana
    }

    mostrarFicha() {
        console.log("### FICHA ###")

        console.log(`Nome: ${this.#nome}`)
        console.log(`Raça: ${this.#raca}`)
        console.log(`Classe: ${this.#classe}`)
        console.log(`Nível: ${this.#nivel}`)

        console.log(`\nVida: ${this.#vida}`)
        console.log(`Mana: ${this.#mana}`)
    }
}

export default Ficha