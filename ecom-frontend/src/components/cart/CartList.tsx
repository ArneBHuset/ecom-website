import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Icon, IconButton } from "@mui/material";
import { TerminateBtn } from "../ui/buttons/TerminateBtn";
import { useCart } from "../ui/cart/useCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { useTheme } from "@mui/material";

/**
 * CartList component displays a detailed list of items currently in the shopping cart.
 * It allows users to add, remove, or delete items directly from this list.
 */
export default function CartList() {
  const { cart, resetCart, addToCart, removeFromCart } = useCart();
  const theme = useTheme();
  if (cart.length === 0) {
    return (
      <Icon
        sx={{
          width: "auto",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          marginTop: "10%",
        }}
      >
        <ProductionQuantityLimitsIcon sx={{ fontSize: 200, opacity: 0.3 }} />
      </Icon>
    );
  } else {
    return (
      <Box>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              {cart.map((item) => (
                <TableRow
                  key={item.title}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <img
                      src={`${item.imageURL}`}
                      width={80}
                      height={80}
                      style={{ borderRadius: "50%" }}
                    ></img>
                  </TableCell>
                  <TableCell
                    style={theme.typography.h6}
                    scope="row"
                    sx={{ display: { xs: "none", sm: "table-cell" } }}
                  >
                    {item.title}
                  </TableCell>
                  <TableCell
                    style={theme.typography.h6}
                    align="right"
                    sx={{ display: { xs: "none", sm: "table-cell" } }}
                  >
                    {`${item.price}$`}
                  </TableCell>
                  <TableCell style={theme.typography.h6} align="right">
                    <IconButton onClick={() => removeFromCart(item)}>
                      {item.quantity > 1 ? (
                        <RemoveIcon
                          sx={{ color: theme.palette.common.black }}
                        />
                      ) : (
                        <DeleteIcon
                          sx={{ color: theme.palette.common.black }}
                        />
                      )}
                    </IconButton>
                    {item.quantity}
                    <IconButton onClick={() => addToCart(item)}>
                      <AddIcon sx={{ color: theme.palette.common.black }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "right", marginY: 2 }}>
          <TerminateBtn style={theme.typography.h6} onClick={resetCart}>
            Clear cart
          </TerminateBtn>
        </Box>
      </Box>
    );
  }
}
