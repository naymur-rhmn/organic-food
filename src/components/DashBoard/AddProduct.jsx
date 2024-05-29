import { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    additional_description: "",
    details: "",
    imageFile: null,
    id: null,
  });

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
      imageFile: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate uploading image to image hosting site
    const imageUrl = await uploadImage(formData.imageFile);

    // Now you have the imageUrl, you can send it along with other form data to your server
    const dataToSend = {
      ...formData,
      imageUrl,
    };
  };

  const uploadImage = async (imageFile) => {
    // Simulate image upload by sending it to the server
    // Replace this with actual code to upload image to your image hosting site
    // For example, using FormData and fetch:
    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await fetch("your-image-hosting-site-upload-url", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data.imageUrl; // Assuming the response contains the URL of the uploaded image
  };

  console.log(formData);

  return (
    <div>
      <div className="mb-8">
        <h4>Add Product</h4>
        <p className="text-xl text-slate-500 font-semibold">
          Bring your product add to store
        </p>
      </div>
      <form className="lg:px-32">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="id">Id:</label>
            <input
              className="px-3 py-3 rounded focus:shadow-md focus:outline-none"
              placeholder="Fill the Field"
              type="number"
              id="id"
              name="id"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="price">Price:</label>
            <input
              className="px-3 py-3 rounded focus:shadow-md focus:outline-none"
              placeholder="Fill the Field"
              type="number"
              id="price"
              name="price"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="name">Name:</label>
            <input
              className="px-3 py-3 rounded focus:shadow-md focus:outline-none"
              placeholder="Fill the Field"
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="category">Category:</label>
            <input
              className="px-3 py-3 rounded focus:shadow-md focus:outline-none"
              placeholder="Fill the Field"
              type="text"
              id="category"
              name="category"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="description">Description:</label>
            <textarea
              className="px-3 py-3 rounded focus:shadow-md focus:outline-none"
              placeholder="Fill the Field"
              id="description"
              name="description"
              rows="5"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="additional_description">
              Additional Description:
            </label>
            <textarea
              className="px-3 py-3 rounded focus:shadow-md focus:outline-none"
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
              className="px-3 py-3 rounded focus:shadow-md focus:outline-none"
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
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
