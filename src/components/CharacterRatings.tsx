import { Component } from 'react';
import { Character } from '../lib/fma-data';
import './character-ratings.css';

export class CharacterRatings extends Component<{ characters: Character[] }> {
  sortByRating(characters: Character[]) {
    return characters.sort((a, b) => b.votes - a.votes);
  }

  render() {
    const { characters } = this.props;
    const topCharacters = this.sortByRating([...characters]).slice(0, 5);
    return (
      <section id='character-ratings'>
        <h4>Top Characters</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {topCharacters.map((character, i) => {
              return (
                <tr key={i} className={i % 2 ? 'light' : 'dark'}>
                  <td>{character.name}</td>
                  <td>{character.skillset.join(', ')}</td>
                  <td>{character.votes}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
}
