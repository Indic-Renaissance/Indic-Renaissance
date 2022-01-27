import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  head: {
    marginLeft: "301px",
  },
  header: {
    backgroundColor: "white",
    color: "black",
    display: "flex",
    // marginLeft: "301px",
    boxShadow: "none",
  },
  left: {
    width: "40%",
  },
  middle: {
    width: "50%",
  },
  right: {
    // width: "30%",
    float: "right",
  },
  [theme.breakpoints.down]: {
    header: {
      justifyContent: "space-between !important",
    },
  },
}));

export default useStyles;
