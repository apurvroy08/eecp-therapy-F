import {
  AppBar,
  Box,
  Button,
  Container,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import eecp_logo from "../../assets/eecp-logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

const Header = () => {
  const MenuItem = [
    { title: "Home" },
    { title: "About Us" },
    { title: "Treatments" },
    { title: "Centers" },
    { title: "Doctors" },
    { title: "Contact Us" },
  ];

  const socialIconStyle = {
    borderRadius: "50%",
    fontSize: "28px",
    color: "#d60000",
    cursor: "pointer",
  };

  return (
    <AppBar
      sx={{
        bgcolor: "#fff",
        boxShadow: "0px 5px 20px rgba(0, 0, 0, .1), 0 6px 6px rgba(0, 0, 0, .05)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            padding: "12px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            src={eecp_logo}
            alt="eecp-logo"
            style={{ height: "auto", width: "120px" }}
          />
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Typography sx={{ color: "#8c8c8c" }}>Social Links:</Typography>
              <FacebookRoundedIcon sx={socialIconStyle} />
              <InstagramIcon sx={socialIconStyle} />
              <LinkedInIcon sx={socialIconStyle} />
              <TwitterIcon sx={socialIconStyle} />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#d60000",
                  padding: "8px 20px",
                  "&:hover": {
                    bgcolor: "#d60000",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  Appointment Book
                </Typography>
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#d60000",
                  padding: "8px 20px",
                  "&:hover": {
                    bgcolor: "#d60000",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  Business With Us
                </Typography>
              </Button>
            </Box>
            <List sx={{ display: "flex", gap: "28px" }}>
              {MenuItem.map((item, index) => (
                <Typography
                  key={index}
                  onClick={() => {
                    handleForm(item.title);
                  }}
                  component="li"
                  sx={{
                    fontSize: "16px",
                    color: "#000",
                    fontWeight: 500,
                    fontFamily: "'Poppins', sans-serif",
                    cursor: "pointer",
                  }}
                >
                  {item.title}
                </Typography>
              ))}
              
            </List>
          </Box>
          {/* {menuIcon && (
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                height: { xs: "33px", sm: "36px" },
                width: { xs: "38px", sm: "42px" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MenuIcon
                fontSize="large"
                sx={{ color: "#000" }}
                onClick={handleMenuClick}
              />
            </Box>
          )}
          {menuBox && (
            <Drawer
            anchor="top"
            open={isDrawerOpen}
            onClose={toggleDrawer}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <Box
              sx={{
                width: { xs: 260, sm: 400 },
                bgcolor: "#ffe8e8",
                width: "100%",
              }}
              onClick={toggleDrawer}
            >
              <Box
                sx={{
                  height: { xs: "33px", sm: "36px" },
                  width: { xs: "38px", sm: "42px" },
                  borderRadius: "2px",
                  padding: "10px",
                  float: "right",
                }}
              >
                <HighlightOffIcon
                  sx={{ fontSize: "32px", color: "#9d3892" }}
                />
              </Box>
              <Box
                sx={{
                  mt: "60px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  component="nav"
                >
                  {MenuItem.map((item, index) => (
                    <ListItemButton
                      key={index}
                      onClick={() => handleForm(item.title)}
                    >
                      <Typography
                        sx={{ fontSize: "18px", fontWeight: 600 }}
                      >
                        {item.title}
                      </Typography>
                    </ListItemButton>
                  ))}
                </List>
                <Button
                  variant="contained"
                  onClick={() => handleOpenModel("Book Appointment")}
                  sx={{ m: "20px", bgcolor: "#d60000" }}
                >
                  Get Appointment
                </Button>
                    <Button
                  variant="contained"
                  onClick={() => handleOpenModel("Business With Us")}
                  sx={{ m: "20px" , marginTop:"5px", bgcolor: "#d60000" }}
                >
              Business With Us
                </Button>
              </Box>
            </Box>
          </Drawer>
          )} */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
