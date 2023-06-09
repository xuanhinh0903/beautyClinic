import { makeStyles } from "@material-ui/styles";
import Header from "../../components/header";
import * as React from "react";
import { Box, Button } from "@mui/material";
import { Dialog, Slide, Typography } from "@material-ui/core";
import Mp4 from "../../images/background/Mp4.svg";
import play from "../../images/play/Play_button.svg";
import TextProfessTeam from "../../components/textProfessTeam";
import InfoProfess from "../../components/infoProfess";
import slogan from "../../images/background/slogan.svg";
import Illustration from "../../images/about/Illustration.svg";
import Illustration2 from "../../images/Illustration-2.svg";
import iconLogo1 from "../../images/iconLogo/LOGO1.svg";
import iconLogo2 from "../../images/iconLogo/LOGO2.svg";
import iconLogo3 from "../../images/iconLogo/LOGO3.svg";
import iconLogo4 from "../../images/iconLogo/LOGO4.svg";
import iconLogo5 from "../../images/iconLogo/LOGO5.svg";
import BubbleBGFooter from "../../images/background/bgAb.svg";
import Footer from "../../components/footer";
import Scroll from "../../components/scroll";
import BlockNew from "../../components/blockNew";
import Overlay from "../../components/overlay";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  wrapHeader: {
    padding: "0 0 0 0",
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0 0 0 0",
    },
  },
  textAbout: {
    color: "#FF64AE",
    fontWeight: 600,
    fontFamily: "Poppins",
    lineHeight: "125%",
    paddingBottom: "12px",
    fontSize: "1rem",
    [theme.breakpoints.down(theme.xl)]: {
      textAlign: "center",
    },
    [theme.breakpoints.down(theme.sm)]: {
      fontSize: "0.9rem",
    },
  },
  textAboutBoldblue: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "2.25rem",
    lineHeight: "118%",
    maxWidth: "60%",
    paddingBottom: "12px",
    color: "#091156",
    [theme.breakpoints.down(theme.xl)]: {
      maxWidth: "inherit",
      textAlign: "center",
    },
    [theme.breakpoints.down(theme.sm)]: {
      fontSize: "1.875rem",
    },
    [theme.breakpoints.down(theme.xs)]: {
      fontSize: "1.5rem",
    },
  },

  textAboutBlurGray: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "24px",
    letterSpacing: "0.1em",
    color: "#8B8B8B",
    maxWidth: "76%",
    paddingBottom: "35px",
    [theme.breakpoints.down(theme.xl)]: {
      maxWidth: "inherit",
      textAlign: "center",
      paddingBottom: "0",
    },
    [theme.breakpoints.down(theme.sm)]: {
      fontSize: "0.9rem",
    },
  },
  wrapper: {
    [theme.breakpoints.down(theme.xl)]: {
      padding: "50px 34px 0",
    },
    [theme.breakpoints.down(theme.sm)]: {
      padding: "50px 20px 0",
    },
    padding: "125px 150px 0",
  },
  doubleButton: {
    padding: "58px",
  },
  bgMp4: {
    height: "100%",
    width: "100%",
    backgroundImage: `url(${Mp4})`,
    backgroundRepeat: "no-repeat",
    height: "560px",
    width: "100%",
    backgroundSize: "100% 100%",
    position: "relative",
    marginBottom: "136px",
    [theme.breakpoints.down(theme.xl)]: {
      backgroundSize: "100% 100%",
      marginBottom: "0",
    },
    [theme.breakpoints.down(theme.sm)]: {
      height: "430px",
    },
    [theme.breakpoints.down(theme.xs)]: {
      height: "230px",
    },
    "& .play": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  wrapProfess: {
    paddingBottom: "87px",
    [theme.breakpoints.down(theme.xl)]: {
      // padding: "0 34px",
      paddingBottom: "20px",
    },
    [theme.breakpoints.down(theme.xs)]: {
      // padding: "0 20px",
    },
  },

  InfoProfess: {
    paddingBottom: "149.5px",
    [theme.breakpoints.down(theme.xl)]: {
      paddingBottom: "0",
    },
  },
  textSlogan: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "125%",
    letterSpacing: "0.1em",
    color: "#ABB4FF",
  },
  textSloganBold: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "2.25rem",
    lineHeight: "125%",
    letterSpacing: "0.1em",
    color: "#FFFFFF",
    paddingTop: "12px",
    maxWidth: "56%",
    margin: "0 auto",
    [theme.breakpoints.down(theme.xl)]: {
      maxWidth: "100%",
      letterSpacing: "0",
      fontSize: "1.875rem",
    },
    [theme.breakpoints.down(theme.sm)]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down(theme.xs)]: {},
  },
  textAboutBoldblueClient: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "2.25rem",
    lineHeight: "125%",
    color: "#091156",
    paddingBottom: "24px",
    [theme.breakpoints.down(theme.xl)]: {
      maxWidth: "100%",
      letterSpacing: "0",
      fontSize: "1.875rem",
    },
    [theme.breakpoints.down(theme.sm)]: {
      fontSize: "1.7rem",
    },
    [theme.breakpoints.down(theme.xs)]: {
      fontSize: "1.4rem",
    },
  },
  textSloganGrey: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "125%",
    letterSpacing: "0.1em",
    color: "#CACACA",
    paddingTop: "12px",
    maxWidth: "56%",
    margin: "0 auto",
    [theme.breakpoints.down(theme.xl)]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.down(theme.sm)]: {
      fontSize: "0.8rem",
    },
  },
  bgSlogan: {
    backgroundImage: `url(${slogan})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 100%",
    textAlign: "center",
    [theme.breakpoints.down(theme.xl)]: {
      backgroundSize: "auto",
    },
    [theme.breakpoints.down(theme.sm)]: {
      backgroundSize: "auto 100%",
    },
  },
  bgSloganColor: {
    background: "rgba(9, 17, 86, 0.6)",
    padding: "164px 0 167px 0",
    marginBottom: "123px",
    [theme.breakpoints.down(theme.xl)]: {
      padding: "120px 0 167px 0",
    },
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "117.64px",
    [theme.breakpoints.down(theme.xl)]: {
      display: "block",
      textAlign: "center",
      marginBottom: "80.64px",
    },
  },
  flexReverse: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "117.64px",
    [theme.breakpoints.down(theme.xl)]: {
      display: "flex",
      flexDirection: "column-reverse",
      textAlign: "center",
      marginBottom: "80.64px",
    },
  },
  imgPlay: {
    padding: "0 145px 0 0",
    height: "100%",
    cursor: "pointer",
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0 0 50px 0",
      maxWidth: "50%",
      margin: "0 auto",
    },
    [theme.breakpoints.down(theme.sm)]: {
      padding: "0 0 50px 0",
      maxWidth: "80%",
      margin: "0 auto",
    },
  },
  doubleButton: {
    "& .buttonPinkLearn": {
      margin: "0 44px 0 0",
      padding: "0",
      display: "flex",
      width: "200px",
      height: "58.36px",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FF64AE",
      color: "#fff",
      borderRadius: "50px",
      display: "inline-block",
      [theme.breakpoints.down(theme.xl)]: {
        margin: "0",
        width: "90%",
      },
    },
  },
  outVision: {
    // paddingBottom: "128px",
  },
  root: {
    textAlign: "center",
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
        fontSize: "0.9rem",
      },
    },
  },
  wrappFlexIcon: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(theme.lg)]: {
      flexWrap: "wrap",
      justifyContent: "center",
    },
    "& .imgIcon": {
      padding: "20px",
    },
  },
  wrapper240: {
    padding: "0 240px 111px",
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0 34px 111px",
    },
    [theme.breakpoints.down(theme.sm)]: {
      padding: "0 20px 111px",
    },
  },
  bgBubbleBGFooter: {
    backgroundImage: `url(${BubbleBGFooter})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    [theme.breakpoints.down(theme.xl)]: {
      backgroundSize: "auto",
    },
  },
  wrap1440: {
    maxWidth: "1440px",
    margin: "0 auto",
  },
  padding125: {
    paddingTop: "125px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="top" ref={ref} {...props} />;
});

