import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import Foods from "../Foods/Foods";

const OrganicFoods = () => {
  return (
    <section className="py-[120px]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <div>
          <SectionTitle subTitle={"Categories "} title={"Our Products"} />
        </div>
        <div className="mt-[80px]">
          <Foods home={true} />
        </div>
      </div>
    </section>
  );
};

export default OrganicFoods;
