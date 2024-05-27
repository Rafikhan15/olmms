const express = require('express');
const { addMenu, getAllMenu } = require('./menu.controller');
const menuRouter = express.Router();


menuRouter.post('/add', addMenu);
menuRouter.get('/', getAllMenu);

module.exports = menuRouter;