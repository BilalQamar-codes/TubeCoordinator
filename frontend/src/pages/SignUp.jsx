import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.scss';

function Signup() {
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  return (
    <div className='login-signup'>
      <h1>Create an Account</h1>
      <form>
        <label>
          Full Name:
          <input type='text' name='fullName' />
        </label>
        <label>
          Email:
          <input type='email' name='email' />
        </label>
        <label>
          Password:
          <input type='password' name='password' />
        </label>
        <label>
          Confirm Password:
          <input type='password' name='confirmPassword' />
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

        <button type='submit'>Sign Up</button>
        <button type="button" onClick={() => navigate('/')}>Login</button>
      </form>
    </div>
  );
}

export default Signup;
