import { useState } from "react";
import toast from "react-hot-toast";

const SingleUser = ({ user, isDelete, handleUserId }) => {
  const { email, name, photo, _id } = user;
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/user/delete/${id}`, {
      method: "DELETE",
    });
    if (res?.ok === true) {
      toast.success("Deleted Success!");
      handleUserId(id);
    } else {
      alert("something bad happening!");
    }
  };
  return (
    <>
      <div className="border p-4 flex flex-col items-center justify-center bg-teal-100 hover:bg-gray-100 rounded-md">
        <div className="relative h-[110px] w-[110px] rounded-full bg-gray-300 border-greenCs border-4 shadow-md z-20">
          <img
            className="relative h-full w-full rounded-full z-10"
            src={photo}
          />
          <span class="alt-text z-0">{name}</span>
        </div>
        <p className="font-medium mt-4">Name: {name}</p>
        <p className="font-medium">Email: {email}</p>
        {isDelete && (
          <button
            onClick={() => {
              openModal();
            }}
            className="bg-gray-300 px-4 py-1.5 mt-3 rounded hover:tracking-wider transition-all"
          >
            Delete
          </button>
        )}
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
                onClick={() => handleDelete(_id)}
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
    </>
  );
};

export default SingleUser;
