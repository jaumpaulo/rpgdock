import Ficha from "./Ficha.js"

class Atributos extends Ficha {
    #forca
    #destreza
    #constituicao
    #inteligencia
    #sabedoria
    #carisma

    constructor(nome, raca, classe, nivel) {
        super(nome, raca, classe, nivel)

        this.#forca = 0
        this.#destreza = 0
        this.#constituicao = 0
        this.#inteligencia = 0
        this.#sabedoria = 0
        this.#carisma = 0
    }

    get forca() {
        return this.#forca
    }

    set forca(valor) {
        this.#forca = valor
    }

    get destreza() {
        return this.#destreza
    }

    set destreza(valor) {
        this.#destreza = valor
    }

    get constituicao() {
        return this.#constituicao
    }

    set constituicao(valor) {
        this.#constituicao = valor
    }

    get inteligencia() {
        return this.#inteligencia
    }

    set inteligencia(valor) {
        this.#inteligencia = valor
    }

    get sabedoria() {
        return this.#sabedoria
    }

    set sabedoria(valor) {
        this.#sabedoria = valor
    }

    get carisma() {
        return this.#carisma
    }

    set carisma(valor) {
        this.#carisma = valor
    }

    mostrarFicha() {
        super.mostrarFicha()

        console.log("\n### Atributos ###")
        console.log(`Força: ${this.#forca}`)
        console.log(`Destreza: ${this.#destreza}`)
        console.log(`Constituição: ${this.#constituicao}`)
        console.log(`Inteligência: ${this.#inteligencia}`)
        console.log(`Sabedoria: ${this.#sabedoria}`)
        console.log(`Carisma: ${this.#carisma}`)
    }
}

export default Atributos