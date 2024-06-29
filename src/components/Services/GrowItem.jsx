const GrowItem = ({ icon, text, title, align }) => {
  return (
    <div className="flex flex-col">
      <img
        className={`h-10 w-10  ${
          align ? "mx-auto md:mx-0 md:mr-auto" : "mx-auto md:mx-0  md:ml-auto"
        }`}
        src={icon}
        alt=""
      />
      <p className="text-navyCs capitalize text-lg font-semibold font-roboto mt-2">
        {title}
      </p>
      <p>{text}</p>
    </div>
  );
};

export default GrowItem;
