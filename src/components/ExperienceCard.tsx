import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

type ExperienceCardProps = {
  title: string;
  company: string;
  duration: string;
  description: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  duration,
  description,
}) => {
  return (
    <Card
      elevation={3}
      sx={{
        border: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius: 2,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)",
        },
        maxWidth: 600,
        mx: "auto",
        my: 2,
      }}
    >
      <CardContent>
        <Box
          display="flex"
          // justifyContent="space-between"
          alignItems="baseline"
          flexWrap="wrap"
          gap={3}
        >
          <Typography variant="h5" fontWeight={600}>
            {title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {company}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {duration}
          </Typography>
        </Box>

        <Box mt={1}>
          <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
