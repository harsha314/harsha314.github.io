import React from "react";
import { Link } from "react-router-dom";
import { ShelfItemProps } from "../types/ShelfItem";
import ShelfCard from "./ShelfCard";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const shelfEntries: ShelfItemProps[] = [
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    category: "book",
    completedDate: "2024-01-15",
    rating: 5,
    summary: "An easy and proven way to build good habits and break bad ones",
    link: "https://jamesclear.com/atomic-habits",
  },
  {
    id: "clean-code",
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "book",
    completedDate: "2023-12-01",
    rating: 4,
    summary: "A handbook of agile software craftsmanship",
  },
  // Add more entries as needed
];

const Shelf: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            mb: 4,
            textAlign: "center",
            fontWeight: "bold",
            color: theme.palette.primary.main,
          }}
        >
          My Knowledge Shelf
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {shelfEntries.map((entry) => (
            <Grid item key={entry.id}>
              <ShelfCard entry={entry} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Shelf;
