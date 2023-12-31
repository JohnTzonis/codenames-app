import { useState } from 'react';
import PropTypes from 'prop-types';
import Snowfall from './components/Snowfall';

const wordsData = [
  'Δίχτυ',
  'Εικόνα',
  'Κότα',
  'Τράπεζα',
  'Ουρά',
  'Ακτίνα',
  'Νοσοκομείο',
  'Κρόνος',
  'Γρασίδι',
  'Φύλλο',
  'Φούρνος',
  'Παρίσι',
  'Καπέλο',
  'Φώκια',
  'Ιός',
  'Κύβος',
  'Λειτουργία',
  'Εξωγήινος',
  'Ουρανοξύστης',
  'Πάστα',
  'Σπίρτο',
  'Ινδία',
  'Συμφωνία',
  'Μόσχα',
  'Διαμάντι',
  'Μεταφορά',
  'Διαστάυρωση',
  'Σύνδεσμος',
  'Σειρήνα',
  'Ελιά',
  'Γυαλί',
  'Σκέπασμα',
  'Πιλότος',
  'Αντίχειρας',
  'Ευθεία',
  'Ράδιο',
  'Βραζιλία',
  'Δάσκαλος',
  'Κάβουρας',
  'Χταπόδι',
  'Καμπάνα',
  'Ασθενοφόρο',
  'Τόξο',
  'Λέιζερ',
  'Σύνταγμα',
  'Πεκίνο',
  'Διαβατήριο',
  'Κωδικός',
  'Γραμμή',
  'Τετράγωνο',
  'Καρφίτσα',
  'Κόμμα',
  'Δύναμη',
  'Δάσος',
  'Κάρτα',
  'Πόδι',
  'Ελικόπτερο',
  'Νάνος',
  'Κύκλος',
  'Διακόπτης',
  'Ορος',
  'Έκθεση',
  'Μαστίγιο',
  'Ποτήρι',
  'Κόλλα',
  'Σπουργίτι',
  'Όργανο',
  'Ημέρα',
  'Σαίξπηρ',
  'Μπουκάλι',
  'Κούκλα',
  'Σχέδιο',
  'Άγγελος',
  'Σκελετός',
  'Πλατεία',
  'Κεφάλαιο',
  'Κανόνι',
  'Πλατύποδας',
  'Ζυγός',
  'Ρομπότ',
  'Ταμπέλα',
  'Μούτρο',
  'Μόριο',
  'Πάσαλος',
  'Δεινόσαυρος',
  'Στέμμα',
  'Χείλος',
  'Ευρώπη',
  'Τουαλέτα',
  'Πέταλο',
  'Λεπτό',
  'Κύμα',
  'Ρόμπα',
  'Κεφάλι',
  'Κουζίνα',
  'Κυψέλη',
  'Στόμα',
  'Ξωτικό',
  'Κόκορας',
  'Σαγόνι',
  'Στοιχείο',
  'Φτερό',
  'Χρόνος',
  'Γούνα',
  'Τάπα',
  'Ρίζα',
  'Μήλο',
  'Φέσι',
  'Σοκολάτα',
  'Γαλλία',
  'Δείκτης',
  'Παπούτσι',
  'Μοντέλο',
  'Καρχαρίας',
  'Κρέμα',
  'Γάτα',
  'Πηρούνι',
  'Υπερήρωας',
  'Πνέυμα',
  'Μηχανή',
  'Τίτλος',
  'Στέκα',
  'Τρύπα',
  'Φόρεμα',
  'Καλόγερος',
  'Χιονάνθρωπος',
  'Φάκελος',
  'Ρώμη',
  'Βασίλισσα',
  'Παξιμάδι',
  'Πλυντήριο',
  'Μικροσκόπιο',
  'Οθόνη',
  'Καλάθι',
  'Κουδούνι',
  'Μπάνιο',
  'Λογαριαμός',
  'Γύρος',
  'Καγκουρώ',
  'Ουρανός',
  'Διάστημα',
  'Αυτοκίνητο',
  'Τροχός',
  'Κύπρος',
  'Φάση',
  'Συναυλία',
  'Λουκέτο',
  'Σκορπιός',
  'Πειρατής',
  'Άλπεις',
  'Τρομπέτα',
  'Βήμα',
  'Καρέκλα',
  'Ιμαλάϊα',
  'Πεταλούδα',
  'Κέρβερος',
  'Υπόθεση',
  'Μάγειρας',
  'Πυρσός',
  'Νίντζα',
  'Φιλμ',
  'Πρόληψη',
  'Καλάμι',
  'Καρφί',
  'Ταξή',
  'Κατσίκα',
  'Λοχ Νες',
  'Κοράκι',
  'Τηλεσκόπιο',
  'Μεσόγειος',
  'Πίνακας',
  'Βερολίνο',
  'Ζωή',
  'Πρόσκρουση',
  'Δόντι',
  'Έργο',
  'Μάζα',
  'Πέτρα',
  'Κάστρο',
  'Εκατομμυριούχος',
  'Αετός',
  'Γραφείο',
  'Αλεξίπτωτο',
  'Φόρμα',
  'Ανταρκτική',
  'Χρυσάφι',
  'Αράχνη',
  'Δορυφόρος',
  'Πιγκουίνος',
  'Γάντι',
  'Μονάδα',
  'Πετρέλαιο',
  'Νότα',
  'Πράκτορας',
  'Παλίρροια',
  'Γερμανία',
  'Όλυμπος',
  'Ρουλέτα',
  'Κλωστή',
  'Βελόνα',
  'Μάτι',
  'Χόλυγουντ',
  'Δηλητήριο',
  'Ρεύμα',
  'Βάση',
  'Πρόσωπο',
  'Πυραμίδα',
  'Κένταυρος',
  'Ζώνη',
  'Τύπος',
  'Δύτης',
  'Πίτα',
  'Κόρη',
  'Χορός',
  'Στρατιώτης',
  'Μονόκερως',
  'Γρύλος',
  'Καταρράκτης',
  'Δάκρυ',
  'Σκύλος',
  'Ασφάλεια',
  'Τόνος',
  'Ιαπωνία',
  'Πλοίο',
  'Άγκυρα',
  'Σημείο',
  'Νεκροθάφτης',
  'Σεισμός',
  'Κερί',
  'Κλέφτης',
  'Έβενος',
  'Σκνίπα',
  'Κουμπί',
  'Θάνατος',
  'Μάγισσα',
  'Κατηγορία',
  'Πλάνη',
  'Καζίνο',
  'Χιόνι',
  'Ψάρι',
  'Ιστορία',
  'Σωληνάριο',
  'Πύραυλος',
  'Λονδίνο',
  'Κλίμα',
  'Βαθμός',
  'Γίγαντας',
  'Σπόντα',
  'Στάδιο',
  'Φλογέρα',
  'Πρεσβεία',
  'Αγωγός',
  'Γόπα',
  'Λαθρέμπορος',
  'Παραλία',
  'Τραπεζίτης',
  'Φοίνικας',
  'Πάγος',
  'Χέρι',
  'Άτομο',
  'Δίσκος',
  'Βασιλιάς',
  'Αμερική',
  'Τέλος',
  'Φαινόμενο',
  'Βαμβάκι',
  'Τουφέκι',
  'Τζιν',
  'Ταινία',
  'Σπείρα',
  'Ξενοδοχείο',
  'Ακρωτήριο',
  'Σφαίρα',
  'Αστέρι',
  'Ασθένεια',
  'Αντίσταση',
  'Μέτωπο',
  'Φωτιά',
  'Νερό',
  'Δράκος',
  'Τιμή',
  'Νέα Υόρκη',
  'Κρεβάτι',
  'Μύτη',
  'Χρυσό',
  'Τραπέζι',
  'Ατλαντίδα',
  'Χάρη',
  'Λαγός',
  'Φάλαινα',
  'Κατάσκοπος',
  'Αρχή',
  'Προσβολή',
  'Φεγγάρι',
  'Χαρτί',
  'Τροία',
  'Αλυσίδα',
  'Γιατρός',
  'Πριγκίπισσα',
  'Δαχτυλίδι',
  'Ποντίκι',
  'Αυστραλία',
  'Έδαφος',
  'Γλώσσα',
  'Μάρτυρας',
  'Σκουλήκι',
  'Τοίχος',
  'Εκκλησία',
  'Παλάμη',
  'Τσίχλα',
  'Αγγλία',
  'Σύλληψη',
  'Σκοπός',
  'Τύχη',
  'Ιδιοφυΐα',
  'Πιάτο',
  'Πεζός',
  'Παγόβουνο',
  'Δικηγόρος',
  'Παραμάνα',
  'Γερανός',
  'Πλάκα',
  'Όπερα',
  'Καρότο',
  'Πρωινό',
  'Πόλος',
  'Επιστήμονας',
  'Σύνταξη',
  'Φράγμα',
  'Υπηρεσία',
  'Ιππότης',
  'Αστυνομία',
  'Διαβήτης',
  'Εταιρία',
  'Κέτσαπ',
  'Άδεια',
  'Παπαγάλος',
  'Κρήτη',
  'Γήπεδο',
  'Παράσταση',
  'Καρπός',
  'Άλογο',
  'Νύχτα',
  'Περιθώριο',
  'Κέντρο',
  'Λόγος',
  'Λιμουζίνα',
  'Πόλεμος',
  'Μοίρα',
  'Πράσινο',
  'Κάλτσα',
  'Βραχιόλι',
  'Ουσία',
  'Πλάσμα',
  'Πύργος',
  'Κέρατο',
  'Ντάμα',
  'Φέτα',
  'Μέλι',
  'Τόκυο',
  'Βόδι',
  'Βούλα',
  'Φάντασμα',
  'Σφήκα',
  'Μίζα',
  'Γέφυρα',
  'Καλώδιο',
  'Νοσοκόμα',
  'Πένα',
  'Ανέκδοτο',
  'Ταυτότητα',
  'Καρδιά',
  'Γλόμπος',
  'Μολύβι',
  'Φορτηγό',
  'Αίγυπτος',
  'Διέυθυνση',
  'Γράμμα',
  'Μαχαίρι',
  'Άνεμος',
  'Σκηνή',
  'Ρόδα',
  'Γραβάτα',
  'Λιοντάρι',
  'Τζάκι',
  'Βόμβα',
  'Πάπια',
  'Αγρική',
  'Κλειδί',
  'Φρύδι',
  'Παγωτό',
  'Λάστιχο',
  'Περιβάλλον',
  'Αέρας',
  'Θέατρο',
  'Αλεπού',
  'Σημάδι'
];

