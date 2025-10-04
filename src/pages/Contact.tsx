import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box
      sx={{ minHeight: "100vh", pt: 8, pb: 6, bgcolor: "background.default" }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          color="text.primary"
        >
          Contact Me
        </Typography>

        <Paper
          component="form"
          onSubmit={handleSubmit}
          elevation={1}
          sx={{ p: 4, mt: 4 }}
        >
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={6}
              variant="outlined"
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
              sx={{ mt: 2 }}
            >
              Send Message
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
