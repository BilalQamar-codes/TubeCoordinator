import React from 'react'
import './LoginSignup.scss'

function LoginSignup() {
  return (
    <div className='login-signup'>
      <h1>Login or Signup</h1>
      <form>
        <label>
          Email:
          <input type='email' name='email' />
        </label>
        <label>
          Password:
          <input type='password' name='password' />
        </label>
        <label className='role-group'>
          Role:
          <input type="radio" name="role" id="admin" />
          <label htmlFor="admin">Admin</label>
          <input type="radio" name="role" id="editor" />
          <label htmlFor="editor">Editor</label>
        </label>
        <button type='submit'>Login</button>
        <button type='submit'>Signup</button>
      </form>
      
    </div>
  )
}

export default LoginSignup
