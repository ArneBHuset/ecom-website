import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Icon, IconButton } from "@mui/material";
import { TerminateBtn } from "../ui/buttons/TerminateBtn";
import { useCart } from "../ui/cart/useCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

export default function CartList() {
  const { cart, resetCart, addToCart, removeFromCart } = useCart();
  if (cart.length === 0) {
    return (
      <Icon sx={{ width: "auto", height: "auto" }}>
        <ProductionQuantityLimitsIcon sx={{ fontSize: 200, opacity: 0.4 }} />
      </Icon>
    );
  } else {
    return (
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Calories</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="center">Qty</TableCell>
              </TableRow>
            </TableHead>
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
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => removeFromCart(item)}>
                      {item.quantity > 1 ? <RemoveIcon /> : <DeleteIcon />}
                    </IconButton>
                    {item.quantity}
                    <IconButton onClick={() => addToCart(item)}>
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "right", marginTop: 4 }}>
          <TerminateBtn onClick={resetCart}>Clear cart</TerminateBtn>
        </Box>
      </Box>
    );
  }
}
