import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Products", "Pricing", "Blog"];

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;

// import { Link } from "react-router-dom"; // Since you are already using React Router
// import Toolbar from "@mui/material/Toolbar"; // To hold navigation and other content in the AppBar
// import Typography from "@mui/material/Typography"; // For inserting text
// import Button from "@mui/material/Button"; // To use buttons for navigation links
// import IconButton from "@mui/material/IconButton"; // For icons within buttons
// import MenuIcon from "@mui/icons-material/Menu"; // Example icon
// import SearchIcon from "@mui/icons-material/Search"; // Example icon
// import { styled } from "@mui/material/styles"; // Utility for styling Material UI components
// import { Icon } from "@mui/material";

// // Temporary variables
// const title = null;

// function Header() {
//   return (
//     <header>
//       <>
//         <Toolbar>
//           <nav noWrap sx={{ flex: 1 }}>
//             <Link to="/">Home</Link>
//             <Link to="/product">All products</Link>
//             <Link to="/contact">Contact us!</Link>
//           </nav>
//           <Typography
//             component="h1"
//             variant="h3"
//             color="inherit"
//             align="center"
//             noWrap
//             sx={{ flex: 2 }}
//           >
//             {title || "Brilliant buys"}
//           </Typography>
//           <IconButton sx={{ flex: 1 }}>
//             <SearchIcon />
//           </IconButton>
//           <IconButton></IconButton>
//         </Toolbar>
//       </>
//     </header>
//   );
// }

// export default Header;
