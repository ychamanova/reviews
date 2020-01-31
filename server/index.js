const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const server = express();
const PORT = 3000;

server.use(express.static(path.join(__dirname, '/../public')));

server.get('/reviews/:page_id', (req, res) => {
  db.getAllReviewsForPage(req.params.page_id, (err, results) => {
    if (err) {
      console.log('error from db query for reviews', err);
      res.send(err);
    } else {
      console.log(`db query returned ${results.length} results`);
      res.send(results);
    }
  });
});

server.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
