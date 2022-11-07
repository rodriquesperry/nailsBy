import MenuItem from '../../components/menu-item/menu-item.component';

import './menu-category.styles.scss';

const MenuCategory = () => {
  return (
    <div className='category-container'>
      <h2 className='text-center cat-name'>Category Name</h2>
      <hr className='heading-hr'/>
      <div className='menu-items'>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

export default MenuCategory;
