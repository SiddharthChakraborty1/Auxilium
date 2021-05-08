import React from 'react'
import {Avatar, Button, Grid, Paper, TextField, Typography, Link} from '@material-ui/core'
import {motion} from 'framer-motion'

import LockIcon from '@material-ui/icons/Lock';
import './login.css'

class Login extends React.Component{
    constructor(props){
        super(props);
    }

    // Note- Methods to handle value change and onCLick has not been written yet

    render(){
        const fadeLeft={
            hidden: {opacity: 0, x: -500},
            visible : {opacity: 1, x: 0}
        }
        const avatarStyle = {backgroundColor: "pink"};
        const buttonStyle = {marginTop: "20px", marginBottom: "10px"};
        const textFieldStyle = {marginTop: "10px"};
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
                      <h2>Login</h2>
                    </Grid>
                    <TextField style={textFieldStyle} type='email' required fullWidth label='Email' placeholder='Enter your Email'/>
                    <TextField style={textFieldStyle} type='password' required fullWidth label='Password' placeholder='Enter your Password'/>
                    <motion.div
                    whileHover={{
                        scale: 1.05,
                        

                    }}
                    
                    >
                    <Button style={buttonStyle} fullWidth variant="contained" color="primary" type='submit'>Login</Button>
                    </motion.div>
                    <Typography> Don't have an account?  | 
                    <Link href="/register" >
                         Sign Up
                    </Link>
                    </Typography>
                    

                </Paper>
                </motion.div>
            </Grid>
        )
    }
}

export default Login;