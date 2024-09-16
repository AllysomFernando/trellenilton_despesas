import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const user = localStorage.getItem('user');

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>

          {user ? (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          ) : (
            <li>
              <Link to="/cadastro">Cadastro</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
