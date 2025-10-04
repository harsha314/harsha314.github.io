import { Box, Container, Typography, Link, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center">
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} Harsha. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link
              href="https://github.com/harsha314"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <GitHubIcon fontSize="small" />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/harsha-vardhan-ravupalli/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <LinkedInIcon fontSize="small" />
              LinkedIn
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
