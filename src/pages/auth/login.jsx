import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Later, we will call the Java Backend here
    console.log("Logging in with:", email, password);
    alert("Login logic will connect to Spring Boot soon!");
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Employee Leave Management System</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required 
        /><br/><br/>
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
        /><br/><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;