/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './QuestionList.css'

const QuestionList = ({ questions, setCurrentQuestion, user, setAddNewQuestion }) => {
  return (
    <div>
      {
        !user ? (
          <Link to="/login"> Log in to submit a question </Link>
        ) : (
          <div className="mb-4">
            <button type="button" onClick={() => setAddNewQuestion(true)} className="add-question"> Add a new question + </button>
          </div>
        )
      }
      {questions.map(question => (
        <p
          key={question._id}
          onClick={() => setCurrentQuestion(question)}
          className="question"
        >
          {question.questionText}
        </p>
      ))}
    </div>
  )
}

export default QuestionList
