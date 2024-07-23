"use client"
import Link from 'next/link';
import React from 'react'
import DropdownMenu from '../components/DropdownMenu';
import { useState } from 'react';

const PageTwo = () => {

  const [activeDropdown, setActiveDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setActiveDropdown((prevActiveDropdown: boolean) => !prevActiveDropdown);
  };

  return (
    <div className="flex flex-col items-center h-screen m-32">
      Page 2
  
      <DropdownMenu
        isActive={activeDropdown} 
        toggleDropdown={handleDropdownToggle}>
        <Link className={`p-2 m-2 hover:text-stone-400 hover:text-
  focus-visible:outline-dotted focus-visible:text-stone-400 focus-visible:rounded drop-shadow-lg`} href="/">Home</Link>
        <Link className={`p-2 m-2 hover:text-stone-400 hover:text-
  focus-visible:outline-dotted focus-visible:text-stone-400 focus-visible:rounded drop-shadow-lg`} href="/secondPage">2nd Page</Link>
        <Link className={`p-2 m-2 hover:text-stone-400 hover:text-
  focus-visible:outline-dotted focus-visible:text-stone-400 focus-visible:rounded drop-shadow-lg`} href="/thirdPage">3rd Page</Link>
      </DropdownMenu>
    </div>
  )
}

export default PageTwo;