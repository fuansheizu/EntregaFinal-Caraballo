import './App.css';
import Counter from "./components/Counter";
import Details from "./components/ProductDetails";
import ProductsListContainer from "./components/ProductsListContainer";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ProductsListContainer/>}></Route>
          <Route path="/nosotros" element={<AboutUs/>}></Route>
          <Route path="/contactos" element={<Contacts/>}></Route>
        </Routes>
        <Details/>
      </BrowserRouter>
    </div>
  );
}



export default App;
