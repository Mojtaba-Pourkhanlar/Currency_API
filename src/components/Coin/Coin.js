import { Link } from "react-router-dom";
import CS from "./Coin.module.css";

const Coin = ({ name, image, price, symbol, marketCap, priceChange, id }) => {
  return (
    <div className={CS.container}>

      <Link to={`/coin/${id}`} >
        <img className={CS.image} src={image} alt={name} />

        <span className={CS.name}>{name}</span>

        <span className={CS.symbol}>{symbol.toUpperCase()}</span>

        <span className={CS.currentPrice} >$ {price.toLocaleString()}</span>
        <span
          className={priceChange > 0 ? CS.greenPriceChange : CS.redPriceChange}>
          {priceChange.toFixed(2)}
        </span>

        <span className={CS.marketCap}>$ {marketCap.toLocaleString()}</span>

      </Link>
    </div>
  );
};

export default Coin;