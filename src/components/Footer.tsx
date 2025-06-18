import React from "react";
import { Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { Code } from "@mui/icons-material";
import LeetcodeIcon from "../Icons/LeetcodeIcon";

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
        <IconButton href="https://github.com/harsha314" target="_blank">
          <GitHubIcon style={{ width: "2rem", height: "2rem" }} />
        </IconButton>
        <IconButton
          href="https://linkedin.com/in/harsha-vardhan-ravupalli"
          target="_blank"
        >
          <LinkedInIcon style={{ width: "2rem", height: "2rem" }} />
        </IconButton>
        <IconButton href="https://leetcode.com/u/harsha3141/" target="_blank">
          {/* <Code /> */}
          <LeetcodeIcon />
          {/* <SvgIcon component={LeetcodeIcon} inheritViewBox></SvgIcon> */}
        </IconButton>
      </Box>
      {/* <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
        © {new Date().getFullYear()} Your Name
      </Typography> */}
    </Box>
  );
};

export default Footer;
