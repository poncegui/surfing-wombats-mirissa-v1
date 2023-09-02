import './App.css';

import About from './Components/About';
import Contact from './Components/Contact';
import Cover from './Components/cover/Cover';
import Footer from './Components/Footer';
import ScrollToUp from './Components/ScrollToUp';
import Testimonial from './Components/Testimonial';
import Work from './Components/Work';

// import Home from './Components/Home';




function App() {
  return (
    <>
      <Cover />
      <div className="App">
        <ScrollToUp />
        <About />
        <Work />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
