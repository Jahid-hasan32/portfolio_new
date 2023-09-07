import './App.css';

import { About } from './components/about/about';
import { Blog } from './components/blog/blog';
import { Contact } from './components/contact/contact';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/nav/nav';
import { Portfolio } from './components/portfolio/portfolio';
import { Resume } from './components/resume/resume';
import { Skills } from './components/skills/skills';
import { Testimonial } from './components/testimonials/testimonials';

function App() {

  return (
    <>
      <Hero  />
      <Navbar />
      <Skills />
      <About />
      <Portfolio />
      <Resume/>
      <Testimonial/>
      <Blog/>
      <Contact />
    </>
  );
}

export default App;
