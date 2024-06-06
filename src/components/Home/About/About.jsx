import SectionTitle from "../../Shared/SectionTitle";
import fruits from "../../../assets/fruits.png";
import veganFood from "../../../assets/Vegan-Food.png";
import milbox from "../../../assets/Mailbox-Quality.png";
import AboutContentPart from "./AboutContentPart";
import ButtonPrimary from "../../Shared/ButtonPrimary";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="bg-lightGrayCs py-[70px]">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="grid grid-cols-2 items-center">
          <div className="max-h-[700px]">
            <img className="h-full w-full" src={fruits} alt="" />
          </div>
          {/* about content */}
          <div className="pr-5">
            <SectionTitle
              textAlign={"left"}
              subTitle={"About Us"}
              title={"We Believe in Working Accredited Farmers"}
            />
            <p className="text-darkGray text-lg">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>

            <div className="flex flex-col gap-4 mt-6">
              <AboutContentPart
                img={veganFood}
                title={"Organic Foods Only"}
                desc={
                  " Simply dummy text of the printing and typesetting industry Lorem Ipsum"
                }
              />
              <AboutContentPart
                img={milbox}
                title={"Quality Standards"}
                desc={
                  " Simply dummy text of the printing and typesetting industry Lorem Ipsum"
                }
              />
            </div>
            <div className="mt-5">
              <Link to={"/shop"}>
                <ButtonPrimary value={"Shop Now"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
