'use client'

import { MenuItem } from "../MenuItem";
import { usePathname } from "next/navigation";
import Footer from "../Footer";
import Header from "../Header";

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
          <p className="uppercase mb-2 text-sm text-content-secondary">Code</p>
          <ul className="text-sm font-medium text-content-secondary">
            🚧 Coming soon!
            {/* {codeCases.map(({ href, title }) => (
              <li className="mt-2 mb-2" key={title}>
                <MenuItem name={title} pageReference={href} active={pathname === href}/>
              </li>
            ))} */}
          </ul>
        </div>
        <div className="mt-4 mb-2">
          <p className="uppercase text-sm text-content-secondary">Design</p>
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