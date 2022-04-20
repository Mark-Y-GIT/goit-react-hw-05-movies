import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <ul className={s.navList}>
        <li className={s.navListItem}>
          <NavLink
            exact
            to="/"
            className={s.navListLink}
            activeClassName={s.navListLinkIsActive}
          >
            Home
          </NavLink>
        </li>
        <li className={s.navListItem}>
          <NavLink
            to="/movies"
            className={s.navListLink}
            activeClassName={s.navListLinkIsActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
