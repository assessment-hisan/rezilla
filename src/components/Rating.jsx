
const Companies = () => {
    return (
        <div className="hidden sm:block relative space-y-10 py-10">
            <div className="absolute h-20 w-20 bg-gradient-to-br from-secondary to-secondary/10  rounded-full blur-sm"></div>
        <p className="text-gray-500 text-xs font-semibold text-center">Trusted by 100+ Companies across the globe! </p>
        <div className="inline-flex flex-wrap justify-center gap-6  w-full mx-auto">
            <div className="w-32 h-10 bg-gray-700 rounded-xl"></div>
            <div className="w-32 h-10 bg-gray-700 rounded-xl"></div>
            <div className="w-32 h-10 bg-gray-700 rounded-xl"></div>
            <div className="w-32 h-10 bg-gray-700 rounded-xl"></div>
            <div className="w-32 h-10 bg-gray-700 rounded-xl"></div>
            <div className="w-32 h-10 bg-gray-700 rounded-xl"></div>
        </div>
        </div>
    )
}


const InfiniteRounded = () => {
    const rnd = "h-[36px] w-[36px] bg-gray-600 rounded-full px-2 ring-2 ring-gray-200";
    let arraycount = 5;
    return (
      <div className="relative flex justify-center items-center">
        {Array.from({ length: arraycount }).map((_, index) => (
          <div
            key={index} // Unique key for each element
            className={rnd}
            style={{ marginLeft: index === 0 ? 0 : "-12px" }} // Stack elements with overlap
          ></div>
        ))}
        <div className={`text-3xl flex justify-center items-center bg-gray-800 ${rnd}`} style={{ marginLeft: "-12px" }}>
          +
        </div>
      </div>
    );
  };
  
  const Rounded = ({ children }) => {
    return (
      <div className="w-fit inline-flex justify-center items-center bg-white px-6 py-3 h-16 rounded-full space-x-4 drop-shadow-2xl">
        {children}
      </div>
    );
  };
  
  const Rating = () => {
    return (
      <div className="relative flex flex-col-reverse md:flex-col justify-center items-center gap-3  py-10">
        <div className="  flex flex-col items-center justify-center gap-7 md:gap-14 sm:flex-row "> 
        <Rounded>
          <InfiniteRounded />
          <div className="text-center text-neutral-950 text-md font-medium">
            <p>72k+ Happy</p>
            <p>Customers</p>
          </div>
        </Rounded>
        <Rounded>
            <div className="h-12 w-12 bg-gradient-to-r from-teal-300 to-teal-600 rounded-full"></div>
          <div className="text-start text-neutral-950 text-md font-medium">
            <p>200+ New</p>
            <p>Listings Everyday!</p>
          </div>
        </Rounded>
        </div>
        <Companies/>
      </div>
    );
  };
  
  export default Rating;
  