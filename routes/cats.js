var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/fact', function (req, res, next) {
    fetch('https://catfact.ninja/fact')
        .then(fetchResponse => fetchResponse.json())
        .then(json => {

            res.render('fact', { title: 'Cat Fact', fact: json.fact });
        })


});

module.exports = router;


// Modify the index.ejs template to display a link that says Get a cat fact. 
// This link should send a GET request to http://localhost:3000/cats/fact when clicked.