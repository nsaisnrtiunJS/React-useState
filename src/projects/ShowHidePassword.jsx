import React from 'react'
import {useState} from 'react'


const ShowHidePassword = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [value, setValue] = useState('')
    
    const togglePassword = () => {
        setShowPassword(prev => !prev)
    }

    const handlePasswordChange = (e) => {
        setValue(e.target.value)
    }

  return (
    <div className='bg-gray-200 mt-12 p-8 rounded flex flex-col items-center justify-center gap-4'>

      <input onChange= {handlePasswordChange} type={showPassword ? 'text' : 'password'} className='p-1 border-1 border-gray-600 rounded-md focus:outline-none bg-gray-100' />

      <p className='text-xl'>{value}</p>

      <p className='text-xl'>{`Password Length : ${value.length}`}</p>

      <p className='text-xl'>{value.length === 0 ? 'Please enter a password' : value.length >= 8 ? '✅ Strong Password' : '❌ Weak Password'}</p>

      <button onClick={togglePassword} className='bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded cursor-pointer transition-all duration-300 mt-1'> {showPassword ? `Hide Password` : `Show Password`} </button>

    </div>
  )
}

export default ShowHidePassword
