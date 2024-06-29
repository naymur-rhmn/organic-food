import bg from "../../assets/services/bg.jpg";
import SectionTitle from "../Shared/SectionTitle";
import { FaPlay } from "react-icons/fa";

const VideoIntro = () => {
  return (
    <div className="relative z-30 h-[320px] sm:h-[420] md:h-[500px]">
      {/* bg img */}
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="absolute h-full w-full -z-10 bg-cover bg-right-bottom bg-no-repeat"
      ></div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <div className="max-w-screen-sm mx-auto text-center pt-10">
          <SectionTitle
            title={"Everyday fresh & clean"}
            subTitle={"organic only"}
          />
          <p className="mt-2">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the{" "}
          </p>
        </div>
        {/* popup video play btn */}
        <div className="mt-10 flex justify-center">
          <button className="h-14 w-14 bg-greenCs rounded-full flex justify-center items-center pl-1 hover:shadow-lg">
            <FaPlay color="white" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoIntro;
