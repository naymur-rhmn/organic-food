import SectionTitle from "../Shared/SectionTitle";
import GrowItem from "./GrowItem";
import dairy from "../../assets/services/Milk-Bottle.png";
import store from "../../assets/services/Online-Store.png";
import delivery from "../../assets/services/Delivery.png";
import organic from "../../assets/services/Natural-Food.png";
import bag from "../../assets/services/Vegetables-Bag.png";
import vegetable from "../../assets/services/Radish.png";
import bigbag from "../../assets/services/Photo.png";

const WhatWeGrow = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <div className="max-w-screen-sm mx-auto px-16">
          <SectionTitle
            title={"Better agriculture for better future"}
            subTitle={"What we Grow"}
          />
        </div>
        {/* section content */}
        <div className="grid items-center grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-4 mt-6 md:mt-10">
          {/* left item */}
          <div className="flex flex-col md:flex-col gap-5 justify-end text-center md:text-right py-6 px-8 sm:px-20 md:px-0">
            <GrowItem
              title={"dairy products"}
              icon={dairy}
              text={
                "Lorem ipsum dolor sit amet consectetur  Reiciendis   maiores ex?"
              }
            />
            <GrowItem
              title={"store services"}
              icon={store}
              text={
                "Lorem ipsum dolor sit amet consectetur   Reiciendis voluptatum maiores ex?"
              }
            />
            <GrowItem
              title={"delivery services"}
              icon={delivery}
              text={
                "Lorem ipsum dolor sit amet consectetur   Reiciendis voluptatum maiores ex?"
              }
            />
          </div>
          {/* center item */}
          <div className="relative min-h-[450px] md:min-h-[600px] h-full">
            <div
              style={{ backgroundImage: `url(${bigbag})` }}
              className="absolute bg-gray-200 bg-cover bg-center bg-no-repeat h-full w-full"
            ></div>
          </div>
          {/* right item */}
          <div className="flex flex-col md:flex-col gap-5 justify-start text-center md:text-left py-6 px-8    sm:px-20 md:px-0">
            <GrowItem
              title={"agricultural services"}
              icon={organic}
              align={"left"}
              text={
                "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium."
              }
            />
            <GrowItem
              title={"organic products"}
              icon={bag}
              align={"left"}
              text={
                "Lorem ipsum dolor sit amet consectetur   Reiciendis voluptatum maiores ex?"
              }
            />
            <GrowItem
              title={"Fresh vegetables"}
              icon={vegetable}
              align={"left"}
              text={
                "Sed ut perspiciatis unde omnis iste natus error sit voluptat accu"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeGrow;
