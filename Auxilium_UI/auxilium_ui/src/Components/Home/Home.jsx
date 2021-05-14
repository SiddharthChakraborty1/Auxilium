import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import AllCards from "../NavCards/AllCards";
import { useEffect } from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";
import "./home.css";
import AirlineSeatIndividualSuiteRoundedIcon from "@material-ui/icons/AirlineSeatIndividualSuiteRounded";
import AirportShuttleRoundedIcon from "@material-ui/icons/AirportShuttleRounded";
import LocalHospitalRoundedIcon from "@material-ui/icons/LocalHospitalRounded";
import BlurOnRoundedIcon from "@material-ui/icons/BlurOnRounded";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import MainCarousel from "./MainCarousel";
import Button from "@material-ui/core/Button";
import Trail from "../Trial/Trial";
import { useState } from "react";

const themes = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: orange[500],
      dark: "white",
      light: orange[500],
    },
    error: {
      main: orange[500],
    },
  },
});

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "black",
    color: "white",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  divider: {
    // Theme Color, or use css color in quote
    background: themes.palette.secondary,
  },
}));

export default function PersistentDrawerLeft() {
  const arrIcon = [
    <HomeRoundedIcon color="secondary" />,
    <InfoRoundedIcon color="secondary" />,
  ];
  const arrIconProducts = [
    <AirportShuttleRoundedIcon color="secondary" />,
    <LocalDiningIcon color="secondary" />,
    <AirlineSeatIndividualSuiteRoundedIcon color="secondary" />,
    <LocalHospitalRoundedIcon color="secondary" />,
    <AirportShuttleRoundedIcon color="secondary" />,
  ];

  useEffect(() => {
    document.body.style.backgroundColor = "#404040";
  });

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 4000);

  return loading == false ? (
    <Trail />
  ) : (
    <div className={classes.root}>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>

            {/* menu icon code  */}
            <IconButton
              color="secondary"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>

            {/* Brand name */}
            <Typography variant="h6" noWrap style={{ color: "orange" }}>
              Auxilium
            </Typography>

            {/* login button for supplier  */}
            <div
              id="ButtonStyle"
              className=" buttonSpecificationM buttonSpecificationT"
            >
              <Button variant="contained" color="secondary">
                Supplier Login
              </Button>
            </div>
          </Toolbar>
        </AppBar>

        {/* side bar */}
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose} style={{ color: "white" }}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>

            {/* we have to give onclick event here in list */}
            {["Home", "About"].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => {
                  alert(text);
                }}
              >
                <ListItemIcon>{arrIcon[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <Divider style={{ backgroundColor: "white", height: "0.5vh" }} />

          <Typography>Products</Typography>
          <List>
            {/* we have to give onclick event here in list */}

            {[
              "Ambulance",
              "Food",
              "Hospital beds",
              "medical supplies",
              "Oxygen cylinder",
            ].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => {
                  alert(text);
                }}
              >
                <ListItemIcon>{arrIconProducts[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <Divider style={{ backgroundColor: "white", height: "0.5vh" }} />
          <List>
            {["Contact"].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => {
                  alert(text);
                }}
              >
                <ListItemIcon>
                  <ContactMailRoundedIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <List>
            <Typography>Auxilium @Copyrights</Typography>
          </List>
        </Drawer>

        {/* Main working area */}
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <AllCards></AllCards>
          <br />
          <div className="hideTablet hideMobile">
            <MainCarousel></MainCarousel>
          </div>
        </main>
      </ThemeProvider>
    </div>
  );
}
