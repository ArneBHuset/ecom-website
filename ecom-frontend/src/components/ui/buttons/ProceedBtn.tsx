import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

export const ProceedBtn = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.common.black,
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    textDecoration: "underline",
    backgroundColor: theme.palette.primary.main,
  },
  alignContent: "right",
}));
