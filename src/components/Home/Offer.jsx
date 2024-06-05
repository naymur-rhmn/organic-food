import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import ButtonPrimary from "../Shared/ButtonPrimary";
import useFood from "../../hook/useFood";
import SingleFood from "../Foods/SingleFood";

const Offer = () => {
  const data = useFood();

  return (
    <section className="bg-navyCs py-[70px]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <div className="flex justify-between items-center">
          <SectionTitle
            subTitle={"Offer"}
            title={"We offer organic for you"}
            textColor={"text-white"}
            textAlign={"left"}
          />
          <div>
            <ButtonPrimary value={"View all product"} />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-8">
          {data
            .reverse()
            .slice(0, 4)
            .map((food) => (
              <SingleFood key={food._id} food={food} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
