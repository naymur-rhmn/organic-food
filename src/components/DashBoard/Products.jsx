import Product from "./Product";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const handleDelete = (id) => {
    const result = products.filter((product) => product._id !== id);
    setProducts(result);
  };

  useEffect(() => {
    fetch("http://localhost:3000/foods")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="pb-20">
      <ul className="grid grid-cols-12 items-center px-3 bg-grayCs rounded py-2 font-semibold mb-4">
        <div className="col-span-2  ">
          <li>Id</li>
        </div>
        <div className="col-span-10  grid grid-cols-5">
          <li className="">Image</li>
          <li>Name</li>
          <li className="">Category</li>
          <li className="">Price</li>
          <li className="">Action</li>
        </div>
      </ul>
      <div className="flex flex-col gap-4">
        {products?.map((product) => (
          <Product
            key={product._id}
            product={product}
            onDelete={handleDelete}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
