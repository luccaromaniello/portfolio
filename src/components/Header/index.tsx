import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-row gap-24 items-center relative h-full pt-8 pb-16">
      <div className="flex w-1/3"></div>
      <div className="flex flex-col gap-2 z-10 absolute left-0 top-1/2 sm:-translate-y-1/2">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-5xl leading-tight sm:leading-snug font-medium text-neutral-white">
              Lucca Romaniello
            </h1>
            <h2 className="text-lg sm:text-2xl leading-tight sm:leading-snug text-content-tertiary">
              Frontend Engineer and former Product Designer
            </h2>
          </div>
        </div>
        <p className="text-md sm:text-lg text-content-tertiary w-2/3">
          Frontend Engineer with 6+ years across startups and global teams,
          combining design sense with engineering expertise.
        </p>
      </div>
      c
      <div className="relative w-2/3 h-full">
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
    </div>
  );
};

export default Header;
