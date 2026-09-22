const prompt = require("prompt-sync")();
const Ficha = require("./Ficha");

let fichas = [];

function criarFicha() {
    console.log("\n==============================");
    console.log("         CRIAR FICHA");
    console.log("==============================");

    let nome = prompt("Nome: ");
    let raca = prompt("Raça: ");
    let classe = prompt("Classe: ");
    let nivel = parseInt(prompt("Nível: "));

    let ficha = new Ficha(nome, raca, classe, nivel);

    console.log("\n--- ATRIBUTOS ---");

    ficha.forca = parseInt(prompt("Força: "));
    ficha.destreza = parseInt(prompt("Destreza: "));
    ficha.constituicao = parseInt(prompt("Constituição: "));
    ficha.inteligencia = parseInt(prompt("Inteligência: "));
    ficha.sabedoria = parseInt(prompt("Sabedoria: "));
    ficha.carisma = parseInt(prompt("Carisma: "));

    fichas.push(ficha);

    console.log("\nFicha criada com sucesso!");
}

function verFichas() {
    console.log("\n==============================");
    console.log("          SUAS FICHAS");
    console.log("==============================");

    if (fichas.length == 0) {
        console.log("Nenhuma ficha criada.");
        return;
    }

    fichas.forEach((ficha, indice) => {
        console.log(`\n${indice + 1}. ${ficha.nome}`);
        console.log(`   Raça: ${ficha.raca}`);
        console.log(`   Classe: ${ficha.classe}`);
        console.log(`   Nível: ${ficha.nivel}`);
    })

    let escolha = parseInt(prompt("\nDigite o número da ficha para ver: "));

    if (escolha >= 1 && escolha <= fichas.length) {
        fichas[escolha - 1].mostrarFicha();
    } else {
        console.log("Ficha inválida.");
    }
}

function menu() {
    while (true) {
        console.log("\n==============================");
        console.log("           FICHA RPG");
        console.log("==============================");
        console.log("1 - Criar ficha");
        console.log("2 - Ver fichas");
        console.log("3 - Encerrar programa");
        console.log("==============================");

        let opcao = prompt("Escolha uma opção: ");

        if (opcao == 1) {
            criarFicha();
        } else if (opcao == 2) {
            verFichas();
        } else if (opcao == 3) {
            console.log("\nPrograma encerrado!");
            break;
        } else {
            console.log("\nOpção inválida!");
        }
    }
}

menu();