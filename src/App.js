import Products from "./components/Products";
import Product from "./components/Product"
import './App.css';
import NavBar from "./components/NavBar";
import CheckoutPage from "./components/CheckoutPage";
import CheckoutCard from "./components/CheckoutCard";
import {Switch,BrowserRouter as Router, Route} from "react-router-dom"
import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";

function App() {
  return (
    <Router>
<div className="App">
      <NavBar/>
      <Switch>
      <Route path="/signup">
          <SignUp/>
        </Route>
      <Route path="/signin">
          <SignIn/>
        </Route>
        <Route path="/check-out-page">
          <CheckoutPage/>
        </Route>
        <Route path="/">
          <Products/>
        </Route>
      </Switch>
    </div>
    </Router>
    
  );
}
export default App;
