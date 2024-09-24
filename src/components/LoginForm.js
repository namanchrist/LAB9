// src/components/LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    let hasError = false;
    const newErrors = { username: '', password: '' };

    // Username validation: only allow capital and small alphabets
    const usernameRegex = /^[A-Za-z]+$/;
    if (!usernameRegex.test(username)) {
      newErrors.username = 'Username must contain only letters (A-Z, a-z).';
      hasError = true;
    }

    // Password validation: must contain one uppercase letter, one number, and one special character
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password =
        'Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character.';
      hasError = true;
    }

    // If there are errors, update the state and return early to prevent login
    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with login logic (e.g., send data to server)
    alert(`Logged in successfully!\nUsername: ${username}\nPassword: ${password}`);

    // Reset the form fields
    setUsername('');
    setPassword('');
  };

  const handleForgotPassword = () => {
    alert('Forgot Password clicked!');
    // Logic for handling forgot password can be added here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button type="submit">Login</button>

      <div style={{ marginTop: '10px', textAlign: 'left' }}>
        <button
          type="button"
          onClick={handleForgotPassword}
          style={{
            fontSize: '12px',
            padding: '4px 8px',
            border: 'none',
            background: 'none',
            color: 'black',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          Forgot Password
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
