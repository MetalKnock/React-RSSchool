import { useEffect, useState } from 'react';
import { CardList } from '../../components/CardList';
import { SearchBar } from '../../components/SearchBar';
import { Skeleton } from '../../components/Skeleton';
import { characterApi } from '../../shared/store/services/characterService';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { showToast } from '../../shared/store/reducers/toastSlice';
import styles from './Main.module.scss';

export default function Main() {
  const [query, setQuery] = useState('');
  const { search } = useAppSelector((state) => state.characters);

  const {
    data: getCharacters,
    isFetching,
    error,
    refetch,
  } = characterApi.useFetchCharactersQuery(query);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setQuery(search);
  }, [search]);

  useEffect(() => {
    if (error && 'error' in error) {
      dispatch(showToast({ message: error.error, isErrorToast: true }));
    }
  }, [error, dispatch, refetch]);

  return (
    <div className={`container ${styles.main}`}>
      <SearchBar />

      {isFetching && (
        <ul className={styles.main__skeletons}>
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <Skeleton key={n} />
          ))}
        </ul>
      )}
      {!isFetching && !error && getCharacters && getCharacters.results.length > 0 && (
        <CardList characters={getCharacters.results} />
      )}
      {error && !isFetching && (
        <h2 className={styles.main__error}>Nothing was found. Enter another search term.</h2>
      )}
    </div>
  );
}
