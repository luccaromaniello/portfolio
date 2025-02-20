'use client'

import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import { MenuItem } from "../MenuItem";
import { usePathname } from "next/navigation";

export default function SideNavigation() {
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
      <div className="flex flex-col gap-4">
        <Link href="/">
          <Image
            src="/lucca-icon.svg"
            alt="An illustration of Lucca holding a laptop with mountains and a galaxy sky behind."
            width={80}
            height={80}
            priority
          />
        </Link>
        <h1 className="text-4xl font-medium">Lucca Romaniello</h1>
        <h2 className="text-2xl font-light">A brazilian Frontend Engineer with product design background. <br /> Open to full-time and freelance opportunities.</h2>
      </div>
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