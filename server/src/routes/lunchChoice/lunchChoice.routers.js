const express = require('express');
const { addLunchChoice, getAllLunchChoice } = require('./lunchChoice.controller');
const lunchChoiceRouter = express.Router();


lunchChoiceRouter.post('/add', addLunchChoice);
lunchChoiceRouter.get('/', getAllLunchChoice);

module.exports = lunchChoiceRouter;