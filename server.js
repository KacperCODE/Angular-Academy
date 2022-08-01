const express = require('express')
const app = express()
app.use(express.json())
app.listen(3000)

users = [
  {
    name: "Jan",
    surname: "Kowalski",
    email: "jankowalski@gmail.com",
    tosAccepted: true,
  },
  {
    name: "Krystyna",
    surname: "Zgazownik",
    email: "krysia@gmail.com",
    tosAccepted: true,
  },
  {
    name: "Kamil",
    surname: "Tumulec",
    email: "tumulec@gmail.com",
    tosAccepted: true,
  },
];


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get("/users", (req, res) => {
  res.send(users);
})

app.post('/users', (req, res) => {
  const {name, surname, email, tosAccepted} = req.body
  if (!name || !surname || !email || !tosAccepted) {
    res.status(400).send('Data missing')
    return;
  }

  users.push({name, surname, email, tosAccepted})
  res.status(200).send(users);
  return

})

