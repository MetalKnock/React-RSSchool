import React from 'react';
import { NavLink } from 'react-router-dom';
import { PageTitles, RoutePath } from '../../shared/config/constants';
import { WithLocationProps } from '../../hoc/WithLocation/WithLocation';
import styles from './Header.module.scss';

export interface HeaderProps extends WithLocationProps {}

export interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
  }

  defineCurrentPage() {
    switch (this.props.location.pathname) {
      case RoutePath.main:
        return PageTitles.main;
      case RoutePath.aboutUs:
        return PageTitles.aboutUs;
      default:
        return PageTitles.notFound;
    }
  }

  render() {
    return (
      <div className={`${styles.header} container`}>
        <h4>{this.defineCurrentPage()}</h4>
        <nav className={styles.header__list}>
          <NavLink
            to={RoutePath.main}
            className={(state) =>
              state.isActive
                ? `${styles.header__item} ${styles.header__item_active}`
                : styles.header__item
            }
            data-testid="mainLink"
          >
            Main
          </NavLink>
          <NavLink
            to={RoutePath.aboutUs}
            className={(state) =>
              state.isActive
                ? `${styles.header__item} ${styles.header__item_active}`
                : styles.header__item
            }
            data-testid="aboutUsLink"
          >
            About Us
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Header;
