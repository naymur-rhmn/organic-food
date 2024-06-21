import banner from "../assets/about-banner.png";
import AboutUsSudo from "../components/AboutUs/AboutUsSudo";
import ChooseUs from "../components/AboutUs/ChooseUs";
import SectionBanner from "../components/Shared/SectionBanner";

const AboutUs = () => {
  return (
    <section>
      <SectionBanner banner={banner} title={"about us"} />
      <AboutUsSudo />
      <ChooseUs />
    </section>
  );
};

export default AboutUs;
