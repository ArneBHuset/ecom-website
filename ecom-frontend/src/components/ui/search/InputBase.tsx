import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    borderRadius: theme.custom.bigBorderRadius,
    background: "white",
    backgroundClip: "padding-box",
    border: "none",
    boxShadow: `0 0 1px ${theme.palette.primary.main}`,
    paddingLeft: `calc(1em + ${theme.spacing(6)})`,
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.fontFamily,
    transition: "width 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus, &:hover": {
        width: "36ch",
        boxShadow: `0 0 3px ${theme.palette.primary.main}`,
      },
    },
  },
}));
