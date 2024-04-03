import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import ColorLogoBig from "../../images/logo/colorLogoBig.png";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function SecondDescription() {
  return (
    <Box
      sx={{
        minHeight: 800,
        width: "100%",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <Grid container justifyContent="center" sx={{ width: "100%" }}>
        <Grid item xs={10}>
          <Grid container spacing={2}>
            <Grid item xs={12} data-aos="fade-up" data-aos-once="true">
              <Typography
                fontWeight="bold"
                sx={{ fontSize: { xs: 24, sm: 26, md: 28, lg: 32 } }}
              >
                More About Our Company
              </Typography>
            </Grid>
            <Grid item xs={12} md={8} data-aos="fade-up" data-aos-once="true">
              <Typography
                sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
                color="text.secondary"
                fontWeight="light"
              >
                Welcome to ANG Services Corp, where craftsmanship meets care.
                Since 2017, we've been the go-to solution for South Florida
                residents seeking reliable handyman and repair services. As a
                small, family-owned business, every nail we drive and every wire
                we connect is infused with the passion and dedication of our
                tight-knit team.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 17, md: 18, lg: 20 },
                  paddingTop: "16px",
                }}
                color="text.secondary"
                fontWeight="light"
              >
                Our mission extends beyond mere repairs; it's about building
                relationships rooted in trust and dependability. From fixing
                leaky faucets to reviving tired spaces with a fresh coat of
                paint, we're here to make your home the best it can be.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 17, md: 18, lg: 20 },
                  paddingTop: "16px",
                }}
                color="text.secondary"
                fontWeight="light"
              >
                What sets us apart? It's our unwavering commitment to
                professionalism, efficiency, and affordability. Whether it's
                plumbing, electrical work, carpentry, or painting, our skilled
                professionals bring expertise to every task, ensuring the job is
                done right the first time.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${ColorLogoBig})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: { xs: "80px", sm: "120px", md: "150px", lg: "190px" },
                  width: { xs: "140px", sm: "210px", md: "270px", lg: "330px" },
                }}
              />
            </Grid>

            <Grid item xs={12} data-aos="fade-up" data-aos-once="true">
              <Typography
                sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
                color="text.secondary"
                fontWeight="light"
              >
                But beyond the tools and techniques, it's our genuine care for
                our customers that truly defines us. We understand the
                importance of your home and treat every project as if it were
                our own, ensuring your satisfaction every step of the way.
              </Typography>
            </Grid>
            <Grid item xs={12} data-aos="fade-up" data-aos-once="true">
              <Typography
                sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
                color="text.secondary"
                fontWeight="light"
              >
                Rest easy knowing that we're fully licensed and insured,
                providing you with the peace of mind that your home is in safe
                hands. Your comfort and security are our utmost priority, and
                we'll stop at nothing to ensure your needs are met with
                precision and care.
              </Typography>
            </Grid>
            <Grid item xs={12} data-aos="fade-up" data-aos-once="true">
              <Typography
                sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
                color="text.secondary"
                fontWeight="light"
              >
                So whether you're facing a minor repair or dreaming of a major
                renovation, ANG is here to bring your vision to life. Schedule a
                service or request a free estimate today, and let's embark on
                this journey together. We can't wait to welcome you into the ANG
                family!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
