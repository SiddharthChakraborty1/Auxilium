import React from 'react'
import {Avatar, Button, Grid, Paper, TextField, Typography, Link} from '@material-ui/core'
import {motion} from 'framer-motion'

import LockIcon from '@material-ui/icons/Lock';
import './login.css'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }



    handleValueChange=(event)=>{

        event.preventDefault();
        if(event.target.name === 'emailText')
        {
            this.setState({
                email: event.target.value
            })
        }
        if(event.target.name === 'passwordText')
        {
            this.setState({
                password : event.target.value
            })
        }

    }


    handleOnClick=(event)=>{
        event.preventDefault();
        let email = this.state.email;
        let password = this.state.password;
        if((email === '') || (password === ''))
        {
            alert("email or password cannot be empty");
        }
        else
        {
            //call service method to verify data
        }
    }

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
                    <TextField name='emailText' value={this.state.email} style={textFieldStyle} type='email' required fullWidth label='Email' placeholder='Enter your Email' onChange={this.handleValueChange}/>
                    <TextField name='passwordText' value={this.state.password} style={textFieldStyle} type='password' required fullWidth label='Password' placeholder='Enter your Password' onChange={this.handleValueChange}/>
                    <motion.div
                    whileHover={{
                        scale: 1.05,
                        

                    }}
                    
                    >
                    <Button style={buttonStyle} fullWidth variant="contained" color="primary" type='submit' onClick={this.handleOnClick}>Login</Button>
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