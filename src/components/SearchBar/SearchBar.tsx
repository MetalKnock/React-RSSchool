import React, { useState } from 'react';
import { Button } from '../UI/Button';
import imageUrl from './assets/searchIcon.svg';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { changeSearch } from '../../shared/store/reducers/charactersSlice';

import styles from './SearchBar.module.scss';

export default function SearchBar() {
  const { search } = useAppSelector((state) => state.characters);

  const [searchValue, setSearchValue] = useState(search);

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(changeSearch(searchValue));
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
      <Button isSubmit dataTestid="submit" disabled={Boolean(!searchValue)}>
        Search
      </Button>
    </form>
  );
}
