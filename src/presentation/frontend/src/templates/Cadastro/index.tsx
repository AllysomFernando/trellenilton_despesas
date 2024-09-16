import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function CadastroTemplate() {
  const { setUserContext } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleCadstro = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = { email, password, name };
    setUserContext(user);
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleCadstro}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}
