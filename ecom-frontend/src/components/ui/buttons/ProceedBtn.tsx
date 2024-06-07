import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { green } from "@mui/material/colors";

export const ProceedBtn = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: green[500],
  "&:hover": {
    backgroundColor: green[700],
  },
  alignContent: "right",
}));
