import React from "react";

const ChooseCard = ({ img, title, subtitle }) => {
  return (
    <div className="bg-white px-4 py-4 md:py-6 rounded-2xl text-center">
      <div className="bg-lightGrayCs rounded-lg h-14 w-14 inline-block p-4">
        <img src={img} alt="" />
      </div>
      <h6 className="text-18px sm:text-[20px] mt-2 capitalize">{title}</h6>
      <p>{subtitle}</p>
    </div>
  );
};

export default ChooseCard;
