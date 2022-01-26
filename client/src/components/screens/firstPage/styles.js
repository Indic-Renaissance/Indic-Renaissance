// import { AutorenewTwoTone } from "@material-ui/icons";

import { makeStyles } from "@material-ui/styles";
const background__home = "images/first_page_background.jpg";
const useStyles = makeStyles({
  firstPage: {
    height: "78vh",
    backgroundImage: background__home,
    backgroundSize: "100%",
  },
  logos: {
    marginTop: "10%",
    background: "inherit",
    boxShadow: "none",
    alignItems: "center",
  },
  image_container: {
    // height: "150px !important",
    // width: "150px !important",
    background: "none",
    margin: "20%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  ancient_image: {
    height: "150px",
    width: "150px",
    // margin: "5%",
    borderRadius: "50%",
  },
});
// const useStyles = makeStyles((theme) => ({

// }));

export default useStyles;
