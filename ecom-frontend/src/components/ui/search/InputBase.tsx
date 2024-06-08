import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    borderRadius: theme.custom.bigBorderRadius,
    background: theme.palette.common.white,
    backgroundClip: "padding-box",
    border: "none",
    paddingLeft: `calc(1em + ${theme.spacing(6)})`,
    color: theme.palette.common.black,
    fontFamily: theme.typography.fontFamily,
  },
}));
