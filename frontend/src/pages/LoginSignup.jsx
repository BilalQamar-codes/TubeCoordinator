import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.scss';

function LoginSignup() {
  const [selectedRole, setSelectedRole] = useState('');

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
        
        <div className='role-group'>
          <button 
            type="button" 
            className={`role-option ${selectedRole === 'admin' ? 'active' : ''}`} 
            onClick={() => setSelectedRole('admin')}
          >
            Admin
          </button>
          <button 
            type="button" 
            className={`role-option ${selectedRole === 'editor' ? 'active' : ''}`} 
            onClick={() => setSelectedRole('editor')}
          >
            Editor
          </button>
        </div>

        <button type='submit'>Login</button>
        <Link to="/signup" className="signup-button">Signup</Link>
      </form>
    </div>
  );
}

export default LoginSignup;
