import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import useStyles from "./styles";
const Headings = ({ heading_name }) => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Card
          className={classes.headings}
          sx={{ minWidth: 305 }}
          elevation={10}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/images/ram_mandir_banner.jpg"
              alt="green iguana"
            />
            <CardContent
              style={{ textAlign: "center", display: "flex", flexWrap: "wrap" }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {heading_name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default Headings;
