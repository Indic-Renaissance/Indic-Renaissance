import { makeStyles } from "@material-ui/core";
const banner = "images/ram_mandir_banner.jpg";
const useStyles = makeStyles({
  component: {
    display: "flex",
    justifyItems: "center",
    margin: "0 auto",
  },
  container: {
    height: "100%",
    width: "100%",
    margin: "64px 0 0 300px",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "rgba(233, 226, 226, 0.789)",
  },
  header: {
    backgroundColor: "white",
    color: "black",
    display: "flex",
    justifyContent: "space-between",
  },
  headings: {
    margin: 20,
  },
});

export default useStyles;
