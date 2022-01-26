import { Box, Paper } from "@material-ui/core";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import Sofia from "https://fonts.googleapis.com/css?family=Sofia";
import useStyles from "./styles.js";

const FirstPage = () => {
  const ancient = "/images/kailash_temple.jpg";
  const medieval = "images/shiva_rana.jpg";
  const modern = "images/modern_india.jpg";
  const classes = useStyles();
  return (
    <>
      <Box className={classes.firstPage}>
        <Paper className={classes.logos}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid
              item
              flexDirection="column"
              alignItems="center"
              className={classes.image_container}
              xs={12}
              sm={12}
              md={5}
              // style={{ background: "none" }}
              elevation={10}
            >
              <Paper className={classes.ancient_image} elevation={10}>
                <Link to="/ancient/home">
                  <img className={classes.ancient_image} src={ancient} alt="" />
                </Link>
              </Paper>
              <Link to="/ancient/home">
                <Typography
                  variant="h2"
                  style={{ fontFamily: "Dancing script, cursive" }}
                >
                  Ancient
                </Typography>
              </Link>
            </Grid>

            <Grid
              item
              flexDirection="column"
              alignItems="center"
              className={classes.image_container}
              xs={12}
              sm={12}
              md={4}
            >
              <Paper className={classes.ancient_image} elevation={10}>
                <Link to="/medieval/home">
                  <img
                    className={classes.ancient_image}
                    src={medieval}
                    alt=""
                  />
                </Link>
              </Paper>
              <Link to="/medieval/home">
                <Typography
                  variant="h2"
                  style={{ fontFamily: "Dancing script, cursive" }}
                >
                  Medieval
                </Typography>
              </Link>
            </Grid>
            <Grid
              item
              flexDirection="column"
              alignItems="center"
              className={classes.image_container}
              xs={12}
              sm={5}
              md={5}
              elevation={10}
            >
              <Paper className={classes.ancient_image} elevation={10}>
                <Link to="/modern/home">
                  <img className={classes.ancient_image} src={modern} alt="" />
                </Link>
              </Paper>
              <Link to="/modern/home">
                <Typography
                  variant="h2"
                  style={{ fontFamily: "Dancing script, cursive" }}
                >
                  Modern
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default FirstPage;
