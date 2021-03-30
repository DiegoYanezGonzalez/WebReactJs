import Products from "./components/Products";
import Product from "./components/Product"
import './App.css';
import NavBar from "./components/NavBar";
import CheckoutPage from "./components/CheckoutPage";
import CheckoutCard from "./components/CheckoutCard";
import {Switch,BrowserRouter as Router, Route} from "react-router-dom"
import Signin from "./components/Signin";
import SignUp from "./components/Signup";
import {useEffect} from "react";
import { auth } from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";

function App() {
  const [{user},dispatch]=useStateValue();
useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
    console.log(authUser);
    if(authUser){
      dispatch({
        type:actionTypes.SET_USER,
        user: authUser,
      })
    }
  })
},[])
  

  return (
    <Router>
<div className="App">
      <NavBar/>
      <Switch>
      <Route path="/signup">
          <SignUp/>
        </Route>
      <Route path="/signin">
          <Signin/>
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
