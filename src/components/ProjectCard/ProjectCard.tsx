import { CustomImage } from "@/components/cases/media/utils";
import CaseImage from "@/components/cases/media/CaseImage";

interface ProjectCardProps {
  title: string;
  company: string;
  description: string;
  link: string;
  externalLink?: string;
  image?: CustomImage;
}

const ProjectCard = ({
  title,
  company,
  description,
  link,
  externalLink,
  image,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-row gap-6">
      <div className="flex w-full">
        {image ? <CaseImage image={image} /> : ""}
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col">
          <h4 className="text-lg sm:text-lg leading-tight font-medium">
            {title}
          </h4>
          <p className="sm:text-base font-medium text-content-secondary">
            {company}
          </p>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
