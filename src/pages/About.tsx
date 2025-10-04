import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const About = () => {
  type SkillColor = "primary" | "secondary" | "success" | "warning";

  interface Skill {
    name: string;
    color: SkillColor;
  }

  interface SkillCategory {
    [key: string]: Skill[];
  }

  const skills: SkillCategory = {
    Frontend: [
      { name: "React", color: "primary" },
      { name: "TypeScript", color: "primary" },
      { name: "HTML/CSS", color: "primary" },
    ],
    Backend: [
      { name: "Spring Boot", color: "success" },
      { name: "Node.js", color: "success" },
      { name: "Express", color: "success" },
    ],
    Databases: [
      { name: "PostgreSQL", color: "warning" },
      { name: "MongoDB", color: "warning" },
    ],
    Tools: [
      { name: "Git", color: "secondary" },
      { name: "Docker", color: "secondary" },
      { name: "AWS", color: "secondary" },
    ],
  };

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
          About Me
        </Typography>

        <Paper elevation={1} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h4" gutterBottom color="text.primary">
            Professional Background
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ lineHeight: 1.7 }}
          >
            I'm a Software Engineer passionate about building web applications
            and solving complex problems. I specialize in full-stack development
            with expertise in Spring Boot, React, and TypeScript.
          </Typography>
        </Paper>

        <Paper elevation={1} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom color="text.primary">
            Technical Skills
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 4,
            }}
          >
            {Object.entries(skills).map(([category, items]) => (
              <Box key={category}>
                <Typography variant="h6" gutterBottom color="text.primary">
                  {category}
                </Typography>
                <List>
                  {items.map((skill, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <FiberManualRecordIcon
                          color={skill.color}
                          sx={{ fontSize: 12 }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={skill.name}
                        sx={{
                          "& .MuiListItemText-primary": {
                            color: "text.secondary",
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
