/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import axios from 'axios'

const Question = ({ currentQuestion, user }) => {
  // eslint-disable-next-line object-curly-newline
  const { author, questionText, answer, _id } = currentQuestion
  const [newAnswer, setNewAnswer] = useState('')

  const submitAnswer = async () => {
    try {
      await axios.post('/api/questions/answer', { _id, answer: newAnswer })
      currentQuestion.answer = newAnswer
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div>
      {
        questionText !== undefined ? (
          <div>
            <h2>
              {questionText}
            </h2>
            <h5>
              Author:
            </h5>
            <p> {author} </p>
            <h5>
              Answer:
            </h5>
            <p> {answer} </p>
          </div>
        ) : null
      }
      {
        user !== '' && questionText !== undefined ? (
          <div>
            <h5>Answer this question</h5>
            <input onChange={e => setNewAnswer(e.target.value)} />
            <div className="pt-2">
              <button type="submit" onClick={() => submitAnswer(_id, newAnswer)}>
                Submit Answer
              </button>
            </div>
          </div>
        ) : null
      }
    </div>
  )
}

export default Question
