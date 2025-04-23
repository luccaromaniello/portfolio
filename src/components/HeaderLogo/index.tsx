import Image from "next/image";

const HeaderLogo = () => {
  return (
    <div className="after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:bg-[url('/test-lucca-real.png')] after:bg-cover after:bg-center after:transition-opacity after:duration-300 after:ease-out hover:after:opacity-100 after:[clip-path:polygon(100%_0%,0%_100%,100%_100%)]">
      <Image
        src="/lucca-icon.png"
        alt="Picture of Lucca Romaniello."
        priority
        className="object-contain rounded-lg object-top w-full h-full"
        width={360}
        height={480}
        sizes="100%"
      />
    </div>
  );
};

export default HeaderLogo;
