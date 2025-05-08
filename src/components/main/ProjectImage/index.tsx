import "@/styles/cards.css";
import Image from "next/image";
import { CustomImage } from "@/components/cases/media/utils";
interface ProjectImageProps {
  image: CustomImage;
}

const ProjectImage = ({ image }: ProjectImageProps) => {
  return (
    <div className="relative w-full h-52 sm:h-32">
      <Image
        src={image.url}
        alt={image.alt}
        priority
        className={`
          pointer-events-none w-full h-full inner-card-border object-cover object-top
        `}
        quality={100}
        width={image.width}
        height={image.height}
        sizes="100%"
      />
    </div>
  );
};

export default ProjectImage;
