import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { orange } from '@material-ui/core/colors'
import { Grid } from '@material-ui/core'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#212121",
    color: "#eee"
  },
  title: {
    fontSize: 36,
    color: orange[500]
  },
  pos: {
    marginBottom: 12,
  },
  desc: {
    fontsize: 14,
    color: '#eee'
},
});

const UserCard=({Title, Desc, Contact}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
         <Typography className={classes.title}>
          {Title}
        </Typography>
        <hr/>
        {/*<Typography className={classes.desc}>
          {Desc}
        </Typography> */}
        <Grid container spacing = {2}>
            <Grid item xs={9}>
            <Typography className={classes.desc}>
          {Desc}
        </Typography>
            </Grid>
            <Grid item xs={3}>
            <Typography className={classes.desc}>
          {Contact}
        </Typography>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default UserCard