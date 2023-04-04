const mongoose = require('mongoose');
const express = require('express');
const router = require('./routes/user');
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use('/',router);

mongoose.connect('mongodb://localhost:27017/touch', {
    useNewUrlParser: true,
    // useUnifiedTopology: true
  }).then(()=>{
    console.log("succesfully connected");
  }).catch((err)=>{
    console.log(err);
  })

  app.listen(8000, ()=> console.log('server started.'))