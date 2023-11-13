import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer a comunicação com o servidor para validar o email
    console.log(email);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">E-mail ou telefone</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" className="next-button">
            Próxima
          </button>
        </div>
      </form>
      <div className="link-group">
        <a href="#" className="forgot-password">
          Esqueceu seu e-mail?
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
