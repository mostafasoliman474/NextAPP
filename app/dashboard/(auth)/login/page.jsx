'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

const Login = () => {
  return (
    <div>
      <button onClick={()=>signIn("google")}>click to log in</button>
    </div>
  )
}

export default Login