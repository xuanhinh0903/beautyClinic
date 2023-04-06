import { makeStyles, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import imageBG1 from "../../images/imgProfess/imagepersion1.svg";
import imageBG2 from "../../images/imgProfess/imagepersion2.svg";
import imageBG3 from "../../images/imgProfess/imagepersion3.svg";
import imageIcon1 from "../../images/imgProfess/icon/Twitter.svg";
import imageIcon2 from "../../images/imgProfess/icon/Instagram.svg";
import imageIcon3 from "../../images/imgProfess/icon/Instagram.svg";
import locate from "../../images/contact/locate.svg";
import mail from "../../images/contact/mail.svg";
import phone from "../../images/contact/phone.svg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(theme.xl)]: {
      display: "block",
    },
  },
  imgDouble: {
    padding: "91px 62px 53px",
    [theme.breakpoints.down(theme.sm)]: {
      padding: "91px 50px 53px",
    },
  },
  imgOne: {
    padding: "91px 139px 53px",
    [theme.breakpoints.down(theme.xl)]: {
      padding: "70px",
    },
    [theme.breakpoints.down(theme.xs)]: {
      padding: "50px",
    },
  },
  textPink: {
    fontSize: "1rem",
    fontWeight: "600",
    lineHeight: "125%",
    color: "#FF64AE",
    fontFamily: "Poppins",
    paddingBottom: "15px",
    [theme.breakpoints.down(theme.xl)]: {
      fontSize: "1.25rem",
    },
    [theme.breakpoints.down(theme.sm)]: {
      fontSize: "1rem",
    },
  },
  textBold: {
    fontSize: "1.125rem",
    fontWeight: "600",
    lineHeight: "173%",
    color: "#091156",
    fontFamily: "Poppins",
    paddingBottom: "6px",
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0 34px 10px",
      fontSize: "22px",
    },
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0 20px 10px",
    },
  },
  textgray: {
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "21px",
    color: "#8B8B8B",
    fontFamily: "Poppins",
    paddingBottom: "50px",
    maxWidth: "270px",
    margin: "0 auto",
    [theme.breakpoints.down(theme.xl)]: {
      maxWidth: "initial",
      padding: "0 20px 30px",
      fontSize: "1.125rem",
    },
    [theme.breakpoints.down(theme.sm)]: {
      maxWidth: "initial",
      padding: "0 20px 30px",
      fontSize: "1rem",
    },
  },
  blockCenter: {
    textAlign: "center",
  },
  blockMid: {
    background: "#FFFFFF",
    boxShadow: "0px 25px 50px 25px #F7F7FF",
    borderRadius: "42px",
  },
  paddingBot: {
    paddingBottom: "96px",
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0",
    },
  },
  wrap1440: {
    maxWidth: "1440px",
    margin: "0 auto",
  },
}));
const ContactForm = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap1440}>
      <Box className={classes.wrapper}>
        {/* số lượng */}
        <Box className={classes.blockCenter}>
          <img className={classes.imgDouble} src={locate} />
          <Typography className={classes.textPink}>Address</Typography>
          <Typography className={classes.textBold}>
            101 Baker Street, NY
          </Typography>
          <Typography className={classes.textgray}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </Typography>
        </Box>

        <Box className={`${classes.blockCenter} ${classes.blockMid}`}>
          <img className={classes.imgOne} src={phone} />
          <Typography className={classes.textPink}>Phone</Typography>
          <Typography className={classes.textBold}>+896 120 5889</Typography>
          <Typography className={classes.textgray}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </Typography>
        </Box>

        <Box className={classes.blockCenter}>
          <img className={classes.imgDouble} src={mail} />
          <Typography className={classes.textPink}>Mail</Typography>
          <Typography className={classes.textBold}>mail@company.com</Typography>
          <Typography className={classes.textgray}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
