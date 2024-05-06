import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div>
        <h1>Landing page</h1>
      </div>
      <div>
        <h2>Links to pages</h2>
        <Link to="/CartPage">Cart</Link>
        <br />
        <Link to="/CheckoutPage">Successfull checkout</Link>
        <br />
        <Link to="/ProductPage">Product</Link>
        <br />
      </div>
    </>
  );
}

export default LandingPage;
