import React from "react";
import DbTitle from "../DbTitle/DbTitle";

const Review = () => {
  return (
    <div>
      <DbTitle
        title={"Put Review"}
        subTitle={"We always Prioritize our users"}
      />
      <div className="grid grid-cols-12 gap-4">
        <div  className="col-span-6"></div>
        <div className="col-span-6">
            <form>
                
            </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
