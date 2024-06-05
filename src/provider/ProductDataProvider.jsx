import React, { createContext, useEffect, useState } from "react";

export const ProductDataContext = createContext(null);

const ProductDataProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);

  // data fetch
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("http://localhost:3000/foods");
        const data = await res.json();
        setFoods(data);
      } catch (err) {
        console.error(err);
      }
    }
    loadData();
  }, []);

  return (
    <ProductDataContext.Provider value={foods}>
      {children}
    </ProductDataContext.Provider>
  );
};

export default ProductDataProvider;
