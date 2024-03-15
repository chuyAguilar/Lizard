import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Aplicacion Documentacion</h1>
        <ul className="flex space-x-4">
          <li><NavLink className="text-white hover:underline" to="/">Home</NavLink></li>
          <li><NavLink className="text-white hover:underline" to="/admin">Admin</NavLink></li>
          <li><NavLink className="text-white hover:underline" to="/client">Client</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
