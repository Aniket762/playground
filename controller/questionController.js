const express = require('express')
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId

var { question } = require('../models/question')

// get all questions
router.get('/', (req, res, next) => {
    question.find((err, response) => {
        if (!err) res.send(response)
        else console.log('Error while retrieving all questions: ' + JSON.stringify(err, undefined, 2))
    })
})

// post questions
router.post('/', (req, res) => {
    var newQuestion = new question({
        title: req.body.title,
        message: req.body.message,
    })
    newQuestion.save((err, response) => {
        if (!err) res.send(response)
        else console.log('Error while creating new question: ' + JSON.stringify(err, undefined, 2))
    })
})

// update question
router.put('moderator/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send('No question with given Id: ' + res.params.id)

    var updateQuestion = {
        title: req.body.title,
        message: req.body.message,
    }

    question.findByIdAndUpdate(req.params.id, { $set: updateQuestion }, (err, response) => {
        if (!err) res.send(response)
        else console.log('Error while updating a question: ' + JSON.stringify(err, undefined, 2))
    })
})

// delete questions
router.delete('moderator/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send('No question with given Id: ' + res.params.id)
    question.findByIdAndRemove(req.params.id, (err, response) => {
        if (!err) res.send(response)
        else console.log('Error while deleting a question: ' + JSON.stringify(err, undefined, 2))
    })
})
module.exports = router
