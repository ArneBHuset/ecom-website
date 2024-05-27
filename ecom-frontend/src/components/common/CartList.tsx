import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { TerminateBtn } from "../ui/buttons/TerminateBtn";
import { useCart } from "../ui/cart/useCart";

export default function CartList() {
  const { cart, resetCart } = useCart();
  console.log(cart);

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
            {cart.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <img
                    src={`${row.imageURL}`}
                    width={80}
                    height={80}
                    style={{ borderRadius: "50%" }}
                  ></img>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
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
