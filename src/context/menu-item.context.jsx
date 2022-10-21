import { createContext, useState, useEffect } from 'react';

export const MenuItemContext = createContext({
  menuItems: [],
  addItemToMenu: () => {},
});

export const MenuItemProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {});

  const addItemToMenu = (itemToAdd) => {
    setMenuItems();
  };

  

  const value = {
    menuItems,
    addItemToMenu,
  };

  return (
    <MenuItemContext.Provider value={value}>
      {children}
    </MenuItemContext.Provider>
  );
};
