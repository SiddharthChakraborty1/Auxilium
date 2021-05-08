import React from 'react'
import {Avatar, Button, Grid, Paper, TextField, Typography, Link, MenuItem} from '@material-ui/core'
import {motion} from 'framer-motion'

import LockIcon from '@material-ui/icons/Lock';
import './register.css'

class Register extends React.Component{
    constructor(props){
        super(props);
    }

    // Note- Methods to handle value change and onCLick has not been written yet

    render(){
        const fadeLeft={
            hidden: {opacity: 0, x: -500},
            visible: {opacity: 1, x: 0}
        }
        const avatarStyle = {backgroundColor: "pink"};
        const buttonStyle = {marginTop: "20px", marginBottom: "5px"};
        const textFieldStyle = {marginTop: "5px"};
        return(
            <Grid>
               <motion.div
               variants={fadeLeft}
               initial='hidden'
               animate='visible'
               transition={{duration: 1.3}}
               
               >
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
                        <motion.div

                        whileHover={{
                            scale: 1.05
                        }}>
                        <Button style={buttonStyle} fullWidth variant="contained" color="primary" type='submit'>Register</Button>
                        </motion.div>
                    <Typography> Already registered ?   |    
                    <Link href="/login" >
                           Login!
                    </Link>
                    </Typography>
                    

                </Paper>
               </motion.div>
            </Grid>
        )
    }
}

export default Register;