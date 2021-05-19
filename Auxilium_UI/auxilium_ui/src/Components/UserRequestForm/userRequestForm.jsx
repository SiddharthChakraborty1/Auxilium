import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  Container,
  createMuiTheme,
  makeStyles,
  Paper,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ListAltIcon from '@material-ui/icons/ListAlt';
import { orange } from "@material-ui/core/colors";


const themes = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: orange[500],
    },
    secondary: {
      main: "#fff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
  },
  header: {
    backgroundColor: "#000",
    color: orange[500],
  },
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowX: 'hidden',

    marginTop: "10px",
  },
  paper: {
    backgroundColor: "#000",
    padding: theme.spacing(2),
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "400px",
  },
  input: {
    width: "70%",
  },
  inputLabel: {
    fontSize: "13px",
    backgroundColor: "#000",
    color: "orange",
    opacity: "1",
  },
  textInput: {
    height: "10",
    fontSize: "15px",
  },
  avatar:{
    backgroundColor: orange[500],
    marginBottom: '10px',
  },
  info:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    width: '70%',
    marginTop: '10px',
    marginBottom: '10px',
  },
  btn:{
    backgroundColor: orange[500],
    color: '#fff',
    marginTop: theme.spacing(2),
    '&:hover':{
      backgroundColor: '#fff',
      color: '#000',
    },
  }
}));

const initialUser = {
  name: '',
  email: '',
  phone: ''
}

export default function UserRequestForm(props) {
  const [values, setValues] = useState(props.location.state);

  const [userValues, setUserValues] = useState(initialUser)

  const classes = useStyles();
  useEffect(() => {
    document.body.style.backgroundColor = "#404040";
  }, []);

const handleValueChange=(e)=>{
  e.preventDefault();
  if(e.target.name === 'name')
  {
    setUserValues({
      ...userValues,
      name: e.target.value
    })
  }
  if(e.target.name === 'email')
  {
    setUserValues({
      ...userValues,
      email: e.target.value
    })
  }
  if(e.target.name === 'phone')
  {
    setUserValues({
      ...userValues,
      phone: e.target.value
    })
  }
}

const handleOnCLick=(e)=>{
  
  var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if(userValues.name === ''  || userValues.email === '' || userValues.phone === '')
  {
    alert('values cannot be empty')
  }
  else if(userValues.phone.length != 10 )
  {
    alert('Not a valid number');
  }
  else if(!userValues.email.match(mailformat))
  {
    alert('Invalid email format');
  }
  
  else{
    // call the service method
  }
}


  return (
    <ThemeProvider theme={themes}>
      <div className={classes.root}>
        <AppBar className={classes.header} position="static">
          <Toolbar>
            <Typography>Auxilium</Typography>
            
          </Toolbar>
        </AppBar>
        <Container className={classes.container}>
         

          <Paper className={classes.paper} elevation={4}>
            <Avatar className={classes.avatar} >
            <ListAltIcon color='black'/>
            </Avatar>
            <h4 style={{color:'white'}}>
              Request Form
            </h4>
            <div className={classes.info}>
            <Typography>
             <span style={{color: 'orange'}}> Request for </span> - {values.productType}
            </Typography>
            <Typography>
            <span style={{color: 'orange'}}> Supplied By </span>  - {values.supplier}
            </Typography>
            <Typography>
            <span style={{color: 'orange'}}> In </span> - {values.city}, {values.state}.
              ({values.location})
            </Typography>
            </div>
            <TextField
              inputProps={{
                className: classes.textInput,
              }}
              inputLabelProps={{
                className: classes.inputLabel,
              }}
              value={userValues.name}
              onChange={handleValueChange}
              className={classes.input}
              placeholder="Enter your name"
              name='name'
              required
              label="Name"
              margin="dense"
            />

            <TextField
              className={classes.input}
              inputLabelProps={{
                className: classes.inputLabel,
              }}
              value={userValues.email}
              onChange={handleValueChange}
              placeholder="Enter Email"
              name='email'
              required
              type="email"
              label="Email"
              margin="dense"
            />

            <TextField
              className={classes.input}
              inputLabelProps={{
                className: classes.inputLabel,
              }}
              
              value={userValues.phone}
              onChange={handleValueChange}
              placeholder="Enter Phone Number"
              required
              name='phone'
              type="number"
              label="Phone Number"
              margin="dense"
            />

            <Button onClick={handleOnCLick} className={classes.btn}>Submit Request</Button>
          </Paper>
        </Container>
      </div>
    </ThemeProvider>
  );
}
