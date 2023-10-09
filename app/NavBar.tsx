"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdBugReport } from "react-icons/md";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

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
            <Link
              className={classNames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
