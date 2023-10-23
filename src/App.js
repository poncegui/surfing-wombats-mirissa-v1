import './App.css';

import React, { useState } from "react"

import About from './Components/About';
import Contact from './Components/Contact';
import Cover from './Components/cover/Cover';
import Footer from './Components/Footer/Footer';
import LocationMirissa from './Components/LocationMirissa';
import MapMirissa from './Components/MapMirissa';
import ScrollToUp from './Components/ScrollToUp';
import SliderDisplay from './Components/sliderDisplay/SliderDisplay';
import Work from './Components/Work';
import {food} from './caruselData';

function App() {
  const [items] = useState(food)
  return (
    <>
      <Cover />
      <div className="App">
        <ScrollToUp />
        <About />
        <Work />
        <SliderDisplay items={items} title='Our Food' slides={4}/>
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
