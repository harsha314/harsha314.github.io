import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Link,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Project 1",
      description:
        "A brief description of your first project and its key features.",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/username/project1",
      demo: "https://project1-demo.com",
      image: "/project1.jpg",
    },
    // Add more projects as needed
  ];

  return (
    <Box
      sx={{ minHeight: "100vh", pt: 8, pb: 6, bgcolor: "background.default" }}
    >
      <Container>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          color="text.primary"
        >
          My Projects
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
              lg: "1fr 1fr 1fr",
            },
            gap: 3,
          }}
        >
          {projects.map((project, index) => (
            <Card key={index} sx={{ height: "100%" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  color="text.primary"
                >
                  {project.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  sx={{ mb: 2 }}
                >
                  {project.technologies.map((tech, i) => (
                    <Chip key={i} label={tech} size="small" sx={{ mb: 1 }} />
                  ))}
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      color: "text.secondary",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    <GitHubIcon fontSize="small" />
                    GitHub
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      color: "text.secondary",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    <LaunchIcon fontSize="small" />
                    Live Demo
                  </Link>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
