import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
// Redux
import { fetchCoinID } from "../../redux/coins/coinsAction";
import { useSelector, useDispatch } from "react-redux";
// Component
import Loader from "../Loader";
import TableCoinId from "./TableCoinId";


const CoinID = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const state = useSelector((state) => state.coinState.coins);


  useEffect(() => {
    dispatch(fetchCoinID(id));
  }, []);


  const stateLoading = useSelector((state) => state.coinState.loading);

  const design = {
    display: 'flex',
    alignItems: 'center',
  }

  return (
    <>
      {stateLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }} >
          <Loader />
        </Box>
      ) : (
        <div style={{ background: '#121519', minHeight: '100vh' }}>
          <Container maxWidth='lg'>
            <Grid container mt={10}>

              <Grid item xs={12}>
                <Typography variant="h3" my={10} color="#dbdbdb">{state.name}</Typography>
              </Grid >

              <Grid item xs={12} >
                <Box>
                  <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                  >Rank # {state.market_cap_rank}</Button>
                </Box>

                <Box component='div' sx={design} justifyContent="space-between">
                  <Box sx={design} my={4}>
                    {state.image ? <img src={state.image.small} alt="img" width="70px" /> : null}
                    {state.symbol ? (
                      <Typography variant="p" color="#ccc" mx="10px">{state.symbol.toUpperCase()}/USD</Typography>
                    ) : null}
                  </Box>
                  <Box >
                    {state.market_data?.current_price ? (
                      <Typography variant="h4" color="#ccc">
                        ${state.market_data.current_price.usd.toLocaleString()}
                      </Typography>
                    ) : null}
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <TableCoinId />
              </Grid>

              <Grid item xs={12} sx={design} justifyContent="space-between" my={5}>
                <Box >
                  <>
                    <Typography variant="h5" color="#ccc">24 Hour Low</Typography>
                    {state.market_data?.low_24h ? (
                      <Typography variant="p" color="#bdbdbd">${state.market_data.low_24h.usd.toLocaleString()}</Typography>
                    ) : null}
                  </>
                  <>
                    <Typography variant="h5" color="#ccc" mt={3}>24 Hour High</Typography>
                    {state.market_data?.high_24h ? (
                      <Typography variant="p" color="#bdbdbd">${state.market_data.high_24h.usd.toLocaleString()}</Typography>
                    ) : null}{" "}
                  </>
                </Box>
                <Box className="right">
                  <>
                    <Typography variant="h5" color="#ccc">Market Cap</Typography>
                    {state.market_data?.market_cap ? (
                      <Typography variant="p" color="#bdbdbd">
                        ${state.market_data.market_cap.usd.toLocaleString()}
                      </Typography>
                    ) : null}
                  </>
                  <>
                    <Typography variant="h5" color="#ccc" mt={3}>Circulating Supply</Typography>
                    {state.market_data ? (
                      <Typography variant="p" color="#bdbdbd">{state.market_data.circulating_supply}</Typography>
                    ) : null}
                  </>
                </Box>
              </Grid>

            </Grid>
            <>
              <Link to={'/'} style={{ textDecoration: 'none' }}>
                <Button variant="outlined" color="secondary">Back To Home</Button>
              </Link>
            </>
          </Container>
        </div>
      )}
    </>
  );
};

export default CoinID;
