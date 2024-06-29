import banner from "../assets/about-banner.png";
import AboutUsSudo from "../components/AboutUs/AboutUsSudo";
import ChooseUs from "../components/AboutUs/ChooseUs";
import Team from "../components/AboutUs/Team";
import WeOffer from "../components/AboutUs/WeOffer";
import Newslatter from "../components/Home/Newslatter";
import SectionBanner from "../components/Shared/SectionBanner";

const AboutUs = () => {
  return (
    <section>
      {/* <SectionBanner banner={banner} title={"about us"} /> */}
      <AboutUsSudo />
      <ChooseUs />
      <Team />
      <WeOffer />
      <Newslatter />
    </section>
  );
};

export default AboutUs;
