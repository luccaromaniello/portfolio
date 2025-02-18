import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import { MenuItem } from "../MenuItem";

export default function SideNavigation() {
  return (
    <nav className="flex flex-col h-full justify-between">
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
      <div className="flex flex-col">
        Projects
        <MenuItem name="AB InBev" pageReference="./design/abinbev"/>
        <MenuItem name="Ânima Educação" pageReference="./design/anima-educacao"/>
      </div>
      <Footer />
    </nav>
  )
}