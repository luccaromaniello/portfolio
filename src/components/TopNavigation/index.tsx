import Image from "next/image";

export default function Navigation() {
  return (
    <Image
      src="/lucca-icon.svg"
      alt="An illustration of Lucca holding a laptop with mountains and a galaxy sky behind."
      width={40}
      height={40}
      priority
    />
  )
}