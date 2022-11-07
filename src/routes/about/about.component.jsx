import './about.styles.scss';

const About = () => {
  return (
    <div>
      <h1 className='text-center mt-3'>About</h1>
      <hr className='heading-hr' />
      <div className='about-container'>
        <div className='about-image-container box-shadow'>
          <img
            src={require('../../assets/img/pexels-delbeautybox-853427.jpeg')}
            alt=''
          />
        </div>
        We Are Nails By...
        <span className='about-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          cum alias aperiam aliquam magnam molestiae esse animi a perspiciatis
          voluptates, assumenda voluptate, nulla labore nobis quas quisquam
          dignissimos harum voluptas. <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
          sapiente, error similique facilis ut fugiat eveniet tempora veritatis,
          fuga at commodi id omnis exercitationem consequatur alias illo
          expedita ea velit!
        </span>
      </div>
      <div className='team-container'>
        <h2 className='text-center mt-5'>Our Technicians</h2>
        <hr className='heading-hr mb-5 mt-2' />
        <div className='team-images-container'>
          <img
            src={require('../../assets/img/pexels-dellon-thomas-3394347.jpeg')}
            alt=''
          />
          <img
            src={require('../../assets/img/pexels-dinielle-de-veyra-4195342.jpeg')}
            alt=''
          />
          <img
            src={require('../../assets/img/pexels-mikhail-nilov-8872784.jpeg')}
            alt=''
          />
          <img
            src={require('../../assets/img/pexels-teddy-joseph-2955375.jpeg')}
            alt=''
          />
          <img
            src={require('../../assets/img/pexels-andrea-piacquadio-774909.jpeg')}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default About;
