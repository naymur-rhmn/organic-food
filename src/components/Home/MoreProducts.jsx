import useFood from "../../hook/useFood";
import SingleFood from "../Foods/SingleFood";

const MoreProducts = () => {
  const data = useFood();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
      {data
        .reverse()
        .slice(0, 4)
        .map((food) => (
          <SingleFood key={food._id} food={food} />
        ))}
    </div>
  );
};

export default MoreProducts;
