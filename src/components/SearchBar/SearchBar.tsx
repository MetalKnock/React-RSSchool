import React, { useEffect, useState, useRef } from 'react';
import { KEY_LOCAL_STORAGE, LocalStoragePath, STATUS_ERROR } from '../../shared/config/constants';
import { getLocalStorage } from '../../shared/lib/getLocalStorage';
import { Button } from '../UI/Button';
import imageUrl from './assets/searchIcon.svg';
import styles from './SearchBar.module.scss';
import { Toast } from '../Toast';
import { searchCharacters } from '../../shared/api';
import { Character } from '../../shared/api/types';

interface SearchBarProps {
  setCharacters: React.Dispatch<React.SetStateAction<Character[] | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchBar({ setCharacters, setIsLoading }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState(
    getLocalStorage(LocalStoragePath.searchValue) || ''
  );
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);

  const searchRef = useRef<string | null>(null);

  useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  const fetchingCharacters = async (query: string, errorMessage: string) => {
    try {
      setIsLoading(true);
      const { result, status } = await searchCharacters(query);
      if (result) {
        setCharacters(result.results);
      }
      if (status === STATUS_ERROR) {
        throw new Error(errorMessage);
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
        setShowToast(true);
      }
    }
    setIsLoading(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem(
      KEY_LOCAL_STORAGE,
      JSON.stringify({ [LocalStoragePath.searchValue]: searchRef.current })
    );
    fetchingCharacters(`/?name=${searchValue}`, 'Nothing found');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const closeToast = () => setShowToast(false);

  useEffect(() => {
    fetchingCharacters(`/?name=${searchValue}`, 'Nothing found');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <div className={styles.searchBar__wrapper}>
          <label className={styles.searchBar__label} htmlFor="search">
            <img className={styles.searchBar__icon} src={imageUrl} alt="search icon" />
            <input
              className={styles.searchBar__input}
              id="search"
              data-testid="search"
              placeholder="Search"
              value={searchValue}
              onChange={handleChange}
            />
          </label>
        </div>
        <Button isSubmit>Search</Button>
      </form>
      <Toast notification={error} showToast={showToast} onClose={closeToast} isError />
    </>
  );
}
