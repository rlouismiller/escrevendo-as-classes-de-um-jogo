class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }

    atacar(ataque) {
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }

}

let entradaNome = "Jamelão"
let entradaIdade = 150
let entradaTipo = "ninja"
let ataque = ["magia", "espada", "artes marciais", "shuriken"]


let personagem0001 = new Heroi(entradaNome, entradaIdade, entradaTipo)

console.log(personagem0001)

switch (entradaTipo) {
    case "mago":
        ataqueEscolhido = ataque[0]
        break;

    case "guerreiro":
        ataqueEscolhido = ataque[1]
        break;

    case "monge":
        ataqueEscolhido = ataque[2]
        break;

    case "ninja":
        ataqueEscolhido = ataque[3]
        break;
}


personagem0001.atacar(ataqueEscolhido)
