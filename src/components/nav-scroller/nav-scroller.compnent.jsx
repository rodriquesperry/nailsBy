import React from 'react';

const NavScroller = () => {
  return (
    <div classNameName='nav-scroller py-1 mb-2'>
      <nav className='nav d-flex justify-content-center'>
        <a className='p-2 mx-3 text-muted' href='#'>
          World
        </a>
        <a className='p-2 mx-3 text-muted' href='#'>
          U.S.
        </a>
        <a className='p-2 mx-3 text-muted' href='#'>
          Technology
        </a>
        <a className='p-2 mx-3 text-muted' href='#'>
          Design
        </a>
        <a className='p-2 mx-3 text-muted' href='#'>
          Culture
        </a>
        <a className='p-2 mx-3 text-muted' href='#'>
          Business
        </a>
      </nav>
    </div>
  );
};

export default NavScroller;
