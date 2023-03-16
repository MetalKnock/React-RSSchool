import { CardList } from '../../components/CardList';
import { SearchBar } from '../../components/SearchBar';
import styles from './Main.module.scss';

export default function Main() {
  return (
    <div className={`container ${styles.main}`}>
      <SearchBar />
      <CardList />
    </div>
  );
}
