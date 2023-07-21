import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './App.css' 

const App = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [sortedPrices, setSortedPrices] = useState([]);
  const [averagePrice, setAveragePrice] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

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
    setIsVisible(true)
  };

  const dummyData = {
    "Tricera-tops Tree Co.": 300,
    "Stego-Sprouts Tree Emporium": 410,
    "Veloci-Branch Nursery": 288,
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
    setAveragePrice(averagePrice.toFixed(2));
  };

  return (
    <div >
      <h1 className='title'>Dealsaurus Rex</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="box">            
            <input
              className="input-row"
              type="text"
              value={input1}
              onChange={handleInputChange1}
              placeholder="Item"
              />
            <br />
            <input
              className="input-row"
              type="text"
              value={input2}
              onChange={handleInputChange2}
              placeholder="Zipcode"
              />
            <br />
            <button type="submit">cHomP!</button>
          </div>
        </div>
      </form>
      <div className={`processed-data ${isVisible ? '' : 'hidden'}`}>
        <div className="flex">
          <FaStar size={24} color="yellow" />
          <h3 className="center">Average Price: {averagePrice}</h3>
          <FaStar size={24} color="yellow" />
        </div>
        <div className="prices">
          <h5>Vendors sorted by price:</h5>
          {sortedPrices &&
            sortedPrices.map(({ key, value }) => (
              <p key={key}>{key}: $ {value}.00</p>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default App;
