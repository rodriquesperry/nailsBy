import GalleryItem from '../../components/gallery-item/gallery-item.component';

import './gallery.styles.scss';

const Gallery = ({ name }) => {
  return (
    <div className='gallery-container'>
      {name === 'tech' ? (
        <h1 className='text-center my-3 gallery-header'>Tech's Work</h1>
      ) : <h1 className='text-center my-3 gallery-header'>Our Work</h1>
    }
      <hr className='heading-hr' />
      <GalleryItem />
    </div>
  );
};

export default Gallery;
