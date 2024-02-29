import React, { useState } from 'react'
import { SignInPayload } from '../types/auth.types'
import { axiosPublic } from '../utils/axiosPublic'

type Props = {}

export default function SignIn({ }: Props) {
  const [signIn, setSignIn] = useState<SignInPayload>({ username: '', password: '' })

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = e.target.value
    const newSignInCopy = { ...signIn }
    newSignInCopy.username = newUsername
    setSignIn(newSignInCopy)
  }
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignIn({ ...signIn, password: e.target.value })
  }

  // const onChangeUP = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSignIn({...signIn, [e.target.name]: e.target.value})
  // } 
  // Para casos donde los input tengan name igual a las propiedades del objeto signIn (en un html input name='username' name='password' etc.)

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    axiosPublic.post('/token/', signIn).then((res) => {
      localStorage.setItem('token', res.data.access)
      localStorage.setItem('refresh', res.data.refresh)
      
      window.location.href = '/'
    }).catch((err) => {
      console.error(err)
    })
  }
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <input type="text" placeholder="Username" name='username' value={signIn.username} onChange={onUsernameChange} />
        <input type="password" placeholder="Password" name='password' value={signIn.password} onChange={onPasswordChange} />
        <button type="submit">Sign In</button>
      </form>
    </div>

  )
}
