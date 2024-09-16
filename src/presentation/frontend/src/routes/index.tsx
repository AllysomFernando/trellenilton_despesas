import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../componentes/Header';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Footer from '../componentes/Footer';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
