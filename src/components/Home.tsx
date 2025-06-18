import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "90vh",
        overflow: "hidden", // prevent accidental scrollbars
      }}
    >
      {/* Main content fills available space */}
      <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
        <Container>
          <Typography
            variant="h2"
            gutterBottom
            style={{ fontFamily: "Ubuntu Mono" }}
          >
            Harsha Vardhan
          </Typography>
          <Typography variant="h5" color="textSecondary">
            Software Engineer
          </Typography>
        </Container>
      </Box>

      {/* Footer sticks at bottom */}
      <Footer />
    </Box>
  );
};

export default Home;
