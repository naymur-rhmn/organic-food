import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import Foods from "../Foods/Foods";

const OrganicFoods = () => {
  return (
    <section className="py-[60px] md:py-[100px]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <div>
          <SectionTitle subTitle={"Categories "} title={"Our Products"} />
        </div>
        <div className="mt-[30px] sm:mt-[40px] md:mt-[60px]">
          <Foods home={true} />
        </div>
      </div>
    </section>
  );
};

export default OrganicFoods;
