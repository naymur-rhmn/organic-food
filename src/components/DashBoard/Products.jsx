import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const data = useLoaderData();

  return (
    <div>
      <ul className="grid grid-cols-12 items-center px-3 bg-grayCs rounded py-2 font-semibold mb-4">
        <div className="col-span-1  ">
          <li>Id</li>
        </div>
        <div className="col-span-11  grid grid-cols-5">
          <li className="">Image</li>
          <li>Name</li>
          <li className="">Category</li>
          <li className="">Price</li>
          <li className="">Action</li>
        </div>
      </ul>
      <div className="flex flex-col gap-4">
        {data?.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
