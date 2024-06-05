import { useContext } from "react";
import { ProductDataContext } from "../provider/ProductDataProvider";

const useFood = () => {
  const data = useContext(ProductDataContext);
  return data;
};

export default useFood;
