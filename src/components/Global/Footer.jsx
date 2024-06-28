import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaFacebook } from "react-icons/fa";

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#3F7C8A] bg-opacity-80">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 py-8 md:py-16">
        <div className="flex flex-col md:grid md:grid-cols-3  w-full gap-4">
          {/* for small devices */}
          <div className="grid grid-cols-2 md:hidden">
            {/* contact us */}
            <div className="pl-10">
              <h6 className="leading-8 font-roboto mb-2 text-gray-200 text-left md:text-right ">
                Contact Us
              </h6>
              <ul className="flex flex-col gap-2">
                <li className="flex gap-1">
                  <span className="font-medium text-gray-800">Email:</span>
                  <a
                    className="hover:text-gray-100 hover:underline"
                    href="mailto:dummy@mail.com"
                  >
                    dummy@mail.com
                  </a>
                </li>
                <li className="flex gap-1 ">
                  <span className="font-medium text-gray-800">Phone: </span>
                  <a
                    className="hover:text-gray-100 text-gray-800"
                    href="tel:+016-2540-82755"
                  >
                    016-2540-82755
                  </a>
                </li>
                <li className="flex gap-1 ">
                  <span className="font-medium text-gray-800">
                    9b road, roklyn streen, USA
                  </span>
                </li>
              </ul>
            </div>
            {/* pages  */}
            <div className="text-left pl-20">
              <h6 className="leading-8 font-roboto mb-2 text-gray-200">
                Pages
              </h6>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    className="font-medium hover:text-gray-100 text-gray-800"
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium hover:text-gray-100 text-gray-800 "
                    to={"/about"}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium hover:text-gray-100 text-gray-800"
                    to={"/shop"}
                  >
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* medium devices */}
          {/* contact us */}
          <div className="w-full hidden md:block md:pr-[50px]">
            <h6 className="leading-8 font-roboto mb-3 text-gray-200 text-center md:text-right ">
              Contact Us
            </h6>
            <ul className="flex flex-col justify-end gap-2">
              <li className="flex gap-1 justify-center md:justify-end">
                <span className="font-medium text-gray-800">Email:</span>
                <a
                  className="hover:text-gray-100 hover:underline"
                  href="mailto:dummy@mail.com"
                >
                  dummy@mail.com
                </a>
              </li>
              <li className="flex gap-1  justify-center md:justify-end">
                <span className="font-medium text-gray-800">Phone: </span>
                <a
                  className="hover:text-gray-100 text-gray-800"
                  href="tel:+016254082755"
                >
                  016254082755
                </a>
              </li>
              <li className="flex gap-1 text-right justify-center md:justify-end">
                <span className="font-medium text-gray-800">
                  9b road, roklyn streen, USA
                </span>
              </li>
            </ul>
          </div>
          {/* organic info with social all devices */}
          <div className="text-center px-10 md:px-0 ">
            <h6 className="leading-8 text-gray-200 font-roboto mb-2 md:mb-3 mt-3 md:mt-0">
              Organic
            </h6>
            <p className="text-gray-800 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              vitae obcaecati cum cupiditate
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                className="hover:text-gray-100"
                href="https://www.instagram.com"
                target="_blank"
              >
                <FaInstagram size={24} />
              </a>
              <a
                className="hover:text-gray-100"
                href="https://www.pinterest.com"
                target="_blank"
              >
                <FaPinterest size={24} />
              </a>
              <a
                className="hover:text-gray-100"
                href="https://www.facebook.com"
                target="_blank"
              >
                <FaFacebook size={24} />
              </a>
              <a
                className="hover:text-gray-100"
                href="https://www.twitter.com"
                target="_blank"
              >
                <FaSquareXTwitter size={24} />
              </a>
            </div>
          </div>
          {/* pages  */}
          <div className="text-left pl-[50px] hidden md:block">
            <h6 className="leading-8 font-roboto mb-3 text-gray-200">Pages</h6>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  className="font-medium hover:text-gray-100 text-gray-800"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium hover:text-gray-100 text-gray-800 "
                  to={"/about"}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium hover:text-gray-100 text-gray-800"
                  to={"/shop"}
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-400 py-2">
        <div className="max-w-screen-xl mx-auto px-4 md:px-12">
          <p className="text-center text-gray-700 text-sm">
            Copyright © Nourish Organick | Developed by Naymur Rahman
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
