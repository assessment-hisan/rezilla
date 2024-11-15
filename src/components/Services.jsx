import home from "../assets/services/home.svg"
import rent from "../assets/services/rent.svg"
import search from "../assets/services/search.svg"
const Card = ({logo, main, sub}) =>{
    return (
        <div className="w-fit bg-white drop-shadow-xl rounded-2xl flex flex-col gap-y-3 items-center max-w-xs py-10">
            <div className="bg-secondary rounded-full shadow-lg shadow-secondary mb-5 ">
            <img src={logo} alt="logo" className=" m-3 w-8 h-8" />
            </div>
            <h3 className="text-base ">{main}</h3>
            <p className="text-xs text-gray-500 max-w-[200px] leading-5 text-center px-2">{sub}</p>
            
        </div>
    )
}

const Services = () => {
  return (
    <div className="bg-offWhite flex flex-col justify-center items-center gap-3 py-16 mt-16 px-10">
      <p className="text-sm text-gray-800 font-medium text-center">OUR SERVICES</p>
      <h1 className="text-  xl md:text-3xl font-semibold text-center">Donec porttitor euismod dignissim</h1>
      <div className="flex  flex-wrap justify-center items-center gap-5 mt-10">
        <Card logo={search} main={"Sell a House"} sub={"Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. "}/>
        <Card logo={home} main={"Rent a House"} sub={"Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. "}/>
        <Card logo={rent} main={"Rent a House "} sub={"Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. "}/>
      </div>
    </div>
  )
}

export default Services
