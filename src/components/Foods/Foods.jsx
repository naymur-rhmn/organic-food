import SingleFood from "./SingleFood";
import useFood from "../../hook/useFood";

const Foods = ({ home }) => {
  const foods = useFood();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {home
        ? foods
            .slice(0, 8)
            .map((food) => <SingleFood key={food._id} food={food} />)
        : foods.map((food) => <SingleFood key={food._id} food={food} />)}
    </div>
  );
};

export default Foods;