const Dropdown = ({ onSelect }) => {
  const options = ['Red', 'Blue', 'Gray'];

  return (
    <div className="">
      {options.map((option, index) => (
        <div
          className={`flex items-center rounded-xl px-1 mt-0.5`}
          key={index}
          onClick={() => onSelect(option.toLowerCase())}
        >
          <span className="m-auto text-sm cursor-pointer hover:bg-white px-1 rounded-lg">
            {option}
          </span>
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
  const [blueCount, setBlueCount] = useState(0); // New state for blue team count
  const [redCount, setRedCount] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const generateGrid = () => {
    const shuffledArray = shuffleArray(wordsData);
    const uniqueWords = shuffledArray.slice(0, 25);
    setShuffledWords(uniqueWords);
    setSelectedTeams(Array(uniqueWords.length).fill(null));
    setSelectedWordIndex(null);
    setBlueCount(0);
    setRedCount(0);
  };  

  const handleDropdownSelect = (option) => {
    setShowDropdown(false);
    if (selectedWordIndex !== null) {
      const updatedTeams = [...selectedTeams];
      updatedTeams[selectedWordIndex] = option.toLowerCase();
      setSelectedTeams(updatedTeams);

      if (option.toLowerCase() === 'blue') {
        setBlueCount((prevCount) => prevCount + 1);
      } else if (option.toLowerCase() === 'red') {
        setRedCount((prevCount) => prevCount + 1);
      }
    }
  };

  const toggleDropdown = (index) => {
    setShowDropdown(!showDropdown);
    setSelectedWordIndex(index);
  };

  return (
    <div className="h-[100vh]">
      <div className="bg"></div>
      <Snowfall numSnowflakes={50} />
      <div className="flex items-center pt-3 px-9">
        <h1 className="text-5xl text-teal-300 tracking-wide grow animated-title" style={{ textShadow: '3px 3px 3px black' }}>Codenames</h1>
        
        {/* <div className="mr-6">
          <span className="text-blue-500 mr-2">Blue: {blueCount}</span>
          <span className="text-red-500">Red: {redCount}</span>
        </div> */}
        <div className="ghost-container mr-6">
          <div className="ghost"></div>
        </div>
        <button className="button-49" onClick={generateGrid}>NEW GAME</button>
        <button className="button-49 ml-4" onClick={toggleFullscreen}>
          {isFullscreen ? 'Exit' : 'Fullscreen'}
        </button>
      </div>
      <div className="px-8 py-3 grid grid-cols-5 gap-5">
        {shuffledWords.map((word, index) => (
          <div
            className={`flex items-center rounded-lg border-2 border-teal-300 p-5 ${
              (selectedTeams[index] !== 'red' && selectedTeams[index] !== 'blue' && selectedTeams[index] !== 'gray') ? 'hover:bg-secondary' : ''
            } relative cursor-pointer ${selectedTeams[index] === 'red' ? 'bg-red-600' : selectedTeams[index] === 'blue' ? 'bg-blue-800' : selectedTeams[index] === 'gray' ? 'bg-gray-500' : 'bg-third'}`}
            key={index}
            onClick={() => toggleDropdown(index)}
          >
            <span className="p-6 text-3xl m-auto" style={{ textShadow: '1px 1px 1px white', fontFamily: 'Roboto Mono', fontWeight: '600' }}>
              {word}
            </span>
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
