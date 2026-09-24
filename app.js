import Ficha from "./Ficha.js";
import { input, select } from "@inquirer/prompts";

let fichas = [];

async function criarFicha() {
    console.log("\n==============================");
    console.log("         CRIAR FICHA");
    console.log("==============================");

    let nome = await input({message: "Nome: "});
    let raca = await select({
        message: "Escolha sua raça",
        choices:[
            {name:"Humano", value:"Humano"},
            {name:"Anão", value:"Anão"},
            {name:"Dahllan", value:"Dahllan"},
            {name:"Elfo", value:"Elfo"},
            {name:"Goblin", value:"Goblin"},
            {name:"Lefou", value:"Lefou"},
            {name:"Minotauro", value:"Minotauro"},
            {name:"Qareen", value:"Qareen"},
            {name:"Golem", value:"Golem"},
            {name:"Hynne", value:"Hynne"},
            {name:"Kliren", value:"Kliren"},
            {name:"Medusa", value:"Medusa"},
            {name:"Osteon", value:"Osteon"},
            {name:"Sereia/Tritão", value:"Sereia/Tritão"},
            {name:"Sílfide", value:"Sílfide"},
            {name:"Suraggel", value:"Suraggel"},
            {name:"Trog", value:"Trog"}
        ]
    });
    let classe = await select({
        message: "Escolha sua classe",
        choices:[
            {name:"Arcanista", value:"Arcanista"},
            {name:"Bárbaro", value:"Bárbaro"},
            {name:"Bardo", value:"Bardo"},
            {name:"Bucaneiro", value:"Bucaneiro"},
            {name:"Caçador", value:"Caçador"},
            {name:"Cavaleiro", value:"Cavaleiro"},
            {name:"Clérigo", value:"Clérigo"},
            {name:"Druida", value:"Druida"},
            {name:"Guerreiro", value:"Guerreiro"},
            {name:"Inventor", value:"Inventor"},
            {name:"Ladino", value:"Ladino"},
            {name:"Lutador", value:"Lutador"},
            {name:"Nobre", value:"Nobre"},
            {name:"Paladino", value:"Paladino"}
        ]
    });
    let nivel = parseInt(await input({ message:"Nível: " }));

    let ficha = new Ficha(nome, raca, classe, nivel);

    console.log("\n--- ATRIBUTOS ---");

    ficha.forca = parseInt(await input({ message: "Força: " }));
    ficha.destreza = parseInt(await input({ message: "Destreza: " }));
    ficha.constituicao = parseInt(await input({ message: "Constituição: " }));
    ficha.inteligencia = parseInt(await input({ message: "Inteligência: " }));
    ficha.sabedoria = parseInt(await input({ message: "Sabedoria: " }));
    ficha.carisma = parseInt(await input({ message: "Carisma: " }));

    fichas.push(ficha);

    console.log("\nFicha criada com sucesso!");
}

async function verFichas() {
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

    let escolha = parseInt(await input({message: "\nDigite o número da ficha para ver: " }));

    if (escolha >= 1 && escolha <= fichas.length) {
        fichas[escolha - 1].mostrarFicha();
    } else {
        console.log("Ficha inválida.");
    }
}

async function menu() {
    while (true) {
        console.log("\n==============================");
        console.log("           FICHA RPG");
        console.log("==============================");
        const opcao = await select({
            message: "Escolha uma opção: ",
            choices:[
                {name: "1 - Criar ficha", value: 1},
                {name: "2 - Ver fichas", value: 2},
                {name: "3 - Encerrar programa", value: 3}
            ]
        });

        if (opcao == 1) {
            await criarFicha();
        } else if (opcao == 2) {
            await verFichas();
        } else if (opcao == 3) {
            console.log("\nPrograma encerrado!");
            break;
        } else {
            console.log("\nOpção inválida!");
        }
    }
}

menu();