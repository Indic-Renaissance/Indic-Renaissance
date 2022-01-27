import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles({
  navbar__component: {
    height: "100%",
    position: "fixed",
    backgroundColor: "rgb(8, 22, 39)",
    width: "301px",
    maxWidth: "301px",
    display: "flex",
    flexDirection: "column",
    zIndex: "11100",
  },
  navbar__lists: {
    marginTop: 64,
    backgroundColor: "#101F33",
    color: "white",
    width: "100%",
    "& > *": {
      marginLeft: 10,
    },
  },
});
