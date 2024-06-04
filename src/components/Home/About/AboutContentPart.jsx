import React from "react";

const AboutContentPart = ({ img, title, desc }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="max-h-16 h-full w-full max-w-16">
        <img className="h-full w-full" src={img} alt="" />
      </div>
      <div>
        <h6>{title}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default AboutContentPart;
