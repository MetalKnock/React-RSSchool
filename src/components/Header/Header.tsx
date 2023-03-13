import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../shared/config/constants';
import styles from './Header.module.scss';

interface HeaderProps {}

interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
  }
  render() {
    return (
      <nav>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>
            <Link to={RoutePath.main}>Main</Link>
          </li>
          <li>
            <Link to={RoutePath.aboutUs}>About Us</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
