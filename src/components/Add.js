import React, { useState } from "react";
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { Grid, Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Add = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    title: "Blogpost Title",
    description:
      "13Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,voluptas atque! Maiores tempora reiciendis deserunt cupiditate illum fuga impedit molestiae excepturi praesentium sint temporibus. Velit rerum aliquam, consequuntur eaque laboriosam quis",
  });
  const createOrder = async () => {
    try {
      if (data.title !== "" && data.description !== "") {
        const resp = await api.createPost(data);
        navigate(`/post/${resp.data._id}`);
      }
    } catch (error) {}
  };

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
          <Grid item md={2} xs={12} sm={3} sx={{ minHeight: 200 }} p={0}>
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
              <Stack
                onClick={() => createOrder()}
                sx={{background: "#D9D9D9",height: 70,width: 80,borderRadius: 5,cursor: "pointer",
                }}
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <DoneOutlinedIcon sx={{ color: "#000001", fontSize: 27 }} />
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={10} xs={12} sm={9} p={0}>
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
                <Stack
                  direction="row"
                  alignItems="center"
                  flexWrap
                  spacing={2}
                  sx={{ background: "#D9D9D9", paddingLeft: "6vw" }}
                >
                  <FormatBoldOutlinedIcon
                    sx={{ color: "#000001", fontColor: 1 }}
                  />
                  <FormatItalicOutlinedIcon
                    sx={{ color: "#000001", fontColor: 1 }}
                  />
                  <FormatUnderlinedOutlinedIcon
                    sx={{ color: "#000001", fontColor: 1 }}
                  />
                  <FormatListBulletedOutlinedIcon
                    sx={{ color: "#000001", fontColor: 1 }}
                  />
                  <ScreenShareOutlinedIcon
                    sx={{ color: "#000001", fontColor: 1 }}
                  />
                </Stack>
                <TextField
                  fullWidth
                  align="center"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    style: {
                      fontSize: 40,
                      fontWeight: 800,
                    },
                  }}
                  inputProps={{
                    style: {
                      textAlign: "center",
                    },
                  }}
                  onChange={(e) =>
                    setData((d) => ({ ...d, title: e.target.value }))
                  }
                  defaultValue={data.title}
                />
                <TextField
                  fullWidth
                  align="center"
                  variant="standard"
                  multiline
                  maxRows={6}
                  InputProps={{
                    disableUnderline: true,
                    style: {
                      fontSize: "2.2em",
                      fontWeight: 300,
                      color: "#767676",
                    },
                  }}
                  LabelInputProps={{
                    style: {
                      fontSize: "2.2em",
                      fontWeight: 300,
                      color: "#767676",
                    },
                  }}
                  inputProps={{
                    style: {
                      textAlign: "justify",
                    },
                  }}
                  onChange={(e) =>
                    setData((d) => ({ ...d, description: e.target.value }))
                  }
                  defaultValue={data.description}
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default Add;
