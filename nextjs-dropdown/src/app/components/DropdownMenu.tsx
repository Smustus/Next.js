"use client"
import { ReactNode, useEffect, useRef } from 'react'

interface DropdownProps {
  children: ReactNode;
  isActive: boolean;
  toggleDropdown: () => void;
  className?: string;
}

const DropdownMenu = ({ children, isActive, toggleDropdown, className }: DropdownProps) => { 

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
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
    <div className={`relative inline w-fit h-fit ${className}`} ref={dropdownRef}>
      <button onClick={toggleDropdown} className="cursor-pointer text-3xl">
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