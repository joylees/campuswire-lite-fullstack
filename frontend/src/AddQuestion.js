/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import axios from 'axios'

const AddQuestion = React.memo(({ setAddNewQuestion }) => {
  console.log('ADD QUESTION')
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
    <div className="modal fade show" style={{display:'block', top:'100px', height:'300px', background: 'black'}}>
      <b>Add Question:</b>
      <input onChange={e => setQuestionText(e.target.value)} value={questionText} />
      <button type="submit" onClick={() => addQuestion()}>Submit Question</button>
      <button onClick={() => setAddNewQuestion(false)}>Close</button>
    </div>
  )
})

export default AddQuestion
