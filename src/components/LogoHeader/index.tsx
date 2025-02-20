import Link from "next/link";
// import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row">
        <Link href="/">
          {/* <Image
            src="/lucca-icon.svg"
            alt="An illustration of Lucca holding a laptop with mountains and a galaxy sky behind."
            width={60}
            height={60}
            priority
          /> */}
        </Link>
        <h1 className="text-4xl font-medium">Lucca Romaniello</h1>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-light">A brazilian Frontend Engineer with product design background.</h2>
        <h3 className="text-xl font-light text-content-secondary">Open to full-time and freelance opportunities.</h3>
      </div>
    </div>
  )
}