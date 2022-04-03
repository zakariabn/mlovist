import React from 'react';
import {Link, useMatch, useResolvedPath } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import './nav.css'

const Nav = () => {
  return (
    <div className='bg-gray-300 h-auto'>
      <nav className='w-full h-auto flex gap-5 justify-center font-semibold custom-class-for-nav p-[.91rem] '>
        <CustomLink to='/'>HOME</CustomLink>
        <CustomLink to='/reviews'>REVIEWS</CustomLink>
        <CustomLink to='dashboard'>DASHBOARD</CustomLink>
        <CustomLink to='/blogs'>BLOGS</CustomLink>
        <CustomLink to='/about'>ABOUT</CustomLink>
      </nav>
    </div>
  );
};



export default Nav;