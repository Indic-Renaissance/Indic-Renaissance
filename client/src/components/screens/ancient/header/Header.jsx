import { Search } from "@material-ui/icons";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
const Header = () => {
  const classes = useStyles();
  return (
    <div classname={classes.head}>
      {/* <Box className={classes.header}>Indic Renaissance</Box> */}
      <AppBar>
        <Toolbar className={classes.header}>
          <Box className={classes.left}></Box>
          <Box className={classes.middle}>
            <Typography>Indic Renaissance</Typography>
          </Box>
          <Box className={classes.right}>
            <Search />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
