'use client'

import { MenuItem } from "../../MenuItem";
import { usePathname } from "next/navigation";
import Footer from "../../Footer";
import Header from "../../Header";
import { FaInfoCircle } from "react-icons/fa";

const SideNavigation = () => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col h-full justify-between">
      <nav className="flex flex-row w-full gap-4 justify-between py-8">
        {/* <Logo width={40} height={40}/> */}
        <div className="">
          <ul className="flex flex-row gap-8">
            {pages.map(({ href, title, external }) => (
              <li className="" key={title}>
                <MenuItem name={title} pageReference={href} active={pathname === href} external={external}/>
              </li>
            ))}
          </ul>
          <button className="absolute right-0 p-5" onClick={toggle}>
            {/* Close icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"> 
                <path
                  fill="currentColor"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                />
              </svg>
          </button>
        </div>
      </nav>
      {/* <nav className="flex flex-col h-full mt-12">
        <div className="mt-2 mb-2">
          <MenuItem name={'About'} pageReference={'/about'} active={pathname === '/about'}/>
        </div>
        <div className="mt-2 mb-2">
          <MenuItem name={'Experience'} pageReference={'/experience'} active={pathname === '/experience'}/>
        </div>
        <div className="mt-2 mb-2">
          <div className="flex flex-row gap-2 items-center mb-2">
            <p className="uppercase text-sm text-content-secondary">Selected work</p> <FaInfoCircle className="text-xs"/>
          </div>
          <ul className="text-sm font-medium text-content-secondary">
            🚧 Coming soon!
            {/* {codeCases.map(({ href, title }) => (
              <li className="mt-2 mb-2" key={title}>
                <MenuItem name={title} pageReference={href} active={pathname === href}/>
              </li>
            ))} */}
          </ul>
        </div>
        <div className="mt-2 mb-2">
          <div className="flex flex-row gap-2 items-center mb-2">
            <p className="uppercase text-sm text-content-secondary">Design archive</p> <FaInfoCircle className="text-xs"/>
          </div>
          <ul>
            {designCases.map(({ href, title }) => (
              <li className="mt-2 mb-2" key={title}>
                <MenuItem name={title} pageReference={href} active={pathname === href}/>
              </li>
            ))}
          </ul>
        </div>
      </nav> */}
    </aside>
  )
}

export default SideNavigation;