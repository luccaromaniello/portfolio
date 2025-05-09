import { CustomImage } from "@/components/cases/media/utils";
import ProjectImage from "@/components/main/ProjectImage";
import "@/styles/cards.css";
import Link from "next/link";
import { MdOutlineLock } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";

interface ProjectCardProps {
  title: string;
  company: string;
  description: string;
  link: string;
  externalLink?: boolean;
  image?: CustomImage;
  locked?: boolean;
}

interface LinkWrapperProps {
  external: boolean;
  href: string;
  children: React.ReactNode;
}

const LinkWrapper = ({ external, href, children }: LinkWrapperProps) => {
  if (external) {
    return (
      <a href={href} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    );
  }
  return <Link href={href}>{children}</Link>;
};

const ProjectCard = ({
  title,
  company,
  description,
  link,
  externalLink = false,
  image,
  locked = false,
}: ProjectCardProps) => {
  return (
    <LinkWrapper external={externalLink} href={link}>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-2 sm:py-6 sm:px-4 card-border hover:bg-primary-main/5">
        <div className="flex w-full sm:w-2/3">
          {image ? <ProjectImage image={image} /> : ""}
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="flex flex-col gap-1">
            <h4 className="text-lg leading-tight font-medium">
              <span>{title} </span>
              {(locked || externalLink) && (
                <span className="inline-block align-[0.2rem]">
                  {locked && (
                    <MdOutlineLock
                      size={20}
                      className="inline-block text-content-primary"
                    />
                  )}
                  {externalLink && (
                    <HiOutlineExternalLink
                      size={20}
                      className={`inline-block text-content-primary ${locked && "ml-1"}`}
                    />
                  )}
                </span>
              )}
            </h4>
            <p className="text-sm 2xl:text-base text-content-secondary">
              {company}
            </p>
          </div>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </LinkWrapper>
  );
};

export default ProjectCard;
