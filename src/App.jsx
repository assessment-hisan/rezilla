import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Rating from './components/Rating'
import Intro from './components/Intro'
import Services from './components/Services'
import Team from './components/Team'
import Footer from './components/Footer'
import LatestBlog from './components/LatestBlog'
import './App.css'

function App() {

  return (
    <div className='w-full'>
    <Header/>
    <div className='space-y-3'>
      <div className='absolute h-screen w-full bg-gradient-to-t from-secondary/40 to-transparent rounded-b-full'></div>
    <Navbar/>
    <Hero/>
    <Rating/>
    </div>
    <Intro/>
    <Services/>
    <Team/>
    <LatestBlog/>
    <Footer/>
    </div>
  )
}

export default App
