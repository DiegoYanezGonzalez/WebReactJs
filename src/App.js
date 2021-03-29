import Products from "./components/Products";
import './App.css';
import NavBar from "./components/NavBar";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CheckoutPage/>
      {/* <Product/> */}
      {/* <Products/> */}
    </div>
  );
}
export default App;
