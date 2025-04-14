import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./redux/store.ts";
import { Provider } from "react-redux";
import "@fontsource/ubuntu-mono";
import { ThemeProvider } from "@mui/material";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `'Ubuntu Mono', sans-serif`,
  },
  // Optional: You can also override other typography settings like:
  // h1, h2, button, body1, etc.
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);
