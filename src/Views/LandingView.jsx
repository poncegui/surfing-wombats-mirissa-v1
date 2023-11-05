import "../App.css";

import React, { useState } from "react";
import { buttonsDrinks, buttonsMenu, drinks, food } from "../caruselData";

import About from "../Components/About";
import Contact from "../Components/Contact";
import Cover from "../Components/cover/Cover";
import Footer from "../Components/Footer/Footer";
import LocationMirissa from "../Components/LocationMirissa";
import MapMirissa from "../Components/MapMirissa";
import RealPizza from "../Components/RealPizza";
import SliderDisplay from "../Components/sliderDisplay/SliderDisplay";
import Work from "../Components/Work";

function App() {
  const [items] = useState(food);
  const [drink] = useState(drinks);
  return (
    <>
      <Cover />
      <div className="App">
        <About />
        <Work />
        <SliderDisplay
          items={items}
          title="Our Food"
          slides={3}
          datas={food}
          buttons={buttonsMenu}
        />
      </div>
      <RealPizza />
      <div className="App">
        <SliderDisplay
          items={drink}
          title="Our Drinks & Cocktails"
          slides={3}
          datas={drinks}
          buttons={buttonsDrinks}
        />
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
