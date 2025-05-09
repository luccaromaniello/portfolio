import "@/styles/typography.css";

export interface ExternalLinkProps {
  preText: string;
  highlight: string;
  link: string;
  postText: string;
  paddingTop?: boolean;
}

const ExternalLink = ({
  preText,
  highlight,
  link,
  postText,
  paddingTop = false,
}: ExternalLinkProps) => {
  return (
    <p className={`text-footer ${paddingTop ? "pt-2" : ""}`}>
      {preText}{" "}
      <a
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        className="font-medium hover:text-content-tertiary"
      >
        {highlight}
      </a>
      {postText}
    </p>
  );
};

export default ExternalLink;
