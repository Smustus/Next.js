"use client"
import DropdownMenu from "./components/DropdownMenu";
import Link from "next/link";
import { useState } from "react";

interface DropdownProps {
  id?: string;
}

const Dropdown:  React.FC<DropdownProps> = ({ id = "defaultId" }) => {
  
  const [activeDropdown, setActiveDropdown] = useState<null | string>(null);

  const handleDropdownToggle = (id: string | null) => {
    setActiveDropdown(prevActiveDropdown => (prevActiveDropdown === id ? null : id));
  };

  return (
    <section className="">
      <h3>Home</h3>
      <DropdownMenu
        isActive={activeDropdown === id}
        toggleDropdown={() => handleDropdownToggle(id)}>
        <Link className={`p-2 m-2 hover:text-stone-400 hover:text-
  focus-visible:outline-dotted focus-visible:text-stone-400 focus-visible:rounded drop-shadow-lg`} href="/">Home</Link>
        <Link className={`p-2 m-2 hover:text-stone-400 hover:text-
  focus-visible:outline-dotted focus-visible:text-stone-400 focus-visible:rounded drop-shadow-lg`} href="/secondPage">2nd Page</Link>
        <Link className={`p-2 m-2 hover:text-stone-400 hover:text-
  focus-visible:outline-dotted focus-visible:text-stone-400 focus-visible:rounded drop-shadow-lg`} href="/thirdPage">3rd Page</Link>
      </DropdownMenu>
    </section>
  );
};

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-600">
      <Dropdown />
    </main>
  );
}
