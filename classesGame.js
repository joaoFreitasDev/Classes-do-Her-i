function personagem(nome, idade, classe) {
    let heroi = {"name": nome, "old": idade, "class": classe, ataque: ""}
    
    if (heroi["class"] === "mago"){
        ataque = "magia"
    }else if(heroi["class"] === "guerreiro"){
        ataque = "espada"
    }else if(heroi["class"] === "monge"){
        ataque = "artes marciais"
    }else if(heroi["class"] === "ninja"){
        ataque = "shuriken"
    }
    
    console.log(`O heroi ${heroi["name"]} tem a idade de ${heroi["old"]} o herói é um ${heroi["class"]}`)
    aventura(ataque)
}

function aventura(atk) {
    caminho = ["monstro", "puzzle", "xp", "armadura", "monstro", "xp"]
    let xp = 0
    for(let i in caminho){
        if(caminho[i] === "monstro"){
            console.log(`Monstro apareceu você atacou com ${atk}!`)
        }else if(caminho[i] === "puzzle"){
            console.log(`Um puzzle foi encontrado e você conseguiu resolver.`)
        }else if(caminho[i] === "xp"){
            xp += 1000
            console.log(`1.000 de XP adquirido agora seu xp total é ${xp}`)
        }else if(caminho[i] === "armadura") {
            console.log("Agora sua armadura está com maior proteção.")
        }
    }
}

personagem("J0t1nh4", 22, "guerreiro")