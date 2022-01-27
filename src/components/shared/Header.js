import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/douglasialamov/Documents/SENAI/projetos/projeto-modulo-1-final/src/App.css';

export default function Header() {
  return (
    <nav className="nav">
      <span>
        <Link className="navLink" to="/">Home</Link>
      </span>
      <span>
        <Link className="navLink" to="/map">Mapa</Link>
      </span>
      <span>
        <Link className="navLink" to="/company">Empresa</Link>
      </span>
      <span>
        <Link className="navLink" to="/product">Produto</Link>
      </span>
    </nav>
  )
}