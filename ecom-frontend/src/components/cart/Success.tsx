import {
  Typography,
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../ui/cart/useCart";
import { useEffect, useState } from "react";
import { CartItem } from "../../types/CartInterface";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { useTheme } from "@mui/material";

/**
 This component displays a success message when the user has successfully placed an order.
 Will set the cart items in a new useState for a summary display, before running the resetCart(), which empties the main cart state
 */
export default function SuccessMessage() {
  const { cart, resetCart } = useCart();
  const [finalOrderDetails, setFinalOrderDetails] = useState<CartItem[]>([]);
  const theme = useTheme();

  useEffect(() => {
    if (cart.length > 0) {
      setFinalOrderDetails(cart);
      resetCart();
    }
  }, [cart, resetCart]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Grid container display={"flex"} justifyContent={"center"}>
        <Box>
          <Typography marginTop={6} variant="h2">
            Success!
          </Typography>
          <Typography variant="h4" marginY={2}>
            Your order has been placed.
          </Typography>
          <Button
            component={Link}
            sx={{
              color: theme.palette.common.black,
              padding: 1,
              border: 2,
              borderColor: theme.palette.primary.main,
              "&:hover": { textDecoration: "underline" },
            }}
            to="/contact"
          >
            Have any questions?
          </Button>
          <Button
            component={Link}
            to="/"
            sx={{
              color: theme.palette.common.black,
              padding: 1,
              border: 2,
              marginLeft: 2,
              borderColor: theme.palette.secondary.main,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Continue shopping?
          </Button>
        </Box>
      </Grid>
      {finalOrderDetails.length > 0 && (
        <Box className="printable">
          <Typography variant="h4">Summary:</Typography>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {finalOrderDetails.map((item) => (
              <ListItem key={item.id} divider>
                <ListItemText
                  primary={item.title}
                  secondary={`Quantity: ${
                    item.quantity
                  }, Price: $${item.price.toFixed(2)}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      <IconButton onClick={handlePrint} aria-label="print">
        <LocalPrintshopIcon />
      </IconButton>
    </>
  );
}
