import Link from "next/link";
import React from "react";
import { MdBugReport } from "react-icons/md";

const NavBar = () => {
  const navLinks = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" }
  ];
  return (
    <nav className='flex gap-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href='/'>
        <MdBugReport style={{ fontSize: "2em" }} />
      </Link>
      <ul className='flex gap-6'>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link className='text-zinc-500 hover:text-zinc-800 transition-colors' href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
