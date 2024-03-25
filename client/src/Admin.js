// Admin.js

import React, { Component } from "react";

class Admin extends Component {
  state = {
    ofertasEducativas: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/oferta") // Aquí está la URL correcta
      .then((response) => response.json())
      .then((data) => {
        this.setState({ ofertasEducativas: data });
      })
      .catch((error) => {
        console.error("Error al obtener ofertas educativas:", error);
      });
  }

  render() {
    return (
      <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-2">
        Ofertas Educativas - Administrador
      </h3>    
      {/* Div para mostrar la solicitud en formato JSON y el objeto JSON */}
      <div className="mt-4 p-4 bg-white rounded-lg shadow-lg">
        <h4 className="text-lg font-semibold mb-2"><strong>GET /api/ofertas</strong></h4>
        <h4 className="text-lg font-semibold mb-2">Ejemplo de respuesta para obtener todas las ofertas edicativas JSON</h4>
        <pre className="overflow-x-auto bg-gray-200 p-2 rounded">
          {JSON.stringify(this.state.ofertasEducativas, null, 2)}
        </pre>
      </div>
    </div>
    
    );
  }
}

export default Admin;
