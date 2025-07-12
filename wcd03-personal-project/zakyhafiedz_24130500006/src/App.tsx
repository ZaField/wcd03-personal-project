import ParallaxBackground from './component/background/animate';
import About from './component/layout/about';
import Contact from './component/layout/contact';
import Hero from './component/layout/hero';
import NavBar from './component/layout/navbar';
import Skill from './component/layout/skill';
import ContactForm from './component/layout/form';

function App() {
  return (
    <div 
      id="scroll-container"
      className="snap-y snap-mandatory overflow-y-scroll scrollbar-hide scroll-smooth"
    >
      <ParallaxBackground />
      <NavBar />
      
      <section id="home" className="h-screen snap-start">
        <Hero />
      </section>
      
      <section id="about" className="h-screen snap-start">
        <About />
      </section>
      
      <section id="skill" className="h-screen snap-start">
        <Skill />
      </section>
      
      <section id="contact" className="h-screen snap-start">
        <Contact />
      </section>

      <section id="Form" className="text-white">
        <ContactForm />
      </section>
    </div>
  );
}

export default App;
