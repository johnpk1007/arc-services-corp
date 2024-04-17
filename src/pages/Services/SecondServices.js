import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { CardActionArea } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import {
  drywall1,
  drywall2,
  drywall3,
  drywall4,
  floor1,
  floor2,
  floor3,
  floor4,
  wallpaper1,
  wallpaper2,
  wallpaper3,
  wallpaper4,
  painting1,
  painting2,
  painting3,
  painting4,
  repair1,
  repair2,
  repair3,
  repair4,
  pressure1,
  pressure2,
  pressure3,
  pressure4,
  janitorial1,
  janitorial2,
  janitorial3,
  janitorial4,
  plumbing1,
  plumbing2,
  plumbing3,
  plumbing4,
} from "../../images/realImage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  maxWidth: "80%",
};

const settings = {
  dots: true,
  // lazyLoad: "progressive",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const wallpaperList = [wallpaper1, wallpaper2, wallpaper3, wallpaper4];
const drywallList = [drywall1, drywall2, drywall3, drywall4];
const paintingList = [painting1, painting2, painting3, painting4];
const floorList = [floor1, floor2, floor3, floor4];
const repairList = [repair1, repair2, repair3, repair4];
const pressureList = [pressure1, pressure2, pressure3, pressure4];
const janitorialList = [janitorial1, janitorial2, janitorial3, janitorial4];
const plumbingList = [plumbing1, plumbing2, plumbing3, plumbing4];

export default function SecondServices() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setImageList([]);
    setLoading(true);
  };
  const [imageList, setImageList] = useState([]);

  const handleFloorImageClick = () => {
    setImageList(floorList);
    handleOpen();
  };
  const handleWallpaperImageClick = () => {
    setImageList(wallpaperList);
    handleOpen();
  };
  const handleDrywallImageClick = () => {
    setImageList(drywallList);
    handleOpen();
  };
  const handlePaintingImageClick = () => {
    setImageList(paintingList);
    handleOpen();
  };
  const handleRepairImageClick = () => {
    setImageList(repairList);
    handleOpen();
  };
  const handlePressureImageClick = () => {
    setImageList(pressureList);
    handleOpen();
  };
  const handleJanitorialImageClick = () => {
    setImageList(janitorialList);
    handleOpen();
  };
  const handlePlumbingImageClick = () => {
    setImageList(plumbingList);
    handleOpen();
  };

  const handleImageLoaded = () => {
    console.log("loading done");
    setLoading(false);
  };
  console.log("loading:", loading);

  return (
    <Box
      sx={{
        minHeight: "800px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f6f6f6",
        paddingTop: "130px",
      }}
    >
      <Box
        data-aos="custom-fade"
        data-aos-once="true"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: 24, sm: 26, md: 28, lg: 32 } }}
          fontWeight="bold"
          gutterBottom
        >
          Handyman Services
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
          fontWeight="regular"
          color="#777777"
          marginBottom="80px"
          textAlign="center"
          width="80%"
        >
          Explore our diverse range of expert handyman services designed to
          address all your home improvement needs
        </Typography>
      </Box>

      <Grid container justifyContent="center" sx={{ marginBottom: "180px" }}>
        <Grid item xs={10} sm={11} md={7} lg={10} xl={8}>
          <Grid container spacing={3} justifyContent="center">
            <Grid
              data-aos="custom-fade"
              data-aos-delay="0"
              data-aos-once="true"
              data-a0s-offset="100"
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >
              <Card>
                <CardActionArea onClick={handleFloorImageClick}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={floor1}
                    title="floor installation"
                    component="img"
                    loading="lazy"
                  />
                  <CardContent
                    sx={{
                      height: 150,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      fontSize={16}
                      component="div"
                      textAlign="center"
                      fontWeight="medium"
                      sx={{ mb: 2 }}
                    >
                      FLOOR INSTALLATION
                    </Typography>
                    <Typography
                      fontSize={14}
                      color="text.secondary"
                      fontWeight="regular"
                      textAlign="center"
                      lineHeight="19px"
                    >
                      Installation services for wood, vinyl tile, tile, and gym
                      floors.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid
              data-aos="custom-fade"
              data-aos-delay="100"
              data-aos-once="true"
              data-a0s-offset="100"
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >
              <Card>
                <CardActionArea onClick={handleWallpaperImageClick}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={wallpaper1}
                    title="wallpaper installation"
                    component="img"
                    loading="lazy"
                  />
                  <CardContent
                    sx={{
                      height: 150,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      fontSize={16}
                      component="div"
                      textAlign="center"
                      fontWeight="medium"
                      sx={{ mb: 2 }}
                    >
                      WALLPAPER INSTALLATION
                    </Typography>
                    <Typography
                      fontSize={14}
                      color="text.secondary"
                      fontWeight="regular"
                      textAlign="center"
                      lineHeight="19px"
                    >
                      Removal of old wallpaper, patching, and installation of
                      new wallpaper.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid
              data-aos="custom-fade"
              data-aos-delay="200"
              data-aos-once="true"
              data-a0s-offset="100"
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >
              <Card>
                <CardActionArea onClick={handlePaintingImageClick}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={painting1}
                    title="painting service"
                    component="img"
                    loading="lazy"
                  />
                  <CardContent
                    sx={{
                      height: 150,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      fontSize={16}
                      component="div"
                      textAlign="center"
                      fontWeight="medium"
                      sx={{ mb: 2 }}
                    >
                      PAINTING SERVICES
                    </Typography>
                    <Typography
                      fontSize={14}
                      color="text.secondary"
                      fontWeight="regular"
                      textAlign="center"
                      lineHeight="19px"
                    >
                      Patching, Sanding, and applying fresh coats of paint.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid
              data-aos="custom-fade"
              data-aos-delay="300"
              data-aos-once="true"
              data-a0s-offset="100"
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >
              <Card>
                <CardActionArea onClick={handleDrywallImageClick}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={drywall1}
                    title="drywall repair"
                    component="img"
                    loading="lazy"
                  />
                  <CardContent
                    sx={{
                      height: 150,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      fontSize={16}
                      component="div"
                      textAlign="center"
                      fontWeight="medium"
                      sx={{ mb: 2 }}
                    >
                      DRYWAL REPAIR
                    </Typography>
                    <Typography
                      fontSize={14}
                      color="text.secondary"
                      fontWeight="regular"
                      textAlign="center"
                      lineHeight="19px"
                    >
                      Partial repair or total drywall replacement.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid
              data-aos="custom-fade"
              data-aos-delay="400"
              data-aos-once="true"
              data-a0s-offset="100"
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >
              <Card>
                <CardActionArea onClick={handleRepairImageClick}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={repair1}
                    title="general repair"
                    component="img"
                    loading="lazy"
                  />
                  <CardContent
                    sx={{
                      height: 150,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      fontSize={16}
                      component="div"
                      textAlign="center"
                      fontWeight="medium"
                      sx={{ mb: 2 }}
                    >
                      GENERAL REPAIR
                    </Typography>
                    <Typography
                      fontSize={14}
                      color="text.secondary"
                      fontWeight="regular"
                      textAlign="center"
                      lineHeight="19px"
                    >
                      General handyman services and janitorial & maintenance
                      services for condos under contract.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid
              data-aos="custom-fade"
              data-aos-delay="500"
              data-aos-once="true"
              data-a0s-offset="100"
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >
              <Card>
                <CardActionArea onClick={handlePressureImageClick}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={pressure1}
                    title="pressure cleaning"
                    component="img"
                    loading="lazy"
                  />
                  <CardContent
                    sx={{
                      height: 150,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      fontSize={16}
                      component="div"
                      textAlign="center"
                      fontWeight="medium"
                      sx={{ mb: 2 }}
                    >
                      PRESSURE CLEANING
                    </Typography>
                    <Typography
                      fontSize={14}
                      color="text.secondary"
                      fontWeight="regular"
                      textAlign="center"
                      lineHeight="19px"
                    >
                      Commercial and residential pressure cleaning services.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid
              data-aos="custom-fade"
              data-aos-delay="600"
              data-aos-once="true"
              data-a0s-offset="100"
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >
              <Card>
                <CardActionArea onClick={handleJanitorialImageClick}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={janitorial1}
                    title="janitorial services"
                    component="img"
                    loading="lazy"
                  />
                  <CardContent
                    sx={{
                      height: 150,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      fontSize={16}
                      component="div"
                      textAlign="center"
                      fontWeight="medium"
                      sx={{ mb: 2 }}
                    >
                      JANITORIAL SERVICES
                    </Typography>
                    <Typography
                      fontSize={14}
                      color="text.secondary"
                      fontWeight="regular"
                      textAlign="center"
                      lineHeight="19px"
                    >
                      Commercial and residential janitorial services.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid
              data-aos="custom-fade"
              data-aos-delay="700"
              data-aos-once="true"
              data-a0s-offset="100"
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >
              <Card>
                <CardActionArea onClick={handlePlumbingImageClick}>
                  <CardMedia
                    sx={{ height: 200, backgroundColor: "gray" }}
                    image={plumbing1}
                    title="plumbing"
                    component="img"
                    loading="lazy"
                  />
                  <CardContent
                    sx={{
                      height: 150,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      fontSize={16}
                      component="div"
                      textAlign="center"
                      fontWeight="medium"
                      sx={{ mb: 2 }}
                    >
                      PLUMBING
                    </Typography>
                    <Typography
                      fontSize={14}
                      color="text.secondary"
                      fontWeight="regular"
                      textAlign="center"
                      lineHeight="19px"
                    >
                      All plumbing installation and repairs
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Slider {...settings}>
            {imageList.map((imageName, index) => (
              <img
                key={index}
                src={imageName}
                alt={imageName}
                onLoad={handleImageLoaded}
              />
            ))}
          </Slider>
        </Box>
      </Modal>
    </Box>
  );
}
