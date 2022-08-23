const express = require('express')
const app = express()
const port = 3000
var data = require('./data/test.json');

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

app.get('/about', (req, res) => {
  var title = 'My About Page';
  var heading = 'The World of Animals';
  res.render('pages/about', {
    'title':title,
    'heading': heading
    });  
})


app.get('/contact', (req, res) => {
  var title = 'My contact Page';
  var heading = 'The World of Animals';
  res.render('pages/contact', {
    'title':title,
    'heading': heading
    });  
})

app.get('/users', (req, res) => {
  var title = 'My Users Page';
  var heading = 'The World of Animals';
  res.render('users/index', {
    'title':title,
    'heading': heading,
    'users': data
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

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 var heading = 'The World of Animals';
 res.render('users/view', {
     title: title,
   'heading': heading,
     user: data[--id]
 });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(data);
})
