import SectionTitle from "../Shared/SectionTitle";
import spicy from "../../assets/about-us/categories/Photo.jpg";
import nut from "../../assets/about-us/categories/Photo-2.jpg";
import fruits from "../../assets/about-us/categories/Photo-3.jpg";
import vegetable from "../../assets/about-us/categories/Photo-4.jpg";
import OfferCard from "./OfferCard";

const WeOffer = () => {
  return (
    <div className="bg-navyCs py-10 md:py-[80px]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <SectionTitle
          title={"What we offer for you"}
          subTitle={"About Us"}
          textColor={"text-white"}
        />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-4">
          <OfferCard img={spicy} category={"Spicy"} />
          <OfferCard img={nut} category={"nut & feed"} />
          <OfferCard img={fruits} category={"fruits"} />
          <OfferCard img={vegetable} category={"vegetables"} />
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
