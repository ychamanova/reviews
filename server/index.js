const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const db = require('../database/index.js');

const server = express();
const PORT = 3000;
const corsOptions = {
  origin: 'http://localhost:3001',
};

server.use(morgan(':url'));
server.use(cors(corsOptions));
server.use(express.static(path.join(__dirname, '/../public')));

server.get('/reviews/:pageId', (req, res) => {
  console.log(req.params);
  db.getAllReviewsForPage(req.params.pageId, (err, results) => {
    if (err) {
      console.log('error from db query for reviews', err);
      res.send(err);
    } else {
      console.log(`db query returned ${results.length} results`);
      res.send(results);
    }
  });
});

server.get('/bundle.js', (req, res) => {
  console.log('serving bundle.js path');
  res.sendFile(path.join(__dirname, '/../public', 'bundle.js'));
});

server.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
