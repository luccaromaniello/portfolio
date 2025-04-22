import Image from "next/image";

const HeaderLogo = () => {
  return (
    <div>
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
