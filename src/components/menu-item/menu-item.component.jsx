import { useContext } from 'react';
import { MenuItemContext } from '../../context/menu-item.context';
import Button from 'react-bootstrap/Button';

import './menu-item.styles.scss';

const MenuItem = ({ menuItem }) => {
  return (
    <div className='col my-4 px-1 menu-item-container'>
      <h2>Item</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>$50.00</p>
      <a href='/book' variant='custom' className='btn btn-menu'>
        Book Online
      </a>
    </div>
  );
};

export default MenuItem;
