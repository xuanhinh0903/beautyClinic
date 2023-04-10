import { Box, Dialog, Slide } from "@material-ui/core";
import Header from "../../components/header";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import BackgroundBubberContact from "../../images/background/BackgroundBubberContact.svg";
import map from "../../images/background/map.svg";
import ContactUs from "../../components/contactUs/index";
import ContactForm from "../../components/contactFom";
import Footer from "../../components/footer/index";
import * as React from "react";
import Scroll from "../../components/scroll";
import BlockNew from "../../components/blockNew";

const useStyles = makeStyles((theme) => ({
  wrap1440: {
    maxWidth: "1440px",
    margin: "0 auto",
  },
  wrapper: {
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0 34px",
    },
    [theme.breakpoints.down(theme.sm)]: {
      padding: "0 20px",
    },
    padding: "0 150px",
  },

  blockTextContact: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
    padding: "250px 0 44px 0",
    [theme.breakpoints.down(theme.xl)]: {
      flexDirection: "column",
      padding: "250px 0 0 0",
      textAlign: "center",
    },
    "& .textGrey": {
      fontFamily: "Poppins",
      fontWeight: "400",
      fontSize: "1rem",
      lineHeight: "24px",
      color: "#8B8B8B",
      maxWidth: "360px",
      [theme.breakpoints.down(theme.xl)]: {
        maxWidth: "inherit",
        textAlign: "center",
        // paddingBottom:"16px"
      },
      [theme.breakpoints.down(theme.xs)]: {
        fontSize: "0.8rem",
      },
    },
    "& .blockTopContact": {
      "& .textPink16": {
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "1rem",
        lineHeight: "125%",
        color: "#FF64AE",
        paddingBottom: "12px",
      },
      "& .textBlueBold": {
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "2.25rem",
        lineHeight: "125%",
        color: "#091156",
        maxWidth: "450px",
        [theme.breakpoints.down(theme.xl)]: {
          maxWidth: "inherit",
          textAlign: "center",
          paddingBottom: "16px",
        },
        [theme.breakpoints.down(theme.sm)]: {
          fontSize: "1.875rem",
        },
        [theme.breakpoints.down(theme.xs)]: {
          fontSize: "1.5rem",
        },
      },
    },
  },
  bgContact: {
    backgroundImage: `url(${BackgroundBubberContact})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "-240%",
    backgroundSize: "100%",
    [theme.breakpoints.down(theme.xl)]: {
      backgroundSize: "auto",
      backgroundPositionY: "0",
    },
  },
  wrapContactUs: {
    paddingBottom: "112px",
    [theme.breakpoints.down(theme.xl)]: {
      paddingBottom: "40px",
    },
  },
  bgMap: {
    backgroundImage: `url(${map})`,
    backgroundRepeat: "no-repeat",
    height: "418px",
    width: "100%",
    backgroundSize: "100%",
    marginBottom: "112px",
    [theme.breakpoints.down(theme.xl)]: {
      paddingBottom: "40px",
      backgroundSize: "auto",
    },
  },
  root: {
    textAlign: "center",
    paddingBottom: "70px",
    maxWidth: "1440px",
    margin: "0 auto",
    "& .textPink16": {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: "1rem",
      lineHeight: "125%",
      color: "#FF64AE",
      paddingBottom: "12px",
      [theme.breakpoints.down(theme.xs)]: {
        fontSize: "0.9rem",
      },
    },

    "& .textBlueBold": {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: "2.25rem",
      lineHeight: "125%",
      color: "#091156",
      paddingBottom: "12px",
      [theme.breakpoints.down(theme.sm)]: {
        fontSize: "1.875rem",
      },
      [theme.breakpoints.down(theme.xs)]: {
        fontSize: "1.5rem",
      },
    },
    "& .textGrey": {
      fontFamily: "Poppins",
      fontWeight: "400",
      fontSize: "1rem",
      lineHeight: "24px",
      color: "#8B8B8B",
      [theme.breakpoints.down(theme.xs)]: {
        fontSize: "0.8rem",
      },
    },
  },
  blockContactForm: {
    paddingBottom: "112px",
    [theme.breakpoints.down(theme.xl)]: {
      paddingBottom: "40px",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="top" ref={ref} {...props} />;
});
const Contact = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [offset, setOffset] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.scrollTo(0, 0);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Box>
      <Header handleClick={handleClickOpen} />

      <Box className={classes.bgContact}>
        <Box className={classes.wrapper}>
          <Box className={classes.wrap1440}>
            <Box className={classes.blockTextContact}>
              <Box className={"blockTopContact"}>
                <Typography className="textPink16">Contact Us</Typography>
                <Typography className="textBlueBold">
                  Contact service for our customers
                </Typography>
              </Box>
              <Typography className="textGrey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </Typography>
            </Box>

            <Box className={classes.wrapContactUs}>
              <ContactUs />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.bgMap}></Box>

      <Box className={classes.root}>
        <Typography className={"textPink16"}>Get in Touch</Typography>
        <Typography className={"textBlueBold"}>
          Get direct handling by us
        </Typography>
        <Typography className={"textGrey"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </Typography>
      </Box>

      <Box className={classes.wrapper}>
        <Box className={classes.wrap1440}>
          <Box className={classes.blockContactForm}>
            <ContactForm />
          </Box>
        </Box>
      </Box>

      <Footer />

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <BlockNew handleClose={handleClose} />
      </Dialog>

      {offset > 0 && <Scroll />}
    </Box>
  );
};

export default Contact;
