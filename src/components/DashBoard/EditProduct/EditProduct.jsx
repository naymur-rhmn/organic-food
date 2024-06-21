import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const EditProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    additional_description: "",
    details: "",
    image: null,
  });
  const data = useLoaderData();

  // add data to state on onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageURL = await uploadImage(formData.image);
    const data = {
      ...formData,
      image: imageURL,
    };
    // update request
    try {
      const res = await axios.patch(
        `https://organic-food-server-1.onrender.com/food/update/${data?._id}`,
        data
      );
      console.log(res);
      toast.success("Update success!");
    } catch (err) {
      toast.error(`${err.message}`);
      console.log(err.message);
    }
  };

  const uploadImage = async (imageFile) => {
    // create formData instance
    const formData = new FormData();
    formData.append("image", imageFile);
    // post image on image hosting site
    if (imageFile) {
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=2330c86b1dc95b61468f646bda97e336",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      return data.data.url;
    } else {
      return "https://placehold.co/600x400.png";
    }
  };

  return (
    <div>
      <div className="text-center mb-10">
        <h4>Edit Product</h4>
        <p className="text-xl text-slate-500 font-semibold">
          Edit and update existing product
        </p>
      </div>
      <form onSubmit={handleSubmit} className="lg:px-32">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="name">Name:</label>
            <input
              className="px-3 py-3 rounded focus:shadow-md text-gray-800 focus:outline-none"
              placeholder="Fill the Field"
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData?.name}
              required
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="price">Price:</label>
            <input
              className="px-3 py-3 rounded focus:shadow-md text-gray-800 focus:outline-none"
              placeholder="Fill the Field"
              type="number"
              id="price"
              name="price"
              defaultValue={data?.price}
              // value={formData?.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="category">Category:</label>
            <input
              className="px-3 py-3 rounded focus:shadow-md text-gray-800 focus:outline-none"
              placeholder="Fill the Field"
              type="text"
              id="category"
              name="category"
              defaultValue={data?.category}
              value={formData?.category}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="description">Description:</label>
            <textarea
              className="px-3 py-3 rounded focus:shadow-md text-gray-800 focus:outline-none"
              placeholder="Fill the Field"
              id="description"
              name="description"
              rows="5"
              defaultValue={data?.description}
              value={formData?.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="additional_description">
              Additional Description:
            </label>
            <textarea
              className="px-3 py-3 rounded focus:shadow-md text-gray-800 focus:outline-none"
              placeholder="Fill the Field"
              id="additional_description"
              name="additional_description"
              rows="5"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="details">Additional Description:</label>
            <textarea
              className="px-3 py-3 rounded focus:shadow-md text-gray-800 focus:outline-none"
              placeholder="Fill the Field"
              id="details"
              name="details"
              rows="5"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="image">Image:</label>
              <input
                className=" px-3 py-5 rounded bg-white"
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
              />
            </div>
            <button
              className=" px-3 py-4 rounded font-semibold bg-green-600 text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
