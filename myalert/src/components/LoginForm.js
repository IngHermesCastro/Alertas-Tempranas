import React, { useState } from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    
    /*<div className='form-container'>
      <h2 className='form-title'>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={(event) => setEmail(event.target.value)}
          label='Correo electrónico'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={(event) => setPassword(event.target.value)}
          label='Contraseña'
          required
        />
        <CustomButton type='submit'>Iniciar sesión</CustomButton>
      </form>
    </div>*/  
      <div className="containerLogin">
          <div class="wrapper">
                <div className="titleLogin"><span>Login Form</span></div>
                <form action="#">
                  <div className="row">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Enter your Email" required/>
                  </div>
                  <div className="row">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Enter your Password" required/>
                  </div>
                  <div className="pass"><a href="#">Forgot Password?</a></div>
                  <div class="row button">
                    <input type="submit" value="login"/>
                  </div>
                  <div className="signip-link">Not a member? <a href="#">Signup now</a></div>
                </form>
          </div>
        </div>
    
  );
};

export default LoginForm;
