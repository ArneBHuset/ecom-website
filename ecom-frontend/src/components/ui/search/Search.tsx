import { styled, alpha } from "@mui/material/styles";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.custom.bigBorderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "40ch",
    "&:focus, &:hover": {
      boxShadow: `0 0 3px ${theme.palette.primary.main}`,
    },
  },
}));
