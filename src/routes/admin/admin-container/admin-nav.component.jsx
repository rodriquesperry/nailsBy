import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Outlet } from 'react-router-dom';

import Footer from '../../../components/footer/footer.component';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { NotificationPopover } from '../popovers/popovers';

import { IoMdNotifications } from 'react-icons/io';
import { RiUserFill } from 'react-icons/ri';
import { AiFillHome } from 'react-icons/ai';

const AdminNav = () => {
  const pathName = useLocation();
  const location = pathName.pathname;
  console.log(location);

  function pathNameSwitch(location) {
    switch (location) {
      case '/admin':
        return (location = 'Dashboard');
        break;
      case '/admin/addMenuItem':
        return (location = 'Add Menu Item');
      default:
        return 'error';
    }
  }

  return (
    <>
      <Navbar className='navBar' sticky='top' variant='light' expand='lg'>
        <Breadcrumb>
          <Breadcrumb.Item href='/admin'>
            <span className='text-muted'>
              <AiFillHome size={18} />
            </span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span className='child-breadcrumb'>{pathNameSwitch(location)}</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Nav.Link href='#'></Nav.Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto navLinks'>
            <div></div>

            <OverlayTrigger
              trigger='click'
              placement='bottom'
              overlay={NotificationPopover}
            >
              <Nav.Link>
                <IoMdNotifications size={25} />
              </Nav.Link>
            </OverlayTrigger>

            <Nav.Link href='/profile'>
              <RiUserFill size={25} /> Hello, User
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Outlet />
      <Footer />
    </>
  );
};

export default AdminNav;
