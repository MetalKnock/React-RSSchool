import { Character } from '../../shared/api/types';
import { Card } from '../Card';
import styles from './CardList.module.scss';

interface CardListProps {
  characters: Character[];
}

export default function CardList({ characters }: CardListProps) {
  return (
    <ul className={styles.cardList}>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </ul>
  );
}
