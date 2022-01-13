// 1- This is an express server that listens to port 5353 that performs the following requirements 

// a- serve the following files: index.html, page1.html, page2.html.
// b- if the user makes a GET request without stating a file serve index.html
// c- serve a JSON response if the request is a POST

const express = require('express');
const path = require('path');

require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended:  true}));
app.use(express.json());


//serve GET: static pages - index.html, page1.html, page2.html
app.use(express.static(path.join(__dirname, 'public')));

//serve POST
app.post('/new-user', jsonParser, (req, res)=> {    
    res.send(req.body);
});

const server = app.listen(process.env.PORT, ()=>{
    const port = server.address().port;
    console.log(process.env.MSG_SERVER_START, port);    
});
