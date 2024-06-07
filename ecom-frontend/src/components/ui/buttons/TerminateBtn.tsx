import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { red } from "@mui/material/colors";

export const TerminateBtn = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[700],
  },
  alignContent: "right",
}));
