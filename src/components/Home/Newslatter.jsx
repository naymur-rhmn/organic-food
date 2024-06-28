import toast from "react-hot-toast";
import banner from "../../assets/Photo-orange-bg.jpg";
const Newslatter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Welcome");
    e.target.reset();
  };
  return (
    <div className="md:py-20 py-10 px-4 md:px-12 ">
      <div className="max-w-screen-xl mx-auto  h-[200px] sm:h-[240px] md:h-[280px] relative z-10 px-4 md:px-12">
        <div
          style={{ backgroundImage: `url(${banner})` }}
          className="absolute top-0 left-0 h-full w-full bg-center bg-cover bg-no-repeat content-[''] rounded-2xl -z-10"
        ></div>
        <div className="flex flex-col justify-center gap-4 md:flex-row items-center md:justify-between h-full">
          <h3 className="md:w-1/2 text-center md:text-left leading-snug">
            Subscribe to our
            <br />
            Newsletter
          </h3>
          <form onSubmit={handleSubmit} className="w-[90%] sm:w-[70%] md:w-1/2">
            <div className="flex gap-1">
              <input
                type="email"
                className="bg-gray-50 flex-1 border border-gray-300 text-gray-900 text-sm rounded-lg px-2 py-2.5 sm:py-3 md:py-4 focus:outline-greenCs"
                placeholder="Enter your Email"
                required
              />
              <input
                className="bg-darkGray  text-white px-4 sm:px-5 md:px-6 lg:px-7  rounded-lg  py-2.5 sm:py-3 md:py-4 cursor-pointer"
                type="submit"
                value="Subscribe"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newslatter;
