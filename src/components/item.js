import React, { useEffect, useState } from "react";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import { Grid, Paper, Stack, Typography, Box } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import api from "../api";

const Item = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      if (id) {
        const { data } = await api.getPost(id);
        setData(data);
      }
    })();
  }, [id]);

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
        }}
      >
        <Typography variant="h5">Eqaim Blog</Typography>
      </Box>
      <Box sx={{ width: "100vw", height: "100%", minHeight: "575px" }}>
        <Grid container m={0} p={3} spacing={0}>
          <Grid item md={2} xs={12} sm={12} sx={{ minHeight: 120 }} p={0}>
            <Stack
              direction="column"
              alignItems="center"
              height="100%"
              spacing={3}
              p={2}
            >
              <Link to="/">
                <Stack
                  sx={{
                    background: "#D9D9D9",
                    height: 70,
                    width: 80,
                    borderRadius: 5,
                  }}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <HouseOutlinedIcon sx={{ color: "#000001", fontSize: 27 }} />
                </Stack>
              </Link>
            </Stack>
          </Grid>
          <Grid item md={10} xs={12} sm={12} p={0}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ minHeight: "550px", width: "100%" }}
            >
              <Stack
                direction="column"
                spacing={2}
                p={3}
                sx={{
                  minHeight: "550px",
                  width: "100%",
                  maxWidth: "1000px",
                  background: "#E9E9E9",
                }}
              >
                <Typography
                  align="center"
                  variant="caption"
                  sx={{ fontWeight: 600, fontSize: 40 }}
                >
                  {data?.title || ""}
                </Typography>
                <Typography
                  variant="caption"
                  align="justify"
                  sx={{ fontSize: "2.2em", fontWeight: 300, color: "#767676" }}
                >
                  {data?.description || ""}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default Item;
