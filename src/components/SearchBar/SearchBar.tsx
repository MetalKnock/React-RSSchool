import React, { useEffect, useState, useRef } from 'react';
import { KEY_LOCAL_STORAGE, LocalStoragePath } from '../../shared/config/constants';
import { getLocalStorage } from '../../shared/lib/getLocalStorage';
import { Button } from '../UI/Button';
import imageUrl from './assets/searchIcon.svg';
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState(
    getLocalStorage(LocalStoragePath.searchValue) || ''
  );

  const searchRef = useRef<string | null>(null);

  useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return function cleanup() {
      localStorage.setItem(
        KEY_LOCAL_STORAGE,
        JSON.stringify({ [LocalStoragePath.searchValue]: searchRef.current })
      );
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
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
  );
}
