import React from "react";
import "./index.css";
import { Route, NavLink, HashRouter, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Client from "./Client";

function App() {
  return (
    <HashRouter>
      <div className="App bg-gray-100 min-h-screen">
        <header className="bg-blue-500 p-4">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-black text-center">
              A Simple SPA made using React
            </h1>
            <nav className="mt-4 flex justify-center">
              <ul className="flex space-x-4">
                <li>
                  <NavLink className="text-black hover:underline" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white hover:underline" to="/admin">
                    Admin
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white hover:underline" to="/client">
                    Client
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto py-8">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/client" element={<Client />} />
            </Routes>
          </div>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
