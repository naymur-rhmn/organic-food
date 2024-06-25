import SectionTitle from "../Shared/SectionTitle";

const Testimonial = () => {
  return (
    <section className="relative bg-lightGrayCs py-8 md:py-16 testimonial-bg z-10">
      <div className="max-w-screen-md mx-auto px-4">
        <div className="text-center">
          <SectionTitle
            title="What Our Customer Saying?"
            subTitle={"Testimonial"}
          />
          {/* review */}
          <div className="mt-5 md:mt-6 mb-6">
            <div className="flex justify-center">
              <img
                className=" h-[70px] sm:h-[80px] md:h-[100px]  w-[70px] sm:w-[80px] md:w-[100px] rounded-full shadow inline-block"
                src="https://placehold.co/100x100.png"
                alt=""
              />
            </div>
            <p className="mt-4 font-medium quote">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>
            <div className="mt-3">
              <p className="font-bold">Sara Taylor</p>
              <p className="text-sm font-medium text-gray-500">Consumer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
