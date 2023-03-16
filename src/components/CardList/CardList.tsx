import React from 'react';
import { characters } from '../../shared/api/mock';
import Card from '../Card/Card';
import styles from './CardList.module.scss';

interface CardListProps {}

interface CardListState {}

class CardList extends React.Component<CardListProps, CardListState> {
  constructor(props: CardListProps) {
    super(props);
  }
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
