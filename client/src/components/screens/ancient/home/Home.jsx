import { Box } from "@material-ui/core";
import React from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import { ancient_headings } from "../../../../assets/data/data.js";
import useStyles from "./styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Headings from "./Headings";
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.component}>
        <Header />
        <Navbar />
        <Box className={classes.container}>
          {ancient_headings.map((item) => (
            <Headings heading_name={item} />
          ))}
          {/* <Headings heading_name="Mesolithic Age" />
          <Headings heading_name="Neolithic Age" />
          <Headings heading_name="Indus Valley Civilization" />
          <Headings heading_name="Chalcolithic Age" />
          <Headings heading_name="Iron Age" />
          <Headings heading_name="Empires at a glance" />
          <Headings heading_name="Cholas" />
          <Headings heading_name="Pandyas" />
          <Headings heading_name="Gupta" />
          <Headings heading_name="Post Gupta" />
          <Headings heading_name="Gupta" /> */}
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
          <Typography>Hello from content container</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
