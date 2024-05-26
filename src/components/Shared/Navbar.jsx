const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <div className="flex items-center gap-52  h-[80px]">
          <div>
            <span>Organic</span>
          </div>
          <div className="flex justify-between w-full">
            <nav>
              <ul className="flex gap-4 items-center">
                <li>Home</li>
                <li>About</li>
                <li>Shoop</li>
              </ul>
            </nav>
            <div>user</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
