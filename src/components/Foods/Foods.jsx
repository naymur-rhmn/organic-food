import SingleFood from "./SingleFood";
import { useEffect, useState } from "react";

const Foods = ({ home }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch(
          "https://organic-food-server-beige.vercel.app/foods"
        );
        const data = await res.json();
        setFoods(data);
      } catch (err) {
        console.error(err);
      }
    }
    loadData();
  }, []);

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
