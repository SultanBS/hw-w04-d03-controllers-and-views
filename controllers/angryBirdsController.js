var express = require('express');
var router = express.Router();

var package = require('../modules/angry_birds');

router.get('/', function(request, response){
    var birds = package.birds;
    var mustachVariable = {
        birdsList: birds,
        id: birds.id,
        name: birds.name,
        image: birds.image

    }
    response.render('./angryBirds_index.html', mustachVariable);
})

router.get('/:id', function(request, response){
    var birdId = request.params.id;
    var birds = package['birds'][birdId];
    var mustachVariable = {
        id: birds,
        name: birds.name,
        abilities: birds.abilities,
        image: birds.image,
        group: birds.group,
        species: birds.species,
        feels: birds.feels

    }
    response.render('./angryBirds_show.html', mustachVariable);
})

module.exports = router;