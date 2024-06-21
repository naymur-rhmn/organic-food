const SectionBanner = ({ banner, title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className={`h-[220px] w-full relative bg-cover bg-center bg-no-repeat flex justify-center items-center`}
    >
      <p className="text-4xl font-bold capitalize">{title}</p>
    </div>
  );
};

export default SectionBanner;
