import Footer from '../../components/footer/footer.component';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className='main-nav sticky-top'>
          <Container fluid>
            <Link to='/'>
              <Navbar.Brand>Nails by...</Navbar.Brand>
            </Link>
            <Navbar.Toggle
              className='bg-light'
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
              className='hidden-menu'
              style={{ backgroundColor: '#f3b3c4' }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ...Your Name Here
                </Offcanvas.Title>
              </Offcanvas.Header>
              <hr />
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <Link to='/'>HOME</Link>
                  <Link to='/menu'>MENU</Link>
                  <Link to='/book'>BOOK</Link>
                  <Link to='/gallery'>GALLERY</Link>

                  <NavDropdown
                    title='ABOUT'
                    color='#fff'
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Link to='/about'>Salon About</Link>
                    <NavDropdown.Divider />
                    <Link to='/tech-about'>Tech About</Link>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
