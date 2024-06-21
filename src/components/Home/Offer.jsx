import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import ButtonPrimary from "../Shared/ButtonPrimary";
import useFood from "../../hook/useFood";
import SingleFood from "../Foods/SingleFood";
import { Link } from "react-router-dom";
import MoreProducts from "./MoreProducts";

const Offer = () => {
  return (
    <section className="bg-navyCs py-[80px]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <div className="flex justify-between items-center">
          <SectionTitle
            subTitle={"Offer"}
            title={"We offer organic for you"}
            textColor={"text-white"}
            textAlign={"left"}
          />
          <div>
            <Link to="/shop">
              <ButtonPrimary value={"View all product"} />
            </Link>
          </div>
        </div>
        <MoreProducts />
      </div>
    </section>
  );
};

export default Offer;
