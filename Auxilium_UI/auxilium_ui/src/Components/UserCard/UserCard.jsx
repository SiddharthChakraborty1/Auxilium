import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { orange } from '@material-ui/core/colors'
import { Grid, Button, Paper } from '@material-ui/core'
import {BrowserRouter as Router, Route, Redirect, useHistory} from 'react-router-dom'
import RegisterNew from '../SupplierActivities/Register/registerNew'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '60vw',
    backgroundColor: 'black',//"#212121",
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
  const history = useHistory();


const handleOnClick=(e)=>{
  e.preventDefault();
  history.push('/userRequestForm', props)

}


  const classes = useStyles();
  return (
    <Paper elevation={5}>
      <Card className={classes.root} data-testid="CardDescription">
      <CardContent>
         <Typography className={classes.title} >
          Description : {props.description}
        </Typography>
        <hr/>
        {/*<Typography className={classes.desc}>
          {Desc}
        </Typography> */}
        <Grid container spacing = {2}>
            <Grid item xs={9}>
            <Typography className={classes.desc} data-testid="SupplierName">
          Provided by : {props.supplier}
        </Typography>
        <Typography className={classes.desc} data-testid="SupplierLocation">
          Location : {props.location}, {props.city}, {props.state} .
        </Typography>
        <Typography className={classes.desc} data-testid="ContactTest">
          Contact : {props.contact}
        </Typography>
        <Typography className={classes.desc} data-testid="UpdatedOn">
          Updated on : {props.date.split('T')[0]}
        </Typography>
            </Grid>
            <Grid item xs={3} style={{marginTop: '35px'}}>
          <Button onClick={handleOnClick} className={classes.btn} >Request Product</Button>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
    </Paper>
  );
}

export default UserCard