const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'Wild Animals';
  var heading = 'The World of Animals';
  res.render('pages/index', {
    'title':title,
    'heading': heading
    });  
})

app.get('/bird', (req, res) => {
  var title = 'My Favorite Birds';
  var heading = 'The World of Animals';
  res.render('pages/bird', {
    'title':title,
    'heading': heading
    });  
})

app.get('/fish', (req, res) => {
  var title = 'My Favorite Fish';
  var heading = 'The World of Animals';
  res.render('pages/fish', {
    'title':title,
    'heading': heading
    });  
})

app.get('/mammal', (req, res) => {
  var title = 'My Favorite Mammals';
  var heading = 'The World of Animals';
  res.render('pages/mammal', {
    'title':title,
    'heading': heading
    });  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
