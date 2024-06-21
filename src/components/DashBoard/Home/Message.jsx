import Marquee from "react-fast-marquee";

const Message = () => {
  return (
    <div className="h-14 flex">
      <div className="h-full w-[160px] bg-navyCs justify-center flex items-center relative message">
        <div className="uppercase text-white">news update</div>
      </div>
      <div className="bg-[#fff] w-full pl-6 h-full flex items-center pr-4">
        <Marquee>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          magni pariatur doloremque quae quibusdam. Eos alias totam, culpa ut
          esse temporibus ipsa error neque vel optio praesentium fuga? Iste ut
          aut laboriosam earum.
        </Marquee>
      </div>
    </div>
  );
};

export default Message;
