

import Hero from "../sections/hero/hero";
import About from "../sections/about/about";
import Resume from "../sections/resume/resume";
import Projects from "../sections/projects/projects";
import Skills from "../sections/skills/skills";
import ScrollTop from "../helper/scroll-top";
import Contact from "../sections/contact/contact";
import Footer from "../layout/footer";



const Home = () => {
  return (
    <div className="overflow-hidden ">
      
      <div>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <ScrollTop />
      </div>
    </div>
  );
};

export default Home;
