const express = require("express");
const app = express();
const cors = require('cors');

// // middleware
app.use(cors());
app.use(express.json());


// root route
app.get('/', (req, res) => {
    res.send("office lunch menu management server");
})


module.exports = app;