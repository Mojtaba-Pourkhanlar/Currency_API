import { Route, Routes, Navigate } from "react-router-dom";

// Component
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import CoinID from "./components/SingleCoin/CoinID";

// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Style
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes className="App">
        <Route path="/coin/:id" element={<CoinID />} />
        <Route path="/coin" element={<Landing />} />
        <Route path="/*" element={<Navigate to="/coin" />} />
      </Routes>
    </Provider>
  );
}

export default App;
