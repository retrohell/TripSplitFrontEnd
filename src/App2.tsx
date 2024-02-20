import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { axiosPublic } from './utils/axiosPublic'
import { Guest } from './types/guest.types'

function App() {
  const [guest, setGuest] = useState<Guest>()

  useEffect(() => {
    axiosPublic.get<Guest>('/guest/23e63dbd-05cd-41a1-8e1d-b492cc7f95c8').then((res) => {
      setGuest(res.data)
    }).catch((err) => {
      console.error(err.response.data.message)
    })
  }, [])

  return (
    <div>
      {guest ?
        <h1>
          {guest.username} <p>{guest.email}</p>
        </h1> : 
        <h1>Guest doesn't exist...</h1>
      }
    </div>
  )
}

export default App
