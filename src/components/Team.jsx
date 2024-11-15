const Card = ({main, sub}) => {
    return (
      <div className="space-y-1 text-center">
        <img src="/team.png" alt="team"  className="team-radius"/>
        <p className="font-semibold text-xl ">{main}</p>
        <p className="text-primary font-base text-xs leading-none">{sub}</p>
      </div>
    )
  }

const Team = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl flex flex-col justify-center items-center gap-2 sm:py-10">
      <p className="text-secondary text-sm tracking-wide ">Introduce yourself to  </p>
      <h1 className="text-neutral-900 text-xl font-semibold tracking-wide">Our Team of Experts</h1>
      <div className="flex flex-wrap justify-center gap-10 py-5 md:py-10">
        <Card main={"Brendon M"} sub={"CEO & Founder"}/>
        <Card main={"Jodi J. Appleby"} sub={"Real Estate Developer"}/>
        <Card main={"Justin S. Meza"} sub={"Listing Agent"}/>
        <Card main={"Susan T. Smith"} sub={"Buyer's Agent"}/>
      </div>
      </div>
    </div>
  )
}

export default Team
