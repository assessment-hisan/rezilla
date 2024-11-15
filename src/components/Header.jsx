
import { CiLocationOn } from "react-icons/ci";
import Phone from  "../assets/phone.svg"
import Mail from  "../assets/mail.svg"
const Header = () => {
  return (
    <div className="hidden sm:block w-full bg-primary">
        <div className=" max-w-7xl mx-auto">
      <div className="flex justify-between p-2">
      <div className="text-white flex items-center text-xs gap-3">
        <CiLocationOn/>
        <p>Rezilla, 18 Grattan St, Brooklyn</p>
      </div>
      <div className="text-white flex space-x-2">
        <div className="flex justify-center items-center gap-2 text-xs">
          <img src={Phone} alt="mail logo" width={15}/>
          <p>+1 206-214-2298</p>
        </div>
        <div className="flex justify-center items-center gap-2 text-xs text-white">
          <img src={Mail} alt="mail logo" width={15}/>
          <p>+1 206-214-2298</p>
        </div>
        
      </div>
      </div>
    </div>
    </div>
  )
}

export default Header
