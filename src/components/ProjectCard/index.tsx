import { CustomImage } from "@/components/cases/media/utils";
import CaseImage from "@/components/cases/media/CaseImage";
import "@/styles/cards.css";
import Link from "next/link";
import { MdOutlineLock } from "react-icons/md";

interface ProjectCardProps {
  title: string;
  company: string;
  description: string;
  link: string;
  // externalLink?: string;
  image?: CustomImage;
  locked?: boolean;
}

const ProjectCard = ({
  title,
  company,
  description,
  link,
  // externalLink,
  image,
  locked = false,
}: ProjectCardProps) => {
  return (
    <Link href={link}>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-2 sm:py-6 sm:px-4 card-border hover:bg-primary-main/5">
        <div className="flex w-full sm:w-2/3">
          {image ? <CaseImage image={image} /> : ""}
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="flex flex-col">
            <div className="flex flex-row gap-2 items-center">
              <h4 className="text-base 2xl:text-lg leading-relaxed font-medium">
                {title}{" "}
              </h4>
              {locked ? (
                <MdOutlineLock size={20} className="text-content-primary" />
              ) : (
                ""
              )}
            </div>
            <p className="text-sm 2xl:text-base text-content-secondary">
              {company}
            </p>
          </div>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
