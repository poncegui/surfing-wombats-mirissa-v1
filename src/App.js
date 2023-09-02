import './App.css';

import About from './Components/About';
import Carousel from './Components/carouselNoticias/Carousel';
import Contact from './Components/Contact';
import Cover from './Components/cover/Cover';
import Footer from './Components/Footer';
import ScrollToUp from './Components/ScrollToUp';
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
        <Carousel />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
