import React from 'react';
import { characters } from '../../shared/api/mock';
import Card from '../Card/Card';
import styles from './CardList.module.scss';

export default function CardList() {
  return (
    <div className={styles.cardList}>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}
