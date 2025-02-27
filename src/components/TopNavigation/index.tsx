'use client'

import { Logo } from "../Logo";
import { MenuItem } from "../MenuItem";
import { usePathname } from "next/navigation";

const TopNavigation =() => {
  const pathname = usePathname();

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

  return (
    <nav className="flex flex-row w-full gap-4 justify-between py-8">
      <Logo width={40} height={40}/>
      <div className="">
        <ul className="flex flex-row gap-8">
          {pages.map(({ href, title, external }) => (
            <li className="" key={title}>
              <MenuItem name={title} pageReference={href} active={pathname === href} external={external}/>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
};

export default TopNavigation;