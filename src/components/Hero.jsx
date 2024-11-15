import search from "../assets/search.svg";
import advanced from "../assets/advanced.svg";

const Hero = () => {
  const isActive1 = true;
  const isActive = false;

  return (
    <div className="max-w-7xl mx-auto block space-y-9 sm:flex justify-between items-center drop-shadow-2xl px-3 lg:px-10">
      <div className="space-y-4 my-auto">
        <div className="space-y-2 ">
          <p className="text-primary text-xs pl-1">REAL ESTATE</p>
          <h1 className="text-5xl font-bold max-w-md tracking-wide">
            Find a perfect home you love..!
          </h1>
        </div>
        <p className="text-gray-500 font-normal text-xs max-w-lg">
          Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.
        </p>
        <div className="relative rounded-xl overflow-hidden bg-black/40 w-full sm:w-80 md:w-96 lg:w-[540px] h-40 sm:h-52 md:h-64 lg:h-[340px]">
          
        </div>
      </div>

      <div className="h-fit relative bg-white rounded-xl  px-5">
        <div className="border-b-2 border-gray-400 px-4 flex justify-around">
          <p className={`py-3 px-4 border-b-4 text-sm ${isActive1 && " border-primary "}`}>
            For Sale
          </p>
          <p className={`py-3 px-4 border-b-4 text-sm ${isActive && "border-primary"}`}>
            For Rent
          </p>
        </div>
        <div className="py-8 px-7">
          <div className="flex flex-col space-y-6">
            <input type="text" placeholder="New York, San Francisco" className="hero-input" />
            <input type="text" placeholder="Select Property Type" className="hero-input" />
            <input type="text" placeholder="Select Rooms" className="hero-input" />
          </div>
          <a href="/#" className="flex text-primary text-sm pt-4 gap-2">
            <img src={advanced} alt="Advanced Search" width={10} height={10} />
            Advance Search
          </a>
          <button className="bg-primary flex gap-2 items-center text-white justify-center px-4 py-1.5 rounded-full w-full mt-6">
            <img src={search} alt="Search" height={15} width={15} />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
