import { useEffect, useState } from 'react';
import { CardList } from '../../components/CardList';
import { SearchBar } from '../../components/SearchBar';
import styles from './Main.module.scss';
import { getCharacters } from '../../shared/api';
import { Character } from '../../shared/api/types';

export default function Main() {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async () => {
    try {
      setIsLoading(true);
      const { result } = await getCharacters();
      if (result) {
        setCharacters(result.results);
      }
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetching();
  }, []);
  return (
    <div className={`container ${styles.main}`}>
      <SearchBar setCharacters={setCharacters} setIsLoading={setIsLoading} />
      {isLoading && 'Loading...'}
      {characters && <CardList characters={characters} />}
    </div>
  );
}
