import home from "../assets/home.svg"
import user from "../assets/user.svg"
const Navbar = () => {
    const nav = [
        {id : 1, text : "Home"},
        {id : 2, text : "About"},
        {id : 3, text : "Listings"},
        {id : 4, text : "Services"},
        {id : 5, text : "Blogs"},

    ]
  return (
    <div>
      <div className="max-w-7xl flex sm:justify-around items-center mx-auto py-2 px-2">
        <div className="hidden sm:block space-x-6 text-base font-medium">
            {nav.map((item)=> (
                <a key={item.id} href="/#">{item.text}</a>
            ))}
        </div>
        <div className="flex justify-start sm:justify-center sm:items-center gap-2">
            <img src={home} alt="home"  className=" bg-primary p-2 rounded-full"/>
            <h4 className="font-medium text-base">Rezilla</h4>
        </div>
        <div className="hidden sm:flex justify-center items-center gap-3">
        <div className="flex items-center gap-2">
            <img src={user} alt="user"  className="text-gray-400"/>
            <p className="text-gray-500 text-base font-medium"> login/register</p>
        </div>
        <div className="bg-primary flex rounded-full gap-2 py-3 px-4">
            <img src={home} alt="home"/>
            <p className="text-white font-medium text-base">Add Listing</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
