import Products from "./components/Products";
import './App.css';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Product/> */}
      <Products/>
    </div>
  );
}
export default App;
