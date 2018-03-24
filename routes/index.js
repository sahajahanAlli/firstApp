var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});


router.post('/saveData', function(req, res, next) {
    var data = req.body;
    console.log(data);
    res.end();
})

router.get('/intialdata', function(req, res, next) {
    var registeredPersons = [{
        name: 'John Mill',
        age: 34,
        location: 'London'
    }, {
        name: 'Wasim Ishlam',
        age: 30,
        location: 'Kabul'
    }, {
        name: 'Steven Little',
        age: 32,
        location: 'Scotland'
    }, {
        name: 'Manash Panigrahi',
        age: 31,
        location: 'Odisha'
    }, {
        name: 'Rohit Verma',
        age: 30,
        location: 'New York'
    }];

    res.send(registeredPersons);
})
module.exports = router;