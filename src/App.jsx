import AboutSection from "./Components/AboutSection"
import Blogs from "./Components/Blogs"
import Customer from "./Components/Customer"
import Features from "./Components/Features"
import Financial from "./Components/Financial"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Footer from "./Components/footer"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <Features/>
      <Blogs/>
      <Financial/>
      <Customer/>
      <Footer/>
    </div>
  )
}

export default App