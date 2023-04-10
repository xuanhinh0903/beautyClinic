import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import bgPink from "../../images/logoBlue/Ellipse BG.svg";
import dotBig from "../../images/logoBlue/Ellipse White 1.svg";
import dotSmall from "../../images/logoBlue/Ellipse White 2.svg";
import recTangBlue from "../../images/logoBlue/Rectangle Blue.svg";
import { makeStyles } from "@material-ui/core";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./style.module.css";
import { Link, useLocation } from "react-router-dom";

const buttonPink = {
  ":hover": {
    bgcolor: "#f52e8d",
  },
  padding: 0,
  display: "inline-block",
  width: "161.6px",
  height: "52px",
  bgcolor: "#FF64AE",
  color: "#fff",
  marginLeft: "53.19px",
  borderRadius: "50px",
  fontFamily: "Poppins !important",
};

const buttonPinkCheck = {
  ":hover": {
    bgcolor: "#f52e8d",
  },
  padding: 0,
  display: "inline-block",
  width: "161.6px",
  height: "52px",
  bgcolor: "#fb0078",
  color: "#fff",
  marginLeft: "53.19px",
  borderRadius: "50px",
  fontFamily: "Poppins !important",
};

const useStyles = makeStyles((theme) => ({
  optionBars: {
    display: "none",
    "& .check": {
      "& svg": {
        fontSize: "2.25rem",
      },
    },
    [theme.breakpoints.down(theme.xl)]: {
      display: "flex",
    },
  },
  listSelectAndBt: {
    display: "flex",
    alignItems: "center",
    "& .listOption": {
      display: "flex",
      alignItems: "center",
    },
    [theme.breakpoints.down(theme.xl)]: {
      display: "none",
    },
  },
  optionSelect: {
    "& .check": {
      fontWeight: "500",
      fontSize: "1rem",
      lineHeight: "24px",
      letterSpacing: "0.1em",
      color: "#8B8B8B",
      margin: "0 0 0 46.07px",
      cursor: "pointer",
      "& .link": {
        textDecoration: "none",
        fontWeight: "500",
        fontSize: "1rem",
        lineHeight: "24px",
        letterSpacing: "0.1em",
        color: "#8B8B8B",
        cursor: "pointer",
        textTransform: "capitalize",
        fontFamily: "Poppins",
      },
      "& .linkBold": {
        textDecoration: "none",
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "1rem",
        lineHeight: "24px",
        letterSpacing: "0.1em",
        color: "#414880",
        fontFamily: "Poppins",
        margin: "0",
      },
    },
  },

  textOptionPlus: {
    "& .check": {
      "& .link": {
        textDecoration: "none",
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "1rem",
        lineHeight: "24px",
        letterSpacing: "0.1em",
        color: "#414880",
        fontFamily: "Poppins",
        margin: "0",
      },
    },
  },
  header: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down(theme.xl)]: {
      flexDirection: "row-reverse",
      justifyContent: "flex-end",
    },
    "& .textHeader": {
      textDecoration: "none",
      "& .check": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        "& .textLogo": {
          fontSize: "1.5rem",
          fontWeight: "700",
          lineHeight: "36.8px ",
          letterSpacing: "0.1em",
          color: "#091156",
          fontFamily: "Poppins",
        },
      },
    },
  },
  bgFixed: {
    position: "fixed",
    width: "100%",
    zIndex: "99",
    top: "0",
    backgroundColor: "#e6e9ff",
    boxShadow: "0 3px 5px rgba(57, 63, 72, 0.3)",
    padding: "10px 150px 0",

    [theme.breakpoints.down(theme.xl)]: {
      padding: "10px 34px 0",
    },
    [theme.breakpoints.down(theme.lg)]: {
      padding: "10px 20px 0",
    },
    "& .padding150": {
      // padding: "0 150px",
      [theme.breakpoints.down(theme.xl)]: {
        padding: "0 34px",
      },
      [theme.breakpoints.down(theme.lg)]: {
        padding: "0 20px",
      },
    },
  },
  bgFixedNot: {
    zIndex: "99",
    padding: "41px 150px 41px",
    position: "fixed",
    width: "100%",
    top: "0",
    [theme.breakpoints.down(theme.xl)]: {
      padding: "41px 34px 41px",
    },
    [theme.breakpoints.down(theme.lg)]: {
      padding: "41px 20px 41px",
    },
  },
  wrapWidth: {
    maxWidth: "1440px",
    margin: "0 auto",
  },
  ButtonContact: {
    "& .linkText": {
      textDecoration: "none",
      color: "#FFFFFF",
    },
    "& Button": {
      textTransform: "capitalize",
    },
  },

  ButtonContactCheck: {
    "& .linkText": {
      textDecoration: "none",
      color: "#FFFFFF",
    },
    "& Button": {
      textTransform: "capitalize",
    },
  },
}));

