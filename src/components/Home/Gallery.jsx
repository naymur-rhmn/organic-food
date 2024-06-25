import bg1 from "../../assets/Photo-1.jpg";
import bg2 from "../../assets/Photo-2.jpg";
import bg3 from "../../assets/Photo-3.jpg";

const Gallery = () => {
  return (
    <div className="bg-lightGreenCs py-[40px] md:py-[80px]">
      <div className="grid grid-cols-3 gap-6 h-[300px] md:h-[400px]">
        <div
          style={{ backgroundImage: `url(${bg1})` }}
          className="flex justify-center items-center bg-center bg-cover bg-no-repeat"
        >
          <button className="rounded-lg bg-white text-navyCs font-medium font-roboto text-sm md:text-xl md:py-4 md:px-6 py-3 px-4 mx-2 capitalize ">
            organic juice
          </button>
        </div>
        <div
          style={{ backgroundImage: `url(${bg2})` }}
          className="flex justify-center items-center bg-center bg-cover bg-no-repeat"
        >
          <button className="rounded-lg bg-white text-navyCs font-medium font-roboto text-sm md:text-xl md:py-4 md:px-6 py-3 px-4 mx-2 capitalize ">
            organic food
          </button>
        </div>
        <div
          style={{ backgroundImage: `url(${bg3})` }}
          className="flex justify-center items-center bg-center bg-cover bg-no-repeat"
        >
          <button className="rounded-lg bg-white text-navyCs font-medium font-roboto text-sm md:text-xl md:py-4 md:px-6 py-3 px-4 mx-2 capitalize ">
            nuts cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
