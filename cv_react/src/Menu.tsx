import React from 'react';
import styles from './Menu.module.css';
import classnames from 'classnames';

interface MenuItemProps {
  to: string
  label: string
  isActive?: boolean
}

const MenuItem: React.FC<MenuItemProps> = ({to, label, isActive=false}) => (
  <li><a href={to} className={classnames(styles.MenuItem, {[styles.ActiveMenuItem]: isActive})}>{label}</a></li>
);

interface MenuProps {
  activeItem: string;
}

const Menu: React.FC<MenuProps> = ({activeItem}) => (
  <nav className={styles.Menu}>
    <ul>
      <MenuItem to="#home" label="Home" isActive={activeItem.toLocaleLowerCase()==="home"}/>
      <MenuItem to="#education" label="Education" isActive={activeItem.toLocaleLowerCase()==="education"}/>
      <MenuItem to="#work_history" label="Work history" isActive={activeItem.toLocaleLowerCase()==="work history"}/>
      <MenuItem to="#skills" label="Skills" isActive={activeItem.toLocaleLowerCase()==="skills"}/>
    </ul>
  </nav>
);

export default Menu;