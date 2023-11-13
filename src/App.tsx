import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>Fazer login</h1>
      <form>
        <label htmlFor="email-or-phone">E-mail ou telefone:</label>
        <input
          type="email"
          id="email-or-phone"
          name="email-or-phone"
          required
        />
        <label htmlFor="access-token">Token de acesso:</label>
        <input type="text" id="access-token" name="access-token" required />
        <button type="submit">Avançar</button>
      </form>
    </div>
  );
}

export default App;
