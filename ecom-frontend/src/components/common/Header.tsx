import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { SearchIconWrapper } from "../ui/icons/search";
import { headerSearch as Search } from "../ui/search/HeaderSearch";
import { StyledInputBase } from "../ui/search/InputBase";
// import searchProduct from "../../logick/search/sarch";

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
            <Button color="inherit" component={Link} to="/cart">
              Cart
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
          <Search sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            // placeholder="Search..."
            // inputProps={{ "aria-label": "search" }}
            // value={searchString}
            // onChange={(e) => setSearchString(e.target.value)}
            // onKeyUp={(e) =>
            //   searchProduct(e.target.value, hatches, setSearchResult)
            // }
            />
          </Search>

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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
