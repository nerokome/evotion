'use client'
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav =() => {
    setNav(!nav)
  }


  return (
    <div className='flex justify-between items-center h-24 max-w-[1840px] mx-auto px-4 font-semibold text-xl text-gray-800 sm:text-gray-200'>
      <h1 className='flex items-start w-full text-4xl font-bold text-blue-400'>Evotion</h1>
      <ul className='hidden lg:flex'>
        <li className='p-4 hover:text-amber-300'>
          <Link href='/Products'>Products</Link>
        </li>
        <li className='p-4  hover:text-amber-300'>
          <Link href='/About'>About</Link>
        </li>
        <li className='p-4  hover:text-amber-300'>
          <Link href='/Partners'>Partners</Link>
        </li>
        <li className='p-4  hover:text-amber-300'>
          <Link href='/'>Give</Link>
        </li>
        <li className='p-4  hover:text-amber-300'>
          <Link href='/'>Contacts</Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block lg:hidden z-10'>
        {!nav ? <AiOutlineMenu color='gray' size={20} /> : <AiOutlineClose size={20} color='gray' />}
      </div>
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-full h-full bg-gray-200 ease-in-out duration-600 md:hidden'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-blue-400 m-4'>Evotion.</h1>
        <ul className='cursor-grab'>
          <li className='p-4 border-b border-gray-400 hover:text-gray-500'>
            <Link href='/Products' onClick={handleNav}>Products</Link>
          </li>
          <li className='p-4 border-b border-gray-400 hover:text-gray-500'>
            <Link href='/Partners' onClick={handleNav}>Partners</Link>
          </li>
          <li className='p-4 border-b border-gray-400 hover:text-gray-500'>
            <Link href='/Resources' onClick={handleNav}>Resources</Link>
          </li>
          <li className='p-4 border-b border-gray-400 hover:text-gray-500'>
            <Link href='/About' onClick={handleNav}>About</Link>
          </li>
          <li className='p-4 border-b border-gray-400 hover:text-gray-500'>
            <Link href='/Contact' onClick={handleNav}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
