const mongoose = require('mongoose')

var question = mongoose.model('question', {
    title: { type: String },
    message: { type: String },
})

module.exports = { question }
