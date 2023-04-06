import { makeStyles, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../header";
import HeaderModal from "../headerModal";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#e4e7ff",
    opacity: "0.95",
    "& .link": {
      textDecoration: "none",
      color: "#091156",
      "& .text": {
        padding: "25px 0",
        cursor: "pointer",
        fontSize: "1.5rem",
        fontWeight: "700",
        textAlign: "center",
        "&:hover": {
          backgroundColor: "#091156",
          color: "#e4e7ff",
        },
      },
    },
  },
}));

const BlockNew = (props) => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.wrapper}>
        <HeaderModal handleClose={props.handleClose} />
        <Link className="link" to={"/"}>
          <Typography className="text">Home</Typography>
        </Link>
        {/* <Link className="link" to={"/home2"}>
        <Typography className="text">Home +</Typography>
      </Link> */}
        <Link className="link" to={"/about"}>
          <Typography className="text">About</Typography>
        </Link>
        <Link className="link" to={"/service"}>
          <Typography className="text">Service</Typography>
        </Link>
        <Link className="link" to={"/gallery"}>
          <Typography className="text">Gallery</Typography>
        </Link>
        <Link className="link" to={"/contact"}>
          <Typography className="text">Contact</Typography>
        </Link>
        <Link className="link" to={"/blog"}>
          <Typography className="text">Blog</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default BlockNew;
