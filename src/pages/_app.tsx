import type { AppProps } from "next/app";
import "../../styles/burger.css";
import "../../styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import HamburgerMenu from "@/src/components/menus/hamburger";

export default function App({ Component, pageProps }: AppProps) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <title>Library</title>
      <HamburgerMenu />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
