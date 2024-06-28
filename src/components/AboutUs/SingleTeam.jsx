import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const SingleTeam = ({ urls, name, occupation, img }) => {
  return (
    <div className="rounded-xl bg-lightGrayCs hover:bg-white hover:shadow-lg">
      <img className="rounded-t-xl w-full" src={img} alt="" />
      <div className="p-4">
        <p className="text-base md:text-lg font-bold text-navyCs capitalize mb-1">
          {name}
        </p>
        <div className="flex justify-between items-center">
          <span className="capitalize text-greenCs font-yellowTail ">
            {occupation}
          </span>
          {/* social links */}
          <ul className="flex gap-2">
            <li>
              <a
                className="hover:text-greenCs transition"
                href="https://facebook.com"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                className="hover:text-greenCs transition"
                href="https://instagram.com"
              >
                <FaInstagram />{" "}
              </a>
            </li>
            <li>
              <a
                className="hover:text-greenCs transition"
                href="https://twitter.com"
              >
                <FaSquareXTwitter />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleTeam;
