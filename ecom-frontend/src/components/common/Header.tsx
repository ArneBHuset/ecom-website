import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderCart from "../ui/buttons/HeaderCart";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

// const smallMenu = {};
// const BigMenu = {};

export default function Header() {
  return (
    <Box>
      <AppBar
        position="static"
        color="inherit"
        sx={{ borderBottom: 1, boxShadow: "none" }}
      >
        <Toolbar>
          <Stack
            direction="row"
            spacing={2}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/product">
              All products
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact us!
            </Button>
          </Stack>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "none", sm: "block" },
            }}
          >
            FlashFinds
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              display: {
                xs: "block",
                width: "100%",
                textAlign: "right",
                sm: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/cart">
            <HeaderCart />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
