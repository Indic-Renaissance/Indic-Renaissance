import { Box } from "@mui/system";
import { medieval_navbar } from "../../../../assets/data/data";
import { useStyle } from "./styles";
const Navbar = () => {
  const classes = useStyle();
  return (
    <Box className={classes.navbar__component}>
      <Box className={classes.navbar__lists}>
        {medieval_navbar.map((item) => (
          <p>{item}</p>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
