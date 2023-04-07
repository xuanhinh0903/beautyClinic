import { makeStyles } from "@material-ui/core";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    "& .textPink16": {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: "1rem",
      lineHeight: "125%",
      color: "#FF64AE",
      paddingBottom: "12px",
      [theme.breakpoints.down(theme.md)]: {
        fontSize: "0.9rem",
      },
      [theme.breakpoints.down(theme.md)]: {
        fontSize: "0.8rem",
      },
    },

    "& .textBlueBold": {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: "2.25rem",
      lineHeight: "125%",
      color: "#091156",
      paddingBottom: "12px",
      [theme.breakpoints.down(theme.md)]: {
        fontSize: "1.875rem",
      },
      [theme.breakpoints.down(theme.md)]: {
        fontSize: "1.5rem",
      },
    },
    "& .textGrey": {
      fontFamily: "Poppins",
      fontWeight: "400",
      fontSize: "1rem",
      lineHeight: "24px",
      color: "#8B8B8B",
      [theme.breakpoints.down(theme.md)]: {
        fontSize: "0.875rem",
      },
    },
  },
}));

const TextProfessTeam = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={"textPink16"}>Professional Teams</Typography>
      <Typography className={"textBlueBold"}>
        The Professional expert
      </Typography>
      <Typography className={"textGrey"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
      </Typography>
    </Box>
  );
};

export default TextProfessTeam;
