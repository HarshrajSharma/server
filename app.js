const express = require('express');
const cors = require('cors');
const logger = require('morgan');

import config from './config/default.js'
const connectDB = require('./db/db.js')

const homeRouter=require('./routes/Home.js');
const userRouter = require('./routes/User.js');


const app = express();

connectDB();

const whitelist = [config.corsWhitelist.site1]
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.json({ limit: 1024 * 1024 * 20, type: 'application/json' }));
// app.use(express.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoding' }));


app.use('/', homeRouter);
app.use('/user', userRouter);

const port=process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log('Server started at port: ', port);
})