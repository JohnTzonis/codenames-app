import { useState } from 'react';
import Snowfall from './components/Snowfall';

const wordsData = [
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Node.js',
  'Express',
  'MongoDB',
  'Redux',
  'Webpack',
  'Babel',
  'Git',
  'NPM',
  'VSCode',
  'API',
  'Component',
  'Express',
  'MongoDB',
  'Redux',
  'Webpack',
  'Babel',
  'Git',
  'NPM',
  'VSCode',
  'API',
  'Component',
];

// Function to shuffle an array
const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const App = () => {
  const [shuffledWords, setShuffledWords] = useState([]);

  const generateGrid = () => {
    const shuffledArray = shuffleArray(wordsData);
    setShuffledWords(shuffledArray);
  };

  return (
    <div className="h-[100vh] bg-red-900">
      <Snowfall numSnowflakes={50} />
      <div className="flex items-center p-5">
        <h1 className="text-xl grow">Codenames Game</h1>
        <button className="button-49" onClick={generateGrid}>NEW GAME</button>
      </div>
      <div className="p-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
        {shuffledWords.map((word, index) => (
          <div className="flex rounded border border-teal-300 p-5  hover:bg-red-700" key={index}>
            <span className="text-lg font-semibold m-auto">
              {word}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

