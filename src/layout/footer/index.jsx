import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import eecp_logo from "../../assets/eecp-logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

const socialIconBoxStyle = {
  border: "2px solid #d60000",
  borderRadius: "50%",
  height: "26px",
  width: "26px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

const socialIconStyle = {
  color: "#d60000",
  fontSize: "20px",
};

const Footer = () => {
  const centers = [
    "Bhopal",
    "Indore",
    "Pune",
    "Mumbai",
    "Bengalore",
    "New Delhi",
  ];

  const moreAbout = [
    "About Us",
    "Treatments",
    "Centers",
    "Doctors",
    "Contact Us",
  ];

  const ourSupport = ["Health Suggestion", "24*7 Support", "FAQs Support"];

  return (
    <Box sx={{ borderTop: "2px solid #f1f1f1" }}>
      <Container maxWidth="lg" sx={{ paddingTop: { xs: "30px", sm: "50px" } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <img
                src={eecp_logo}
                alt="eecp-logo"
                style={{ height: "auto", width: "120px" }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  paddingRight: { xs: "0px", sm: "50px" },
                  marginY: "30px",
                }}
              >
                Welcome to GuruEECP, where cutting-edge technology meets
                compassionate care in the treatment and prevention of
                heart-related ailments. Specializing in Enhanced External
                Counter Pulsation (EECP) therapy, we are dedicated to offering
                non-invasive solutions for cardiac issues, including heart
                failure, heart attacks, and coronary artery disease.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Grid container sx={{ marginTop: { xs: "30px", sm: "0px" } }}>
              <Grid item xs={6} md={4}>
                <Typography sx={{ color: "#d60000", fontSize: "19px" }}>
                  Our Center's
                </Typography>
                <List>
                  {centers.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography sx={{ color: "#d60000", fontSize: "19px" }}>
                  More About
                </Typography>
                <List>
                  {moreAbout.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                  ))}
                </List>
              </Grid>
              <Grid
                item
                xs={6}
                md={4}
                sx={{ marginTop: { xs: "20px", md: "0px" } }}
              >
                <Typography sx={{ color: "#d60000", fontSize: "19px" }}>
                  Our Support
                </Typography>
                <List>
                  {ourSupport.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          bgcolor: "#f1f1f1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingY: "30px",
        }}
      >
        <Typography sx={{ fontSize: "14px", color: "#455a64" }}>
          Copyright © 2024, EECP Guru – All Rights Reserved.
        </Typography>
        <Box
          sx={{
            fontSize: "14px",
            color: "#455a64",
            paddingY: "14px",
            display: "flex",
          }}
        >
          <Typography
            onClick={() => handleNavigate("terms-and-conditions")}
            sx={{ cursor: "pointer" }}
          >
            Terms & conditions
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ marginX: "10px" }} />
          <Typography
            onClick={() => handleNavigate("privacy-policy")}
            sx={{ cursor: "pointer" }}
          >
            Privacy Policy
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Box sx={socialIconBoxStyle}>
            <InstagramIcon sx={socialIconStyle} />
          </Box>
          <Box sx={socialIconBoxStyle}>
            <FacebookRoundedIcon sx={socialIconStyle} />
          </Box>
          <Box sx={socialIconBoxStyle}>
            <TwitterIcon sx={socialIconStyle} />
          </Box>
          <Box sx={socialIconBoxStyle}>
            <LinkedInIcon sx={socialIconStyle} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
