import home from "../assets/home.svg"
import mail from "../assets/mail.svg"
import phone from "../assets/phone.svg"
import social from '../assets/social.svg'
import { FaArrowRight } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex justify-around bg-fourth/10 py-10">
      <div className="flex flex-col sm:flex-row gap-7">
        <div className="space-y-5"> 
            <div className="flex gap-2 items-center">
            <div className="w-fit bg-primary p-2 rounded-full ">
                <img src={home} className="h-6 w-6" />
            </div>
            <h1 className="font-semibold text-md ">REZILLA</h1>
            </div>
            <div className="space-y-2">
                <p className="text-gray-500 text-sm ">2728 Hickory StreetSalt 
                Lake City, UT 84104</p>
                <p className="flex text-gray-500"><img src={mail} alt="mail"   className="w-5 h-5"/>+1 206-214-2298</p>
                <p className="flex text-gray-500"><img src={phone} alt="phone" className="w-5 h-5" />support@rezilla.com</p>
            </div>
        </div>

        <div className="hidden sm:block space-y-5">
            <h1 className="font-semibold text-lg ">Quick Links</h1>
            <div className="space-y-2">
            <p className="text-base text-gray-500">Home</p>
            <p className="text-base text-gray-500">About</p>
            <p className="text-base text-gray-500">Listings</p>
            <p className="text-base text-gray-500">Services</p>
            <p className="text-base text-gray-500">Blogs</p>
            <p className="text-base text-gray-500">Become a Agent</p>
            </div>
        </div>

        <div className="hidden sm:block space-y-5">
            <h1 className="font-semibold text-lg ">Discovery</h1>
            <div className="space-y-2">
            <p className="text-base text-gray-500">Canada</p>
            <p className="text-base text-gray-500">United States</p>
            <p className="text-base text-gray-500">Germany</p>
            <p className="text-base text-gray-500">Africa</p>
            <p className="text-base text-gray-500">India</p>
            </div>
        </div>
        
        <div className="space-y-7">
            <div className="space-y-3">
            <h1 className="font-semibold text-xl ">Subscribe to our Newsletter!</h1>
            <div className="flex justify-center gap-2 bg-white shadow-xl rounded-full px-4 py-2">
            <input type="text" placeholder="Email Address" />
            <FaArrowRight className="bg-primary text-white h-7 w-5 rounded-full"/>
            </div>
            </div>
            <div className="text-center space-y-3">
            <h1 className="font-semibold text-lg ">Follow Us On</h1>
                <img src={social} alt="social media icons"  className="mx-auto"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
