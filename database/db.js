const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(`${process.env.DB_CONNECTION}`, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (!err) console.log('Database connected and running')
    else console.log('Database error: ' + JSON.stringify(err.undefined, 2))
})
