const OfferCard = ({ img, category }) => {
  return (
    <div className="">
      <div className="h-[250px] rounded-xl bg-lightGrayCs">
        <img className="rounded-xl h-full w-full" src={img} alt="" />
      </div>
      <p className="text-white capitalize mt-2 md:mt-3 text-center font-semibold">
        {category}
      </p>
    </div>
  );
};

export default OfferCard;
