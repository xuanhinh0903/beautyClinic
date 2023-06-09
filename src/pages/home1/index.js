import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "../../components/header";
import { Button } from "@mui/material";
import persion from "../../images/persion/Frame 1.svg";
import {
  Backdrop,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  makeStyles,
} from "@material-ui/core";
import aboutUs from "../../images/about/unsplash_LRXYS0tSyGc.svg";
import AnimationCheck from "../../images/service/Animation1.svg";
import play from "../../images/play/Play_button.svg";
import TextProfessTeam from "../../components/textProfessTeam";
import bgimagehehe from "../../images/background/slide-background.svg";
import imageBgMid from "../../images/background/bgBudder2.svg";
import imageBgMid2 from "../../images/background/bgBudder.svg";
import InfoProfess from "../../components/infoProfess";
import ContactUs from "../../components/contactUs";
import Footer from "../../components/footer";
import toTop from "../../images/toTop.svg";
import BlockNew from "../../components/blockNew";
import Overlay from "../../components/overlay";
import Scroll from "../../components/scroll";

const textMainService = {
  color: "#FF64AE",
  fontWeight: 600,
  fontFamily: "Poppins",
  lineHeight: "125%",
  paddingBottom: "12px",
};
const textAboutBold = {
  fontFamily: "Poppins",
  color: "#091156",
  fontWeight: 600,
  fontSize: "2.25rem",
  margin: "0 auto",
  paddingBottom: "22px",
  lineHeight: "1.3",
};

const buttonPink = {
  ":hover": {
    backgroundColor: "#f52e8d",
  },
  color: "#fff",
  fontFamily: "Poppins",
};

