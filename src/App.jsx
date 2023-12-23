import { useState } from 'react';
import PropTypes from 'prop-types';
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

const Dropdown = ({ onSelect }) => {
  const options = ['red', 'blue'];

  return (
    <div className="dropdown">
      {options.map((option, index) => (
        <div
          className="dropdown-option"
          key={index}
          onClick={() => onSelect(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

Dropdown.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

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
  const [selectedTeams, setSelectedTeams] = useState(Array(wordsData.length).fill(null));
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedWordIndex, setSelectedWordIndex] = useState(null);

  const generateGrid = () => {
    const shuffledArray = shuffleArray(wordsData);
    setShuffledWords(shuffledArray);
    setSelectedTeams(Array(shuffledArray.length).fill(null));
    setSelectedWordIndex(null);
  };

  const handleDropdownSelect = (option) => {
    setShowDropdown(false);
    if (selectedWordIndex !== null) {
      const updatedTeams = [...selectedTeams];
      updatedTeams[selectedWordIndex] = option.toLowerCase();
      setSelectedTeams(updatedTeams);
    }
  };

  const toggleDropdown = (index) => {
    setShowDropdown(!showDropdown);
    setSelectedWordIndex(index);
  };

  return (
    <div className="h-[100vh]">
      <Snowfall numSnowflakes={50} />
      <div className="flex items-center p-5">
        <h1 className="text-xl grow">Codenames Game</h1>
        <button className="button-49" onClick={generateGrid}>NEW GAME</button>
      </div>
      <div className="p-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
        {shuffledWords.map((word, index) => (
          <div
            className={`flex rounded border border-teal-300 p-5 hover:bg-red-700 relative ${selectedTeams[index] === 'red' ? 'bg-red-100' : selectedTeams[index] === 'blue' ? 'bg-blue-500' : 'bg-purple-900'}`}
            key={index}
            onClick={() => toggleDropdown(index)}
          >
            <span className="text-lg font-semibold m-auto">{word}</span>
            {showDropdown && selectedWordIndex === index && (
              <Dropdown onSelect={(option) => handleDropdownSelect(option)} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
