const router = require('express').Router();
let Party = require('../models/party.model');




router.route('/').get((req, res) => {

  Party.find()
    .then(parties => res.json(parties))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/',(req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const place = req.body.place;
  const description = req.body.description;
  const date = Date.parse(req.body.date);


  const newParty = new Party({
    title,
    place,
    description,
    date,
    author
  });

  newParty.save()
  .then(() => res.json('Wydarzenie dodane pomyślnie!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:id',(req, res) => {
  Party.findById(req.params.id)
    .then(party => res.json(party))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id',(req, res) => {
  Party.findByIdAndDelete(req.params.id)
    .then(() => res.json('Usunięto wydarzenie'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/update/:id',(req, res) => {
  Party.findById(req.params.id)
    .then(party => {
      party.title = req.body.title;
      party.place = req.body.place;
      party.description = req.body.description;
      party.date = Date.parse(req.body.date);
      party.author = (req.body.author)
      party.save()
        .then(() => res.json('Party updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;