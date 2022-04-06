import "./styles.css";
import MovieGame from "./game";
import * as React from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@mui/material/styles";
import HowToPlayModal from "./howToPlayModal";
import { Box, CssBaseline, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import SettingsModal from "./settingsModal";
// import useMediaQuery from "@mui/material/useMediaQuery";

export default function App() {
  let darkTheme = createTheme({
    palette: {
      mode: "dark"
    }
  });

  // darkTheme = responsiveFontSizes(darkTheme);

  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode: prefersDarkMode ? "dark" : "light"
  //       }
  //     }),
  //   [prefersDarkMode]
  // );

  return (
    <ThemeProvider theme={darkTheme}>
      <div align="center">
        <CssBaseline />
        <Box
          sx={{
            width: "100%",
            maxWidth: 500,
            alignItems: "center",
            borderTop: 0,
            paddingBottom: 50,
            // paddingTop: 1,
            overflowY: "scroll"
          }}
        >
          {/* <Box class="App"> */}
          <div>
            <Divider light={true}></Divider>
            <div class="top-bar">
              <div>
                <HowToPlayModal />
              </div>
              <Typography variant="h3" fontFamily="-moz-initial">
                Kollywoodle
              </Typography>
              {/* <div>
                <button class="top-bar-btn"> ACKNOWLEDGMENTS </button>
              </div> */}
              <div>
                <SettingsModal />
              </div>
            </div>
          </div>
          <Divider />
          <Box
            sx={{
              width: "100%",
              maxWidth: 500,
              alignItems: "center",
              paddingTop: 3,
              overflowY: "scroll"
            }}
          >
            <MovieGame />
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}
