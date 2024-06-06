import SectionTitle from "../Shared/SectionTitle";
import bg from "../../assets/testimonial.png";

const Testimonial = () => {
  const data = [
    {
      title: "organic",
      quantity: 100,
    },
    {
      title: "Active product",
      quantity: 285,
    },
    {
      title: "Organic Orchads",
      quantity: 98,
    },
    {
      title: "Years of Farmin",
      quantity: 12,
    },
  ];
  return (
    <section className="relative bg-lightGrayCs py-[70px] testimonial-bg z-10">
      <div className="max-w-screen-md mx-auto px-4">
        <div className="text-center">
          <SectionTitle
            title="What Our Customer Saying?"
            subTitle={"Testimonial"}
          />
          {/* review */}
          <div className="mt-5 md:mt-9 mb-6">
            <div className="flex justify-center">
              <img
                className=" h-[70px] sm:h-[80px] md:h-[100px]  w-[70px] sm:w-[80px] md:w-[100px] rounded-full shadow inline-block"
                src="https://placehold.co/100x100.png"
                alt=""
              />
            </div>
            <p className="mt-4 sm:mt-6 md:mt-6 font-medium">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>
            <div className="mt-3">
              <p className="font-bold">Sara Taylor</p>
              <p className="text-sm font-medium text-gray-500">Consumer</p>
            </div>
          </div>
          <hr />
          {/* countable info */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {data.map((item, i) => {
              return (
                <div key={i} className="flex justify-center items-center">
                  <div className="flex flex-col items-center justify-center text-center bg-transparent border-2  border-greenCs rounded-full h-[115px] md:h-[135px] w-[115px] md:w-[135px] p-3">
                    <span className="text-darkGray text-[36px] lg:text-[40px] font-bold font-roboto leading-[40px]">
                      {item.quantity}
                    </span>
                    <p className="text-base font-semibold text-gray-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
