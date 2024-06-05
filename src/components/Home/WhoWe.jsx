import SectionTitle from "../Shared/SectionTitle";

const WhoWe = () => {
  return (
    <section className="bg-white relative z-10">
      <div className="who-we-bg"></div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 py-[70px]">
          <div className="col-start-2 pl-14 -ml-14 bg-white rounded-2xl py-12">
            <SectionTitle
              title={"Econis is a friendly ogrganic store"}
              subTitle={"Eco friendly"}
              textAlign={"left"}
            />
            <div className="flex flex-col gap-4 mt-6">
              <div>
                <h6>Start with Our Company First</h6>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
              <div>
                <h6>Start with Our Company First</h6>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
              <div>
                <h6>Start with Our Company First</h6>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWe;
