import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  return (
    <Container component="footer" maxWidth="md" sx={{ marginTop: 15 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            About
          </Typography>
          <Typography variant="body1">
            ECOM website, as part of a Noroff project.
          </Typography>
          <Typography variant="body1">Created by Arne Hustveit</Typography>
          <Link
            variant="body1"
            sx={{ color: theme.palette.common.black }}
            href="https://github.com/ArneBHuset"
          >
            Visit my GitHub
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">
            123 Super Street, Anytown, Norway
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Link
            href="https://www.facebook.com/"
            sx={{ color: theme.palette.common.black }}
            aria-label="Follow us on Facebook"
          >
            <Facebook />
          </Link>
          <Link
            href="https://www.instagram.com/"
            sx={{ color: theme.palette.common.black, pl: 1, pr: 1 }}
            aria-label="Follow us on Instagram"
          >
            <Instagram />
          </Link>
          <Link
            href="https://www.twitter.com/"
            sx={{ color: theme.palette.common.black }}
            aria-label="Follow us on Twitter"
          >
            <Twitter />
          </Link>
        </Grid>
      </Grid>
      <Box mt={5} textAlign="center">
        <Typography variant="body1">
          {"Copyright © "}
          <Link sx={{ color: theme.palette.common.black }}>
            FlashFinds
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Container>
  );
}
