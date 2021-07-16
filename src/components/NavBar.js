import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from "../assets/logoTwo.gif"
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useStateValue} from "../StateProvider";
import { auth } from "../firebase";
import  { actionTypes }  from  "../reducer" ;
import {useHistory } from "react-router-dom";
import RoomIcon from '@material-ui/icons/Room';
import ThemeContext from '../context/ThemeContext'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: "7rem",
    },
    appBar: {
      backgroundColor: "#fff",
      boxShadow: "none",
    },
    grow: {
      flexGrow: 1,
    },
    button: {
      marginLeft: theme.spacing(2),
      marginTop:theme.spacing(1),
    },
    image: {
      marginRight: "10px",
      height:"3rem",
    },
    iconmap:{
      marginTop:"10",
    }
  }));

export default function NavBar() {
  const classes = useStyles();
  const [{basket,user},dispatch]=useStateValue();
  const history = useHistory();

//   //Valor inicial de darkmode que es falso y mostrara ligthmode 
// const [darkMode,setDarkMode] = useState(false);

// const color =useContext(ThemeContext);


// //click que a ser llamado con la funcion set que hace cambiarlo de true a false
// const handleClick =()=>{
//   setDarkMode(!darkMode);
// }


  const handleAuth = () =>{
    if(user){
      auth.signOut();
      dispatch({
        type:actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type:actionTypes.SET_USER,
        user: null,
      });
      history.push("/")
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to = "/">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} className={classes.image}/>
          </IconButton>
          </Link>
          <div className={classes.grow}/>
          <Typography variant="h4" color="primary" position="justify">
            Todo lo que necesitas {user ? user.email : ""}
          </Typography>
          <div className={classes.button}>
            <Link to="/signin">
            <Button color="#2979ff" variant="contained" onClick={handleAuth }>
            <strong>{user ? "Sign OUT" : "Sign IN"}</strong>  
            </Button>
            </Link>
            <Link to="/map-page">
            <RoomIcon fontSize="large" className={classes.button} color="inherit"  >
            </RoomIcon>
            </Link>
            <Link to="checkout-page">
          <IconButton aria-label="show cart items" color="inherit">
            <Badge badgeContent={basket?.length} color="secondary">
            <ShoppingCart fontSize="large" color="#fff"/>
            </Badge>
           </IconButton>
            </Link>
            
          </div>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}
