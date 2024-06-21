import { useLoaderData } from "react-router-dom";
import banner from "../../assets/Banner.png";
import { useContext, useState } from "react";
import MoreProducts from "../Home/MoreProducts";
import Newslatter from "../Home/Newslatter";
import SectionBanner from "../Shared/SectionBanner";
import { CartContext } from "../../provider/CartProvider";

const FoodDetails = () => {
  const { addToCart, cart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [toggle, setToggle] = useState(1);

  const foodItem = useLoaderData();
  const {
    _id,
    name,
    price,
    description,
    details,
    additional_description,
    image,
  } = foodItem;

  const handleOnChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setQuantity(parseInt(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      _id,
      name,
      price,
      quantity,
    };
    addToCart(data);
  };

  const handleToggle = (index) => setToggle(index);

  return (
    <section>
      <SectionBanner banner={banner} title={"single food"} />
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 mt-10">
        <div className="flex justify-around">
          <div className="flex gap-10 items-center ">
            <div className="bg-lightGrayCs rounded-lg">
              <img className="w-[350px]" src={image} alt="" />
            </div>
            <div className="p-8">
              <h3 className="font-semibold font-roboto">{name}</h3>
              <p className="text-[25px] font-bold mb-3 text-navyCs">${price}</p>
              <p className="text-lg text-darkGray">{description}</p>
              <p className="text-lg text-darkGray">{additional_description}</p>
              <p className="text-lg text-darkGray">{details}</p>

              <div className="mt-4 flex items-center flex-wrap gap-4">
                <span className="text-navyCs font-bold">Quantity:</span>
                <form onSubmit={handleSubmit}>
                  <input
                    type="number"
                    name="quantity"
                    value={quantity}
                    onChange={handleOnChange}
                    className="border py-2.5 px-4 w-[100px] rounded-xl active:border-red-300 focus:border-red-300 mr-1"
                  />
                  <button
                    type="submit"
                    // onClick={handleClick}
                    className="bg-navyCs py-2.5 px-4 rounded-xl text-white font-bold font-roboto"
                  >
                    Add To Cart
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* ======= food description ======== */}
        <div className="max-w-screen-md mx-auto mt-[70px]">
          {/* tabs */}
          <div className="flex justify-around">
            <div className="flex gap-4">
              <button
                onClick={() => handleToggle(1)}
                className={`bg-navyCs p-2 px-5 rounded-lg  font-roboto font-semibold text-[22px] text-white ${
                  toggle === 1 ? "bg-opacity-100" : "bg-opacity-80"
                }`}
              >
                Product Description
              </button>
              <button
                onClick={() => handleToggle(2)}
                className={` p-2 px-5 rounded-lg text-navyCs font-roboto font-semibold text-[22px] ${
                  toggle === 2 ? "bg-greenCs text-white" : "bg-lightGreenCs"
                }`}
              >
                Additional Info
              </button>
            </div>
          </div>
          {/* ====== tab content ====== */}
          <div className="mt-8 min-h-28">
            <div className={`${toggle === 1 ? "block" : "hidden"}`}>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus eligendi minima excepturi non natus harum omnis
                quaerat accusantium hic debitis quibusdam veritatis recusandae
                accusamus numquam, ex esse autem corporis nesciunt quis culpa
                fuga unde doloremque.
              </p>
            </div>
            <div className={`${toggle === 2 ? "block" : "hidden"}`}>
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                modi fugiat placeat eaque ratione fuga illum, consequatur, quos
                harum eveniet iste assumenda. Illo necessitatibus laudantium
                praesentium assumenda accusamus hic consectetur!
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="mb-5 md:mb-8 lg:mb-10 mt-6 font-roboto text-3xl font-bold text-center">
            Related Products
          </h2>
          <MoreProducts />
        </div>
        <Newslatter />
      </div>
    </section>
  );
};

export default FoodDetails;
