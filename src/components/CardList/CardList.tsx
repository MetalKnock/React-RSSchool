import { characters } from '../../shared/api/mock';
import { Card } from '../Card';
import styles from './CardList.module.scss';

export default function CardList() {
  return (
    <ul className={styles.cardList}>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </ul>
  );
}
