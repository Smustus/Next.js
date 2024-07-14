"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ComponentProps, ReactNode } from 'react'

export const Navigation = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="bg-stone-500 text-stone-100 h-full w-full flex justify-center p-4">{ children }</nav>
  )
}

export const NavLink = (props: Omit<ComponentProps<typeof Link>, "className">) => {
  console.log(props);
  const pathname = usePathname();
  return <Link {...props} className={`p-2 m-2 
  hover:text-stone-400 hover:text-
  focus-visible:outline-dotted focus-visible:text-stone-400 focus-visible:rounded drop-shadow-lg 
  ${pathname === props.href && "text-stone-300 underline"}`} 
  />
}



