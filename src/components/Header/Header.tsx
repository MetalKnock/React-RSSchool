import React from 'react';
import { NavLink } from 'react-router-dom';
import { PageTitles, RoutePath } from '../../shared/config/constants';
import { WithLocationProps } from '../../hoc/WithLocation/WithLocation';
import styles from './Header.module.scss';

class Header extends React.Component<WithLocationProps> {
  defineCurrentPage() {
    const { location } = this.props;
    switch (location.pathname) {
      case RoutePath.main:
        return PageTitles.main;
      case RoutePath.aboutUs:
        return PageTitles.aboutUs;
      case RoutePath.cardMaker:
        return PageTitles.cardMaker;
      default:
        return PageTitles.notFound;
    }
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={`${styles.header__container} container`}>
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
              {PageTitles.main}
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
              {PageTitles.aboutUs}
            </NavLink>
            <NavLink
              to={RoutePath.cardMaker}
              className={(state) =>
                state.isActive
                  ? `${styles.header__item} ${styles.header__item_active}`
                  : styles.header__item
              }
            >
              {PageTitles.cardMaker}
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
