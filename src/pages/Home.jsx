import Hero from "../components/Home/Hero";
import OrganicFoods from "../components/Home/OrganicFoods";
import About from "../components/Home/About/About";
import Testimonial from "../components/Home/Testimonial";
import OfferBanner from "../components/Home/OfferBanner";
import Offer from "../components/Home/Offer";
import WhoWe from "../components/Home/WhoWe";
import Gallery from "../components/Home/Gallery";
import Newslatter from "../components/Home/Newslatter";

const Home = () => {
  return (
    <>
      <Hero />
      <OfferBanner />
      <About />
      <OrganicFoods />
      <Testimonial />
      <Offer />
      <WhoWe />
      <Gallery />
      <Newslatter />
    </>
  );
};

export default Home;
