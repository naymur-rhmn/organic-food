import SectionTitle from "../Shared/SectionTitle";
import AboutContentPart from "../Home/About/AboutContentPart";
import { Link } from "react-router-dom";
import fruits from "../../assets/aboutusFruit.png";
import veganFood from "../../assets/Vegan-Food.png";
import milbox from "../../assets/Mailbox-Quality.png";
import ButtonPrimary from "../Shared/ButtonPrimary";

const AboutUsSudo = () => {
  return (
    <div id="about" className="py-10 md:py-[70px]">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-12 ">
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div className="h-[650px] hidden md:block">
            <img className="h-full w-full" src={fruits} alt="" />
          </div>
          {/* about content */}
          <div className="md:pr-5">
            <SectionTitle
              textAlign={"left"}
              subTitle={"About Us"}
              title={"We Believe in Working Accredited Farmers"}
            />
            <p className="text-darkGray text-lg mt-2">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>

            <div className="flex items-start gap-4 mt-7">
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
            <div className="mt-6 flex">
              <Link to={"/shop"}>
                <ButtonPrimary value={"Explore Now"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSudo;
