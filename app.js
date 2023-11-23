const pokemons=[
    {
        name:'Pikachu',
        src:'Images/pikachu.png'
    },
    {
        name:'Bulbasaur',
        src:'Images/bullbasaur.png'
    },
    {
        name:'Charmander',
        src:'Images/charmander.png'
    },
    {
        name:'Eevee',
        src:'Images/eevee.png'
    },
    {
        name:'Mankey',
        src:'Images/mankey.png'
    },
    {
        name:'Snorlax',
        src:'Images/snorlax.png'
    },
    {
        name:'Pikachu',
        src:'Images/pikachu.png'
    },
    {
        name:'Squirtle',
        src:'Images/squirtle.png'
    },
    {
        name:'Bulbasaur',
        src:'Images/bullbasaur.png'
    },
    {
        name:'Charmander',
        src:'Images/charmander.png'
    },
    {
        name:'Eevee',
        src:'Images/eevee.png'
    },
    {
        name:'Mankey',
        src:'Images/mankey.png'
    },
    {
        name:'Snorlax',
        src:'Images/snorlax.png'
    },
    {
        name:'Squirtle',
        src:'Images/squirtle.png'
    },
    {
        name:'Psyduck',
        src:'Images/psyduck.png'
    },
    {
        name:'Psyduck',
        src:'Images/psyduck.png'
    }

]
let chosenPokemon=[]
let chosenId=[]
let score=0
pokemons.sort(()=>0.5-Math.random())
console.log(pokemons)
let temp=0
const SCORE=document.getElementById('score')
function insertImg(){
    for (let i=0;i<pokemons.length;i++){
        let cardimg=document.querySelector(`#c${i} img`)
        cardimg.setAttribute('src','Images/ball.png')
        cardimg.addEventListener('click',()=>{
            temp=i //id extraction
            shuffleCards(cardimg)
        })
    }
}
insertImg()
function checkMate(){
    let cards = document.querySelectorAll('img')
    let pehla=chosenId[0]//ID 1
    let dusra=chosenId[1]//ID 2
    pehla=pehla+1
    dusra=dusra+1
    console.log(pehla)
    console.log(dusra)
    console.log(cards[pehla])
    console.log(cards[dusra])
    if(pehla==dusra){
        cards[pehla].setAttribute('src','Images/ball.png')
        cards[dusra].setAttribute('src','Images/ball.png')
        alert("Its a Same Pokemon !")
    }
    else if(chosenPokemon[0]===chosenPokemon[1]){
        alert(`You Caught ${chosenPokemon[0]}. Yayy !`)
        cards[pehla].setAttribute('src','Images/gotcha.png')
        cards[dusra].setAttribute('src','Images/gotcha.png')
        cards[pehla].removeEventListener('click',shuffleCards)
        cards[dusra].removeEventListener('click',shuffleCards)
        score=score+1
        SCORE.textContent=score
    }
    else{
        cards[pehla].setAttribute('src','Images/ball.png')
        cards[dusra].setAttribute('src','Images/ball.png')
    }
    if(score==8){
        alert("YOU WON THE GAME!")
    }
    chosenId=[]
    chosenPokemon=[]
}
function shuffleCards(imgCard){
    console.log(temp)
    imgCard.setAttribute('src',pokemons[temp].src)
    chosenPokemon.push(pokemons[temp].name)
    chosenId.push(temp)
    if(chosenId.length===2){
        setTimeout(checkMate,400)
    }
}