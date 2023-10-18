import { Component } from 'react';
import { data as characters } from '../lib/fma-data';
import './character-ratings.css';

export class CharacterRatings extends Component {
  render() {
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
            {characters.slice(0, 5).map((character, i) => {
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
