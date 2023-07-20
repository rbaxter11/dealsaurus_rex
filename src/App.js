import React, { useState } from 'react';
import './App.css' 

const App = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [sortedPrices, setSortedPrices] = useState([]);
  const [averagePrice, setAveragePrice] = useState(null);

  const handleInputChange1 = (event) => {
    setInput1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInput2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSortedPrices(sortByPrice(dummyData));
    calculateAveragePrice(dummyData)
    console.log((sortByPrice(dummyData)));
  };

  const dummyData = {
    "example vendor": 3,
    "another vendor": 4,
    "vendor three": 5
  }

  const sortByPrice = dummyData => {
    const sortedPrices = Object.entries(dummyData)
      .sort(([, valueA], [, valueB]) => valueA - valueB)
      .flatMap(([key, value]) => [{ key, value }]);

    return sortedPrices;
  };
  
  const calculateAveragePrice = dummyData => {
    const values = Object.values(dummyData)
    const sum = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Calculate the average by dividing the sum by the number of prices
    const averagePrice = sum / values.length;
    setAveragePrice(averagePrice);
  };

  return (
    <div >
      <h1 className='title'>Dealsaurus Rex</h1>
      <form onSubmit={handleSubmit}>
        <div className='container'>
          <input
            className="input-row"
            type="text"
            value={input1}
            onChange={handleInputChange1}
            placeholder="iTem NaMe HeRe!"
          />
          <br />
          <input
            className="input-row"
            type="text"
            value={input2}
            onChange={handleInputChange2}
            placeholder="zIp CoDe HeRe!"
          />
          <br />
          <button type="submit">cHomP!</button>
        </div>
      </form>
      <div className='processedData'>
        <h3>Processed Data:</h3>
        <p>Lowest Price:</p>
        {sortedPrices &&
          sortedPrices.map(({ key, value }) => (
            <p key={key}>{key}: {value}</p>
          ))
        }
        <p>Average Price:</p>
        {averagePrice}

      </div>
    </div>
  );
};

export default App;
