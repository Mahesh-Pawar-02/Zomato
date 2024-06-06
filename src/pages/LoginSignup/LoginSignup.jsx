import React, { useState } from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  const [form, setForm] = useState('Login')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form className='login-form' onSubmit={handleSubmit}>
      {form=='Register'?<div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Name</label>
        <input type="text" className="form-control" id="exampleInputPassword1" />
      </div>:<></>}
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      {form==='Login'?<p>Don't have an account <span onClick={()=>setForm('Register')}>Register here</span></p>:
      <p>Already have an account <span onClick={()=>setForm('Login')}>Login here</span></p>}
      <button type="submit" className="btn btn-primary">{form}</button>
    </form>
  )
}

export default LoginSignup