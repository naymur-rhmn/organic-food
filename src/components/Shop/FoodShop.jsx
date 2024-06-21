import Foods from "../Foods/Foods";
import banner from "../../assets/shop-banner.png";
import SectionBanner from "../Shared/SectionBanner";

const FoodShop = () => {
  return (
    <div className="pb-10 bg-[#FFFFFF]">
      <SectionBanner banner={banner} title={"Shop"} />
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 mt-16">
        <Foods />
      </div>
    </div>
  );
};

export default FoodShop;
