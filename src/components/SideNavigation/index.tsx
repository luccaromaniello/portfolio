import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import { MenuItem } from "../MenuItem";

export default function SideNavigation() {
  const cases = [
    {
      href: '/',
      title: 'Home',
    },
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
            width={40}
            height={40}
            priority
          />
        </Link>
        <h1 className="text-4xl">Lucca Romaniello</h1>
        <h2 className="text-2xl">A brazilian Frontend Engineer with product design background. <br /> Open to full-time and freelance opportunities.</h2>
      </div>
      <nav className="flex flex-col">
        Projects
        <ul>
          {cases.map(({ href, title }) => (
            <li className='m-2' key={title}>
              <MenuItem name={title} pageReference={href} />
            </li>
          ))}
        </ul>
      </nav>
      <Footer />
    </aside>
  )
}