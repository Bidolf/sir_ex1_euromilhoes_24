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

function generate(n, min, max){
  let setOfNumbers = new Set();
  while(setOfNumbers.size < n){
      newNumber = Math.floor(Math.random() * (max-min) +min);
      setOfNumbers.add(newNumber);
  }
  return Array.from(setOfNumbers).sort((a,b) => a-b);
}
function bet(){
  numbers = generate(5,1,50);
  stars = generate(2,1,12)
  newBet = {
    "numbers": numbers,
    "stars": stars
  }
  return newBet;
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

