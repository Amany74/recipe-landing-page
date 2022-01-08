const express = require('express');
const router = express.Router();
const controller = require('../controllers/recipeController');

router.get('/', controller.home);

router.get('/recipes.ejs', controller.recipes);

module.exports = router;
