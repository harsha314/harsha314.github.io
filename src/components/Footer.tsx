import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <Box>
        <IconButton href="https://github.com/yourusername" target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://linkedin.com/in/yourusername" target="_blank">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://twitter.com/yourusername" target="_blank">
          <TwitterIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
        © {new Date().getFullYear()} Your Name
      </Typography>
    </Box>
  );
};

export default Footer;
