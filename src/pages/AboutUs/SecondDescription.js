import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import ColorLogoBig from "../../images/logo/colorLogoBig.png";

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
            <Grid item xs={12}>
              <Typography fontWeight="bold" fontSize={32}>
                More About Our Company
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography fontSize={20} color="text.secondary">
                Welcome to ANG Services Corp, where craftsmanship meets care.
                Since 2017, we've been the go-to solution for South Florida
                residents seeking reliable handyman and repair services. As a
                small, family-owned business, every nail we drive and every wire
                we connect is infused with the passion and dedication of our
                tight-knit team.
              </Typography>

              <Typography
                fontSize={20}
                color="text.secondary"
                sx={{ paddingTop: "16px" }}
              >
                Our mission extends beyond mere repairs; it's about building
                relationships rooted in trust and dependability. From fixing
                leaky faucets to reviving tired spaces with a fresh coat of
                paint, we're here to make your home the best it can be.
              </Typography>

              <Typography
                fontSize={20}
                color="text.secondary"
                sx={{ paddingTop: "16px" }}
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
              <img src={ColorLogoBig} alt="color logo" />
            </Grid>

            <Grid item xs={12}>
              <Typography fontSize={20} color="text.secondary">
                But beyond the tools and techniques, it's our genuine care for
                our customers that truly defines us. We understand the
                importance of your home and treat every project as if it were
                our own, ensuring your satisfaction every step of the way.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={20} color="text.secondary">
                Rest easy knowing that we're fully licensed and insured,
                providing you with the peace of mind that your home is in safe
                hands. Your comfort and security are our utmost priority, and
                we'll stop at nothing to ensure your needs are met with
                precision and care.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={20} color="text.secondary">
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
