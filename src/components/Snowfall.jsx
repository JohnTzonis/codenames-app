// Snowfall.js
import { useEffect, useState } from 'react';
import Snowflake from './Snowflake';

const Snowfall = () => {
  const [numSnowflakes, setNumSnowflakes] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById('snowfall-container');
      const numSnowflakes = Math.floor(container.offsetWidth / 50);
      setNumSnowflakes(numSnowflakes);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="snowfall-container">
    {Array.from({ length: numSnowflakes }).map((_, index) => (
      <Snowflake key={index} randomX={Math.random()} />
    ))}
  </div>
  );
};

export default Snowfall;
