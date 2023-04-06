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
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const buttonPink = {
  padding: 0,
  display: "inline-block",
  width: "161.6px",
  height: "52px",
  bgcolor: "#FF64AE",
  color: "#fff",
  marginLeft: "53.19px",
  borderRadius: "50px",
  fontFamily: "Poppins !important",
  "&:hover": {
    bgcolor: "#f52e8d",
  },
};

const useStyles = makeStyles((theme) => ({
  optionBars: {
    display: "none",
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
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.1em",
      color: "#8B8B8B",
      margin: "0 0 0 48.07px",
      cursor: "pointer",
      "& .link": {
        textDecoration: "none",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.1em",
        color: "#D8DCFF",
        cursor: "pointer",
        textTransform: "capitalize",
        fontFamily: "Poppins",
      },
      "& .linkBold": {
        textDecoration: "none",
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.1em",
        color: "#FFFFFF",
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
        fontSize: "16px",
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
    },
    "& .textHeader": {
      textDecoration: "none",
      "& .check": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        "& .textLogo": {
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "36.8px ",
          letterSpacing: "0.1em",
          color: "#FFFFFF",
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
    backgroundColor: "#44486ef7",
    boxShadow: "0 3px 5px rgba(57, 63, 72, 0.3)",
    padding: "10px 150px 0",

    [theme.breakpoints.down(theme.xl)]: {
      padding: "10px 34px",
    },
    [theme.breakpoints.down(theme.lg)]: {
      padding: "10px 20px",
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
    padding: "40px 150px 0",
    [theme.breakpoints.down(theme.xl)]: {
      padding: "40px 34px",
    },
    [theme.breakpoints.down(theme.lg)]: {
      padding: "40px 20px",
    },
    "& .padding150": {
      // padding: "0 150px 0",
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
  },
}));

const Header = (props) => {
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
                    <Link className={"linkBold"} to={"/home2"}>
                      Home +
                    </Link>
                  </Typography>
                </Box>
                <Box className={classes.optionSelect}>
                  <Typography className={"check"}>
                    <Link className={"link"} to={"/about"}>
                      About
                    </Link>
                  </Typography>
                </Box>

                <Box className={classes.optionSelect}>
                  <Typography className={"check"}>
                    <Link className={"link"} to={"/service"}>
                      Service
                    </Link>
                  </Typography>
                </Box>

                <Box className={classes.optionSelect}>
                  <Typography className={"check"}>
                    <Link className={"link"} to={"/gallery"}>
                      Gallery
                    </Link>
                  </Typography>
                </Box>

                <Box className={classes.optionSelect}>
                  <Typography className={"check"}>
                    <Link className={"link"} to={"/blog"}>
                      Blog
                    </Link>
                  </Typography>
                </Box>
              </Box>
              <Button
                className={classes.ButtonContact}
                sx={buttonPink}
                variant="text"
              >
                <Link className="linkText" to={"/contact"}>
                  Contact
                </Link>
              </Button>
            </Box>
            <Box onClick={handleClick} className={classes.optionBars}>
              <Button
                variant="contained"
                className={"check"}
                sx={{
                  ":hover": {
                    bgcolor: "#050b37",
                  },
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#091156",
                }}
              >
                <DehazeIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
