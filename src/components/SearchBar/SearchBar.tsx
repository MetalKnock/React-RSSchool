import React from 'react';
import { KEY_LOCAL_STORAGE, LocalStoragePath } from '../../shared/config/constants';
import { getLocalStorage } from '../../shared/lib/getLocalStorage';
import imageUrl from './assets/searchIcon.svg';
import styles from './SearchBar.module.scss';

interface SearchBarState {
  searchValue: string;
}

class SearchBar extends React.Component<Record<string, never>, SearchBarState> {
  constructor(props: never) {
    super(props);
    this.state = { searchValue: getLocalStorage(LocalStoragePath.searchValue) || '' };
  }

  componentWillUnmount() {
    const { searchValue } = this.state;
    localStorage.setItem(
      KEY_LOCAL_STORAGE,
      JSON.stringify({ [LocalStoragePath.searchValue]: searchValue })
    );
  }

  static handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: e.target.value });
  }

  render() {
    const { searchValue } = this.state;
    return (
      <form className={styles.searchBar} onSubmit={(e) => SearchBar.handleSubmit(e)}>
        <div className={styles.searchBar__wrapper}>
          <label className={styles.searchBar__label} htmlFor="search">
            <img className={styles.searchBar__icon} src={imageUrl} alt="search icon" />
            <input
              className={styles.searchBar__input}
              id="search"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => this.onChange(e)}
            />
          </label>
        </div>
        <button type="submit">search</button>
      </form>
    );
  }
}

export default SearchBar;
