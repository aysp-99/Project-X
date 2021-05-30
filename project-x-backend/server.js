const mongoose = require('mongoose');
const router = require('./routes');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

//mongobdb connection
const dbURI = 'mongodb+srv://hackonadmin:HackOn123@projectxcluster.vom0l.mongodb.net/hackon?retryWrites=true&w=majority';



mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`)))         //need to replace
    .catch((err) => console.log("Error:"+err));

    app.use("/", router);   





