import { styled } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import { easing } from "@mui/material";

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    border: "1px solid transparent", // Changed to transparent for gradient effect
    background: "white",
    backgroundClip: "content-box, border-box",
    borderRadius: theme.shape.borderRadius,
    boxShadow: `0 0 1px ${theme.palette.primary.main}`,
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    color: theme.palette.secondary.dark, // Enhanced text color
    fontFamily: "Arial, sans-serif",
    transition: "width 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    [theme.breakpoints.up("sm")]: {
      width: "24ch",
      "&:focus, &:hover": {
        width: "30ch",
        boxShadow: `0 0 1px ${theme.palette.primary.main}`,
      },
    },
  },
}));
