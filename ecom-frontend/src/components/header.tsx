import * as React from "react";
import { Link } from "react-router-dom"; // Since you are already using React Router
import AppBar from "@mui/material/AppBar"; // For a top App bar
import Toolbar from "@mui/material/Toolbar"; // To hold navigation and other content in the AppBar
import Typography from "@mui/material/Typography"; // For inserting text
import Button from "@mui/material/Button"; // To use buttons for navigation links
import IconButton from "@mui/material/IconButton"; // For icons within buttons
import MenuIcon from "@mui/icons-material/Menu"; // Example icon
import { styled } from "@mui/material/styles"; // Utility for styling Material UI components

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
