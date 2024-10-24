const url = "https://sir-ex1-euromilhoes-24.onrender.com"
//const url = "http://localhost:3000"

//usando este listener faz com que
//  o script só corre quando o conteudo foi carregado
document.addEventListener('DOMContentLoaded', (e) => {
    button = document.getElementById("genBtn")

    button.addEventListener('click', (e) => {
        //este gera os numeros dentro deste euro.js
        //generateBet()

        //este usa um fetch ao api endpoint definido em app.js
        getNewBet()
    });
})

function getNewBet() {
    fetch(`${url}/euro`)
        .then((response) => response.json())
        //este response é um promise
        .then(bet => {
            //debugger;
            console.log("euro.js");
            console.log(bet);
            displayBet(bet)
        })
        .catch((error) => console.log(error))
   
}

function generateBet() {
    let numbers = generate(5,1,50);
    let stars = generate(2,1,12)
    let newBet = {
      "numbers": numbers,
      "stars": stars
    }
    console.log(newBet)
    displayBet(newBet)
}
function generate(n, min, max){
    let array = Array.from({ length: max }, (v, k) => k + min)
    durstenfeldShuffle(array)
    let numbers = array.slice(0, n)
    numbers.sort((a, b) => { return a - b })
    console.log(numbers)
    return numbers
}
function durstenfeldShuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayBet(bet){
    theOLNumbers = document.getElementById('olMain');
    theOLNumbers.innerHTML = "";

    bet.numbers.forEach(number => {
        newLi = document.createElement("li");
        newLi.innerHTML = number;
        theOLNumbers.appendChild(newLi);
    });

    theOLStars = document.getElementById('olStars');
    theOLStars.innerHTML = "";

    bet.stars.forEach(star => {
        newLi = document.createElement("li");
        newLi.innerHTML = star;
        theOLStars.appendChild(newLi);
    });
}

function createBetElements(id, array) {
    list = document.getElementById(id);
    list.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        newli = document.createElement("li")

        newli.innerText = array[i]

        list.appendChild(newli)
    }
}

function getBetJSON(numbers, stars) {
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
