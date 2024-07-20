import React from 'react';
import { menuItems } from '../constants'; // Assuming menuItems is imported correctly from constants
import classNames from 'classnames';
import NavItems from './NavItems'; // Corrected import name

const Menu = ({ currentPath }) => {
  // Check if menuItems is an array before using map
  if (!Array.isArray(menuItems)) {
    console.error('menuItems is not an array:', menuItems);
    return null; // or handle the error in another way
  }

  return (
    <ul className={classNames("flex items-center justify-around space-x-6", "md:justify-end md:space-x-14")}>
      {menuItems.map((item) => (
        <li key={item.label}>
          <NavItems
            url={item.url}
            isActive={currentPath === item.url}
            icon={item.icon}
            extra={item.extra}
            isMobileOnly={item.mobileOnly}
            label={item.label}
          />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
