const Product = ({ product }) => {
  const { id, name, image, price, category } = product;
  return (
    <div className="shadow px-4 py-2 rounded bg-white items-center grid grid-cols-12">
      <div className="col-span-1  ">
        <p className="font-roboto font-bold text-lg">{id}</p>
      </div>
      <div className="col-span-11 grid grid-cols-5 items-center">
        <div className="w-16 h-16">
          <img className="h-full w-full" src={image} alt={name} />
        </div>
        <p className="font-semibold text-lg">{name}</p>
        <p className="font-semibold text-lg">{category}</p>
        <p className="font-semibold text-lg">{price}</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded bg-yellow-500 shadow font-semibold hover:bg-opacity-80">
            Edit
          </button>
          <button className="px-3 py-1 rounded bg-red-400 shadow font-semibold hover:bg-opacity-80 text-white">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
