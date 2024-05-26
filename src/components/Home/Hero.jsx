import banner from "../../assets/Banner-1.jpg";
import { FaCircleArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${banner})` }}
      className="hero relative h-[calc(100vh-80px)]  w-full bg-cover bg-right md:bg-center bg-no-repeat bg-lightGrayCs  shadow z-10"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex items-center h-full">
        <div className="md:w-2/3">
          <p className="text-[36px] font-yellowTail text-greenCs">
            100% Natural Food
          </p>
          <h1>Choose the best healthier way of life</h1>
          <div className="mt-[23px]">
            <button className="py-[20px] px-[39px] bg-orangeCs text-[20px] font-bold font-roboto rounded-xl flex items-center gap-2 group text-navyCs">
              <span>Explore Now</span>
              <FaCircleArrowRight className="group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
