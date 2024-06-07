import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import { Box, useTheme } from "@mui/material";
import { useCart } from "../ui/cart/useCart";
import { useNavigate } from "react-router-dom";
import Icon from "@mui/material/Icon";
import { Product } from "../../types/ProductInterface";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

/**
 * ProductItem is designed to return a single product card to the LandingPage layout. It provides a summary of the product,
 * including an image, title, description, and interactive icons for adding the item to the cart and rating display.
 * The card also navigates to a detailed product page.
 *
 * @param {Product} product - Contains all products fetched in the API, passed from layout/LandingPage.tsx.
 * @returns {JSX.Element} A card that visually represents the product.
 */
export default function ProductItem({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const theme = useTheme();

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    addToCart({
      id: product.id,
      title: product.title,
      price: product.discountedPrice,
      imageURL: product.image.url,
      quantity: 1,
    });
  };

  const handleCardClick = () => {
    navigate(`/Singleproduct/:${product.id}`);
  };

  return (
    <Box marginX={"auto"}>
      <Card
        sx={{
          cursor: "pointer",
          maxWidth: 345,
          maxHeight: { xs: 350, sm: 355 },
          minHeight: 290,
          position: "relative",
          "&:hover .view-product-box": {
            display: "flex",
          },
        }}
        onClick={handleCardClick}
      >
        <Box
          height={6}
          sx={{
            backgroundColor: theme.palette.primary.main,
          }}
        ></Box>
        <CardMedia
          component="img"
          height="180"
          image={product.image.url}
          alt={product.image.alt || `Image for ${product.title}`}
        />
        <CardContent sx={{ margin: 0, paddingBottom: 0 }}>
          <Typography
            sx={{
              textAlign: "left",
              typography: theme.typography.h6,
              textTransform: "uppercase",
            }}
          >
            {product.title}
          </Typography>
          <Typography
            paragraph
            color="text.secondary"
            sx={{
              overflow: "hidden",
              margin: 0,
              maxHeight: 50,
              display: { xs: "none", sm: "block" },
            }}
          >
            {product.description.length > 100
              ? product.description.slice(0, 110)
              : product.description}
            {product.description.length > 100 && <ReadMoreIcon />}
          </Typography>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Icon
                aria-label="rating"
                sx={{
                  display: { xs: "none", sm: "block" },
                  paddingBottom: 0.5,
                }}
              >
                <StarIcon sx={{ color: theme.palette.primary.main }} />
              </Icon>
              <Typography
                sx={{ display: { xs: "none", sm: "block" } }}
              >{`${product.rating}/5`}</Typography>
            </Box>
            <IconButton
              onClick={handleAddToCart}
              aria-label="add to cart"
              style={{
                color: theme.palette.common.black,
              }}
            >
              <AddShoppingCartIcon sx={{ fontSize: theme.typography.h4 }} />
            </IconButton>
          </Box>
        </CardContent>
        <Box
          className="view-product-box"
          sx={{
            display: "none",
            position: "absolute",
            top: 5,
            right: 0,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            padding: "8px 16px",
            borderRadius: "4px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          View Product
        </Box>
      </Card>
    </Box>
  );
}