const buttonPlay = {
  padding: "0 12px 0 0",
  border: "none",
  color: "#8B8B8B",
  fontWeight: 600,
  fontFamily: "Poppins",
  borderRadius: "50px",
  ":hover": {
    border: "none",
    bgcolor: "#ff64ae00",
  },
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "0 150px",
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0 34px",
    },
    [theme.breakpoints.down(theme.lg)]: {
      padding: "0 20px",
    },
  },

  check: {
    // padding: "0 191.5px 120.5px 151px",
    display: "flex",
    alignItem: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down(theme.xl)]: {
      padding: "100px 0",
    },
    [theme.breakpoints.down(theme.lg)]: {
      display: "block",
      textAlign: "center",
      padding: "0 ",
    },
    [theme.breakpoints.down(theme.sm)]: {
      padding: "0 0 0 0",
    },
  },

  img: {
    [theme.breakpoints.down(theme.xl)]: {
      maxWidth: "60%",
    },
    [theme.breakpoints.down(theme.lg)]: {
      maxWidth: "100%",
    },
  },
  wrapText: {
    [theme.breakpoints.down(theme.lg)]: {
      margin: "0 auto",
      maxWidth: "100% !important",
    },
  },
  wrapTextBig: {
    [theme.breakpoints.down(theme.xs)]: {
      fontSize: "2.1375rem !important",
      marginTop: "0 !important",
    },
  },
  setWid: {
    padding: "41px 122px 0 152px",
    [theme.breakpoints.down(theme.lg)]: {
      padding: "41px 50px 0",
    },
    [theme.breakpoints.down(theme.sm)]: {
      padding: "41px 20px 0",
    },
  },
  fixPadding: {
    paddingRight: "22px",
    "& .textBoldBlue": {
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "3rem",
      lineHeight: "125%",
      color: "#091156",
      marginTop: "82px",
      marginBottom: "10px",
      maxWidth: "430px",
      [theme.breakpoints.down(theme.sm)]: {
        fontSize: "2.625rem",
      },
    },
    "& .textSmallBlue": {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "24px",
      color: "#091156",
      letterSpacing: "0.1em",
      paddingBottom: "38px",
      maxWidth: "470px",
      [theme.breakpoints.down(theme.lg)]: {
        fontSize: "0.9rem",
      },
      [theme.breakpoints.down(theme.xs)]: {
        fontSize: "0.8rem",
      },
    },
    "& .repsonBt": {
      "&:hover": {
        backgroundColor: "#f52e8d",
      },
      textTransform: "capitalize",
      padding: 0,
      display: "inline-block",
      width: "200px",
      height: "58.36px",
      backgroundColor: "#FF64AE",
      color: "#fff",
      borderRadius: "50px",
      fontFamily: "Poppins",
      fontSize: "1rem",
      [theme.breakpoints.down(theme.lg)]: {
        marginBottom: "20px !important",
      },
      [theme.breakpoints.down(theme.sm)]: {
        fontSize: "0.9rem",
      },
      [theme.breakpoints.down(theme.xs)]: {
        fontSize: "0.8rem",
      },
    },
    [theme.breakpoints.down(theme.xl)]: {
      paddingRight: "0 !important",
      paddingTop: "60px",
    },
  },
  fixPaddingHead: {
    backgroundImage: `url(${bgimagehehe})`,
    backgroundRepeat: "no-repeat",
    paddingBottom: "200px !important",
    // padding: "0 150px 152px",
    [theme.breakpoints.down(theme.xl)]: {
      // padding: "0 34px 152px",
    },
    [theme.breakpoints.down(theme.sm)]: {
      // padding: "0 20px 152px",
    },
  },
  fixPaddingHeader: {
    paddingBottom: "152px",
    [theme.breakpoints.down(theme.xl)]: {
      paddingBottom: "20px !important",
      marginBottom: "20px !important",
    },
  },
  selectBold: {
    width: "25.31px",
    height: "8.15px",
    background: "#414880",
    borderRadius: "50px",
    transform: "matrix(1, 0, 0, -1, 0, 0)",
    margin: "0 8.03px",
    cursor: "pointer",
  },
  selectBlur: {
    width: "14.82px",
    height: "3.09px",
    background: "#EEEEEE",
    borderRadius: "50px",
    transform: "matrix(1, 0, 0, -1, 0, 0)",
    cursor: "pointer",
  },
  flexBox: {
    "& .check": {
      display: "flex",
      alignItems: "center",
      padding: "0 0 140px 685px",
      [theme.breakpoints.down(theme.xl)]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 0 140px 0",
      },
      [theme.breakpoints.down(theme.xs)]: {
        padding: "0 0 50px 0",
      },
    },
  },
  textService: {
    textAlign: "center",
    paddingBottom: "82px",
    "& .textMainServiceBold": {
      fontFamily: "Poppins",
      color: "#091156",
      fontWeight: 600,
      fontSize: "2.25rem",
      maxWidth: "450px",
      margin: "0 auto",
      paddingBottom: "22px",
      lineHeight: "1.3",
      [theme.breakpoints.down(theme.sm)]: {
        fontSize: "1.875rem",
      },
      [theme.breakpoints.down(theme.xs)]: {
        fontSize: "1.675rem",
      },
    },
    "& .textMainService": {
      color: "#FF64AE",
      fontWeight: 600,
      fontFamily: "Poppins",
      lineHeight: "125%",
      paddingBottom: "12px",
      fontSize: "1rem",
      [theme.breakpoints.down(theme.xs)]: {
        fontSize: "0.9rem",
      },
    },
    "& .textMainServiceBlur": {
      fontWeight: 400,
      letterSpacing: "0.1em",
      color: "#8B8B8B",
      fontFamily: "Poppins",
      maxWidth: "848px",
      margin: "0 auto",
      fontSize: "1rem",
      [theme.breakpoints.down(theme.sm)]: {
        fontSize: "0.9rem",
      },
      [theme.breakpoints.down(theme.xs)]: {
        fontSize: "0.8rem",
      },
    },
    [theme.breakpoints.down(theme.sm)]: {
      padding: "0 20px 82px",
    },
  },
  ImgService: {
    padding: "58px 89px",
    [theme.breakpoints.down(theme.xs)]: {
      padding: "36px 0",
    },
  },
  textServiceIn: {
    textAlign: "center",
    margin: "0 8px",
  },
  textBold18: {
    fontWeight: 600,
    fontFamily: "Poppins",
    fontSize: "1.125rem",
    lineHeight: "37px",
    color: "#091156",
    [theme.breakpoints.down(theme.sm)]: {
      fontSize: "1rem",
      padding: "0 20px 25px",
    },
  },
  textGreyService: {
    maxWidth: "260px",
    margin: "0 auto !important",
    paddingBottom: "52px",
    [theme.breakpoints.down(theme.sm)]: {
      maxWidth: "initial",
      padding: "0 20px 52px",
    },
  },
  textGrey14: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: "21px",
    letterSpacing: " 0.1em",
    color: " #8B8B8B",
    textAlign: "center",
    [theme.breakpoints.down(theme.sm)]: {
      fontSize: "0.813rem",
    },
    [theme.breakpoints.down(theme.xs)]: {
      fontSize: "0.713rem",
    },
  },
  wrapperService: {
    background: "#FFFFFF",
    boxShadow: " 0px 25px 50px 25px #F7F7FF",
    borderRadius: "42px",
    marginBottom: "50px",
    [theme.breakpoints.down(theme.sm)]: {
      width: "100%",
      textAlign: "center",
    },
  },
  listWrapService: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "0 0 134.4px",
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0 0 134.4px",
      justifyContent: "space-evenly",
    },
    [theme.breakpoints.down(theme.sm)]: {
      padding: "0",
    },
  },
  flexButton: {
    "& .text": {
      color: "#8B8B8B",
      textTransform: "capitalize",
      fontSize: "1rem",
      fontWeight: "600",
      [theme.breakpoints.down(theme.sm)]: {
        fontSize: "0.9rem",
      },
    },
  },
  flexAbout: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 0 147px",
    [theme.breakpoints.down(theme.xl)]: {
      display: "block",
      textAlign: "center",
    },
    // [theme.breakpoints.down(theme.lg)]: {
    //   padding: "0 20px",
    // },
  },
  imgAboutUs: {
    height: "100%",
    boxShadow: " 0px 0px 50px 25px #FFFFFF",
    borderRadius: "50px",
    marginTop: "24.56px",
    [theme.breakpoints.down(theme.lg)]: {
      margin: "44.56px 0 40px 0",
      maxWidth: "90%",
    },
  },
  textAboutBlur: {
    fontFamily: "Poppins",
    fontWeight: 400,
    letterSpacing: "0.1em",
    color: "#8B8B8B",
    fontFamily: "Poppins",
    maxWidth: "483px",
    paddingBottom: "49px",
    [theme.breakpoints.down(theme.xl)]: {
      maxWidth: "initial",
    },
  },
  doubleButton: {
    [theme.breakpoints.down(theme.xs)]: {
      display: "block",
      textAlign: "center",
    },
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
      fontSize: "1rem",
      textTransform: "capitalize",
      [theme.breakpoints.down(theme.sm)]: {
        fontSize: "0.9rem",
      },
      [theme.breakpoints.down(theme.xs)]: {
        margin: "0 0 20px 0",
        width: "100%",
      },
    },
  },
  paddingWidthProfess: {
    paddingBottom: "87px",
    [theme.breakpoints.down(theme.sm)]: {
      paddingBottom: "0",
    },
  },
  imgProfess: {
    padding: "0 0 144px",
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0",
    },
    [theme.breakpoints.down(theme.sm)]: {
      // padding: "0 20px",
    },
    // [theme.breakpoints.down(theme.xl)]: {
    //   paddingBottom: "0",
    // },
  },
  bgAbout: {
    backgroundImage: `url(${imageBgMid})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 45%",
  },
  bgContact: {
    backgroundImage: `url(${imageBgMid2})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 85%",
    paddingBottom: "58px",
  },
  toTop: {
    position: "fixed",
    bottom: "170px",
    right: "65px",
    cursor: "pointer",
  },
  wrap1440: {
    maxWidth: "1440px",
    margin: "0 auto",
  },
  wrapFlexAbout: {
    "& .textMainService": {
      color: "#FF64AE",
      fontWeight: 600,
      fontFamily: "Poppins",
      lineHeight: "125%",
      paddingBottom: "12px",
      fontSize: "1rem",
      [theme.breakpoints.down(theme.sm)]: {
        fontSize: "0.9rem",
      },
    },
    "& .textMainServiceBold": {
      fontFamily: "Poppins",
      color: "#091156",
      fontWeight: 600,
      fontSize: "2.25rem",
      maxWidth: "450px",
      paddingBottom: "22px",
      lineHeight: "1.3",
      [theme.breakpoints.down(theme.xl)]: {
        maxWidth: "initial",
      },
      [theme.breakpoints.down(theme.sm)]: {
        fontSize: "1.875rem",
      },
      [theme.breakpoints.down(theme.xs)]: {
        fontSize: "1.675rem",
      },
    },
    "& .textAboutBlur": {
      fontFamily: "Poppins",
      fontWeight: 400,
      letterSpacing: "0.1em",
      color: "#8B8B8B",
      fontFamily: "Poppins",
      maxWidth: "483px",
      paddingBottom: "49px",
      fontSize: "1rem",
      [theme.breakpoints.down(theme.xl)]: {
        maxWidth: "initial",
      },
      [theme.breakpoints.down(theme.md)]: {
        fontSize: "0.9rem",
        maxWidth: "initial",
      },
      [theme.breakpoints.down(theme.xs)]: {
        fontSize: "0.8rem",
      },
    },
  },
  pdTop125: {
    paddingTop: "50px",
    // [theme.breakpoints.down(theme.lg)]: {
    //   paddingTop: "40px",
    // },
    [theme.breakpoints.down(theme.xs)]: {
      paddingTop: "60px ",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="top" ref={ref} {...props} />;
});
const Home1 = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.scrollTo(0, 0);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        // maxWidth: "1519.2px",
        // margin: "0 auto",
        position: "relative",
      }}
    >
      <Box id="top" className={classes.fixPaddingHead}>
        <Box className={classes.fixPaddingHeader}>
          <Header open={open} handleClick={handleClickOpen} />
        </Box>
        <Box className={classes.wrapper}>
          <Box className={classes.wrap1440}>
            <Box className={`${classes.check} ${classes.pdTop125}`}>
              <Box className={classes.fixPadding}>
                <Typography
                  className={`${classes.wrapText} ${"textBoldBlue"} ${
                    classes.wrapTextBig
                  }`}
                >
                  Clinic & beauty consultant
                </Typography>
                <Typography
                  className={`${classes.wrapText} ${"textSmallBlue"}`}
                >
                  It is a long established fact that a reader will be by the
                  readable content of a page.
                </Typography>
                <Button className={"repsonBt"} variant="text">
                  More Details
                </Button>
              </Box>
              <img className={classes.img} src={persion} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.wrap1440}>
        <Box className={classes.flexBox}>
          <Box className={"check"}>
            <Box className={classes.selectBlur}></Box>
            <Box className={classes.selectBold}></Box>
            <Box className={classes.selectBlur}></Box>
          </Box>
        </Box>
      </Box>
      {/*  */}
      <Box className={classes.wrap1440}>
        <Box className={classes.textService}>
          <Typography className={"textMainService"}>Main Services</Typography>
          <Typography className={"textMainServiceBold"}>
            Learn services to focus on your beauty
          </Typography>
          <Typography className={"textMainServiceBlur"}>
            Porta rhoncus orci condimentum vitae lobortis eu dignissim non
            massa. Non parturient amet, feugiat tellus sagittis, scelerisque
            eget nulla turpis.
          </Typography>
        </Box>
      </Box>

      <Box className={classes.bgAbout}>
        <Box className={classes.wrapper}>
          <Box className={classes.wrap1440}>
            <Box className={classes.listWrapService}>
              <Box className={classes.wrapperService}>
                <img className={classes.ImgService} src={AnimationCheck} />
                <Typography className={classes.textServiceIn}>
                  <Box className={classes.textBold18}>Beauty consultation</Box>
                </Typography>
                <Typography className={classes.textGreyService}>
                  <Box className={classes.textGrey14}>
                    Non parturient amet, feugiat tellus sagittis, scelerisque
                    eget nulla turpis.
                  </Box>
                </Typography>
              </Box>

              <Box className={classes.wrapperService}>
                <img className={classes.ImgService} src={AnimationCheck} />
                <Typography className={classes.textServiceIn}>
                  <Box className={classes.textBold18}>Beauty consultation</Box>
                </Typography>
                <Typography className={classes.textGreyService}>
                  <Box className={classes.textGrey14}>
                    Non parturient amet, feugiat tellus sagittis, scelerisque
                    eget nulla turpis.
                  </Box>
                </Typography>
              </Box>

              <Box className={classes.wrapperService}>
                <img className={classes.ImgService} src={AnimationCheck} />
                <Typography className={classes.textServiceIn}>
                  <Box className={classes.textBold18}>Beauty consultation</Box>
                </Typography>
                <Typography className={classes.textGreyService}>
                  <Box className={classes.textGrey14}>
                    Non parturient amet, feugiat tellus sagittis, scelerisque
                    eget nulla turpis.
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.wrapper}>
          <Box className={classes.wrap1440}>
            <Box className={classes.flexAbout}>
              <Box className={classes.wrapFlexAbout}>
                <Typography className={"textMainService"}>About Us</Typography>
                <Typography className="textMainServiceBold">
                  We are the best beauty clinic
                </Typography>
                <Typography className={"textAboutBlur"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                  quam suscipit purus donec amet. Egestas volutpat facilisi eu
                  libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
                  tellus in suspendisse placerat.
                  <br />
                  <br /> Id dui erat sed quam tellus in purus. Pellentesque
                  congue fringilla cras tellus enim.
                </Typography>
                <Box className={classes.doubleButton}>
                  <Button
                    className={"buttonPinkLearn"}
                    sx={buttonPink}
                    variant="text"
                  >
                    Learn More
                  </Button>
                  <Button
                    className={classes.flexButton}
                    variant="text"
                    sx={buttonPlay}
                    size="large"
                  >
                    <img style={{ paddingRight: "13px" }} src={play} />
                    <Typography className="text">watch video</Typography>
                  </Button>
                </Box>
              </Box>
              <img className={classes.imgAboutUs} src={aboutUs} />
            </Box>

            <Box className={classes.paddingWidthProfess}>
              <TextProfessTeam />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.bgContact}>
        <Box className={classes.wrapper}>
          <Box className={classes.wrap1440}>
            <Box className={classes.imgProfess}>
              <InfoProfess />
            </Box>

            <Box>
              <ContactUs />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Footer />
      </Box>

      {offset > 0 && <Scroll />}

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <BlockNew handleClose={handleClose} />
      </Dialog>
    </Box>
  );
};

export default Home1;
