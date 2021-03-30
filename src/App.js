import Products from "./components/Products";
import './App.css';
import NavBar from "./components/NavBar";
import CheckoutPage from "./components/CheckoutPage";
import {Switch,BrowserRouter as Router, Route} from "react-router-dom"
import Signin from "./components/Signin";
import SignUp from "./components/Signup";
import {useEffect} from "react";
import { auth } from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";
import Checkout from "./components/CheckoutForm/Checkout";

function App() {
  const [{user},dispatch]=useStateValue();

useEffect(() => {
  auth.onAuthStateChanged((authUser)=>{
    console.log(authUser);
    if(authUser){
      dispatch({
        type:actionTypes.SET_USER,
        user: authUser,
      });
    }else{
      dispatch({
        type:actionTypes.SET_USER,
        user: null,
      });
    }
  });
},[]);
  

  return (
    <Router>
<div className="app">
      <NavBar/>
      <Switch>
      <Route path="/signup">
          <SignUp/>
        </Route>
      <Route path="/signin">
          <Signin/>
        </Route>
        <Route path="/checkout-page">
          <CheckoutPage/>
        </Route>
        <Route path="/checkout">
          <Checkout/>
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
