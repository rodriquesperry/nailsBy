import Footer from '../../components/footer/footer.component';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { Outlet } from 'react-router-dom';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className='main-nav sticky-top'>
          <Container fluid>
            <Navbar.Brand href='#'>Nails by...</Navbar.Brand>
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
                  <Nav.Link href='/'>HOME</Nav.Link>
                  <Nav.Link href='/menu'>MENU</Nav.Link>
                  <Nav.Link href='/book'>BOOK</Nav.Link>
                  <Nav.Link href='/gallery'>GALLERY</Nav.Link>

                  <NavDropdown
                    title='ABOUT'
                    color='#fff'
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href='/about'>
                      Salon About
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='/tech-about'>
                      Tech About
                    </NavDropdown.Item>
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
