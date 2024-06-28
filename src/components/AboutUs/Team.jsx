import SectionTitle from "../Shared/SectionTitle";
import giovani from "../../assets/about-us/images/Photo.jpg";
import marianne from "../../assets/about-us/images/Photo-2.jpg";
import riga from "../../assets/about-us/images/Photo-3.jpg";
import SingleTeam from "./SingleTeam";

const Team = () => {
  return (
    <div className="py-10 md:py-[80px]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <div className="max-w-screen-sm mx-auto px-4">
          <SectionTitle title={"Our Organic experts"} subTitle={"team"} />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            tempore nisi consequuntur distinctio quod vel quos.
          </p>
        </div>
        {/* team member */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 sm:mt-7 md:mt-8">
          <SingleTeam
            img={giovani}
            name={"giovani bacardo"}
            occupation={"farmer"}
          />
          <SingleTeam
            img={marianne}
            name={"marianne loreno"}
            occupation={"designer"}
          />
          <SingleTeam img={riga} name={"Riga Pelore"} occupation={"farmer"} />
        </div>
      </div>
    </div>
  );
};

export default Team;
