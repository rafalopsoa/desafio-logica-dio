// Criando a função criarHeroi, que cria objetos relacionados aos heróis.
function criarHeroi(nomeHeroi, idadeHeroi, tipoHeroi) {
    
    // Retornamos um objeto com as propriedades e a função atacar
    return {
        nomeHeroi,
        idadeHeroi,
        tipoHeroi,
        
        atacar: function() {
            let ataque = "";

            // Note que aqui não precisamos do "this.", pois a função 
            // já tem acesso direto à variável tipoHeroi recebida lá em cima!
            if (tipoHeroi === "Mago") {
                ataque = "magia";
            } else if (tipoHeroi === "Guerreiro") {
                ataque = "espada";
            } else if (tipoHeroi === "Monge") {
                ataque = "artes marciais";
            } else if (tipoHeroi === "Ninja") {
                ataque = "shuriken";
            } else {
                ataque = "um ataque desconhecido";
            }

            console.log(`O ${tipoHeroi} atacou usando ${ataque}`);
        }
    };
}

// Testando o código:


let meuHeroi = criarHeroi("Rafaela", 2000, "Mago");
meuHeroi.atacar(); 

let outroHeroi = criarHeroi("Adriano", 35, "Guerreiro");
outroHeroi.atacar(); 

let maisUmHeroi = criarHeroi("Gabriel", 5000, "Monge");
maisUmHeroi.atacar(); 

let maisUmOutroHeroi = criarHeroi("Ken", 60, "Ninja");
maisUmOutroHeroi.atacar(); 

let umHeroiDesconhecido = criarHeroi("Ken", 60, "Carateca");
umHeroiDesconhecido.atacar(); 