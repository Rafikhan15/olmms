const express = require('express');
const { userRegister, getAllUsers } = require('./user.controller');
const userRouter = express.Router();


userRouter.post('/register', userRegister);
userRouter.get('/', getAllUsers);

module.exports = userRouter;