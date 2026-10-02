import './App.css'
import {useState} from 'react'

function App() {
    const [symbol, setSymbol] = useState('');
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    //fetching the backend
    const fetchStock = async () => {
        //if the user didnt enter a stock symbol, it will just tell the user to enter one
        if(!symbol.trim()){
            setError('Please enter a valid symbol');
            return;
        }

        //fetching the stock
        setLoading(true);
        setError('');
        setData([]);

        try{
            //getting the stock from the backend
            const response = await fetch(`http://localhost:3000/api/stocks/${symbol}`)

            if(!response.ok){
                throw new Error('Error fetching stock');
            }

            const json = await response.json();
            setData(json)
        }
        //any errors will go here
        catch(error: any){
            setError(error.message);
        }
        //we will imidentaly end the loading bar
        finally{
            setLoading(false);
        }

    }

  return (
      <div className="container">
          <h1 className="title">Stock Market Viewer</h1>

          <div className="card">
              <label htmlFor="stockSymbol">Enter Stock Symbol</label>
              <input
                  id="stockSymbol"
                  type="text"
                  value={symbol}
                  onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                  placeholder="e.g. TSLA, AAPL, MSFT"
              />
              <button onClick={fetchStock}>Fetch Stock</button>

              {loading && <p className="loading">Loading...</p>}
              {error && <p className="error">{error}</p>}
          </div>

          {data.length > 0 && (
              <div className="table_container">
                  <table>
                      <caption>History of {symbol}</caption>
                      <thead>
                      <tr>
                          <th>Day</th>
                          <th>Low Avg</th>
                          <th>High Avg</th>
                          <th>Volume</th>
                      </tr>
                      </thead>
                      <tbody>
                      {data.map((row: any) => (
                          <tr key={row.date}>
                              <td>{row.date}</td>
                              <td>{row.lowAverage.toFixed(4)}</td>
                              <td>{row.highAverage.toFixed(4)}</td>
                              <td>{row.volume.toLocaleString()}</td>
                          </tr>
                      ))}
                      </tbody>
                  </table>
              </div>
          )}
      </div>
  );
}

export default App
