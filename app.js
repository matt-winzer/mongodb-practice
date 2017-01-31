const express = require('express');
const bodyParser = require('body-parser');

const monk = require('monk');
const db = monk('localhost/mongo-test-db');
const clowns = db.get('clowns');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

// app.get('/');
//
// app.post('/', (req, res, next) => {
//      clowns.insert(req.body)
//       .then(response => {
//         res.json(response);
//       });
// });
