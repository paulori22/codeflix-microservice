import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import theme from "./theme";
import NavBar from "./components/Navbar";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
