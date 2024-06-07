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

/**
 This component displays a success message when the user has successfully placed an order.
 Furhtermore, it will set the cart items in a new useState for summary display, 
 before running the resetCart(), which empties the main cart state
 */
export default function SuccessMessage() {
  const { cart, resetCart } = useCart();
  const [finalOrderDetails, setFinalOrderDetails] = useState<CartItem[]>([]);

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
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        textAlign={"center"}
      >
        <Box>
          <Typography variant="h4" gutterBottom>
            Success!
          </Typography>
          <Typography>Your order has been placed.</Typography>
          <Button component={Link} to="/contact">
            Have any questions?
          </Button>
          <Button component={Link} to="/product">
            Continue shopping
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
