import { alpha, styled } from "@mui/material/styles";

export const headerSearch = styled("div")(({ theme }) => ({
  position: "relative",
  boder: "1px solid #e0e0e0",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
