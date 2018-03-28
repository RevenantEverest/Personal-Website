const express = require('express');
const logger = require('morgan');

const app = express();

//Dependencies
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//Routes


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on PORT 🐺 ${PORT}`)
});
