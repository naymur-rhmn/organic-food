const Loading = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <p className="text-3xl font-semibold">
        L
        <span className="border-4 border-greenCs border-dashed animate-spin h-5 w-5 inline-block rounded-full"></span>
        ading<span className="animate-pulse text-greenCs">.</span>
        <span className="animate-pulse text-greenCs">.</span>
        <span className="animate-pulse text-greenCs">.</span>
      </p>
    </div>
  );
};

export default Loading;
