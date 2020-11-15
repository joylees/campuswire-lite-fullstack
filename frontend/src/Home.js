/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AddQuestion from './AddQuestion'
import NavBar from './NavBar'
import Question from './Question'
import QuestionList from './QuestionList'

const Home = () => {
  const [user, setUser] = useState('')
  const history = useHistory()
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState({})
  const [addNewQuestion, setAddNewQuestion] = useState(false)

  useEffect(() => {
    const intervalID = setInterval(async () => {
      try {
        const data = await axios.get('/api/questions')
        setQuestions(data.data)
      } catch (err) {
        alert(err)
      }
    }, 2000)

    return () => clearInterval(intervalID)
  }, [])

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const res = await axios.post('/account/authenticate')
        const { data: { username } } = res
        setUser(username)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
    checkAuthStatus()
  }, [])

  return (
    <div>
      
      <NavBar user={user} />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            { addNewQuestion && <AddQuestion setAddNewQuestion={setAddNewQuestion} />}
            <QuestionList questions={questions} setCurrentQuestion={setCurrentQuestion} user={user} setAddNewQuestion={setAddNewQuestion} />
          </div>
          <div className="col-md-8">
            <Question currentQuestion={currentQuestion} user={user} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
