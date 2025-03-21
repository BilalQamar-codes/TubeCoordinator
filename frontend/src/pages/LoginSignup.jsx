import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.scss';

function LoginSignup() {
  const [selectedRole, setSelectedRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!selectedRole) {
      alert('Please select a role.');
      return;
    }

    // Store role in localStorage for session persistence
    localStorage.setItem('userRole', selectedRole);

    // Redirect user to the appropriate dashboard
    navigate(`/dashboard/${selectedRole}`);
  };

  return (
    <div className='login-signup'>
      <h1>Login</h1>
      <form className='login-form' onSubmit={handleLogin}>
        <label>
          Email:
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        
        <div className='role-group'>
          <button 
            type="button" 
            className={`role-option ${selectedRole === 'owner' ? 'active' : ''}`} 
            onClick={() => setSelectedRole('owner')}
          >
            Owner
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
      </form>
    </div>
  );
}

export default LoginSignup;
