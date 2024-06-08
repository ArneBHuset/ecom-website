import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Container, Stack } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HeaderCart from "../ui/buttons/HeaderCart";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function Header() {
  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      style={{ background: theme.palette.primary.main }}
    >
      <Box
        maxWidth="md"
        marginX={"auto"}
        height={"auto"}
        sx={{
          mx: "auto",
          borderBottom: `solid 1px ${theme.palette.common.white}`,
        }}
      >
        <AppBar
          position="sticky"
          sx={{
            boxShadow: "none",
          }}
        >
          <Toolbar sx={{ display: "flex", direction: "rows" }}>
            <Stack
              direction="row"
              sx={{
                flexGrow: 1,
                display: {
                  sm: "flex",
                  xs: "block",
                },
              }}
            >
              <Button
                style={theme.typography.h6}
                sx={{
                  color: theme.palette.common.black,
                  "&:hover": { textDecoration: "underline" },
                }}
                component={Link}
                to="/"
              >
                Home
              </Button>

              <Button
                style={theme.typography.h6}
                sx={{
                  color: theme.palette.common.black,
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationColor: theme.palette.common.black,
                  },
                }}
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
                color: theme.palette.common.black,
                display: { xs: "none", sm: "block" },
              }}
            >
              FLASH FINDS
            </Typography>

            <IconButton component={Link} to="/cart">
              <HeaderCart />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}
