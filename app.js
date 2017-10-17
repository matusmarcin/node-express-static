const express = require('express')
const app = express()

const users = [];
users[0] = { id: 1, name: 'John Doe', friends: [2, 5] };
users[1] = { id: 2, name: 'Jane Doe', friends: [1, 5] };
users[2] = { id: 3, name: 'Donald Trump', friends: [4] };
users[3] = { id: 4, name: 'Elon Musk', friends: [5, 6] };
users[4] = { id: 5, name: 'Bill Gates', friends: [1, 2, 4, 6] };
users[5] = { id: 6, name: 'Tim Cook', friends: [4, 5] };

app.get('/', function (req, res) {
  res.send({ message: 'Hello!' })
});

app.get('/users', function (req, res) {
  res.send({ message: 'Success!', users: users })
});

app.get('/users/:user_id', function (req, res) {
  res.send({ message: 'Sucess!', user: users[req.params.user_id-1] });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})