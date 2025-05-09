import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}

export const Logo = ({ width, height }: LogoProps) => {
  return (
    <Image
      src="/images/icons/lucca-icon.svg"
      alt="An illustration of Lucca holding a laptop with mountains and a galaxy sky behind."
      className="pointer-events-none"
      width={width}
      height={height}
      priority
    />
  );
};
