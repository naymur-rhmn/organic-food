import React from "react";

const DbTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center mb-10">
      <h6>{title}</h6>
      <p className="text-lg text-slate-500 font-medium">{subTitle}</p>
    </div>
  );
};

export default DbTitle;
