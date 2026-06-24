const express = require('express');
const router = express.Router();
const { getmovie,getmovieById} = require('../controller/movieController');
router.get('/', getmovie);
router.get('/:id', getmovieById);
module.exports = router;