import { Container, ThemeProvider } from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";

// theme
import { theme } from "./frontend/MUI/theme";

// Component
import Navbar from "./frontend/components/Navbar/Navbar";
import Landing from "./frontend/components/Landing/Landing";
import CoinID from "./frontend/components/SingleCoin/CoinID";

// Redux
import { Provider } from "react-redux";
import { store } from "./frontend/redux/store";

function AppContainer() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/coin/:id" element={<CoinID />} />
          <Route path="/coin" element={<Landing />} />
          <Route path="/*" element={<Navigate to="/coin" />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default AppContainer;
