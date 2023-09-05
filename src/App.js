import './App.css';

import About from './Components/About';
import Contact from './Components/Contact';
import Cover from './Components/cover/Cover';
import Footer from './Components/Footer/Footer';
import LocationMirissa from './Components/LocationMirissa';
import MapMirissa from './Components/MapMirissa';
import ScrollToUp from './Components/ScrollToUp';
import Work from './Components/Work';

function App() {
  return (
    <>
      <Cover />
      <div className="App">
        <ScrollToUp />
        <About />
        <Work />
        </div>
        <LocationMirissa />
        <div className="App">
        <Contact />
        <MapMirissa />
        </div>
        <Footer />
    </>
  );
}

export default App;
