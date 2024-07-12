import React from "react";

const SingleReview = ({ review }) => {
  const { image, comment, name, profession } = review;
  return (
    <div>
      <div className="flex justify-center">
        <div className=" h-[70px] sm:h-[80px] md:h-[100px]  w-[70px] sm:w-[80px] md:w-[100px]">
          <img
            className=" h-[70px] sm:h-[80px] md:h-[100px]  w-[70px] sm:w-[80px] md:w-[100px] rounded-full shadow inline-block"
            src={image}
            alt=""
          />
        </div>
      </div>
      <p className="mt-4 font-medium quote mx-10">{comment}</p>
      <div className="mt-3 pb-10">
        <p className="font-bold">{name}</p>
        <p className="text-sm font-medium text-gray-500">{profession}</p>
      </div>
    </div>
  );
};

export default SingleReview;
