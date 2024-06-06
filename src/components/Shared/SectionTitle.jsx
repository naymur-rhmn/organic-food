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
      <p className="font-yellowTail text-greenCs text-[28px] md:text-[36px] capitalize">
        {subTitle}
      </p>
      <h3 className={`capitalize ${textColor ? textColor : "text-navyCs"} `}>
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
