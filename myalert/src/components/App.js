import './App.css';
import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    setIsRegistered(true);
  };

  const handleLogin = () => {
    console.log(`Email: ${email} Password: ${password}`);
  };

  return (

    <div className="container">

      {!isRegistered ? (
        <>
          <div class="title">Registro</div>
          <form action="#">
            <div class='user-details'>
              <div class='input-box'>
                <span class='details'>First Name</span>
                <input type="text" placeholder='Enter your First Name' required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div class='input-box'>
                <span className='details'>Last Name</span>
                <input type="text" placeholder='Enter your Last Name' required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div class='input-box'>
                <span class='details'>Address</span>
                <input type="text" placeholder='Enter your Address' required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div class='input-box'>
                <span class='details'>Number Phone</span>
                <input type="text" placeholder='Enter your Number Phone' required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div class='input-box'>
                <span class='details'>Email</span>
                <input type="text" placeholder='Enter your Email' required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class='input-box'>
                <span class='details'>Password</span>
                <input type="password" placeholder='Enter your password' required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div class='button'>
              <input type="submit" value="Registrar" />
              

            </div>
          </form>
          <button onClick={handleRegister}>Register</button>


        </>

      ) : (
        <>

          <p>AQUI LOGIN</p>


          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Log In</button>
        </>
      )}
    </div>


  );
}

export default App;
