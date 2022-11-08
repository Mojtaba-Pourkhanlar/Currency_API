import { useState, useEffect } from "react";

import Coin from "../Coin/Coin";
import Loader from "../Loader";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/coins/coinsAction";

import CS from "./Landing.module.css";

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

  return (
    <>
      <header>
        <h2>Crypto Currency Prices by Market Cap</h2>
      </header>
      <div className={CS.inputCon}>
        <input
          className={CS.input}
          type={"text"}
          placeholder="Search For a Crypto Currency..."
          value={search}
          onChange={searchHandler}
        />
      </div>
      <div className={CS.title}>
        <span>Coin</span>
        <span></span>
        <span></span>
        <span>Price</span>
        <span>24h Change</span>
        <span>Market Cap</span>
      </div>
      {coin.coins.length ? (
        <div className={CS.coinContainer}>
          {searchCoins().map((c) => (
            <Coin
              key={c.id}
              name={c.name}
              image={c.image}
              symbol={c.symbol}
              price={c.current_price}
              marketCap={c.market_cap}
              priceChange={c.price_change_percentage_24h}
              id={c.id}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
