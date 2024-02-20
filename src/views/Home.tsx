import React, { useEffect } from 'react'

type Props = {}

export default function Home({}: Props) {

    useEffect(() => {  
        const token = localStorage.getItem('token')
        if (!token) {
            window.location.href = '/signin'
        }
     }, [])

  return (
    <div>H</div>
  )
}