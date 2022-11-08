import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// Redux
import { fetchCoinID } from "../../redux/coins/coinsAction";
import { useSelector, useDispatch } from "react-redux";

import "./CoinID.css";
import Loader from "../Loader";

const CoinID = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const state = useSelector((state) => state.coinState.coins);

  
  useEffect(() => {
    dispatch(fetchCoinID(id));
  }, []);

  
  const stateLoading = useSelector((state) => state.coinState.loading);

  return (
    <>
      {stateLoading ? (
        <Loader style={{width:'100%', textAlign:'center'}}/>
      ) : (
        <div>
          <div className="coin-container">
            <div className="content">
              <h1>{state.name}</h1>
            </div>
            <div className="content">
              <div className="rank">
                <span className="rank-btn">Rank # {state.market_cap_rank}</span>
              </div>
              <div className="info">
                <div className="coin-heading ">
                  {state.image ? <img src={state.image.small} alt="" /> : null}
                  <p>{state.name}</p>
                  {state.symbol ? (
                    <p>{state.symbol.toUpperCase()}/USD</p>
                  ) : null}
                </div>
                <div className="coin-price">
                  {state.market_data?.current_price ? (
                    <h1>
                      ${state.market_data.current_price.usd.toLocaleString()}
                    </h1>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="content">
              <table>
                <thead>
                  <tr>
                    <th>1h</th>
                    <th>24h</th>
                    <th>7d</th>
                    <th>14d</th>
                    <th>30d</th>
                    <th>1yr</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {state.market_data
                        ?.price_change_percentage_1h_in_currency ? (
                        <p>
                          {state.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                            1,
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td>
                      {state.market_data
                        ?.price_change_percentage_24h_in_currency ? (
                        <p>
                          {state.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                            1,
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td>
                      {state.market_data
                        ?.price_change_percentage_24h_in_currency ? (
                        <p>
                          {state.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                            1,
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td>
                      {state.market_data
                        ?.price_change_percentage_24h_in_currency ? (
                        <p>
                          {state.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                            1,
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td>
                      {state.market_data
                        ?.price_change_percentage_24h_in_currency ? (
                        <p>
                          {state.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                            1,
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td>
                      {state.market_data
                        ?.price_change_percentage_24h_in_currency ? (
                        <p>
                          {state.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                            1,
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="content">
              <div className="stats">
                <div className="left">
                  <div className="row">
                    <h4>24 Hour Low</h4>
                    {state.market_data?.low_24h ? (
                      <p>${state.market_data.low_24h.usd.toLocaleString()}</p>
                    ) : null}
                  </div>
                  <div className="row">
                    <h4>24 Hour High</h4>
                    {state.market_data?.high_24h ? (
                      <p>${state.market_data.high_24h.usd.toLocaleString()}</p>
                    ) : null}{" "}
                  </div>
                </div>
                <div className="right">
                  <div className="row">
                    <h4>Market Cap</h4>
                    {state.market_data?.market_cap ? (
                      <p>
                        ${state.market_data.market_cap.usd.toLocaleString()}
                      </p>
                    ) : null}
                  </div>
                  <div className="row">
                    <h4>Circulating Supply</h4>
                    {state.market_data ? (
                      <p>{state.market_data.circulating_supply}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="content">

            <Link className="back" to={'/'}>Back To Home</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinID;
