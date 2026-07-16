import BackgroundFX from "./components/layout/BackgroundFX"
import Nav from "./components/layout/Nav"
import Footer from "./components/layout/Footer"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import FeaturedProjects from "./components/sections/FeaturedProjects"
import IsabellaCase from "./components/sections/IsabellaCase"
import OtherProjects from "./components/sections/OtherProjects"
import Skills from "./components/sections/Skills"
import Education from "./components/sections/Education"
import Services from "./components/sections/Services"
import Contact from "./components/sections/Contact"

function App() {
  return (
    <>
      <BackgroundFX />
      <Nav />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <IsabellaCase />
        <OtherProjects />
        <Skills />
        <Education />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
