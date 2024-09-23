import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../componentes/Header';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Footer from '../componentes/Footer';
import { AuthProvider } from '../context/AuthContext';
import Cadastro from '../pages/Cadastro';
import { GlobalStyles } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <GlobalStyles />
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="*" element={<h1>Página não encontrada</h1>} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
          </ThemeProvider>
        </AuthProvider>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
