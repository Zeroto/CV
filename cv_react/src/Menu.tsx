import React from 'react';
import styles from './Menu.module.css';
import { NavLink } from 'react-router-dom';

interface MenuItemProps {
  to: string
  label: string
  exact?: boolean
}

const MenuItem: React.FC<MenuItemProps> = ({to, label, exact=false}) => (
  <li><NavLink exact={exact} to={to} activeClassName={styles.ActiveMenuItem} className={styles.MenuItem}>{label}</NavLink></li>
);

const Menu: React.FC = () => (
  <nav className={styles.Menu}>
    <ul>
      <MenuItem exact to="/" label="Home"/>
      <MenuItem to="/education" label="Education"/>
      <MenuItem to="/work_history" label="Work history"/>
      <MenuItem to="/skills" label="Skills"/>
    </ul>
  </nav>
);

export default Menu;