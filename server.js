const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening On PORT ${PORT}`)
});
