
import React, { useEffect, useState } from 'react';

function Home() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((result) => setProducts(result.products))
      .catch((error) => console.log("This is an error", error));
  }, []);

  return (
    <>
      {(Array.isArray(products)) ? (
        <div>
          {products.map((detail, ind) => (
            <div key={ind}>
              <img src={detail.thumbnail} alt="" />
              <h3>{detail.title}</h3>
              <p>{detail.description}</p>
            </div>
          ))}
        </div>
      ) :"" }
    </>
  );
}

export default Home;
