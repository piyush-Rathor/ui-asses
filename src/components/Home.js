import React, { useEffect, useState } from "react";

import { experimentalStyled as styled } from "@mui/material/styles";
import { Grid, Paper, Stack, Typography, Box } from "@mui/material";
import icon from "../assests/imgs/Group.png";
import api from "../api";

import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  minHeight: 200,
  color: theme.palette.text.secondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.4em",
  background: "#d6d6d6",
  textDecoration: "none",
}));

const Home = () => {
  const [data, setData] = useState([]);
  const [loadding, setLoadding] = useState(true);
  useEffect(() => {
    (async () => {
      setLoadding(true);
      const { data } = await api.getPosts();
      setData(data);
    })();
    setLoadding(false);
  }, []);

  return (
    <Stack alignItems="center" sx={{ minHeight: "100vh", width: "100vw" }}>
      <Box
        sx={{
          height: 143,
          background: "#E9E9E9",
          margin: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "4em",
          marginBottom: "2em",
        }}
      >
        <Typography variant="h5">Eqaim Blog</Typography>
      </Box>
      <Paper
        sx={{
          minHeight: "600px",
          width: "100vw",
          maxWidth: "1200px",
          height: "100%",
          position: "relative",
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          spacing={{ xs: 2, sm: 4, md: 12 }}
          p={{ xs: 2, sm: 3, md: 5 }}
        >
          {data.length > 0 &&
            data.map((d, index) => (
              <Grid item xs={6} sm={4} md={4} key={index}>
                <Link to={`/post/${d._id}`} style={{ textDecoration: "none" }}>
                  <Item>{d.title}</Item>
                </Link>
              </Grid>
            ))}
        </Grid>
        <Box sx={{ position: "absolute", bottom: 24, right: 55 }}>
          <Link to="/add">
            <Stack
              sx={{
                background: "#E9E9E9",
                height: 70,
                width: 80,
                borderRadius: 5,
              }}
              alignItems="center"
              justifyContent="center"
            >
              <img src={icon} alt="add" />
            </Stack>
          </Link>
        </Box>
      </Paper>
    </Stack>
  );
};

export default Home;
