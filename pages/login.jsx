import React, { useState } from 'react'
import LoginForm from './Components/LoginForm'
import RegisterForm from './Components/RegisterForm'

const Login = () => {

    const [sign, setSign] = useState(false)

  return (
    <div className='h-screen w-full flex justify-between container m-auto items-center'>
        {
            sign ? <RegisterForm sign={sign} setSign={setSign}/> : <LoginForm sign={sign} setSign={setSign}/>
        }
        <h1 className='text-5xl font-bold mr-[10%] text-[#3887FE]'>VALUET</h1>
    </div>
  )
}

export default Login