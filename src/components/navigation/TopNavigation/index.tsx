"use client";
import { useState } from "react";
import { Logo } from "../../Logo";
import { MenuItem } from "../../MenuItem";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import "./TopNavigation.css";
import Link from "next/link";
import { LINKEDIN_URL, MAIL_URL } from "@/constants";

const pages = [
  {
    href: "/",
    title: "Work",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: LINKEDIN_URL,
    title: "Resumé",
    external: true,
  },
  {
    href: MAIL_URL,
    title: "Contact",
    external: true,
  },
];

interface TopNavigationProps {
  darkTheme?: boolean;
}

const TopNavigation = ({ darkTheme = false }: TopNavigationProps) => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="flex flex-row w-full gap-4 justify-between py-8">
      <Link href="/">
        <Logo width={40} height={40} />
      </Link>
      <div className="flex flex-row justify-between items-center text-content-tertiary">
        <ul className="hidden md:flex flex-row gap-8">
          {pages.map(({ href, title, external }) => (
            <li key={title}>
              <MenuItem
                name={title}
                darkTheme={darkTheme}
                pageReference={href}
                active={pathname === href}
                external={external}
              />
            </li>
          ))}
        </ul>
        <IoMenu
          className={`${isNavOpen ? "hidden" : "flex"} ${darkTheme ? "dark-theme-icon" : "light-theme-icon"} text-2xl md:hidden`}
          onClick={handleClick}
        />
      </div>
      <div
        className={`${isNavOpen ? "showMobileNav" : "hideMobileNav"} px-6 pt-8`}
      >
        <div className="flex flex-row justify-between items-center">
          <Link href="/">
            <Logo width={40} height={40} />
          </Link>
          <div onClick={handleClick}>
            <IoClose className="text-2xl" />
          </div>
        </div>
        <ul className="flex flex-col gap-6 justify-between pb-8">
          {pages.map(({ href, title, external }) => (
            <li key={title} onClick={handleClick}>
              <MenuItem
                name={title}
                darkTheme={darkTheme}
                pageReference={href}
                active={pathname === href}
                external={external}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TopNavigation;
