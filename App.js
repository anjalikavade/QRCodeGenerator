const express =require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(router);
const port = 3000;
app.listen(port , () =>{
  console.log(`Listening on port ${port}`);
});