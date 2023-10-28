import { Route, Routes } from "react-router-dom";

import ChildMenuPDF from './Components/pdf/ChildMenuPDF';
import DrinksPDF from './Components/pdf/DrinksPDF';
import LandingView from './Views/LandingView';
import MenuPDF from './Components/pdf/MenuPDF';
import ScrollToUp from './Components/ScrollToUp';

function App() {
  return (
    <>
    <ScrollToUp smooth/>
    <Routes>
      <Route path='/food-menu' element={<MenuPDF />} />
      <Route path="/kids-menu" element={<ChildMenuPDF />} />
      <Route path="/drinks&cocktails" element={<DrinksPDF />} />
      <Route path="/" element={<LandingView />} />
    </Routes>
    </>
  );
}

export default App;
