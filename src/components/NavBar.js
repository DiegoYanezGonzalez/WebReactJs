import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from "../assets/cuttevents.png"
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: "7rem",
    },
    appBar: {
      backgroundColor: "whitesmoke",
      boxShadow: "none",
    },
    grow: {
      flexGrow: 1,
    },
    button: {
      marginLeft: theme.spacing(2),
    },
    image: {
      marginRight: "10px",
      height:"3rem",
    }
  }));

export default function NavBar() {
  const classes = useStyles();

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
          <Typography variant="h4" color="primary">
            Ventas AllShop
          </Typography>
          <div className={classes.button}>
            <Button variant="outlined">
            <strong>Sign In</strong>  
            </Button>
            <Link to="check-out-page">
          <IconButton aria-label="show cart items" color="inherit">
            <Badge badgeContent={2} color="secondary">
            <ShoppingCart fontSize="large" color="primary"/>
            </Badge>
           </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
