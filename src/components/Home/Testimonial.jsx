import SectionTitle from "../Shared/SectionTitle";
import bg from "../../assets/testimonial.png";

const Testimonial = () => {
  return (
    <section className="relative bg-lightGrayCs py-[70px] testimonial-bg z-10">
      <div className="max-w-screen-md mx-auto px-4">
        <div className="text-center">
          <SectionTitle
            title="What Our Customer Saying?"
            subTitle={"Testimonial"}
          />
          {/* review */}
          <div>
            <div className="flex justify-center">
              <img
                className="h-[100px] w-[100px] rounded-full shadow inline-block"
                src="https://placehold.co/100x100.png"
                alt=""
              />
            </div>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>
            <div>
              <p>Sara Taylor</p>
              <p>Consumer</p>
            </div>
          </div>
          <hr />
          {/* countable info */}
          <div className="grid grid-cols-4 mt-8">
            <div className="flex justify-center">
              <div className="flex flex-col items-center justify-center text-center bg-transparent border  border-greenCs rounded-full h-[135px] w-[135px]">
                <span className="text-darkGray text-[40px] font-bold font-roboto leading-[40px]">
                  285
                </span>
                <p className="text-sm font-bold">Active product</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col items-center justify-center text-center bg-transparent border  border-greenCs rounded-full h-[135px] w-[135px]">
                <span className="text-darkGray text-[40px] font-bold font-roboto leading-[40px]">
                  285
                </span>
                <p className="text-sm font-bold">Active product</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col items-center justify-center text-center bg-transparent border  border-greenCs rounded-full h-[135px] w-[135px]">
                <span className="text-darkGray text-[40px] font-bold font-roboto leading-[40px]">
                  285
                </span>
                <p className="text-sm font-bold">Active product</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col items-center justify-center text-center bg-transparent border  border-greenCs rounded-full h-[135px] w-[135px]">
                <span className="text-darkGray text-[40px] font-bold font-roboto leading-[40px]">
                  285
                </span>
                <p className="text-sm font-bold">Active product</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
