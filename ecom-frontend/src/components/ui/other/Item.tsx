import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "inherit",
  ...theme.typography.body2,
  boxShadow: "none",
  padding: theme.spacing(1),
}));
