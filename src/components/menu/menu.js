import React from 'react';
import "./menu.css"

function Menu() {
  return (
    <div className="menu">
      
      <div className="menu-logo">
        <p>LOGO</p>
      </div>
      
      <div className="menu-links">
        <a href="/">Inicio</a>
        <a href="/">Membros</a>
        <a href="/">Sobre</a>
      </div>

    </div>
  );
}

export default Menu;