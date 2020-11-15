/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import axios from 'axios'

const popUpStyle = {
  display: 'block',
  top: '100px',
  height: '120px',
  width: '500px',
  background: 'white',
  margin: '20px',
  border: '1px solid #c3c3c3',
  padding: '8px',
}

const AddQuestion = ({ setAddNewQuestion }) => {
  const [questionText, setQuestionText] = useState('')
  const addQuestion = async () => {
    try {
      await axios.post('api/questions/add', { questionText })
      setAddNewQuestion(false)
    } catch (err) {
      alert(err)
    }
  }
  return (
    <div className="modal fade show" style={popUpStyle}>
      <b>Add Question:</b>
      <div>
        <input size="50" onChange={e => setQuestionText(e.target.value)} value={questionText} />
      </div>
      <div style={{ marginTop: '10px' }}>
        <button type="submit" onClick={() => addQuestion()}>Submit Question</button>
        <button onClick={() => setAddNewQuestion(false)}>Close</button>
      </div>
    </div>
  )
}

export default AddQuestion
