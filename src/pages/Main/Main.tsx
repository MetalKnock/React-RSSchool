import { useState } from 'react';
import { CardList } from '../../components/CardList';
import { SearchBar } from '../../components/SearchBar';
import styles from './Main.module.scss';

import { Character } from '../../shared/api/types';
import { Skeleton } from '../../components/Skeleton';

export default function Main() {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={`container ${styles.main}`}>
      <SearchBar setCharacters={setCharacters} setIsLoading={setIsLoading} />

      {isLoading && (
        <ul className={styles.main__skeletons}>
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <Skeleton key={n} />
          ))}
        </ul>
      )}
      {characters && <CardList characters={characters} />}
      {!characters && !isLoading && characters !== null && (
        <h2 className={styles.main__error}>Nothing was found. Enter another search term.</h2>
      )}
    </div>
  );
}
