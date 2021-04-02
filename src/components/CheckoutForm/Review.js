import {ListItem,List, Typography, ListItemText} from '@material-ui/core';
import {getBasketTotal} from "../../reducer";
import accounting from 'accounting';
import {useStateValue} from "../../StateProvider";

const Review = () => {
  const [ {basket }, dispatch] = useStateValue();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order SUMMARY
      </Typography>
      <List>
        {
          basket?.map((product) => {
            <ListItem key={product.name}>
             <ListItemText primary={product.name}/>
            </ListItem>
          })
        }

      </List>
     
      
    </>
  )
}

export default Review