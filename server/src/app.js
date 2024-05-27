const express = require("express");
const app = express();
const cors = require('cors');
const userRouter = require("./routes/user/user.routers");
const menuRouter = require("./routes/menu/menu.routers");

// // middleware
app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use('/menu', menuRouter);


// root route
app.get('/', (req, res) => {
    res.send("office lunch menu management server");
})


module.exports = app;