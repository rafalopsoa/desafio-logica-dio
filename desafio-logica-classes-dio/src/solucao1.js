//Escrevendo as classes de um jogo.

class Heroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
        this.nomeHeroi = nomeHeroi;
        this.idadeHeroi = idadeHeroi;
        this.tipoHeroi = tipoHeroi;
    }

    atacar() {
        
        let ataque = "";

        // Usando this. e === para comparação
        if (this.tipoHeroi === "Mago") {
            ataque = "magia";
        } else if (this.tipoHeroi === "Guerreiro") {
            ataque = "espada";
        } else if (this.tipoHeroi === "Monge") {
            ataque = "artes marciais";
        } else if (this.tipoHeroi === "Ninja") { // É bom especificar o ninja
            ataque = "shuriken";
        } else {
            ataque = "um ataque desconhecido";
        }

        // Imprime a mensagem final (o console.log fica dentro de atacar)
        console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`);
    }
}

// Testando o código:
let meuHeroi = new Heroi("Rafaela", 2000, "Mago");
meuHeroi.atacar(); 

let outroHeroi = new Heroi("Adriano", 35, "Guerreiro");
outroHeroi.atacar(); 

let maisUmHeroi = new Heroi("Gabriel", 5000, "Monge");
maisUmHeroi.atacar(); 

let maisUmOutroHeroi = new Heroi("Ken", 60, "Ninja");
maisUmOutroHeroi.atacar(); 

let umHeroiDesconhecido = new Heroi("Ken", 60, "Carateca");
umHeroiDesconhecido.atacar(); 