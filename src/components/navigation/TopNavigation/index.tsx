'use client'

import { useState } from "react";
import { Logo } from "../../Logo";
import { MenuItem } from "../../MenuItem";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import "./TopNavigation.css"; 

const pages = [
  {
    href: '/',
    title: 'Work',
  },
  {
    href: '/about',
    title: 'About',
  },
  {
    href: 'https://www.linkedin.com/in/luccaromaniello/',
    title: 'Resumé',
    external: true,
  },
  {
    href: 'mailto:hello@luccaromaniello.com',
    title: 'Contact',
    external: true,
  },
];

const TopNavigation = () => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="flex flex-row w-full gap-4 justify-between py-8">
      <Logo width={40} height={40} />
      <div>
        <ul className="flex flex-row gap-8 hidden md:flex">
          {pages.map(({ href, title, external }) => (
            <li className="" key={title}>
              <MenuItem name={title} pageReference={href} active={pathname === href} external={external} />
            </li>
          ))}
        </ul>
        <IoMenu className={`${isNavOpen ? 'hidden' : 'flex'} text-2xl md:hidden`} onClick={() => setIsNavOpen((prev) => !prev)}/>
      </div>
      <div className={`${isNavOpen ? "showMobileNav" : "hideMobileNav"} px-4`}>
        <div className="flex flex-row justify-between items-center">
          <Logo width={40} height={40} />
          <div onClick={() => setIsNavOpen(false)}>
            <IoClose className="text-2xl" onClick={() => setIsNavOpen(false)}/>
          </div>
        </div>
        <ul className="flex flex-col gap-6 justify-between">
          {pages.map(({ href, title, external }) => (
            <li key={title}>
              <MenuItem name={title} pageReference={href} active={pathname === href} external={external} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
};

export default TopNavigation;