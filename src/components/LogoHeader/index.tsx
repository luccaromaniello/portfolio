import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <Link href="/">
          <Image
            src="/lucca-icon.svg"
            alt="An illustration of Lucca holding a laptop with mountains and a galaxy sky behind."
            width={60}
            height={60}
            priority
          />
        </Link>
        <h1 className="text-4xl font-medium">Lucca Romaniello</h1>
      </div>
      <h2 className="text-2xl font-light">A brazilian Frontend Engineer with product design background. <br /> Open to full-time and freelance opportunities.</h2>
    </div>
  )
}