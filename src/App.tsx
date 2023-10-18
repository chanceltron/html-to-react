import { Header } from './components/Header';
import { CharacterRatings } from './components/CharacterRatings';
import { CharacterCards } from './components/CharacterCards';
import { data as characters } from './lib/fma-data';
import './style.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <CharacterRatings characters={characters} />
        <CharacterCards characters={characters} />
      </main>
    </>
  );
}

export default App;
