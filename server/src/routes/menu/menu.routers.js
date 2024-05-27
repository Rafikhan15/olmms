const express = require('express');
const { addMenu } = require('./menu.controller');
const menuRouter = express.Router();


menuRouter.post('/add', addMenu);

module.exports = menuRouter;