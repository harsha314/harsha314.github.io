import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Rating,
  Stack,
  Box,
} from "@mui/material";
import { ShelfItem } from "../types/ShelfItem";

const getCategoryColor = (
  category: string
): "success" | "primary" | "error" | "secondary" | "default" => {
  switch (category) {
    case "book":
      return "success";
    case "article":
      return "primary";
    case "video":
      return "error";
    case "course":
      return "secondary";
    default:
      return "default";
  }
};

const ShelfCard: React.FC<{ entry: ShelfItem }> = ({ entry }) => {
  return (
    <Card
      component={Link}
      to={`/shelf/${entry.id}`}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 4,
        },
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box>
            <Typography variant="h6" component="h2" gutterBottom>
              {entry.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {entry.author}
            </Typography>
          </Box>
          <Chip
            label={entry.category}
            color={getCategoryColor(entry.category)}
            size="small"
          />
        </Stack>

        {entry.summary && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 2,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {entry.summary}
          </Typography>
        )}

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 2 }}
        >
          {entry.rating && (
            <Rating value={entry.rating} readOnly size="small" />
          )}
          {entry.completedDate && (
            <Typography variant="caption" color="text.secondary">
              {new Date(entry.completedDate).toLocaleDateString()}
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ShelfCard;
