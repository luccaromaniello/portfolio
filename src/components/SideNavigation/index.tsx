'use client'

import { MenuItem } from "../MenuItem";
import { usePathname } from "next/navigation";
import Footer from "../Footer";
import Header from "../Header";
import { FaInfoCircle } from "react-icons/fa";

const SideNavigation = () => {
  const pathname = usePathname();

  // const codeCases = [
  //   {
  //     href: '/code/test1',
  //     title: 'Test1',
  //   },
  //   {
  //     href: '/code/test2',
  //     title: 'Test2',
  //   },
  //   {
  //     href: '/code/test3',
  //     title: 'Test3',
  //   },
  //   {
  //     href: '/code/test4',
  //     title: 'Test4',
  //   },
  // ];

  const designCases = [
    {
      href: '/design/abinbev',
      title: 'AB InBev',
    },
    {
      href: '/design/anima-educacao',
      title: 'Ânima Educação',
    },
  ];

  return (
    <aside className="flex flex-col h-full justify-between">
      <Header />
      <nav className="flex flex-col h-full mt-12">
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
      </nav>
      <Footer />
    </aside>
  )
}

export default SideNavigation;