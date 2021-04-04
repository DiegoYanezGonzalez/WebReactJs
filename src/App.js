import Products from "./components/Products";
import './App.css';
import NavBar from "./components/NavBar";
import CheckoutPage from "./components/CheckoutPage";
import {Switch,BrowserRouter as Router, Route} from "react-router-dom"
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import {useEffect} from "react";
import { auth } from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";
import Checkout from "./components/CheckoutForm/Checkout";
import ScrollableTabsButtonForce from "./components/ScrollableTabsButtonForce";
import MapPage from "./components/MapPage";

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
    <div className='app'>
      <NavBar/>
      <ScrollableTabsButtonForce/>
        <Switch>
           <Route path='/signup'>
               <Signup/>
            </Route>
            <Route path='/signin'>
              <Signin/>
            </Route>
            <Route path='/checkout-page'>
               <CheckoutPage/>
            </Route>
            <Route path='/checkout'>
               <Checkout/>
            </Route>
            <Route path='/map-page'>
               <MapPage/>
            </Route>
            <Route path='/'>
               <Products/>
            </Route>
        </Switch>
    </div>
  </Router>
    
  );
}
export default App;
