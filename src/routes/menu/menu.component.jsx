import MenuCategory from '../../components/menu-category/menu-category.component';

import './menu.styles.scss';

const Menu = () => {
  return (
    <>
    <h1 className='text-center page-heading'><span>Nails by... </span>Menu</h1>
      <div className='container'>
        <div className='row'>
        <MenuCategory />
        <MenuCategory />
        <MenuCategory />
        </div>
      </div>
    </>
  );
};

export default Menu;
