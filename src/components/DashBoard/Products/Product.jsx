import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Product = ({ product, onDelete }) => {
  const { _id, name, image, price, category } = product;
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const handleRemoveItem = async (id) => {
    const result = await fetch(
      `https://organic-food-server-1.onrender.com/food/${id}`,
      {
        method: "DELETE",
      }
    );

    if (result?.ok === true) {
      closeModal();
      onDelete(id);
      toast.success("Deleted Success!");
    } else {
      alert("something bad happening!");
    }
  };
  return (
    <div className="shadow px-4 py-2 rounded bg-white items-center grid grid-cols-12">
      <div className="col-span-2  ">
        <p className="font-roboto font-bold text-sm">{_id}</p>
        {/* <p className="focus:outline-gray-300 border" {_id} /> */}
      </div>
      <div className="col-span-10 grid grid-cols-5 items-center">
        <div className="w-16 h-16">
          <img className="h-full w-full" src={image} alt={name} />
        </div>
        <p className="font-semibold text-lg">{name}</p>
        <p className="font-semibold text-lg">{category}</p>
        <p className="font-semibold text-lg">{price}</p>
        <div className="flex gap-2">
          <Link to={`edit/${_id}`}>
            <button className="px-3 py-1 rounded bg-yellow-500 shadow font-semibold hover:bg-opacity-80">
              Edit
            </button>
          </Link>
          <div className="relative">
            <button
              onClick={openModal}
              className={`px-3 py-1 rounded bg-red-400 shadow font-semibold hover:bg-opacity-80 text-white ${
                modal ? "bg-opacity-80" : "bg-opacity-100"
              }`}
            >
              Remove
            </button>
          </div>

          {/* modal */}
          <div
            className={` top-[50%] left-[50%] -translate-y-[50%] -translate-x-[20%]  z-50  ${
              modal ? "fixed" : "hidden"
            }`}
          >
            <div className="relative p-4 ">
              <div className="relative bg-white rounded-lg shadow-lg ">
                <div className="p-4 md:p-5 text-center">
                  <svg
                    className="mx-auto mb-4 text-gray-400 w-12 h-12"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500">
                    Are you sure you want to delete this product?
                  </h3>
                  <button
                    onClick={() => handleRemoveItem(_id)}
                    type="button"
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={closeModal}
                    type="button"
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                  >
                    cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
