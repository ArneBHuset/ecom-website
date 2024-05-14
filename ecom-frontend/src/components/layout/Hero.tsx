import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#808080" : "#f5f5f5",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function HeroSection() {
  return (
    <Grid container>
      <Grid item xs={6} md={5}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={12}
            margin={"auto"}
            justifyContent={"center"}
            sx={{
              display: "flexbox",
              justifyContent: "center",
            }}
          >
            <Item>
              <Box
                border={1}
                borderRadius={40}
                height={400}
                width={300}
                margin="auto"
              >
                Inserted data
              </Box>
            </Item>
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack direction="row" spacing={4}>
                <Box border={1} borderRadius={100} width={100} height={100}>
                  Item1
                </Box>
                <Box border={1} borderRadius={100} width={100} height={100}>
                  Item2
                </Box>
                <Box border={1} borderRadius={100} width={100} height={100}>
                  Item3
                </Box>
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={7}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Item>
              <Box
                border={1}
                borderRadius={40}
                height={400}
                width={300}
                margin="auto"
              >
                {" Inserted data"}
              </Box>
            </Item>
            <Item sx={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Item>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} md={12} borderTop={1} marginTop={4}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Item>Section</Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>Section</Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>Section</Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>Section</Item>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
