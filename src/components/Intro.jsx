import profile from '../assets/intro/profile.svg'
import wifi from '../assets/intro/wifi.svg'
const TextBox = ({main, sub , logo})=>{
    return(
        <div className="hidden sm:flex max-w-md  gap-5 drop-shadow-2xl bg-white px-5 py-3 rounded-2xl">
            <div className='my-auto'>
                <img src={logo} alt="logo" className='w-14' />
            </div>
            <div className='space-y-1 '>
                <h1 className='text-secondary text-lg font-semibold'>{main}</h1>
                <p className='text-base font-medium text-gray-500 '>{sub}</p>
            </div>
        </div>
    )
}

const Intro = () => {
  return (
    <div className="max-w-7xl mx-auto sm:flex sm:justify-center items-center sm:gap-5 px-5 lg:px-10">
      <div className="space-y-2 lg:px-10 ">
        <p className="text-primary font-medium text-xs">WHO ARE WE</p>
        <h1 className="text-4xl font-semibold text-neutral-800">Assisting individuals in locating the appropriate real estate.</h1>
        <p className="text-gray-500 font-normal text-sm max-w-lg">Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.</p>
        <div className='hidden sm:block space-y-5 py-5'> 
        <TextBox logo={profile} main={"Donec porttitor euismod"} sub={"Nullam a lacinia ipsum, nec dignissim purus. Nulla"}/>
        <TextBox logo={wifi} main={"Donec porttitor euismod"} sub={"Nullam a lacinia ipsum, nec dignissim purus. Nulla"}/>
     
        </div>
      </div>
     <img src="/img2.png"  alt="property"  className="w-full md:w-1/2 bg-cover"/>
     <div className='blcck sm:hidden space-y-5 py-5'> 
        <TextBox logo={profile} main={"Donec porttitor euismod"} sub={"Nullam a lacinia ipsum, nec dignissim purus. Nulla"}/>
        <TextBox logo={wifi} main={"Donec porttitor euismod"} sub={"Nullam a lacinia ipsum, nec dignissim purus. Nulla"}/>
     
        </div>
    </div>
  )
}

export default Intro
