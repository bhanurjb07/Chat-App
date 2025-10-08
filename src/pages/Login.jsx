import React, { useState } from 'react'
import './Login.css'
import assets from '../assets/assets'

const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className='login'>
      <img src={assets.logo_big} alt="logo" className='logo' />   
      <form className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign Up" ? <input type="text" className="form-input" placeholder='Username' required /> : null}
       <input type="email" className="form-input" placeholder='Email Address' required/>
       <input type="password" className="form-input" placeholder='Password' required/>
       <button type='submit'>{currState === "Sign Up" ?"Create Account": "Login now"}</button>

       <div className='login-term'>
         <input type='checkbox' />
         <p>Agree to the terms of use & privacy policy</p>
       </div>
       <div className='login-forgot'>
        <div className='login-forgot'>
          {currState === "Sign Up" ? (<p className='login-toggle'>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>) : (
           <p className='login-toggle'>Don't have an account? <span onClick={() => setCurrState("Sign Up")}>Sign up here</span></p>)
          }
        </div>
       </div>
      </form>   
    </div>
  )
}

export default Login
