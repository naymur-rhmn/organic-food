import { FaRegCircle } from "react-icons/fa";
const Sticker = ({ title, subtitle }) => {
  return (
    <div>
      <div className="bg-grayCs pl-4 py-4 pr-8 rounded-full inline-block min-w-[250px]">
        <div className="flex items-center gap-1 md:gap-2">
          <FaRegCircle size={17} className="text-greenCs" />
          <span className="text-navyCs font-bold">{title}</span>
        </div>
      </div>
      <p className="ml-8 mt-2">{subtitle}</p>
    </div>
  );
};

export default Sticker;
