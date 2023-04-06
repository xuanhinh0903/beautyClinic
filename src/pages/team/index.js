import { Box, Dialog, Slide, Typography, makeStyles } from "@material-ui/core";
import team1 from "../../images/team/team1.svg";
import team2 from "../../images/team/item2.svg";
import team3 from "../../images/team/item3.svg";
import Star from "../../images/team/Star.svg";
import arrowLeft from "../../images/team/arrowLeft.svg";
import * as React from "react";
import arrowRight from "../../images/team/arrowRight.svg";
import persionItem from "../../images/team/persionItem.svg";
import Header from "../../components/header";
import bgGallery from "../../images/background/bgGallery.svg";
import round from "../../images/component2/iconPlay/round.svg";
import BgItem from "../../images/background/BgItem.svg";
import InfoProfess from "../../components/infoProfess";
import Footer from "../../components/footer";
import Scroll from "../../components/scroll";
import BlockNew from "../../components/blockNew";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: "125px 0 93px 0",
    maxWidth: "1440px",
    margin: "0 auto",
    "& .padding61": {
      padding: "61px 0",
    },
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
      paddingBottom: "12px",
    },
    "& .textGrey": {
      fontFamily: "Poppins",
      fontWeight: "400",
      fontSize: "1rem",
      lineHeight: "24px",
      color: "#8B8B8B",
    },
  },
  wrapper: {
    padding: "0 150px",
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0 34px",
    },
    [theme.breakpoints.down(theme.lg)]: {
      padding: "0 20px",
    },
  },
  wrap1440: {
    maxWidth: "1440px",
    margin: "0 auto",
  },
  imgPlay: {
    height: "100%",
    cursor: "pointer",
    [theme.breakpoints.down(theme.lg)]: {
      width: "100%",
      paddingBottom: "30px",
    },
  },
  doubleButton: {
    maxWidth: "475px",
    [theme.breakpoints.down(theme.lg)]: {
      display: "block",
      textAlign: "center",
      margin: "0 auto",
    },
    "& .textAboutBoldblueClient": {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: "2.25rem",
      lineHeight: "110%",
      color: "#091156",
      paddingBottom: "24px",
    },
    "& .textAbout": {
      color: "#FF64AE",
      fontWeight: 600,
      fontFamily: "Poppins",
      lineHeight: "125%",
      paddingBottom: "12px",
    },
    "& .textAboutBlurGray": {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "24px",
      letterSpacing: "0.1em",
      color: "#8B8B8B",
      paddingBottom: "9px",
    },
    "& .flexTextMore": {
      display: "flex",
      "& .textMore": {
        color: "#091156",
        fontSize: "1rem",
        fontFamily: "Poppins",
        fontWeight: "600",
        paddingRight: "15px",
        cursor: "pointer",
      },
      [theme.breakpoints.down(theme.lg)]: {
        justifyContent: "center",
      },
    },
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "79px",
    [theme.breakpoints.down(theme.lg)]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down(theme.sm)]: {
      paddingBottom: "40px",
    },
  },
  blockInfo: {
    [theme.breakpoints.down(theme.lg)]: {
      textAlign: "center",
    },
    "& .blockInfoTop": {
      display: "flex",
      alignItems: "center",
      paddingBottom: "20px",
      [theme.breakpoints.down(theme.lg)]: {
        justifyContent: "center",
      },
      "& .textInfoBold": {
        fontSize: "1.125rem",
        color: "#091156",
        fontFamily: "Poppins",
        fontWeight: "600",
        lineHeight: "125%",
      },
      "& .textInfoItalic": {
        fontSize: "0.875rem",
        color: "#8B8B8B",
        fontFamily: "Poppins",
        fontWeight: "400",
        lineHeight: "125%",
        fontStyle: "italic",
      },
    },
    "& .blockTextGrey": {
      fontSize: "1rem",
      color: "#8B8B8B",
      fontFamily: "Poppins",
      fontWeight: "400",
      lineHeight: "24px",
      letterSpacing: "0.1em",
      maxWidth: "434px",
    },
  },
  bgPlay: {
    backgroundImage: `url(${bgGallery})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    marginTop: "46px",
    [theme.breakpoints.down(theme.xl)]: {
      backgroundSize: "auto 100%",
    },
    "& .bgPlayColor": {
      background: "rgba(9, 17, 86, 0.6)",
      padding: "200px 0",
      [theme.breakpoints.down(theme.xl)]: {
        padding: "140px 0",
      },
    },
  },
  flexAbout: {
    // display: "flex",
    // justifyContent: "space-between",
    [theme.breakpoints.down(theme.xl)]: {
      display: "block",
      alignItems: "center",
      paddingBottom: "0",
    },
  },
  flexAboutChild: {
    [theme.breakpoints.down(theme.xl)]: {
      paddingBottom: "35px",
      textAlign: "center",
    },
    "& .textAboutBold": {
      fontFamily: "Poppins",
      color: "#FFFFFF",
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: "125%",
      maxWidth: "500px",
      margin: "0 auto",
      textAlign: "center",
      [theme.breakpoints.down(theme.xl)]: {
        maxWidth: "inherit",
      },
    },
    "& .textAboutBlur": {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "27px",
      letterSpacing: "0.1em",
      color: " #CACACA",
      margin: "0 auto",
      maxWidth: "650px",
      textAlign: "center",
      [theme.breakpoints.down(theme.xl)]: {
        maxWidth: "initial",
      },
    },
  },
  wrapPlayIcon: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    justifyContent: "center",
    [theme.breakpoints.down(theme.xl)]: {
      justifyContent: "center",
    },

    "& .round": {
      backgroundImage: `url(${round})`,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      width: "127px",
      height: "127px",
      position: "relative",
      "& .playRound": {
        position: "absolute",
        transform: "translate(60%,-50%)",
        top: "50%",
        right: "50%",
      },
      [theme.breakpoints.down(theme.xs)]: {
        width: "100px",
        height: "100px",
      },
    },
    "& .textPlay": {
      fontFamily: "Poppins",
      color: "#FFFFFF",
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "24px",
      letterSpacing: "0.1em",
    },
  },
  blockSlideRate: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .blockStar": {
      "& .textStar": {
        maxWidth: "544px",
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: "0.875rem",
        lineHeight: "21px",
        letterSpacing: "0.1em",
        color: "#8B8B8B",
        textAlign: "center",
        margin: "0 92px 35px",
        [theme.breakpoints.down(theme.sm)]: {
          maxWidth: "95%",
          margin: "0 auto",
        },
      },
    },
    "& .cursor": {
      cursor: "pointer",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="top" ref={ref} {...props} />;
});
const Team = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
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
    <Box>
      <Header handleClick={handleClickOpen} />

      <Box className={classes.wrapper}>
        <Box className={classes.root}>
          <Typography className={"textPink16"}>Our Services</Typography>
          <Typography className={"textBlueBold"}>
            We focus on your beauty
          </Typography>
          <Typography className={"textGrey"}>
            Lorem ipsum dolor sit amet
          </Typography>
        </Box>
      </Box>

      <Box className={classes.wrapper}>
        <Box className={classes.wrap1440}>
          <Box className={classes.imgProfess}>
            <InfoProfess />
          </Box>
        </Box>
      </Box>

      <Box className={classes.wrapper}>
        <Box className={classes.root}>
          <Typography className={"textPink16"}>Assistance Team</Typography>
          <Typography className={"textBlueBold"}>
            Meet the pro assistance
          </Typography>
          <Typography className={"textGrey"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </Typography>
        </Box>
      </Box>

      <Box className={classes.wrapper}>
        <Box className={classes.wrap1440}>
          <Box className={classes.flex}>
            <img className={classes.imgPlay} src={team1} />
            <Box className={classes.blockInfo}>
              <Box className="blockInfoTop">
                <Typography className="textInfoBold">Lina Gustav / </Typography>
                <Typography className="textInfoItalic">Pharmacist</Typography>
              </Box>
              <Typography className="blockTextGrey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
                magnis at placerat pulvinar euismod neque.
              </Typography>
            </Box>
          </Box>

          <Box className={classes.flex}>
            <img className={classes.imgPlay} src={team2} />
            <Box className={classes.blockInfo}>
              <Box className="blockInfoTop">
                <Typography className="textInfoBold">Adam White / </Typography>
                <Typography className="textInfoItalic">Finance</Typography>
              </Box>
              <Typography className="blockTextGrey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
                magnis at placerat pulvinar euismod neque.
              </Typography>
            </Box>
          </Box>

          <Box className={classes.flex}>
            <img className={classes.imgPlay} src={team3} />
            <Box className={classes.blockInfo}>
              <Box className="blockInfoTop">
                <Typography className="textInfoBold">Jane Doe / </Typography>
                <Typography className="textInfoItalic">Marketer</Typography>
              </Box>
              <Typography className="blockTextGrey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
                magnis at placerat pulvinar euismod neque.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.bgPlay}>
        <Box className="bgPlayColor">
          <Box className={classes.wrapper}>
            <Box className={classes.flexAbout}>
              <Box className={classes.flexAboutChild}>
                <Typography className={"textAboutBold"}>
                  Customer satisfaction is our main goal
                </Typography>
                <Typography className={"textAboutBlur"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.wrapper}>
        <Box className={classes.root}>
          <Typography className={"textPink16"}>Our Testimonials</Typography>
          <Typography className={"textBlueBold"}>
            What our customer says
          </Typography>
          <Typography className={"textGrey"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </Typography>

          <img className="padding61" src={persionItem} />

          <Box className={classes.blockSlideRate}>
            <img className="cursor" src={arrowLeft} />
            <Box className={"blockStar"}>
              <Typography className="textStar">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus metus tincidunt laoreet ultricies condimentum ac
                integer aliquam. Lorem diam dignissim amet fermentum elementum
                dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut.
                Purus volutpat in turpis gravida blandit.
              </Typography>
              <img src={Star} />
            </Box>
            <img className="cursor" src={arrowRight} />
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

export default Team;
