import React, { useState } from 'react';
import '../styles/RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Aquí podrías enviar la información a un servidor o realizar alguna otra acción
  };

  return (
    <div className="register-form-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Nombres:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Apellidos:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Dirección:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Celular:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterForm;
