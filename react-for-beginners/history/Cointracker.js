import React, { useState, useEffect } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState('0');

  const inputHandler = (event) => setAmount(event.target.value);

  const onSelect = (event) => {
    for (let coin of coins) {
      if (coin.symbol === event.target.value) {
        setSelectedCoin(coin);
        console.log(coin);
        return;
      }
    }
  };

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>

      <form>
        <div>
          {loading ? (
            <strong>Loading...</strong>
          ) : (
            <div>
              <div>
                <input
                  value={amount}
                  placeholder="$ you have"
                  type="number"
                  onChange={inputHandler}
                />
              </div>

              <select onChange={onSelect}>
                <option value="0">Please Select</option>
                {coins.map((coin, idx) => (
                  <option value={coin.symbol} key={idx}>
                    {coin.name} ({coin.symbol}) : (${coin.quotes.USD.price.toFixed(6)})
                  </option>
                ))}
              </select>
              <span>
                {amount && selectedCoin ? (amount / selectedCoin.quotes.USD.price).toFixed(4) : 0}
              </span>
            </div>
          )}
        </div>
      </form>

      <br />
      <hr />
      <br />
      <ul>
        {coins.map((coin, idx) => (
          <li key={idx}>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
