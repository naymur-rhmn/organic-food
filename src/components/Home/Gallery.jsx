import bg1 from "../../assets/Photo-1.jpg";
import bg2 from "../../assets/Photo-2.jpg";
import bg3 from "../../assets/Photo-3.jpg";

const Gallery = () => {
  return (
    <div className="bg-lightGreenCs py-[70px] md:py-[90px]">
      <div className="grid grid-cols-3 gap-6 h-[400px]">
        <div
          style={{ backgroundImage: `url(${bg1})` }}
          className="juice-bg flex justify-center items-center bg-center bg-cover bg-no-repeat"
        >
          <button className="rounded-lg bg-white text-navyCs font-medium font-roboto text-xl py-4 px-6 capitalize ">
            organic juice
          </button>
        </div>
        <div
          style={{ backgroundImage: `url(${bg2})` }}
          className="juice-bg flex justify-center items-center bg-center bg-cover bg-no-repeat"
        >
          <button className="rounded-lg bg-white text-navyCs font-medium font-roboto text-xl py-4 px-6 capitalize ">
            organic food
          </button>
        </div>
        <div
          style={{ backgroundImage: `url(${bg3})` }}
          className="juice-bg flex justify-center items-center bg-center bg-cover bg-no-repeat"
        >
          <button className="rounded-lg bg-white text-navyCs font-medium font-roboto text-xl py-4 px-6 capitalize ">
            nuts cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
