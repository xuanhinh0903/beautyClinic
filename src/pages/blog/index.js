import {
  Box,
  Slide,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import bgBlogTop from "../../images/background/bgBlogTop.svg";
import blogItem1 from "../../images/blog/blogItem1.svg";
import folder from "../../images/folder.svg";
import VectorWhite from "../../images/VectorWhite.svg";
import Header from "../../components/header";
import { Button, Dialog } from "@mui/material";
import iconPhone from "../../images/phoneVolume.svg";
import imgPost1 from "../../images/imgPost1.svg";
import facebook from "../../images/blog/facebook-f.svg";
import twitter from "../../images/blog/twitter.svg";
import instagram from "../../images/blog/instagram.svg";
import linkedin from "../../images/blog/linkedin-in.svg";
import Footer from "../../components/footer";
import Scroll from "../../components/scroll";
import * as React from "react";
import BlockNew from "../../components/blockNew";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="top" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
  BGTopBlog: {
    backgroundImage: `url(${bgBlogTop})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
    [theme.breakpoints.down(theme.xl)]: {
      backgroundSize: "auto",
    },
    "& .bgColor": {
      background: "rgba(9, 17, 86, 0.6)",
    },
  },
  wrap1440: {
    maxWidth: "1440px",
    margin: "0 auto",
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
  flexText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "121px 0 107px 0",
    marginTop: "2.25rem",
    marginBottom: "108px",
    "& .textBold": {
      fontSize: "2.25rem",
      fontWeight: "600",
      fontFamily: "Poppins",
      lineHeight: "125%",
      color: "#FFFFFF",
    },
    "& .textGrey": {
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "Poppins",
      lineHeight: "24px",
      color: "#D9D9D9",
    },
  },
  wrap70: {
    width: "calc((100% - 60px)*0.7)",
    [theme.breakpoints.down(theme.xl)]: {
      width: "100%",
    },
    "& .imgWrap70": {
      width: "100%",
      verticalAlign: "middle",
    },
  },
  wrap30: {
    width: "calc((100% - 60px)*0.3)",
    [theme.breakpoints.down(theme.xl)]: {
      width: "100%",
      // margin: "0 auto",
    },
  },
  flexBlock: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(theme.xl)]: {
      display: "block",
    },
  },
  blockWrap70: {
    "& .blockBottom": {
      padding: "59px 62px 100px 76px",
      background: "#FFFFFF",
      boxShadow: "10px 13px 80px 14px #F2F4FF",
      borderRadius: "0px 0px 50px 50px",
      marginBottom: "133px",
      [theme.breakpoints.down(theme.xl)]: {
        textAlign: "center",
      },
      [theme.breakpoints.down(theme.md)]: {
        marginBottom: "50px",
        textAlign: "center",
        padding: "30px",
      },
      "& .blockFolder": {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down(theme.xl)]: {
          justifyContent: "center",
          paddingBottom: "20px",
        },
        "& .imgFolder": {
          paddingRight: "15px",
        },
        "& .textPink": {
          color: "#FF64AE",
          fontWeight: 600,
          fontFamily: "Poppins",
          lineHeight: "125%",
        },
      },
      "& .textBottomBold": {
        fontFamily: "Poppins",
        color: "#091156",
        fontWeight: 600,
        fontSize: "2.25rem",
        lineHeight: "125%",
        maxWidth: "600px",
        [theme.breakpoints.down(theme.xl)]: {
          maxWidth: "inherit",
          textAlign: "center",
          paddingBottom: "20px",
        },
      },
      "& .textBottomBlur": {
        fontWeight: 400,
        letterSpacing: "0.1em",
        color: "#8B8B8B",
        fontFamily: "Poppins",
        maxWidth: "592px",
        paddingBottom: "12px",
        fontSize: "1rem",
        [theme.breakpoints.down(theme.xl)]: {
          paddingBottom: "20px",
          maxWidth: "inherit",
        },
      },
      "& .buttonPinkLearn": {
        margin: "0 44px 0 0",
        padding: "0",
        display: "flex",
        width: "226px",
        height: "58px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF64AE",
        color: "#fff",
        borderRadius: "50px",
        fontFamily: "Poppins",
        [theme.breakpoints.down(theme.xl)]: {
          margin: "0",
          width: "100%",
        },
        "& .imgIcon": {
          paddingLeft: "10px",
        },
      },
    },
  },
  blockInsert: {
    position: "relative",
    marginBottom: "76px",
    [theme.breakpoints.down(theme.xl)]: {
      width: "100%",
      marginBottom: "40px",
    },
    "& .button": {
      position: "absolute",
      right: "0",
      height: "100%",
      backgroundColor: "#172176",
      borderRadius: "0 25px 25px 0",

      "& img": {
        padding: "20px",
      },
      "&:hover": {
        backgroundColor: "#081790",
      },
    },
    "& .input": {
      width: "90%",
      borderRadius: "25px",
      backgroundColor: "#FFFFFF",
      [theme.breakpoints.down(theme.xl)]: {
        width: "100%",
      },
      [theme.breakpoints.down(theme.sm)]: {
        position: "inherit",
        width: "100%",
      },
      "& label": {
        color: "8B8B8B",
        fontFamily: "Poppins",
        fontSize: "1rem",
      },
      "& fieldset": {
        border: "1px solid #D9DDFE",
        borderRadius: "25px",
        "& legend:focus": {
          padding: "0 10px",
        },
        "&:hover": {
          backgroundColor: "red",
          border: "1px solid #D9DDFE",
        },
      },
    },
  },
  hei100: {
    [theme.breakpoints.down(theme.xl)]: {
      height: "100%",
    },
  },
  blockwrap30: {
    backgroundColor: "#FFFFFF",
    boxShadow: "-2px 4px 31px 9px #F2F4FF",
    borderRadius: "25px",
    padding: "58px 30px 65px 49px",
    marginBottom: "83px",
    cursor: "pointer",
    [theme.breakpoints.down(theme.sm)]: {
      padding: "20px",
    },
    [theme.breakpoints.down(theme.xl)]: {
      marginBottom: "40px",
    },
    "& .listSocial": {
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.down(theme.md)]: {
        justifyContent: "space-evenly",
      },
      "& .blockSocial": {
        width: "43px",
        height: "43px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#FFFFFF",
        boxShadow: "0px 4px 19px 11px #F6F7FF",
        borderRadius: "50%",
      },
    },
    "& .textBold": {
      fontFamily: "Poppins",
      color: "#091156",
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "125%",
      paddingBottom: "30px",
      [theme.breakpoints.down(theme.md)]: {
        textAlign: "center",
      },
    },
    "& .wrapListOption": {
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.down(theme.md)]: {
        justifyContent: "center",
      },
      "& .paddingTop35": {
        marginTop: "24px",
      },
      "& .wrapItemtOption ": {
        width: "82px",
        height: "26px",
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: "0.875rem",
        lineHeight: "21px",
        textAlign: "center",
        letterSpacing: "0.1em",
        color: "#8B8B8B",
        background: "#FFFFFF",
        boxShadow: " 0px 4px 17px #EEF0FF",
        borderRadius: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    "& .textBoldCategory": {
      fontFamily: "Poppins",
      color: "#091156",
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "125%",
      paddingBottom: "22px",
      [theme.breakpoints.down(theme.md)]: {
        textAlign: "center",
      },
    },
    "& .textGreyCategory": {
      fontWeight: 400,
      letterSpacing: "0.1em",
      color: "#8B8B8B",
      fontFamily: "Poppins",
      fontSize: "0.875rem",
      lineHeight: "20px",
      paddingBottom: "3px",
      [theme.breakpoints.down(theme.md)]: {
        textAlign: "center",
      },
    },
    "& .wrapInfo": {
      display: "flex",
      marginBottom: "26px",
      [theme.breakpoints.down(theme.md)]: {
        justifyContent: "center",
      },

      "& .imgChild30": {
        paddingRight: "26px",
      },
      "& .blockChildRight": {
        "& .textPink": {
          color: "#FF64AE",
          fontWeight: 600,
          fontFamily: "Poppins",
          lineHeight: "21px",
          fontSize: "0.875rem",
          paddingBottom: "5px",
        },
        "& .textGrey": {
          fontWeight: 400,
          letterSpacing: "0.1em",
          color: "#8B8B8B",
          fontFamily: "Poppins",
          maxWidth: "160px",
          fontSize: "0.75rem",
          lineHeight: "18px",
        },
      },
    },
  },
  wrapAll30: {
    [theme.breakpoints.down(theme.xl)]: {
      display: "flex",
      justifyContent: "space-evenly",
      height: "100%",
    },
    [theme.breakpoints.down(theme.md)]: {
      display: "block",
    },
  },
}));
const Blog = () => {
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
    <Box>
      <Header handleClick={handleClickOpen} />

      <Box className={classes.BGTopBlog}>
        <Box className={"bgColor"}>
          <Box className={classes.wrapper}>
            <Box className={classes.wrap1440}>
              <Box className={classes.flexText}>
                <Typography className="textBold">Blog</Typography>
                <Typography className="textGrey">Home • Blog</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.wrapper}>
        <Box className={classes.wrap1440}>
          <Box className={classes.flexBlock}>
            <Box className={classes.wrap70}>
              <Box className={classes.blockWrap70}>
                <img className={"imgWrap70"} src={blogItem1} />
                <Box className={"blockBottom"}>
                  <Box className={"blockFolder"}>
                    <img className={"imgFolder"} src={folder} />
                    <Typography className={"textPink"}>Consultation</Typography>
                  </Box>
                  <Typography className={"textBottomBold"}>
                    How much does a consultation cost at our clinic?
                  </Typography>
                  <Typography className={"textBottomBlur"}>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the…
                  </Typography>
                  <Button
                    className={"buttonPinkLearn"}
                    // sx={buttonPink}
                    variant="text"
                  >
                    Read More
                    <img className="imgIcon" src={VectorWhite} />
                  </Button>
                </Box>
              </Box>

              <Box className={classes.blockWrap70}>
                <img className={"imgWrap70"} src={blogItem1} />
                <Box className={"blockBottom"}>
                  <Box className={"blockFolder"}>
                    <img className={"imgFolder"} src={folder} />
                    <Typography className={"textPink"}>Consultation</Typography>
                  </Box>
                  <Typography className={"textBottomBold"}>
                    How much does a consultation cost at our clinic?
                  </Typography>
                  <Typography className={"textBottomBlur"}>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the…
                  </Typography>
                  <Button
                    className={"buttonPinkLearn"}
                    // sx={buttonPink}
                    variant="text"
                  >
                    Read More
                    <img className="imgIcon" src={VectorWhite} />
                  </Button>
                </Box>
              </Box>

              <Box className={classes.blockWrap70}>
                <img className={"imgWrap70"} src={blogItem1} />
                <Box className={"blockBottom"}>
                  <Box className={"blockFolder"}>
                    <img className={"imgFolder"} src={folder} />
                    <Typography className={"textPink"}>Consultation</Typography>
                  </Box>
                  <Typography className={"textBottomBold"}>
                    How much does a consultation cost at our clinic?
                  </Typography>
                  <Typography className={"textBottomBlur"}>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the…
                  </Typography>
                  <Button
                    className={"buttonPinkLearn"}
                    // sx={buttonPink}
                    variant="text"
                  >
                    Read More
                    <img className="imgIcon" src={VectorWhite} />
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box className={classes.wrap30}>
              <Box id="hihi" className={classes.blockInsert}>
                <TextField
                  id="outlined-basic"
                  label="Search here ..."
                  variant="outlined"
                  className="input"
                />
                <Button className="button">
                  <img src={iconPhone} />
                </Button>
              </Box>

              <Box id="all" className={`${classes.wrapAll30} `}>
                <Box className={`${classes.blockwrap30} ${classes.hei100}`}>
                  <Typography className={"textBold"}>Recent Posts</Typography>
                  <Box className={"wrapInfo"}>
                    <img className={"imgChild30"} src={imgPost1} />
                    <Box className="blockChildRight">
                      <Typography className={"textPink"}>
                        01 jan 2021
                      </Typography>
                      <Typography className={"textGrey"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                      </Typography>
                    </Box>
                  </Box>

                  <Box className={"wrapInfo"}>
                    <img className={"imgChild30"} src={imgPost1} />
                    <Box className="blockChildRight">
                      <Typography className={"textPink"}>
                        01 jan 2021
                      </Typography>
                      <Typography className={"textGrey"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                      </Typography>
                    </Box>
                  </Box>

                  <Box className={"wrapInfo"}>
                    <img className={"imgChild30"} src={imgPost1} />
                    <Box className="blockChildRight">
                      <Typography className={"textPink"}>
                        01 jan 2021
                      </Typography>
                      <Typography className={"textGrey"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box className={classes.blockBottom30}>
                  <Box className={classes.blockwrap30}>
                    <Typography className={"textBoldCategory"}>
                      Categories
                    </Typography>
                    <Typography className="textGreyCategory">
                      Consultation
                    </Typography>
                    <Typography className="textGreyCategory">Beauty</Typography>
                    <Typography className="textGreyCategory">
                      Treatments
                    </Typography>
                    <Typography className="textGreyCategory">News</Typography>
                  </Box>
                  <Box className={classes.blockwrap30}>
                    <Typography className={"textBoldCategory"}>
                      Cloud Tags
                    </Typography>
                    <Box className={"wrapListOption"}>
                      <Typography className={"wrapItemtOption"}>
                        beauty
                      </Typography>
                      <Typography className={"wrapItemtOption"}>
                        beauty
                      </Typography>
                      <Typography className={"wrapItemtOption"}>
                        beauty
                      </Typography>
                    </Box>
                    <Box className={"wrapListOption"}>
                      <Typography className={"wrapItemtOption paddingTop35"}>
                        beauty
                      </Typography>
                      <Typography className={"wrapItemtOption paddingTop35"}>
                        beauty
                      </Typography>
                      <Typography className={"wrapItemtOption paddingTop35"}>
                        beauty
                      </Typography>
                    </Box>
                    <Box className={"wrapListOption"}>
                      <Typography className={"wrapItemtOption paddingTop35"}>
                        beauty
                      </Typography>
                      <Typography className={"wrapItemtOption paddingTop35"}>
                        beauty
                      </Typography>
                      <Typography className={"wrapItemtOption paddingTop35"}>
                        beauty
                      </Typography>
                    </Box>
                  </Box>

                  <Box className={classes.blockwrap30}>
                    <Typography className={"textBoldCategory"}>
                      Social Connect
                    </Typography>
                    <Box className={"listSocial"}>
                      <Box className={"blockSocial"}>
                        <img src={facebook} />
                      </Box>

                      <Box className={"blockSocial"}>
                        <img src={twitter} />
                      </Box>

                      <Box className={"blockSocial"}>
                        <img src={instagram} />
                      </Box>

                      <Box className={"blockSocial"}>
                        <img src={linkedin} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
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

export default Blog;
