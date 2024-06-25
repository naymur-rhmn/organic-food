import offerbg1 from "../../assets/offer-bg-1.jpg";
import offerbg2 from "../../assets/offer-bg-2.jpg";

const OfferBanner = () => {
  return (
    <div className="py-[40px] md:py-[80px]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 gap-4">
          <div
            style={{ backgroundImage: `url(${offerbg1})` }}
            className="h-[280px] w-full bg-no-repeat bg-center bg-cover px-5 ms:px-10 md:px-[40px] text-white rounded-xl"
          >
            <div className=" flex flex-col justify-center h-full w-full md:w-5/6 lg:w-3/5">
              <p className="font-yellowTail text-[30px] md:text-[36px] mb-3">
                Natural!!
              </p>
              <h3 className="capitalize font-roboto text-white">
                Get Garden fresh fruits
              </h3>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${offerbg2})` }}
            className="h-[280px] w-full bg-no-repeat bg-center bg-cover px-5 ms:px-10 md:px-[40px] rounded-xl"
          >
            <div className="flex flex-col justify-center h-full w-full md:w-5/6 lg:w-3/5">
              <p className="font-yellowTail text-greenCs  text-[30px] md:text-[36px] mb-3">
                Offer!!
              </p>
              <h3 className="text-wrap font-roboto">
                Get 10% off on Vegetables
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
