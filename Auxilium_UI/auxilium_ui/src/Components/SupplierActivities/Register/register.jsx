import React from 'react'
import {Avatar, Button, ButtonBase, Grid, Paper, TextField, Typography, Link, InputLabel, Select, MenuItem} from '@material-ui/core'

import LockIcon from '@material-ui/icons/Lock';
import './register.css'

class Register extends React.Component{
    constructor(props){
        super(props);
    }

    // Note- Methods to handle value change and onCLick has not been written yet

    render(){
        const avatarStyle = {backgroundColor: "pink"};
        const buttonStyle = {marginTop: "20px", marginBottom: "5px"};
        const textFieldStyle = {marginTop: "5px"};
        return(
            <Grid>
                <Paper className='bg-paper' elevation={10}>
                    <Grid align="center">
                      <Avatar style={avatarStyle}><LockIcon color="primary"/></Avatar>
                      <h2>Register</h2>
                    </Grid>
                    <TextField style={textFieldStyle} type='text' required fullWidth label='Name' placeholder='Enter your Name'/>
                    <TextField style={textFieldStyle} type='password' required fullWidth label='Password' placeholder='Enter your Password'/>
                    <TextField style={textFieldStyle} type='email' required fullWidth label='Email' placeholder='Enter your Email'/>
                    <TextField required fullWidth id="states" label="Select your State" select>
                            <MenuItem value="state 1">State 1</MenuItem>
                            <MenuItem value="state 2">State 2</MenuItem>
                            <MenuItem value="state 3">State 3</MenuItem>
                        </TextField>
                        <TextField required fullWidth id="cities" label="Select your City" select>
                            <MenuItem value="city 1">City 1</MenuItem>
                            <MenuItem value="city 2">City 2</MenuItem>
                            <MenuItem value="city 3">City 3</MenuItem>
                        </TextField>
                        <Button style={buttonStyle} fullWidth variant="contained" color="primary" type='submit'>Register</Button>
                    <Typography> Already registered ? | 
                    <Link href="/login" >
                         Login!
                    </Link>
                    </Typography>
                    

                </Paper>
            </Grid>
        )
    }
}

export default Register;