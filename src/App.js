import './App.css';
import Counter from "./components/Counter";
import Details from "./components/ProductDetails";
import ProductsListContainer from "./components/ProductsListContainer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProductsListContainer/>
      <Counter/>
      <Details/>
    </div>
  );
}



export default App;
