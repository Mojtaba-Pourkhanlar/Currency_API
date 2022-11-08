import { useState, useEffect } from "react";
import { Box, Container, TextField, Typography } from "@mui/material";
// Component
import Coin from "../Coin/Coin";
import Loader from "../Loader";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/coins/coinsAction";


const Landing = () => {
  const [search, setSearch] = useState("");

  const coin = useSelector((state) => state.coinState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!coin.coins.length) {
      dispatch(fetchData());
    }
  }, []);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchCoins = () => {
    return coin.coins.filter(
      (item) =>
        item.name.toLowerCase().includes(search) ||
        item.symbol.toLowerCase().includes(search),
    );
  };

  //style
  const CssTextField = {
    margin: "30px 0 20px",
    width: "100%",
    "& label": {
      color: "#dbdbdb",
    },
    "& input": {
      color: "#cccccc",
    }
  };

  return (
    <div style={{ background: '#121519', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box mt={10}>
          <Typography
            variant="h4"
            align="center"
            py={10}
            color="#dbdbdb"
          >Crypto Currency Prices by Market Cap</Typography>
        </Box>
        <Box >
          <TextField
            label="Search For a Crypto Currency"
            variant="outlined"
            value={search}
            onChange={searchHandler}
            sx={CssTextField}
          />
        </Box>
        {coin.coins.length ? (
          <Coin searchCoins={searchCoins} />
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }} >
            <Loader />
          </Box>
        )}
      </Container>
    </div>
  );
};

export default Landing;
