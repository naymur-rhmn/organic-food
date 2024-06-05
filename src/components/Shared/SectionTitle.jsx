import React from "react";

const SectionTitle = ({ textAlign, subTitle, title, textColor }) => {
  return (
    <div
      className={`${
        textAlign === "left"
          ? "text-left"
          : textAlign === "right"
          ? "text-right"
          : "text-center"
      }`}
    >
      <p className="font-yellowTail text-greenCs text-[36px] capitalize">
        {subTitle}
      </p>
      <h2 className={`capitalize ${textColor ? textColor : "text-navyCs"} `}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
