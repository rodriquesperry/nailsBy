import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBDropDown,
  CDBDropDownMenu,
  CDBDropDownToggle,
  CDBContainer,
} from 'cdbreact';

import { ReactComponent as DripLogo } from '../../../assets/img/crown.svg';
import { RiShoppingCartFill } from 'react-icons/ri';
import { FaSignInAlt } from 'react-icons/fa';

const AdminSideMenu = () => {
  return (
    <>
      <CDBSidebar textColor='#fff' backgroundColor='#96304c;'>
        <CDBSidebarHeader
          className='sidebarHeader'
          prefix={<i className='fa fa-bars fa-large'></i>}
        >
          <a
            href='/'
            className='text-decoration-none'
            style={{ color: 'inherit' }}
          >
            <DripLogo className='logo' />
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className='sidebar-content'>
          <CDBSidebarMenu>
            <NavLink exact to='/admin' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='columns'>Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/profile' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='user'>Bookings</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to='/admin/addMenuItem'
              activeClassName='activeClicked'
            >
              <CDBSidebarMenuItem icon='table'>Menu</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/gallery' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='chart-line'>Gallery</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/shop' activeClassName='activeClicked'>
              <CDBSidebarMenuItem>
                <span className='customIcons'>
                  <RiShoppingCartFill size={20} />
                </span>
                About
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/auth' activeClassName='activeClicked'>
              <CDBSidebarMenuItem>
                <span className='customIcons'>
                  <FaSignInAlt size={20} />
                </span>
                Marketing
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to='/hero404'
              target='_blank'
              activeClassName='activeClicked'
            >
              <CDBSidebarMenuItem icon='exclamation-circle'>
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </>
  );
};

export default AdminSideMenu;
