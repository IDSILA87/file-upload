require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const fileUploader = require('express-fileupload');
const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'/ejs'));
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello world!!!');
});

app.listen(process.env.PORT, (err) => {
  err ? err : console.log('SERVER STARTED:', process.env.PORT)
})

