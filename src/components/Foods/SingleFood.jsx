import { Link } from "react-router-dom";
import apple from "../../assets/apple.png";

const SingleFood = ({ food }) => {
  const { id, name, category, price, description } = food;
  console.log(id);
  return (
    <Link to={`/shop/foods/${id}`}>
      <div className="relative bg-lightGrayCs rounded-xl hover:shadow-lg">
        <span className="  bg-navyCs px-4 text-white mt-4 inline-block ml-4 rounded top-3 left-3">
          {category}
        </span>
        <img src={apple} alt={name} />
        <div className="p-4">
          <div className=" flex justify-between border-b pb-1">
            <p className="font-semibold font-roboto text-[20px]">{name}</p>
            <p className="font-bold text-lg text-navyCs">${price}</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className=" text-sm font-semibold text-gray-500">
              {description.slice(0, 20)}...
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleFood;
