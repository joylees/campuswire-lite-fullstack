/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const NavBar = ({ user }) => {
  const history = useHistory()
  const handleLogout = () => {
    axios.post('/account/logout').then(res => history.push('/login'))
  }

  return (
    <div className="d-flex justify-content-between pt-2 pl-4 pr-4">
      <h3> Campuswire Lite </h3>
      {
        user !== ''
          ? (
            <div className="d-flex">
              <h4 className="mr-3"> Hi  {user} </h4>
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : null
      }
    </div>
  )
}

export default NavBar
