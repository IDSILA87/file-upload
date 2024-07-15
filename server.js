require('dotenv').config();
const path = require('path');
const express = require('express');
const fileUploader = require('express-fileupload');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/ejs'));
app.use(express.static('public'));
app.use(express.json());
app.use(fileUploader());

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/upload', (req, res) => {
  res.json('Succsefyll upload');
});
app.post('/upload', (req, res) => {
  const serverFile = req.files.file;
  serverFile.mv(__dirname + '/upload/' + serverFile.name);
});




app.listen(process.env.PORT, (err) => {
  err ? err : console.log('SERVER STARTED:', process.env.PORT)
})

