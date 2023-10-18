import { data as characters } from '../lib/fma-data';
import './character-cards.css';

export const CharacterCards = () => {
  return (
    <section id='character-cards'>
      {characters.map((character, i) => (
        <div key={i} className='card'>
          <div className='card-titles'>
            <h3>{character.name}</h3>
            <h4>{character.nickName}</h4>
          </div>
          <img src={character.imageUrl} alt={character.name} />
          <p>{character.background}</p>
        </div>
      ))}
    </section>
  );
};
