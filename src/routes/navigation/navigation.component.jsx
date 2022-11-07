import { useState } from 'react';

import Footer from '../../components/footer/footer.component';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className='main-nav sticky-top'
          collapseOnSelect
        >
          <Container fluid>
            <Link to='/'>
              <Navbar.Brand>Nails by...</Navbar.Brand>
            </Link>
            <Navbar.Toggle
              className='bg-light'
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={toggleMenu}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
              className='hidden-menu'
              style={{ backgroundColor: '#f3b3c4' }}
              restoreFocus={false}
              show={isOpen}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ...Your Name Here
                </Offcanvas.Title>
              </Offcanvas.Header>
              <hr />
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <Link to='/' className='links' onClick={toggleMenu}>
                    HOME
                  </Link>
                  <Link to='/menu' className='links' onClick={toggleMenu}>
                    MENU
                  </Link>
                  <Link to='/book' className='links' onClick={toggleMenu}>
                    BOOK
                  </Link>
                  <Link to='/gallery' className='links' onClick={toggleMenu}>
                    GALLERY
                  </Link>

                  <NavDropdown
                    title='ABOUT'
                    color='#fff'
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Link
                      to='/about'
                      className='dropdown-item'
                      onClick={toggleMenu}
                    >
                      Salon About
                    </Link>
                    <NavDropdown.Divider />
                    <Link
                      to='/tech-about'
                      className='dropdown-item'
                      onClick={toggleMenu}
                    >
                      Tech About
                    </Link>
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
