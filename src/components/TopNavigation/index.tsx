'use client'

import { MenuItem } from "../MenuItem";
import { usePathname } from "next/navigation";
import Image from "next/image";

const TopNavigation =() => {
  const pathname = usePathname();

  const pages = [
    {
      href: '/',
      title: 'Home',
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
    <nav className="flex flex-row w-full gap-4 justify-between">
      <Image
        src="/lucca-icon.svg"
        alt="An illustration of Lucca holding a laptop with mountains and a galaxy sky behind."
        width={40}
        height={40}
        priority
      />
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