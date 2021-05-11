import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'
import red from '@material-ui/core/colors/red'
import {Container, Col, Row, Carousel, Card} from 'react-bootstrap'
import Typewriter from 'typewriter-effect'
import React from 'react'
import {Avatar, Button, Grid, Paper, TextField, Typography, Link} from '@material-ui/core'
import {motion} from 'framer-motion'

import LockIcon from '@material-ui/icons/Lock';
import './login.css'
import { white } from 'material-ui/styles/colors'


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    componentDidMount(){
        document.body.style.backgroundColor = "#404040";
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
        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: orange[500],
                    dark: orange[500],
                    light: orange[500]
                },
                secondary: {
                    main : orange[500],
                    dark : orange[500],
                    light: orange[500]
                },
                error: {
                    main: red[500],
                },
                
                
                

            },
            
        })
            const fadeLeft={
            hidden: {opacity: 0, x: -350},
            visible : {opacity: 1, x: 0}
        }
        const avatarStyle = {backgroundColor: "orange", color: 'black'};
        const buttonStyle = {marginTop: "20px", marginBottom: "10px", backgroundColor: '#FF8C00', color: 'white'};
        const textFieldStyle = {marginTop: "10px",};
        return(
            <Container>
                <Row>
                    <Col sm={8}>
                        <Paper elevation={10}
                        style={{
                            
                            borderRadius: '10px',
                            color: 'white'
                        }} className='hero'>
                            <motion.div
                            initial = {{opacity: 0}}
                            animate = {{opacity: 1}}
                            transition={{duration: 1}}
                            
                            >
                                
                                <motion.h1 id='brand'>
                                    
                                    AUXILIUM</motion.h1>
                                    <h6 id='quote'>SERVICE TO OTHERS IS THE RENT YOU PAY FOR 
                                        YOUR ROOM HERE ON EARTH ~ M. ALI</h6>

                                         <Container className='hero-carousel'>
                                            <Row>
                                                <h2 id='typewriter'>
                                                <Typewriter
                                                options={{loop: true,}}
                                                onInit={(typewriter) =>{
                                                    typewriter.pauseFor(1300)
                                                    .typeString('WELLCOME')
                                                    .pauseFor(1000)
                                                    .deleteAll()
                                                    .typeString('LOGIN')
                                                    .pauseFor(1000)
                                                    .deleteAll()
                                                    .typeString('LIST PRODUCTS')
                                                    .pauseFor(1000)
                                                    .deleteAll()
                                                    .typeString('HELP PEOPLE')
                                                    .pauseFor(1000)
                                                    .deleteAll()
                                                    .typeString('SAVE LIVES')
                                                    
                                                    .deleteAll()
                                                    .start();
                                                }}
                                                
                                                
                                                />
                                                </h2>
                                            
                                            </Row>
                                            <Row>
                                            
                                            </Row>
                                           
                                        </Container> 
                                       
                                
                                         
                             </motion.div>
                            

                        </Paper>
                    </Col>
                    <Col sm={4}> <Grid>
                
                <motion.div className='paper-bg'
                
                variants={fadeLeft}
                initial='hidden'
                animate='visible'
                transition={{duration: 1.3}}
                
                
                
                >
                <Paper className='bg-papers' elevation={10}
                style={{
                    backgroundColor: 'black',
                    borderRadius: '10px',
                    color: 'white',
                    
                }} >
                    <Grid align="center" >
                      <Avatar style={avatarStyle}><LockIcon/></Avatar>
                      <h2>Login</h2>
                    </Grid>
                    <ThemeProvider theme={theme}>
                    <TextField
                
                    
                     inputProps={{
                        className:'textField',
                        underline:{
                            '&&&:before': {
                                bottomBorder: '1px solid orange'
                            },
                            "&&:after": {
                                borderBottom: "none"
                            }
                        }
                    }}
                    InputLabelProps={{
                        className:'textField'
                    }} name='emailText' value={this.state.email} style={textFieldStyle} type='email' required fullWidth label='Email' placeholder='Enter your Email' onChange={this.handleValueChange}/>
                    
                    <TextField
                    inputProps={{
                        className:'textField'
                    }}
                    InputLabelProps={{
                        className:'textField'
                    }} name='passwordText'  value={this.state.password} style={textFieldStyle} type='password' required fullWidth label='Password' placeholder='Enter your Password' onChange={this.handleValueChange}/>

                    </ThemeProvider>
                    <motion.div
                    whileHover={{
                        scale: 1.05,
                    }}

                    whileTap={{
                        scale: 0.9
                    }}
                    
                    >
                    <Button style={buttonStyle} fullWidth variant="contained" color="primary" type='submit' onClick={this.handleOnClick}>Login</Button>
                    </motion.div>
                    <Typography> Don't have an account?  | 
                    <Link style={{color: 'orange'}} href="/register" >
                         Sign Up
                    </Link>
                    </Typography>
                    

                </Paper>
                </motion.div>
            </Grid></Col>
                </Row>
                
            </Container>
        )
    }
}

export default Login;