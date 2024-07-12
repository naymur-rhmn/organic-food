import SectionTitle from "../Shared/SectionTitle";
import sara from "../../assets/about-us/images/sara.jpg";
import akram from "../../assets/about-us/images/akram.jpg";
import maria from "../../assets/about-us/images/maria.jpg";
import SingleReview from "./SingleReview";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Sara Taylor",
      profession: "consumer",
      comment:
        "Top-notch organic food selection! The freshness and quality are unbeatable. Packaging was excellent, and the products arrived in perfect condition.",
      image: sara,
    },
    {
      id: 2,
      name: "Akram Ali",
      profession: "Lawer",
      comment:
        "The selection of organic foods here is amazing! Everything is so fresh and of high quality.   ensured everything arrived in perfect condition.",
      image: akram,
    },
    {
      id: 3,
      name: "Maria Ria",
      profession: "Doctor",
      comment:
        "I am very impressed with the organic food options! The produce is incredibly fresh and tasty. Delivery was fast, and everything arrived in perfect shape.",
      image: maria,
    },
  ];

  return (
    <section className="relative bg-lightGrayCs py-8 md:py-16 testimonial-bg z-10">
      <div className="max-w-screen-md mx-auto px-4">
        <div className="text-center">
          <SectionTitle
            title="What Our Customer Saying?"
            subTitle={"Testimonial"}
          />
          {/* review */}
          <div className="mt-5 md:mt-6 mb-6  h-full">
            <Carousel
              className="h-full "
              showStatus={false}
              showArrows={false}
              showThumbs={false}
              infiniteLoop={true}
              useKeyboardArrows
              autoPlay={true}
              interval={5000}
              centerMode
              centerSlidePercentage={100}
            >
              {reviews?.map((review) => (
                <SingleReview key={review.id} review={review} />
              ))}
            </Carousel>
            {/* <SingleReview
              image={sara}
              comment={
                "The selection of organic foods here is amazing! Everything is so fresh and of high quality. I've never tasted vegetables and fruits that were this flavorful. The delivery was prompt, and the packaging ensured everything arrived in perfect condition."
              }
              profession={"Consumer"}
              name={"Sara Taylor"}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