const About = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.scrollTo(0, 0);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box className={classes.wrapperAll}>
      <Box className={classes.wrapHeader}>
        <Header handleClick={handleClickOpen} />
      </Box>
      <Box className={classes.wrapper}>
        <Box className={classes.wrap1440}>
          <Box className={`${classes.doubleButton} ${classes.padding125}`}>
            <Typography className={classes.textAbout}>About Us</Typography>
            <Typography className={classes.textAboutBoldblue}>
              We are a leading beauty clinic that has been around since 2002
            </Typography>
            <Typography className={classes.textAboutBlurGray}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </Typography>
          </Box>
        </Box>

        <Box className={classes.bgMp4}>
          <img className="play" src={play} />
        </Box>

        <Box className={classes.wrapProfess}>
          <TextProfessTeam />
        </Box>

        <Box className={classes.InfoProfess}>
          <InfoProfess />
        </Box>
      </Box>

      <Box>
        <Box className={classes.bgSlogan}>
          <Box className={classes.bgSloganColor}>
            <Box className={classes.wrapper}>
              <Typography className={classes.textSlogan}>
                Business Slogan
              </Typography>
              <Typography className={classes.textSloganBold}>
                Best responsibility and service for our customers
              </Typography>
              <Typography className={classes.textSloganGrey}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.bgBubbleBGFooter}>
        <Box className={classes.wrapper}>
          <Box className={classes.wrap1440}>
            <Box className={classes.flex}>
              <img className={classes.imgPlay} src={Illustration} />
              <Box className={classes.flexsWithAbout}>
                <Box className={classes.doubleButton}>
                  <Typography className={classes.textAbout}>
                    Our Vision
                  </Typography>
                  <Typography className={classes.textAboutBoldblueClient}>
                    Be the best and go international
                  </Typography>
                  <Typography className={classes.textAboutBlurGray}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Elit, quam suscipit purus donec amet. Egestas volutpat
                    facilisi eu libero.
                    <br />
                    <br /> Nunc, ipsum ornare mauris sit quam quis enim. Varius
                    tellus in suspendisse placerat.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={classes.wrapper}>
          <Box className={classes.wrap1440}>
            <Box className={classes.flexReverse}>
              <Box className={classes.flexsWithAbout}>
                <Box className={classes.doubleButton}>
                  <Typography className={classes.textAbout}>
                    Our Mission
                  </Typography>
                  <Typography className={classes.textAboutBoldblue}>
                    Special & premium service to any clients
                  </Typography>
                  <Typography className={classes.textAboutBlurGray}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Elit, quam suscipit purus donec amet. Egestas volutpat
                    facilisi eu libero.
                    <br />
                    <br /> Nunc, ipsum ornare mauris sit quam quis enim. Varius
                    tellus in suspendisse placerat.
                  </Typography>
                </Box>
              </Box>
              <img className={classes.imgPlay} src={Illustration2} />
            </Box>
          </Box>
        </Box>

        <Box className={classes.wrapProfess}>
          <Box className={classes.wrapper}>
            <Box className={classes.root}>
              <Typography className={"textPink16"}>Our Clients</Typography>
              <Typography className={"textBlueBold"}>
                Well-known agencies
              </Typography>
              <Typography className={"textGrey"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className={classes.wrapper240}>
          <Box className={classes.wrap1440}>
            <Box className={classes.wrappFlexIcon}>
              <img className="imgIcon" src={iconLogo1} />
              <img className="imgIcon" src={iconLogo2} />
              <img className="imgIcon" src={iconLogo3} />
              <img className="imgIcon" src={iconLogo4} />
              <img className="imgIcon" src={iconLogo5} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Footer />
      </Box>

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

export default About;
