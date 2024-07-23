"use client"
import { ReactNode, useEffect, useRef } from 'react'

interface DropdownProps {
  children: ReactNode;
  isActive: boolean;
  toggleDropdown: () => void;
}

const DropdownMenu = ({ children, isActive, toggleDropdown }: DropdownProps) => { 

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      toggleDropdown();
    }
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isActive]);

  return (
    <div className="relative inline" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="cursor-pointer">
        &#9776;
      </button>
      <section
        className={`flex flex-col ${isActive ? 'inline' : 'hidden'} absolute top-full right-0 bg-white text-black shadow-lg rounded z-10`}>
        {children}
      </section>
    </div>    
  )
}

export default DropdownMenu;