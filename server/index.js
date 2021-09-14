import express from 'express';
import bodyParser from 'body-parser';

// const { getAPI } = require(`${__dirname}/controllers/apiCtrl`);

const app = express();
const port = 3003;
const { text } = bodyParser;

app.use(jsonParser);

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    next();
  }
);

app.listen(port, () => console.log('I LOVE YOU' + ' ' + 3003))