import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ApiCall from "../../api/api-call";
import ProductItem from "../common/ProductItem";
import { useState, useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

/**
 * Returns the average of two numbers.
 *
 * @remarks
 * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
 *
 * @param x - The first input number
 * @param y - The second input number
 * @returns The arithmetic mean of `x` and `y`
 *
 * @beta
 */

interface Image {
  url: string;
  alt: string;
}

interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: Image;
  rating: number;
  tags: string[];
  reviews: Review[];
}

interface ApiResponse {
  data: Product[];
}

export default function ProductList() {
  const [products, setProducts] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("your-api-url");
      const json: ApiResponse = await response.json();
      setProducts(json);
    };

    fetchData();
  }, []);

  if (!products) return <div>Loading...</div>;

  return (
    <div>
      {products.data.map((product) => (
        <div key={product.id}>
          <h2>
            {product.title} - ${product.price}
          </h2>
          <p>{product.description}</p>
          {/* other product details */}
        </div>
      ))}
    </div>
  );
}
