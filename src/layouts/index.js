import React from 'react';
import '../styles/main.scss';

const Layout = ({ children }) => {
  return (
    <div className='hello'>
      {children}
    </div>
  );
};

export default Layout;