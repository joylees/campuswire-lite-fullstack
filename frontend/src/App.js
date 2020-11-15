/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  )
}

export default App
