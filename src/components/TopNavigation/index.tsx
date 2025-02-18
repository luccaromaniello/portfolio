import Image from "next/image";
import MenuItem from "../MenuItem";
import Link from "next/link";

export default function Navigation() {
  return (<>
    <Link href="/">
      <Image
        src="/lucca-icon.svg"
        alt="An illustration of Lucca holding a laptop with mountains and a galaxy sky behind."
        width={40}
        height={40}
        priority
      />
    </Link>
    Lucca Romaniello <br />
    A brazilian Frontend Engineer with product design background. <br />
    Open to full-time and freelance opportunities. <br /> <br />
    Projects
    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />
    </>
  )
}