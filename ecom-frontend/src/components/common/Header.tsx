import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Container, Stack } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderCart from "../ui/buttons/HeaderCart";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

// const smallMenu = {};
// const BigMenu = {};

export default function Header() {
  const theme = useTheme();
  return (
    <Container
      maxWidth={false}
      style={{ background: theme.palette.primary.main }}
    >
      <Box maxWidth="md" marginX={"auto"}>
        <AppBar
          position="sticky"
          sx={{
            boxShadow: "none",
            borderBottom: `solid 1px ${theme.palette.common.white}`,
          }}
        >
          <Toolbar>
            <Stack
              direction="row"
              sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
            >
              <Button
                style={theme.typography.h6}
                color="inherit"
                component={Link}
                to="/"
              >
                Home
              </Button>

              <Button
                style={theme.typography.h6}
                color="inherit"
                component={Link}
                to="/contact"
              >
                Contact
              </Button>
            </Stack>
            <Typography
              style={theme.typography.h2}
              noWrap
              component="div"
              sx={{
                flexGrow: 2,
                justifyContent: "center",
                display: { xs: "none", sm: "block" },
              }}
            >
              FLASH FINDS
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
                  textAlign: "left",
                  sm: "none",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton component={Link} to="/cart">
              <HeaderCart />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}
