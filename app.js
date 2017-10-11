const express = require('express')
const app = express()

const users = [];
users[1] = { id: 1, name: 'John Doe' };
users[2] = { id: 2, name: 'Jane Doe' };
users[3] = { id: 3, name: 'Donald Trump' };

app.get('/', function (req, res) {
  res.send({ message: 'Hello!'})
});

app.get('/users', function (req, res) {
  res.send(users)
});

app.get('/users/:user_id', function (req, res) {
  res.send(users[req.params.user_id]);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})