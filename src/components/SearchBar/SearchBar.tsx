import React from 'react';
import { KEY_LOCAL_STORAGE, LocalStoragePath } from '../../shared/config/constants';
import { getLocalStorage } from '../../shared/lib/getLocalStorage';
import imageUrl from './assets/searchIcon.svg';
import styles from './SearchBar.module.scss';

interface SearchBarProps {}

interface SearchBarState {
  searchValue: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = { searchValue: getLocalStorage(LocalStoragePath.searchValue) || '' };
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: e.target.value });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  componentWillUnmount() {
    localStorage.setItem(
      KEY_LOCAL_STORAGE,
      JSON.stringify({ [LocalStoragePath.searchValue]: this.state.searchValue })
    );
  }

  render() {
    return (
      <form className={styles.searchBar} onSubmit={(e) => this.handleSubmit(e)}>
        <div className={styles.searchBar__wrapper}>
          <label className={styles.searchBar__label}>
            <img className={styles.searchBar__icon} src={imageUrl} />
            <input
              className={styles.searchBar__input}
              placeholder="Search"
              value={this.state.searchValue}
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
