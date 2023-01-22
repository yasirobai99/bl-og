const Banner = () => {
    return (
      <div
        className="flex flex-col justify-between font-bold px-10 py-5 mb-10
            lg:flex-row lg:space-x-5"
      >
        <div>
          <h1 className="text-5xl text-[#073042]">Yasir's Monthly Blog</h1>
          <h2
            className="mt-5 text-[#073042]
                md:mt-8"
          >
            Welcome to{" "}
            <span className="underline underline-offset-2 decoration-4 decoration-[#00de7a]">
            the bl-og
            </span>
            {""} favourite blog in the Devosphere.
          </h2>
        </div>
        <p className=" max-w-xs md:mt-2 py-2 mt-6 font-extrabold text-[#073042]">
        New product feature |{" "}
          <span className="underline underline-offset-2 decoration-4 decoration-[#00de7a]">
            {" "}
            The latest in technology
          </span>{" "}
          | The weekly debugging nightmares & More!.
        </p>
      </div>
    );
  };
  export default Banner;
  