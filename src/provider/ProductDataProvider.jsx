import React, { createContext, useEffect, useState } from "react";

export const ProductDataContext = createContext(null);

const ProductDataProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);

  // data fetch
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch(
          "https://organic-food-server-beige.vercel.app/foods"
        );
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
