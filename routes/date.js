import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  console.log('Getting time!');
  let time = new Date();
  res.type('txt');
  res.send(time);
});

router.get('/json', function(req, res) {
  console.log('Getting time!');
  let time = new Date();
  res.type('json');
  res.send({
    'now': time,
  })
})

export default router;
