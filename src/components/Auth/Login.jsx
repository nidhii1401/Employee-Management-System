import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("Form submitted")
        console.log("Email:", email);
        console.log("password:", password)

        setEmail('');
        setPassword('')
    }


  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
            onSubmit={(e) =>{ 
                handleSubmit(e);
            }}
            className='flex flex-col items-center justify-center gap-5'>
                <input 
                value={email}
                onChange={(e) =>{
                    setEmail(e.target.value)
                    // console.log(email)
                }}
                required className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                    // console.log(password)
                }}
                required className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none placeholder:text-gray-400 mt-3' type="password" placeholder='Enter password' />
                
                <button className='h-10 w-full bg-emerald-600 rounded-full border-none mt-5'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login