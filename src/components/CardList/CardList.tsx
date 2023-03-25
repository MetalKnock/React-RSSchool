import React from 'react';
import { characters } from '../../shared/api/mock';
import { Card } from '../Card';
import styles from './CardList.module.scss';

class CardList extends React.PureComponent {
  render() {
    return (
      <ul className={styles.cardList}>
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </ul>
    );
  }
}

export default CardList;
