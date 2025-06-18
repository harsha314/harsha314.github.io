import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Paper,
  Box,
  Rating,
  Chip,
  Link,
  useTheme,
  Divider,
} from "@mui/material";
import { shelfEntries } from "./Shelf";
// import { ShelfItemProps } from "../types/ShelfItem";

function ShelfItem() {
  const { id } = useParams<{ id: string }>();
  const theme = useTheme();
  const item = shelfEntries.find((entry) => entry.id === id);

  if (!item) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" color="error">
          Item not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 3,
          }}
        >
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {item.author}
            </Typography>
          </Box>
          <Chip
            label={item.category}
            color={
              item.category === "book"
                ? "success"
                : item.category === "article"
                ? "primary"
                : item.category === "video"
                ? "error"
                : "secondary"
            }
          />
        </Box>

        <Divider sx={{ my: 3 }} />

        {item.rating && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              Rating
            </Typography>
            <Rating value={item.rating} readOnly />
          </Box>
        )}

        {item.summary && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              Summary
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {item.summary}
            </Typography>
          </Box>
        )}

        {item.completedDate && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              Completed on
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {new Date(item.completedDate).toLocaleDateString()}
            </Typography>
          </Box>
        )}

        {item.link && (
          <Box sx={{ mt: 4 }}>
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              View Resource →
            </Link>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default ShelfItem;
