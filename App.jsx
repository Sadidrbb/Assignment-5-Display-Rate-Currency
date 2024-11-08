import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=79da0413707949538ff49d7806cd39c5')
      .then(response => response.json())
      .then(result => {
        console.log(result.rates)
        let rates = [
          {
            currency: 'CAD',
            exchange_rate: result.rates.CAD,
            we_buy: 1.05 * result.rates.CAD,
            we_sell: 0.05 * result.rates.CAD
          },
          {
            currency: 'IDR',
            exchange_rate: result.rates.IDR,
            we_buy: 1.05 * result.rates.IDR,
            we_sell: 0.05 * result.rates.IDR
          },
          {
            currency: 'JPY',
            exchange_rate: result.rates.JPY,
            we_buy: 1.05 * result.rates.JPY,
            we_sell: 0.05 * result.rates.JPY
          },
          {
            currency: 'CHF',
            exchange_rate: result.rates.CHF,
            we_buy: 1.05 * result.rates.CHF,
            we_sell: 0.05 * result.rates.CHF
          },
          {
            currency: 'EUR',
            exchange_rate: result.rates.EUR,
            we_buy: 1.05 * result.rates.EUR,
            we_sell: 0.05 * result.rates.EUR
          },
          {
            currency: 'GBP',
            exchange_rate: result.rates.GBP,
            we_buy: 1.05 * result.rates.GBP,
            we_sell: 0.05 * result.rates.GBP
          }
        ]

        setData(rates)
      })

  }, [])

    return(
      <>
      <div className="App">
        <h1>Exchange Rates (based on 1 USD)</h1>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Currency</th>
              <th>Exchange Rate</th>
              <th>We Buy</th>
              <th>We Sell</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
            <tr key={index}>
              <td>{item.currency}</td>
              <td>{item.exchange_rate}</td>
              <td>{item.we_buy}</td>
              <td>{item.we_sell}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <p>The app uses API from currencyfreaks</p>
      </div>
      </>
    )
    
}  

export default App