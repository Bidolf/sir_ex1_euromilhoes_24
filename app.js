const express = require('express')
const app = express()
const port = 3000

//isto expõe aquela pasta
app.use(express.static('public'));

app.get('/', (req, res) => {
  return res.send('root')
})

app.get('/hello', (req, res) => {
  return res.send('Howdy World!')
})

app.get('/euro', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  return res.json(bet());
})

function bet() {
  let numbers = generate(5,1,50);
  let stars = generate(2,1,12)
  newBet = {
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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

