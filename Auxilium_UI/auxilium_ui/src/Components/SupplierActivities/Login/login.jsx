import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import red from "@material-ui/core/colors/red";
import { Container, Col, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import React from "react";
import ant from "../../../images/ant.svg";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
  AppBar,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import { motion } from "framer-motion";

import LockIcon from "@material-ui/icons/Lock";
import "./login.css";
import SupplierLogin from "../../../Model/SupplierLogin";
import { getSuppliers } from "../../../Services/SupplierCredentials.service";
import { black } from "material-ui/styles/colors";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#404040";
    if (localStorage.getItem("supId") != null) {
      this.props.history.push("/supplierDashboard");
    }
  }

  // This function will handle the value change for the textFields
  handleValueChange = (event) => {
    event.preventDefault();
    if (event.target.name === "emailText") {
      this.setState({
        email: event.target.value,
      });
    }
    if (event.target.name === "passwordText") {
      this.setState({
        password: event.target.value,
      });
    }
  };

  handleBackToMain = (e) => {
    e.preventDefault();
    this.props.history.push("/Home");
  };

  // this function will handle the on Click
  handleOnClick = (event) => {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    event.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    if (email === "" || password === "") {
      alert("email or password cannot be empty");
    } else if (!pattern.test(email)) {
      alert("Invalid Email format");
    } else if (password.length < 6) {
      alert("Invalid password length");
    } else {
      let supplierLogin = new SupplierLogin();
      supplierLogin.email = email;
      supplierLogin.password = password;

      let supplierId = getSuppliers(supplierLogin);
      supplierId.then((id) => {
        if (id == null) {
          alert("invalid");
        } else {
          // supplier is valid
          // storing the supplier's id in localstorage
          localStorage.setItem("supId", id);
          this.props.history.push("/supplierDashboard");

          // this can be retrieved from anywhere in the app by using the following statement
          // let id = localStorage.getItem('supID');
        }
      });
    }
  };

  render() {
    // the following theme is for the login form.
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: orange[500],
          dark: orange[500],
          light: orange[500],
        },
        secondary: {
          main: orange[500],
          dark: orange[500],
          light: orange[500],
        },
        error: {
          main: red[500],
        },
        type: "dark",
      },
      button: {
        backgroundColor: "#3c52b2",
        color: "#fff",
        hover: {
          "&:hover": {
            backgroundColor: "#fff",
          },
        },
      },
    });
    // the following code will generate the requited animation on the form
    const fadeLeft = {
      hidden: { opacity: 0, x: -350 },
      visible: { opacity: 1, x: 0 },
    };

    // the following is the inline style used for avatar in the login form

    const avatarStyle = { backgroundColor: "orange", color: "black" };

    // the following is the inline style used for button in the login form

    const buttonStyle = {
      marginTop: "20px",
      marginBottom: "10px",
      backgroundColor: "orange",
      color: "white",
    };

    // the following is the inline style used for textFields in the login form
    const textFieldStyle = { marginTop: "10px" };

    return (
      <div>
        <AppBar
          position="static"
          style={{ backgroundColor: "black", color: "orange" }}
        >
          <Toolbar>
            <div>
              <IconButton color="secondary">
                <img height="40px" width="40px" className="mx-auto" src={ant} />{" "}
                <Typography
                  variant="h6"
                  noWrap
                  style={{ color: "orange", padding: "7px" }}
                >
                  <Link
                    style={{ color: "orange", textDecoration: "none" }}
                    className="BrandName"
                    href="/Home"
                  >
                    Auxilium
                  </Link>
                </Typography>
              </IconButton>
            </div>
            <Grid container>
              <Grid item sm></Grid>
              <Grid item></Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Container>
          <Row>
            <Col sm={8}>
              {/* The following is my background for hero element in the login screen */}

              <div className="hide">
                <Paper
                  elevation={10}
                  style={{
                    borderRadius: "10px",
                    color: "white",
                  }}
                  className="hero"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <Row>
                      <motion.h1 id="brand" data-testid="HeroElement">AUXILIUM</motion.h1>
                      </Row><Row>
                      <h6 id="quote">
                        With Team Effort, we prevail.
                      </h6>
                    </Row>

                    <Container className="hero-carousel">
                      <Row>
                        {/* The following will provide the typewriter animation */}

                        <h2 id="typewriter">
                          <Typewriter
                            options={{ loop: true }}
                            onInit={(typewriter) => {
                              typewriter
                                .pauseFor(1300)
                                .typeString("WELCOME")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("LOGIN")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("LIST PRODUCTS")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("HELP PEOPLE")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("SAVE LIVES")

                                .deleteAll()
                                .start();
                            }}
                          />
                        </h2>
                      </Row>
                      <Row>
                        <motion.div
                          whileHover={{
                            scale: 1.03,
                          }}
                          whileTap={{
                            scale: 0.9,
                          }}
                        >
                          <Button
                            style={{
                              width: "150px",
                              backgroundColor: "orange",
                              color: "black",
                            }}
                            className="btnHover"
                            variant="contained"
                            type="submit"
                            onClick={this.handleBackToMain}
                            data-testid="BackToMain">
                            {" "}
                            Back to Main
                          </Button>
                        </motion.div>
                      </Row>
                    </Container>
                  </motion.div>
                </Paper>
              </div>
            </Col>
            <Col className="coll" sm={4}>
              {" "}
              <Grid>
                <motion.div
                  className="paper-bg"
                  variants={fadeLeft}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1.3 }}
                >
                  {/* The following is background for the login form */}
                  <Paper
                    className="bg-papers"
                    elevation={10}
                    style={{
                      backgroundColor: "black",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    <Grid align="center">
                      <Avatar style={avatarStyle}>
                        <LockIcon />
                      </Avatar>
                      <h2
                        style={{ fontSize: "30px" }}
                        data-testid="SupplierLoginText"
                      >
                        Supplier Login
                      </h2>
                    </Grid>
                    <ThemeProvider theme={theme}>
                      {/* Note: the className textField is a class that I have created inside the css file,*/}
                      {/* I have used that class inside the InputProps of the textField to change colors */}
                      <TextField
                        inputProps={{
                          className: "textField",
                        }}
                        InputLabelProps={{
                          className: "textField ",
                        }}
                        name="emailText"
                        value={this.state.email}
                        style={textFieldStyle}
                        type="email"
                        required
                        fullWidth
                        label="Email"
                        placeholder="Enter your Email"
                        onChange={this.handleValueChange}
                        
                      />

                      <TextField
                        inputProps={{
                          className: "textField",
                        }}
                        InputLabelProps={{
                          className: "textField",
                        }}
                        name="passwordText"
                        value={this.state.password}
                        style={textFieldStyle}
                        type="password"
                        required
                        fullWidth
                        label="Password"
                        placeholder="Enter your Password"
                        onChange={this.handleValueChange}
                      />
                    </ThemeProvider>
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        color: black,
                        backgroundColor: orange,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                    >
                      <Button
                        style={buttonStyle}
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={this.handleOnClick}
                        data-testid="loginBtn"
                      >
                        Login
                      </Button>
                    </motion.div>
                    <Typography>
                      {" "}
                      Don't have an account? |
                      <Link
                        style={{ color: "orange", textDecoration: "none" }}
                        href="/rgnew"
                      >
                        Sign Up
                      </Link>
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
