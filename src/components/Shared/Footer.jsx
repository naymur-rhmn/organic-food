import { FaFacebook } from "react-icons/fa";

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-3 w-full gap-4 pt-5 pb-10">
          <div className="text-right w-full border-r border-grayCs pr-[50px]">
            <h5 className="leading-8 mb-5">Contact Us</h5>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Email</p>
                <a href="mailto:">dummy@mail.com</a>
              </li>
              <li>
                <p>Phone</p>
                <a href="tel:+">016 2540 8755</a>
              </li>
              <li>
                <p>Address</p>
                <p>9b road, roklyn streen, USA</p>
              </li>
            </ul>
          </div>
          <div className="text-center px-4">
            <h4 className="leading-8 mb-5">Organick</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              vitae obcaecati cum cupiditate illum provident nobis reiciendis
              aliquam.
            </p>
            <ul className="flex justify-center gap-4 mt-4">
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaPinterest />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaSquareXTwitter />
              </li>
            </ul>
          </div>
          <div className="text-left pl-[50px] border-l border-grayCs">
            <h5 className="leading-8 mb-5">Utitlity Pages</h5>
            <ul className="flex flex-col gap-3">
              <li>Home</li>
              <li>About</li>
              <li>Shop</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-grayCs py-4">
        <div className="max-w-screen-xl mx-auto px-4 md:px-12">
          <p className="text-center">
            Copyright © Organick | Designed by VictorFlow Templates - Powered by
            Webflow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
