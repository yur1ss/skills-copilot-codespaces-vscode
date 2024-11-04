//Create web server with Express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4001;

app.use(bodyParser.json());

const comments = require('./comments.json');

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get comments by ID
app.get('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  res.json(comment);
});

// Add new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});