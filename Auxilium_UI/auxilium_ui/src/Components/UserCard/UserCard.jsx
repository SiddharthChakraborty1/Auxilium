import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { orange } from '@material-ui/core/colors'
import { Grid, Button } from '@material-ui/core'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '60vw',
    backgroundColor: "#212121",
    color: "#eee",
    
    
    
    
    
  },
  title: {
    fontSize: 26,
    color: orange[500]
  },
  pos: {
    marginBottom: 12,
  },
  desc: {
    fontsize: 14,
    color: '#eee'
},
btn:{
  backgroundColor: orange[500],
  color: 'white',
  '&:hover':{
    backgroundColor: 'white',
    color: 'black'
  },
 
}




});

const UserCard=(props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
         <Typography className={classes.title}>
          Description : {props.description}
        </Typography>
        <hr/>
        {/*<Typography className={classes.desc}>
          {Desc}
        </Typography> */}
        <Grid container spacing = {2}>
            <Grid item xs={9}>
            <Typography className={classes.desc}>
          Provided by : {props.supplier}
        </Typography>
        <Typography className={classes.desc}>
          Location : {props.location}, {props.city}, {props.state} .
        </Typography>
        <Typography className={classes.desc}>
          Contact : {props.contact}
        </Typography>
        <Typography className={classes.desc}>
          Updated on : {props.date.split('T')[0]}
        </Typography>
            </Grid>
            <Grid item xs={3} style={{marginTop: '35px'}}>
          <Button className={classes.btn} >Request Product</Button>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default UserCard