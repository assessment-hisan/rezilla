const Post = ({main, sub}) => {
    return (
        <div className="w-72">
            <div className="relative">
                <div className="absolute h-16 w-14 rounded-b-xl bg-white left-5 z-10 text-center text-gray-800">
                    <p className="text-lg">28</p>
                    <p className="font-base">TUE</p>
                </div>
                <img src="/blog.jpg" className="opacity-75 rounded-xl" />
            </div>
            <h1 className="text-xl font-normal text-white py-2">{main}</h1>
            <p className="text-white/80 text-base ">{sub}</p>
        </div>
    )
}

const LatestBlog = () => {
  return (
    <div className=" flex justify-center bg-primary pb-9">
      <div className="max-w-7xl py-10 text-white text-center ">
        <p className="pt-6 pb-2">WHAT’S TRENDING</p>
        <h1 className="text-3xl pb-6 font-semibold tracking-wide">Latest Blogs & Posts</h1>
      <div className="flex flex-wrap justify-center items-center gap-y-10 gap-5">
        <Post main={"Top 10 Home Buying Mistakes to Avoid"} sub={"Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"}/>
        <Post main={"Top 10 Home Buying Mistakes to Avoid"} sub={"Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"}/>
        <Post main={"Top 10 Home Buying Mistakes to Avoid"} sub={"Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"}/>
      </div>
      </div>
    </div>
  )
}

export default LatestBlog
