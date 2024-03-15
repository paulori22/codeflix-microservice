import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import theme from "./theme";
import NavBar from "./components/Navbar";
import { DialogSearchProvider } from "./components/DialogSearch/DialogSearchProvider";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <DialogSearchProvider>
          <NavBar />
          <AppRouter />
        </DialogSearchProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
