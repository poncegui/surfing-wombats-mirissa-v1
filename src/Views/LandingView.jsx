import '../App.css';

import About from '../App';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Home from '../Components/Home';
import ScrollToTop from '../Components/ScrollToUp';
import Testimonial from '../Components/Testimonial';
import Work from '../Components/Work';

// eslint-disable-next-line

const LandingView = () => {
  return (
    <div className="App">
       <ScrollToTop />
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};
export default LandingView;
