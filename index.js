const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const { randomBytes } = require('crypto');
const cors = require('cors');
app.use(bodyParse.json());

app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  res.status(201).send(posts[id]);
});

app.listen('4000', () => {
  console.log('Listenning on 4000');
});
