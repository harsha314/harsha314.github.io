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
  status: "working" | "queued" | "archived";
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Ethereum Introduction",
      description: "An introductory project to understand Ethereum blockchain",
      technologies: ["Python", "Web3", "Ethereum"],
      github: "https://github.com/harsha314/ethereum-introduction",
      // demo: "https://project1-demo.com",
      demo: "#",
      image: "/project1.jpg",
      status: "working",
    },
    {
      title: "Java SQL Engine",
      description: "A SQL engine implemented in Java",
      technologies: ["Java"],
      github: "https://github.com/harsha314/java-sql-engine",
      demo: "#",
      image: "/project2.jpg",
      status: "working",
    },
    // https://github.com/harsha314/recipe-search
    {
      title: "Recipe Search",
      description:
        "A web application to search for recipes using various filters",
      technologies: ["Elasticsearch", "Java", "Spring Boot"],
      github: "https://github.com/harsha314/recipe-search",
      demo: "#",
      image: "/project3.jpg",
      status: "working",
    },
  ];

  const workingProjects = projects.filter(
    (project) => project.status === "working"
  );
  const queuedProjects = projects.filter(
    (project) => project.status === "queued"
  );
  const archivedProjects = projects.filter(
    (project) => project.status === "archived"
  );

  return (
    <Box
      sx={{ minHeight: "100vh", pt: 8, pb: 6, bgcolor: "background.default" }}
    >
      <Container>
        {/* <Typography
          variant="h2"
          component="h1"
          gutterBottom
          color="text.primary"
        >
          My Projects
        </Typography> */}
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          color="text.primary"
          marginTop={2}
          marginBottom={2}
        >
          Working Projects
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
            marginBottom: 4,
          }}
        >
          {workingProjects.map((project, index) => (
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
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          color="text.primary"
          marginBottom={2}
        >
          Queued Projects
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
          {queuedProjects.map((project, index) => (
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
