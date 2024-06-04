import { Link, Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <div className="relative">
      <div className="h-[60px] px-4 flex justify-between items-center bg-white">
        <div>
          <div className="h-[40px] sm:h-[60px]  flex justify-center items-center">
            <p className="text-xl sm:text-3xl md:text-4xl text-greenCs font-bold font-roboto">
              Organic
            </p>
          </div>
        </div>
        <div>user</div>
      </div>
      <div className="grid grid-cols-12 h-[calc(100vh-60px)] sticky top-0 left-0">
        {/* First child with fixed width */}
        <div className="bg-navyCs col-span-2 h-full">
          <ul className="px-4 mt-8 flex flex-col gap-5 text-xl font-bold text-[#f0f2f2]">
            <Link to="/dashboard">
              <li>Products</li>
            </Link>
            <Link to="addProduct">
              <li>Add Item</li>
            </Link>
            <li>Delete Item</li>
          </ul>
        </div>
        {/* Second child takes up the rest of the width */}
        <div className="col-span-10 bg-lightGrayCs px-6 py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
