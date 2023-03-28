import React, { useEffect, useState } from 'react';
import { KEY_LOCAL_STORAGE, LocalStoragePath } from '../../shared/config/constants';
import { getLocalStorage } from '../../shared/lib/getLocalStorage';
import { Button } from '../UI/Button';
import imageUrl from './assets/searchIcon.svg';
import styles from './SearchBar.module.scss';

// interface SearchBarState {
//   searchValue: string;
// }

// class SearchBar extends React.Component<Record<string, never>, SearchBarState> {
//   constructor(props: never) {
//     super(props);
//     this.state = { searchValue: getLocalStorage(LocalStoragePath.searchValue) || '' };
//   }

//   componentWillUnmount() {
//     const { searchValue } = this.state;
//     localStorage.setItem(
//       KEY_LOCAL_STORAGE,
//       JSON.stringify({ [LocalStoragePath.searchValue]: searchValue })
//     );
//   }

//   static handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//   }

//   onChange(e: React.ChangeEvent<HTMLInputElement>) {
//     this.setState({ searchValue: e.target.value });
//   }

//   render() {
//     const { searchValue } = this.state;
//     return (
//       <form className={styles.searchBar} onSubmit={(e) => SearchBar.handleSubmit(e)}>
//         <div className={styles.searchBar__wrapper}>
//           <label className={styles.searchBar__label} htmlFor="search">
//             <img className={styles.searchBar__icon} src={imageUrl} alt="search icon" />
//             <input
//               className={styles.searchBar__input}
//               id="search"
//               placeholder="Search"
//               value={searchValue}
//               onChange={(e) => this.onChange(e)}
//             />
//           </label>
//         </div>
//         <Button isSubmit>search</Button>
//       </form>
//     );
//   }
// }

// export default SearchBar;

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState(
    getLocalStorage(LocalStoragePath.searchValue) || ''
  );

  useEffect(() => {
    return () => {
      localStorage.setItem(
        KEY_LOCAL_STORAGE,
        JSON.stringify({ [LocalStoragePath.searchValue]: searchValue })
      );
    };
  }, [searchValue]);

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
            placeholder="Search"
            value={searchValue}
            onChange={handleChange}
          />
        </label>
      </div>
      <Button isSubmit>search</Button>
    </form>
  );
}
