//Criando a Classe Herói
class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atack(tipo) {
        if (tipo == "MAGO") {
            console.log(`O ${tipo} atacou usando MAGIA`)
        } else if (tipo == "GUERREIRO"){
            console.log(`O ${tipo} atacou usando ESPADA`)
        } else if (tipo == "MONGE"){
            console.log(`O ${tipo} atacou usando ARTES MARCIAIS`)
        } else if (tipo == "NINJA"){
            console.log(`O ${tipo} atacou usando SHURIKEN`)
        } else {
            console.log(`O ${tipo} Não está listado como um tipo válido e sua jogada foi cancelada`)
        }
        
    }

}

const jogo = new Heroi("RANSES", 44, "SERA");

jogo.atack(jogo.tipo)



