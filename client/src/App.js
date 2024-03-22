import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Home from "./Home";
import Admin from "./Admin";
import Client from "./Client";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mx-auto mt-16">
          {" "}
          <Routes>
            {" "}
            {/* Aquí envolvemos nuestras rutas con <Routes> */}
            <Route path="/" element={<Home />} />{" "}
            {/* Utilizamos 'element' para definir el componente a renderizar */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/client" element={<Client />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