const Header = (props) => {
  const location = useLocation();
  
  const handleClick = () => {
    props.handleClick();
  };
  const [offset, setOffset] = React.useState(0);
  const classes = useStyles();

  React.useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
      <Box
        id="tesst"
        className={offset > 0 ? `${classes.bgFixed}` : `${classes.bgFixedNot}`}
      >
        <Box className={classes.wrapWidth}>
          <Box className={classes.header}>
            <Link to={"/"} className={"textHeader"}>
              <Box className={"check"}>
                <Box className={styles.logoFull}>
                  <img className={styles.bgPink} src={bgPink} />
                  <img className={styles.dotBig} src={dotBig} />
                  <img className={styles.dotSmall} src={dotSmall} />
                  <img className={styles.recTangBlue} src={recTangBlue} />
                </Box>
                <Typography className="textLogo">Beautice</Typography>
              </Box>
            </Link>
            <Box className={classes.listSelectAndBt}>
              <Box className={"listOption"}>
                <Box className={classes.optionSelect}>
                  <Typography className={"check"}>
                    <Link
                      className={
                        location.pathname === "/" ? "linkBold" : "link"
                      }
                      to={"/home2"}
                    >
                      Home +
                    </Link>
                  </Typography>
                </Box>
                <Box className={classes.optionSelect}>
                  <Typography className={"check"}>
                    <Link
                      className={
                        location.pathname === "/about" ? "linkBold" : "link"
                      }
                      to={"/about"}
                    >
                      About
                    </Link>
                  </Typography>
                </Box>

                <Box className={classes.optionSelect}>
                  <Typography className={"check"}>
                    <Link
                      className={
                        location.pathname === "/service" ? "linkBold" : "link"
                      }
                      to={"/service"}
                    >
                      Service
                    </Link>
                  </Typography>
                </Box>

                <Box className={classes.optionSelect}>
                  <Typography className={"check"}>
                    <Link
                      className={
                        location.pathname === "/gallery" ? "linkBold" : "link"
                      }
                      to={"/gallery"}
                    >
                      Gallery
                    </Link>
                  </Typography>
                </Box>

                <Box className={classes.optionSelect}>
                  <Typography className={"check"}>
                    <Link
                      className={
                        location.pathname === "/blog" ? "linkBold" : "link"
                      }
                      to={"/blog"}
                    >
                      Blog
                    </Link>
                  </Typography>
                </Box>
              </Box>
              <Link className="linkText" to={"/contact"}>
                <Button
                  className={classes.ButtonContact}
                  sx={
                    location.pathname === "/contact"
                      ? buttonPinkCheck
                      : buttonPink
                  }
                  variant="text"
                >
                  Contact
                </Button>
              </Link>
            </Box>
            <Box onClick={handleClick} className={classes.optionBars}>
              <Button
                variant="contained"
                className={"check"}
                sx={{
                  ":hover": {
                    bgcolor: "#fafafa00",
                  },
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#fafafa00",
                  color: "#091156",
                  boxShadow: "none",
                  marginRight: "12px",
                }}
              >
                <DehazeIcon />
                {/* <ClearIcon /> */}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
