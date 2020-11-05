const express = require('express')

const Question = require('../models/question')
const isAuthenticated = require('../middlewares/isAuthenticated')

const router = express.Router()

router.get('/questions', (req, res, next) => {
  Question.find({}, (err, questions) => {
    if (!err) {
      res.json(questions)
    } else {
      next(err)
    }
  })
})

router.post('/questions/add', isAuthenticated, async (req, res, next) => {
  const { questionText } = req.body
  const { username } = req.session
  try {
    await Question.create({ author: username, questionText })
    res.send('Question added')
  } catch (err) {
    next(err)
  }
})

router.post('/questions/answer', isAuthenticated, async (req, res, next) => {
  const { _id, answer } = req.body

  try {
    await Question.findOneAndUpdate({ _id }, { answer }, { useFindAndModify: true })
    res.send('Answer added')
  } catch {
    res.send('Failure occurred when trying to add answer')
  }
})

module.exports = router
