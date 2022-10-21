import Gallery from '../gallery/gallery.component';

import './home.styles.scss';

const Home = () => {
  return (
    <>
      <div class='row header-container'>
        <div class='col header-img-container mb-5'>
          <img
            src={require('../../assets/img/beauty-salon-3241097_1920.jpeg')}
            alt=''
          />
        </div>
        <div class='col-sm-12 header-blurb-container'>
          <h1 class='header-h1 text-center'>Nails by...</h1>
          <hr class='hr-header heading-hr' />
          <h3 class='text-center'>Your Name Here</h3>
        </div>
      </div>

      <div class='row services-container'>
        <div class='col-sm-12 col-lg-6 service-imgs-container '>
          <img
            src={require('./../../assets/img/pexels-designecologist-887352.jpeg')}
            alt=''
            id='img1'
            className='box-shadow'
          />
          <h2 class='text-center img-title'>Best Nail Designs</h2>
          <p class='text-muted services-text text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quibusdam cupiditate obcaecati. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam quibusdam cupiditate
            obcaecati.
          </p>
        </div>

        <div class='col-sm-12 col-lg-6 service-imgs-container '>
          <img
            src={require('./../../assets/img/pexels-freestocksorg-361754.jpeg')}
            alt=''
            id='img2'
            className='box-shadow'
          />
          <h2 class='text-center img-title'>Top Quality Salon Service</h2>
          <p class='text-muted services-text text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quibusdam cupiditate obcaecati. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam quibusdam cupiditate
            obcaecati.
          </p>
        </div>

        <div class='service-imgs-container img3-container'>
          <img
            src={require('./../../assets/img/pexels-valeria-boltneva-939836.jpeg')}
            alt=''
            id='img3'
            className='box-shadow'
          />
          <h2 class='text-center img-title'>Top Shelf Products</h2>
          <p class='text-muted services-text text-center md-px-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quibusdam cupiditate obcaecati.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quibusdam cupiditate obcaecati.
          </p>
        </div>
      </div>

      <Gallery />
    </>
  );
};

export default Home;
