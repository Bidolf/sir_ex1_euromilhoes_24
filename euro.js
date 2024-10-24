//usando este listener faz com que
//  o script só corre quando o conteudo foi carregado
document.addEventListener('DOMContentLoaded', (e) => {
    button = document.getElementById("genBtn")
    
    /*
    button.addEventListener('click', (e) => {
        alert("Clicaste no botão")
    })

    button.addEventListener('click', (e) => {
        console.log('podemos criar o mesmo evento')
        console.log('várias vezes')
        //mas neste caso ele só corre depois do alerta desaoarecer
    })
    */

    //button.addEventListener('click', outrafuncao);

    /*
    button.addEventListener('click', (e)=>{
        generateNumbers("olMain",50, 5)
    });

    button.addEventListener('click', (e)=>{
        generateNumbers("olStars",12, 2)
    });
    */
    
    button.addEventListener('click', (e)=>{
        generateBet("olMain", "olStars")
    });
})

/*
function outrafuncao() {
    //get a lista daquele id
    listofnumbers = document.getElementById("olMain");
    //apagar o html
    listofnumbers.innerHTML = "";

    //criar o list item com o texto 99
    newli = document.createElement("li");
    newli.innerText = "99"

    //adicionar elemento criado à lista
    listofnumbers.appendChild(newli);
}
*/

//maneira de gerar numeros aleatórios
//tem a falha de poder ficar presa a receber o mesmo nº aleatório
//  a maneira que usei gera numeros não repetidos primeiro
//  e só depois é que escolhe os numeros aleatórios
/*
function gerarNumerosAleatorios(n, min, max){
    let setOfNumbers = new Set();
    
    while(setOfNumbers.size < n){
        newNumber = Math.floor(Math.random() * (max-min) +min);
        setOfNumbers.add(newNumber);
    }
}
*/

//esta é melhor
/*
function generateNumbers(id, total, amount) {
    list = document.getElementById(id);
    list.innerHTML = "";

    numbers = getShuffledNumbers(total, amount)
    
    for (let i=0; i<amount; i++){
        newli = document.createElement("li")

        newli.innerText = numbers[i]

        list.appendChild(newli)
    }
    console.log(numbers)
}
*/


function generateBet(idNumbers, idStars){
    let numbers = getShuffledNumbers(50, 5)
    let stars = getShuffledNumbers(12, 2)

    createBetElements(idNumbers, numbers)
    createBetElements(idStars, stars)

    console.log(getBetJSON(numbers,stars))
}

function getShuffledNumbers(total, amount){
    array = Array.from({length: total}, (v, k) => k+1)

    durstenfeldShuffle(array)

    numbers = array.slice(0, amount)
    
    numbers.sort((a,b) => {return a-b})
    return numbers
}

function durstenfeldShuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createBetElements(id, array){
    list = document.getElementById(id);
    list.innerHTML = "";

    for (let i=0; i<array.length; i++){
        newli = document.createElement("li")

        newli.innerText = array[i]

        list.appendChild(newli)
    }
}

function getBetJSON(numbers, stars){
    let newBet = {
        "timeStamp": new Date(),
        "numbers": numbers,
        "stars": stars
    }
    betJSON = JSON.stringify(newBet)
    return betJSON
}

//esta função é só pra ilustrar como passar json string para objeto
/*
function getBetFromJSON(){
    let betJSON = getBetJSON(getShuffledNumbers(50, 5), getShuffledNumbers(12, 2))
    let bet = JSON.parse(betJSON)
}
*/

//alert(button)
//  este alert faz um popup com o elemento
//      se não estivesse carregado, dizia "null"
