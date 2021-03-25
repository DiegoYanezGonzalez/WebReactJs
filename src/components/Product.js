import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from 'accounting';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Products() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
       action={
        <Typography
          className={classes.action}
          variant='h5'
          color='textSecondary'
        >
          {accounting.formatMoney(5000,"$")}
        </Typography>
      }
        title="SnapBack"
        subheader="in Stock"
      />
      <CardMedia
        className={classes.media}
        image="https://s2.r29static.com/bin/entry/ebd/0,675,2000,1050/x,80/1929471/image.jpg"
        title="Nike Shoes"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Running For Ever
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label='Add to Cart'>
          <AddShoppingCart fontSize='large' />
        </IconButton>
        {Array(5)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>"Nike Air is our iconic innovation
         that uses pressurized air in a durable, flexible membrane
          to provide lightweight cushioning. The air compresses on 
          impact and then immediately returns to its original shape 
          and volume, ready for the next impact. We debuted Nike Air 
          in 1979, and we've been continuously evolving and improving
           it ever since."</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
