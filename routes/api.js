const express = require('express');
const News = require('../models/news')
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
const search = req.query.search || '';
const sort = req.query.sort || -1;


  const findNews = News
  .find({title: new RegExp(search.trim(), 'i')  })
  .sort({created: sort})
  .select('_id title description');

  findNews.exec((err, data) => {
    res.json(data);
  });
});




router.get('/:id', (req, res) => {
 const id = req.params.id
    const findNews = News
    .findById(id)
  
    findNews.exec((err, data) => {
      res.json(data);
    });
  });


module.exports = router;
