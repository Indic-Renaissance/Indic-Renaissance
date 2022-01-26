import { Box } from "@mui/system";
import { useStyle } from "./styles";
const Navbar = () => {
  const classes = useStyle();
  return (
    <Box className={classes.navbar__component}>
      <Box className={classes.navbar__lists}>
        <p>Paleolithic Age</p>
        <p>Mesolithic Age</p>
        <p>Neolithic Age</p>
        <p>Empires</p>
        <p>Great Personalities</p>
        <p>Scientists & Saints</p>
        <p>Empires</p>
      </Box>
    </Box>
  );
};

export default Navbar;
