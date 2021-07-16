import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { PaymentSharp, PhoneAndroid, ShopTwo } from '@material-ui/icons';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Ofertas" icon={<ShoppingBasket />} {...a11yProps(0)} />
          <Tab label="Liquidaciones" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="Gorros de Lana" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="SnapBack" icon={<HelpIcon />} {...a11yProps(3)} />
          <Tab label="Bucket Hat" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="Buzos" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label="Polerones" icon={<PhoneAndroid />} {...a11yProps(6)} />
          <Tab label="Pantalones" icon={<ShopTwo />} {...a11yProps(7)} />
          <Tab label="Mascarillas" icon={<FavoriteIcon />} {...a11yProps(8)} />
          <Tab label="Poleras" icon={<PaymentSharp />} {...a11yProps(9)} />
        </Tabs>
      </AppBar>
      
    </div>
  );
}
