import './footer.styles.scss';

const Footer = () => {
  return (
    <div className='footer-container'>
      <footer className='text-center'>
        <small>
          &copy;2022 Your Business Name |
          Powered by 
          <a href='http://rockdigital.agency' target='_blank' id='rockDigitalHref'>
            Rock Digital
          </a>
        </small>
      </footer>
    </div>
  );
};

export default Footer;
