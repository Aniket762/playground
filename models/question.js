const mongoose = require('mongoose')

var question = mongoose.model('question', {
    title: { type: String },
    message: { type: String },
    isApproved: { type: Boolean, default: false },
})

module.exports = { question }
