import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';

const contactMethods = [
  {
    icon: <PhoneAndroidIcon sx={{ color: "#d60000" }} />,
    title: "Call Us",
    description: "9109590420",
    destination: "Contact Us",
  },
  {
    icon: <MarkEmailUnreadIcon sx={{ color: "#d60000" }} />,
    title: "Mail Us",
    description: "eecp@gmail.com",
    destination: "Book Appointment",
  },
  {
    icon: <CalendarMonthIcon sx={{ color: "#d60000" }} />,
    title: "Get Appointment",
    description: "click here",
    destination: "Book Appointment",
  },
  {
    icon: <PlaceIcon sx={{ color: "#d60000" }} />,
    title: "Visit Our Location",
    description: "EECP Center's",
    destination: "location",
  },
];

const ConnectionSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#ffe8e8",
        display: "flex",
        alignItems: "center",
        paddingY: "16px",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingX: "24px",
          }}
        >
          {contactMethods.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={3}
              sx={{ display: "flex", gap: "2px", cursor: "pointer" }}
              onClick={() => handleNavigation(item.destination)}
            >
              {item.icon}
              <Box>
                <Typography
                  sx={{
                    color: "#040034",
                    fontSize: { xs: "16px", md: "18px" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: "400",
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ConnectionSection;
