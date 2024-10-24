//usando este listener faz com que
//  o script só corre quando o conteudo foi carregado
document.addEventListener('DOMContentLoaded', (e) => {
    button = document.getElementById("genBtn")

    button.addEventListener('click', (e) => {
        //generateBet("olMain", "olStars")

        getNewBet()
    });
})

function getNewBet() {
    fetch('http://localhost:3000/euro')
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

function generateBet(idNumbers, idStars) {
    let numbers = getShuffledNumbers(50, 5)
    let stars = getShuffledNumbers(12, 2)

    createBetElements(idNumbers, numbers)
    createBetElements(idStars, stars)

    console.log(getBetJSON(numbers, stars))
}

function getShuffledNumbers(total, amount) {
    array = Array.from({ length: total }, (v, k) => k + 1)

    durstenfeldShuffle(array)

    numbers = array.slice(0, amount)

    numbers.sort((a, b) => { return a - b })
    return numbers
}

function durstenfeldShuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
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
