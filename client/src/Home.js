import React, { useState, useEffect } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api-rest-neon.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []); // El segundo argumento vacío indica que este efecto se ejecutará solo una vez, equivalente a componentDidMount

  return (
    <div>
      <h3>SPA App - Home</h3>
      <p>This is a paragraph on the HomePage of the SPA App.</p>
      <h4>Products:</h4>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
