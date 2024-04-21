import React, { useState } from 'react';

export default function App() {
  const random = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  };

  const [randomIndex, setRandomIndex] = useState(random(1, 3));

  const handleClick = () => {
    setRandomIndex(random(1, 3));
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ border: 'white 2px solid', margin: '20px', padding: '120px' }}>
          <img src={`./img/${(randomIndex+1) % 3}.jpg`} alt="One" height='100px' width='100px' onClick={handleClick} />
        </div>
        <div style={{ border: 'white 2px solid', margin: '20px', padding: '120px' }}>
          <img src={`./img/${(randomIndex +2) % 3}.jpg`} alt="One" height='100px' width='100px' onClick={handleClick} />
        </div>
        <div style={{ border: 'white 2px solid', margin: '20px', padding: '120px' }}>
          <img src={`./img/${(randomIndex + 3) % 3}.jpg`} alt="One" height='100px' width='100px' onClick={handleClick} />
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ border: 'white 2px solid', margin: '20px', padding: '120px' }}>
          <img src={`./img/${(randomIndex + 1) % 3}.jpg`} alt="One" height='100px' width='100px' onClick={handleClick} />
        </div>
        <div style={{ border: 'white 2px solid', margin: '20px', padding: '120px' }}>
          <img src={`./img/${(randomIndex + 6) % 3}.jpg`} alt="One" height='100px' width='100px' onClick={handleClick} />
        </div>
        <div style={{ border: 'white 2px solid', margin: '20px', padding: '120px' }}>
          <img src={`./img/${(randomIndex +7 ) % 3}.jpg`} alt="One" height='100px' width='100px' onClick={handleClick} />
        </div>
      </div>
    </>
  );
}
