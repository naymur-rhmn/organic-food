import banner from "../../assets/Banner-1.jpg";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${banner})` }}
      className="hero  h-[100vh] w-full bg-cover bg-right md:bg-center bg-no-repeat "
    ></section>
  );
};

export default Hero;
