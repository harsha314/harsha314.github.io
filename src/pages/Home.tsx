import { Container, Typography, Box, Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: 8,
        pb: 6,
        display: "flex",
        alignItems: "center",
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "3rem", md: "4rem" },
              fontWeight: "bold",
              color: "text.primary",
            }}
          >
            Hi, I'm Harsha
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              color: "text.secondary",
              mb: 2,
            }}
          >
            Software Engineer
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              color: "text.secondary",
              maxWidth: "sm",
              mb: 4,
            }}
          >
            I build modern web applications with a focus on user experience and
            performance. Passionate about creating clean, maintainable code and
            learning new technologies.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              component={RouterLink}
              to="/projects"
              variant="contained"
              size="large"
              sx={{ px: 4 }}
            >
              View My Work
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              variant="outlined"
              size="large"
              sx={{ px: 4 }}
            >
              Contact Me
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
