import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TagIcon from "@mui/icons-material/Tag";

import ApiCall from "../../api/api-call";
import { Box } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductItem() {
  const [expanded, setExpanded] = useState(false);
  const [jsonData, setData] = useState(null);

  useEffect(() => {
    console.log("useeffect called");
    const loadData = async () => {
      const apiData = await ApiCall();
      setData(apiData);
    };
    loadData();
  }, []);

  //   console.log(jsonData);

  //
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      {jsonData &&
        jsonData.data.map((product) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={product.title}
              //   subheader={`${product.discountedPrice < product.price {

              //   }}`}
            />

            <CardMedia
              component="img"
              height="194"
              image={product.image.url}
              alt={product.image.alt}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to cart">
                <AddShoppingCartIcon />
              </IconButton>
              <IconButton aria-label="rating">
                <StarIcon />
              </IconButton>
              <Typography>{`${product.rating}/5`}</Typography>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            {/* <IconButton aria-label="add to favorites">
              <TagIcon />
            </IconButton> */}
            <Typography>{`#${product.tags.join(" #")}`}</Typography>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  RI
                </Avatar>
                {product.reviews.map((review) => (
                  <>
                    <Typography paragraph>{review.username}</Typography>
                    <Typography paragraph>{review.description}</Typography>
                    <IconButton aria-label="share">
                      <StarIcon />
                    </IconButton>
                    <Typography>This is the rating: {review.rating}</Typography>
                  </>
                ))}
              </CardContent>
            </Collapse>
          </Card>
        ))}
    </Box>
  );
}
