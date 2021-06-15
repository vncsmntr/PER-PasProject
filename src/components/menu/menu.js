import React from 'react';
import "./menu.css"

function Menu() {
  return (
    <div className="menu">
      
      <div className="menu-logo">
        <p>LOGO</p>
      </div>
      
      <div className="menu-links">
        <a>Inicio</a>
        <a>Membros</a>
        <a>Sobre</a>
      </div>

    </div>
  );
}

export default Menu;