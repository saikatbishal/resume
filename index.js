const express = require('express')
const app = express()
//above two lines were copied from the api documentation of expressjs.com
const path = require('path');
//path allows us to create routes for our website without actually having to create routes
const PORT = process.env.PORT || 5000;
//this allows us to push our app to heroku
//when we are on our local machine we can use the port 5000

//setting static folder
app.use(express.static(path.join(__dirname, 'public')));
//this will point everything on our app to the public folder


app.listen(PORT, () => console.log('Server is Listening on port ' + PORT))
//console.log() in javascript is just like printf() in c++;
