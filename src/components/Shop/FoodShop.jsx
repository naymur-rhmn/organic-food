import React from "react";
import Foods from "../Foods/Foods";

const FoodShop = () => {
  return (
    <section className="py-[70px] bg-grayCs">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <Foods />
      </div>
    </section>
  );
};

export default FoodShop;
