const express = require('express')
var router = express.Router()

var { question } = require('../models/question')
router.get('/', (req, res, next) => {
    question.find((err, response) => {
        if (!err) res.send(response)
        else console.log('Error while retrieving all questions: ' + JSON.stringify(err, undefined, 2))
    })
})

router.post('/', (req, res) => {
    var newQuestion = {
        title: req.body.title,
        message: req.body.message,
    }
    newQuestion.save((err, response) => {
        if (!err) res.send(response)
        else console.log('Error while creating new question: ' + JSON.stringify(err, undefined, 2))
    })
})

module.exports = router
