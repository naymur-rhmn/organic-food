import Spinner from "../../Loading/Spinner";
import Product from "./Product";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = (id) => {
    const result = products.filter((product) => product._id !== id);
    setProducts(result);
  };

  useEffect(() => {
    fetch("https://organic-food-server-beige.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pb-20">
      <div className="text-center mb-10">
        <h6>All Products</h6>
        <p className="text-lg text-slate-500 font-medium">
          List of All Products
        </p>
      </div>
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
        {loading && <Spinner />}
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
