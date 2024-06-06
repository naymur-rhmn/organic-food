import toast from "react-hot-toast";
import banner from "../../assets/Photo-orange-bg.jpg";
const Newslatter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Welcome");
    e.target.reset();
  };
  return (
    <div className="py-[70px]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 h-[330px] relative z-10">
        <div
          style={{ backgroundImage: `url(${banner})` }}
          className="absolute top-0 left-0 h-full w-full bg-center bg-cover bg-no-repeat content-[''] rounded-2xl -z-10"
        ></div>
        <div className="flex items-center justify-between h-full">
          <h2 className="w-1/2">Subscribe to our Newsletter</h2>
          <form onSubmit={handleSubmit} className=" w-1/2">
            <div className="flex gap-2  pl-32">
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full px-2 py-4 focus:outline-greenCs"
                placeholder="Enter your Email"
                required
              />
              <input
                className="bg-darkGray text-white rounded-lg py-4 px-7 cursor-pointer"
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
