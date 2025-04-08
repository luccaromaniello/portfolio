import "@/styles/cards.css";
import Image from "next/image";

interface HighlightImageProps {
  url: string;
  alt: string;
}

const HighlightImage = ({ url, alt }: HighlightImageProps) => {
  return (
    <div className="flex flex-row relative w-full 2xl:max-w-screen-4xl h-[296px] sm:h-[856px] 2xl:h-[1048px]">
      <Image
        src={url}
        alt={alt}
        priority
        fill
        className="object-contain object-top"
        quality={100}
      />
    </div>
  );
};

export default HighlightImage;
