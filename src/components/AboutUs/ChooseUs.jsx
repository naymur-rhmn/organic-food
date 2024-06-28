import SectionTitle from "../Shared/SectionTitle";
import chooseUs from "../../assets/about-us/choose-us.jpg";
import Sticker from "./Sticker";
import returnPurchage from "../../assets/about-us/icons/Return-Purchase.png";
import natural from "../../assets/about-us/icons/Natural-Food.png";
import time from "../../assets/about-us/icons/Phone-Time.png";
import payment from "../../assets/about-us/icons/Card-Security.png";
import ChooseCard from "./ChooseCard";

const ChooseUs = () => {
  return (
    <div>
      <section className="bg-lightGrayCs py-10 md:py-[80px]">
        <div className="max-w-screen-xl mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <SectionTitle
                title={"We do not buy from the open market & traders."}
                subTitle={"Why Choose us?"}
                textAlign={"left"}
              />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                dolor unde rerum qui laudantium.
              </p>
              <div className="flex flex-col gap-4 mt-4">
                <Sticker
                  title={"100% Natural product"}
                  subtitle={
                    "Simply dummy text of the printing and typesetting industry Lorem Ipsum"
                  }
                />
                <Sticker
                  title={"Increases resistance"}
                  subtitle={
                    "Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing"
                  }
                />
              </div>
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <div className=" relative h-60 w-full md:h-full">
                <div
                  style={{ backgroundImage: `url(${chooseUs})` }}
                  className="absolute top-0 left-0 bg-cover bg-center bg-no-repeat bg-green-200 h-full w-full rounded-2xl"
                ></div>
              </div>
            </div>
          </div>
          {/* cards */}
          <div className="mx-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <ChooseCard
                title={"Return Policy"}
                subtitle={
                  "simply dummy text of the printing presenting induxtry."
                }
                img={returnPurchage}
              />
              <ChooseCard
                title={"100% Fresh"}
                subtitle={
                  "simply dummy text of the printing presenting induxtry."
                }
                img={natural}
              />
              <ChooseCard
                title={"Support 24/7"}
                subtitle={
                  "simply dummy text of the printing presenting induxtry."
                }
                img={time}
              />
              <ChooseCard
                title={"Secured Payment"}
                subtitle={
                  "simply dummy text of the printing presenting induxtry."
                }
                img={payment}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChooseUs;
